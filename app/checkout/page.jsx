'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../contexts/AuthContext';
import Checkout from '../../components/checkout/Checkout';
import CheckoutHero from '../../components/checkout/CheckoutHero';

const page = () => {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/login?redirect=/checkout');
    }
  }, [loading, user, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#ece7dd] flex items-center justify-center">
        <p className="text-gray-600">Checking access...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div>
      <CheckoutHero />
      <Checkout />
    </div>
  );
};

export default page;
