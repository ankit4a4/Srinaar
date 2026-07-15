"use client";

import { FiMinus, FiPlus, FiX } from "react-icons/fi";
import { useMemo } from "react";
import { useCart } from "../../contexts/CartContext";
import toast from "react-hot-toast";

export default function Cart() {
  const { cart, updateCartItem, removeFromCart, loading } = useCart();

  const handleIncrease = async (itemId) => {
    const item = cart.items.find(i => i._id === itemId);
    if (item) {
      try {
        await updateCartItem(itemId, item.quantity + 1);
        toast.success('Quantity increased!');
      } catch (error) {
        toast.error('Failed to update quantity!');
      }
    }
  };

  const handleDecrease = async (itemId) => {
    const item = cart.items.find(i => i._id === itemId);
    if (item && item.quantity > 1) {
      try {
        await updateCartItem(itemId, item.quantity - 1);
        toast.success('Quantity decreased!');
      } catch (error) {
        toast.error('Failed to update quantity!');
      }
    }
  };

  const handleRemove = async (itemId) => {
    try {
      await removeFromCart(itemId);
      toast.success('Item removed from cart!');
    } catch (error) {
      toast.error('Failed to remove item!');
    }
  };

  const summary = useMemo(() => {
    const items = cart.items.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = cart.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const shipping = 0;
    const taxes = 0;
    const couponDiscount = 0;
    const total = subtotal + shipping + taxes - couponDiscount;

    return {
      items,
      subtotal,
      shipping,
      taxes,
      couponDiscount,
      total,
    };
  }, [cart]);

  const formatPrice = (value) => {
    return `₹${value.toLocaleString("en-IN")}`;
  };

  if (loading) {
    return (
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xl text-gray-600">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16 bg-[#ece7dd]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_0.8fr]">
          {/* Left Side */}
          <div className="overflow-hidden rounded-[24px] border border-[#eadfd7] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
            {/* Header */}
            <div className="hidden grid-cols-[1.7fr_0.7fr_0.8fr_0.8fr] rounded-t-[24px] bg-[#990027] px-8 py-4 text-sm font-medium text-white md:grid">
              <p>Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p className="text-right">Subtotal</p>
            </div>

            {/* Items */}
            <div className="px-4 md:px-6">
              {cart.items.length > 0 ? (
                cart.items.map((item, index) => (
                  <div
                    key={item._id}
                    className={`grid gap-4 py-5 md:grid-cols-[1.7fr_0.7fr_0.8fr_0.8fr] md:items-center ${
                      index !== cart.items.length - 1
                        ? "border-b border-[#eee3dc]"
                        : ""
                    }`}
                  >
                    {/* Product */}
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleRemove(item._id)}
                        className="mt-1 h-9 w-9 shrink-0 rounded-full border border-[#e9d8d0] text-[#4b1e1e] transition hover:border-[#990027] hover:bg-[#fff4f7] hover:text-[#990027]"
                      >
                        <FiX className="mx-auto text-[16px]" />
                      </button>

                      <div className="flex min-w-0 items-center gap-4">
                        <div className="relative h-20 w-16 overflow-hidden rounded-xl bg-[#f8f4f1] sm:h-24 sm:w-20">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="min-w-0">
                          <h3 className="line-clamp-2 text-sm font-semibold text-[#2a1a14] sm:text-[15px]">
                            {item.name}
                          </h3>
                          {item.size && (
                            <p className="text-xs text-gray-500">Size: {item.size}</p>
                          )}
                          {item.color && (
                            <p className="text-xs text-gray-500">Color: {item.color}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between md:block">
                      <span className="text-sm font-medium text-[#7f6d65] md:hidden">
                        Price
                      </span>
                      <p className="text-sm font-semibold text-[#2a1a14] sm:text-[15px]">
                        {formatPrice(item.price)}
                      </p>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center justify-between md:block">
                      <span className="text-sm font-medium text-[#7f6d65] md:hidden">
                        Quantity
                      </span>

                      <div className="flex w-fit items-center rounded-full border border-[#eadfd7] bg-white p-1 shadow-sm">
                        <button
                          onClick={() => handleDecrease(item._id)}
                          className="flex h-9 w-9 items-center justify-center rounded-full text-[#4b1e1e] transition hover:bg-[#fff4f7] hover:text-[#990027]"
                        >
                          <FiMinus />
                        </button>

                        <span className="min-w-[34px] text-center text-sm font-semibold text-[#2a1a14]">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => handleIncrease(item._id)}
                          className="flex h-9 w-9 items-center justify-center rounded-full text-[#4b1e1e] transition hover:bg-[#fff4f7] hover:text-[#990027]"
                        >
                          <FiPlus />
                        </button>
                      </div>
                    </div>

                    {/* Subtotal */}
                    <div className="flex items-center justify-between md:block md:text-right">
                      <span className="text-sm font-medium text-[#7f6d65] md:hidden">
                        Subtotal
                      </span>
                      <p className="text-sm font-bold text-[#2a1a14] sm:text-[15px]">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex min-h-[280px] flex-col items-center justify-center py-12 text-center">
                  <h3 className="text-2xl font-semibold text-[#2a1a14]">
                    Your cart is empty
                  </h3>
                  <p className="mt-2 text-[#8b6f63]">
                    Add some beautiful products to your cart.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Side Summary */}
          <div className="h-fit rounded-[24px] border border-[#eadfd7] bg-[#fffdfc] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
            <h3 className="text-xl font-semibold text-[#2a1a14]">
              Order Summary
            </h3>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between text-sm text-[#7f6d65]">
                <span>Items</span>
                <span className="font-medium text-[#2a1a14]">
                  {summary.items}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm text-[#7f6d65]">
                <span>Sub Total</span>
                <span className="font-medium text-[#2a1a14]">
                  {formatPrice(summary.subtotal)}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm text-[#7f6d65]">
                <span>Shipping</span>
                <span className="font-medium text-[#2a1a14]">
                  {formatPrice(summary.shipping)}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm text-[#7f6d65]">
                <span>Taxes</span>
                <span className="font-medium text-[#2a1a14]">
                  {formatPrice(summary.taxes)}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm text-[#7f6d65]">
                <span>Coupon Discount</span>
                <span className="font-medium text-[#990027]">
                  -{formatPrice(summary.couponDiscount)}
                </span>
              </div>
            </div>

            <div className="my-6 h-px w-full bg-[#eadfd7]" />

            <div className="flex items-center justify-between">
              <span className="text-base font-semibold text-[#2a1a14]">
                Total
              </span>
              <span className="text-2xl font-bold text-[#990027]">
                {formatPrice(summary.total)}
              </span>
            </div>

            <button className="mt-6 w-full rounded-full bg-[#990027] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#7f0021]">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
