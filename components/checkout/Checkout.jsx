'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { FiArrowLeft, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import toast from 'react-hot-toast';
import {api }from '@/utils/api';

export default function Checkout() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const { cart, loading: cartLoading } = useCart();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      router.replace('/login?redirect=/checkout');
      return;
    }

    if (user) {
      setFormData((prev) => ({
        ...prev,
        fullName: user.name || '',
        email: user.email || '',
      }));
    }
  }, [user, authLoading, router]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone || !formData.address || !formData.city || !formData.state || !formData.pincode) {
      toast.error('Please fill in all fields');
      return;
    }

    if (cart.items.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    setIsSubmitting(true);

    try {
      const userInfo = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        pincode: formData.pincode,
      };

      const items = cart.items.map((item) => ({
        id: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
        size: item.size,
        color: item.color,
      }));

      const response = await api.post('/order/checkout', {
        userInfo,
        items,
      });

      if (response.data && response.data.razorpayOrder) {
        // Initialize Razorpay
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          order_id: response.data.razorpayOrder.id,
          amount: response.data.razorpayOrder.amount,
          currency: 'INR',
          name: 'SRINAAR',
          description: 'Order Payment',
          image: '/logo.png',
          handler: async (paymentResponse) => {
            try {
              const verifyResponse = await api.post('/order/verify', {
                razorpay_order_id: paymentResponse.razorpay_order_id,
                razorpay_payment_id: paymentResponse.razorpay_payment_id,
                razorpay_signature: paymentResponse.razorpay_signature,
              });

              if (verifyResponse.data.ok) {
                toast.success('Order placed successfully!');
                router.push(`/orders/${response.data.orderId}`);
              }
            } catch (error) {
              toast.error('Payment verification failed');
              console.error(error);
            }
          },
          prefill: {
            name: formData.fullName,
            email: formData.email,
            contact: formData.phone,
          },
          theme: {
            color: '#990027',
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.on('payment.failed', (response) => {
          toast.error('Payment failed. Please try again.');
          console.error(response.error);
        });
        rzp.open();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to process checkout');
      console.error('Checkout error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (authLoading || cartLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#ece7dd]">
        <div className="text-center">
          <div className="inline-block animate-spin">
            <div className="w-8 h-8 border-4 border-gray-300 border-t-[#990027] rounded-full"></div>
          </div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#ece7dd]">
        <div className="text-center">
          <p className="text-gray-600">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  const subtotal = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const tax = Math.round(subtotal * 0.05); // 5% tax
  const total = subtotal + shipping + tax;

  return (
    <section className="py-12 md:py-16 bg-[#ece7dd] min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-[#990027] hover:text-[#7d0015] mb-8 transition"
        >
          <FiArrowLeft size={20} />
          <span className="font-medium">Back</span>
        </button>

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#2a1a14] mb-2">Checkout</h1>
          <p className="text-gray-600">Complete your order</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Side - Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handlePlaceOrder} className="space-y-6">
              {/* Delivery Information */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#eadfd7]">
                <h2 className="text-2xl font-bold text-[#2a1a14] mb-6 flex items-center gap-3">
                  <FiMapPin size={24} className="text-[#990027]" />
                  Delivery Information
                </h2>

                <div className="grid gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-[#4b1e1e] mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full px-4 py-3 border border-[#e9d8d0] rounded-xl focus:outline-none focus:border-[#990027] focus:ring-2 focus:ring-[#990027]/10 transition"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-sm font-medium text-[#4b1e1e] mb-2 flex items-center gap-2">
                      <FiMail size={16} className="text-[#990027]" />
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full px-4 py-3 border border-[#e9d8d0] rounded-xl focus:outline-none focus:border-[#990027] focus:ring-2 focus:ring-[#990027]/10 transition"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-sm font-medium text-[#4b1e1e] mb-2 flex items-center gap-2">
                      <FiPhone size={16} className="text-[#990027]" />
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 9876543210"
                      required
                      className="w-full px-4 py-3 border border-[#e9d8d0] rounded-xl focus:outline-none focus:border-[#990027] focus:ring-2 focus:ring-[#990027]/10 transition"
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-sm font-medium text-[#4b1e1e] mb-2">
                      Street Address <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter your complete street address"
                      rows="3"
                      required
                      className="w-full px-4 py-3 border border-[#e9d8d0] rounded-xl focus:outline-none focus:border-[#990027] focus:ring-2 focus:ring-[#990027]/10 transition resize-none"
                    />
                  </div>

                  {/* City, State, Pincode */}
                  <div className="grid gap-4 md:grid-cols-3">
                    <div>
                      <label className="block text-sm font-medium text-[#4b1e1e] mb-2">
                        City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="e.g., Delhi"
                        required
                        className="w-full px-4 py-3 border border-[#e9d8d0] rounded-xl focus:outline-none focus:border-[#990027] focus:ring-2 focus:ring-[#990027]/10 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#4b1e1e] mb-2">
                        State <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        placeholder="e.g., Delhi"
                        required
                        className="w-full px-4 py-3 border border-[#e9d8d0] rounded-xl focus:outline-none focus:border-[#990027] focus:ring-2 focus:ring-[#990027]/10 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#4b1e1e] mb-2">
                        Pincode <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        placeholder="e.g., 110001"
                        required
                        className="w-full px-4 py-3 border border-[#e9d8d0] rounded-xl focus:outline-none focus:border-[#990027] focus:ring-2 focus:ring-[#990027]/10 transition"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Place Order Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#990027] hover:bg-[#7d0015] text-white font-bold py-4 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Processing...' : `Pay ₹${total.toLocaleString('en-IN')}`}
              </button>
            </form>
          </div>

          {/* Right Side - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#eadfd7] sticky top-4">
              <h2 className="text-xl font-bold text-[#2a1a14] mb-6">Order Summary</h2>

              {/* Items */}
              <div className="space-y-4 mb-6 pb-6 border-b border-[#eee3dc]">
                {cart.items.map((item) => (
                  <div key={item._id} className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="font-medium text-[#2a1a14] text-sm line-clamp-2">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="font-semibold text-[#2a1a14] ml-4">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </p>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax (5%)</span>
                  <span className="font-medium">₹{tax.toLocaleString('en-IN')}</span>
                </div>

                <div className="pt-3 border-t border-[#eee3dc] flex justify-between">
                  <span className="font-bold text-[#2a1a14]">Total</span>
                  <span className="font-bold text-[#990027] text-lg">
                    ₹{total.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Security Badge */}
              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-xs text-green-700 text-center">
                  ✓ Secure payment powered by Razorpay
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Razorpay Script */}
      <script src="https://checkout.razorpay.com/v1/checkout.js" async></script>
    </section>
  );
}
