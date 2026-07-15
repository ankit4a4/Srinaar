'use client';

import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function SignupPage() {
  const [step, setStep] = useState(1); // 1: name+email, 2: otp+password
  const [formData, setFormData] = useState({ name: '', email: '', password: '', otp: '' });
  const [loading, setLoading] = useState(false);
  const { sendOTP, verifyOTP, signup } = useAuth();
  const router = useRouter();

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendOTP(formData.email, formData.name);
      toast.success('OTP sent successfully!');
      setStep(2);
    } catch (err) {
      toast.error(err.message || 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signup(formData.email, formData.password, formData.name, formData.otp);
      toast.success('Account created successfully!');
      router.push('/');
    } catch (err) {
      toast.error(err.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#ece7dd] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 border border-[#eadfd7]">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#2a1a14] font-serif">
            {step === 1 ? 'Create an Account' : 'Verify Email'}
          </h2>
          <p className="mt-2 text-gray-600">
            {step === 1 ? 'Join us today' : 'Enter the OTP sent to your email'}
          </p>
        </div>



        {step === 1 ? (
          <form className="space-y-6" onSubmit={handleSendOTP}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#2a1a14] mb-2">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-[#eadfd7] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#990027] focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#2a1a14] mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-[#eadfd7] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#990027] focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-semibold text-white bg-gradient-to-r from-[#990027] to-[#7f1026] hover:from-[#7f1026] hover:to-[#590c19] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#990027] disabled:opacity-50"
              >
                {loading ? 'Sending OTP...' : 'Send OTP'}
              </button>
            </div>
          </form>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="otp" className="block text-sm font-medium text-[#2a1a14] mb-2">
                OTP
              </label>
              <input
                id="otp"
                name="otp"
                type="text"
                maxLength={6}
                autoComplete="one-time-code"
                required
                value={formData.otp}
                onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                className="w-full px-4 py-3 border border-[#eadfd7] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#990027] focus:border-transparent"
                placeholder="Enter 6-digit OTP"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#2a1a14] mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 border border-[#eadfd7] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#990027] focus:border-transparent"
                placeholder="Create a password"
              />
            </div>

            <div className="space-y-3">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-semibold text-white bg-gradient-to-r from-[#990027] to-[#7f1026] hover:from-[#7f1026] hover:to-[#590c19] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#990027] disabled:opacity-50"
              >
                {loading ? 'Creating account...' : 'Create Account'}
              </button>
              <button
                type="button"
                onClick={() => setStep(1)}
                disabled={loading}
                className="w-full flex justify-center py-3 px-4 border border-[#eadfd7] rounded-full shadow-sm text-sm font-semibold text-[#2a1a14] bg-white hover:bg-[#f9f5f1] disabled:opacity-50"
              >
                Back
              </button>
            </div>
          </form>
        )}

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="font-semibold text-[#990027] hover:text-[#7f1026]">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
