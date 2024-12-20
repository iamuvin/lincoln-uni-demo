import React from 'react';
import { PaymentHistory } from '../components/payments/PaymentHistory';
import { PaymentSummary } from '../components/payments/PaymentSummary';
import { useAuth } from '../store/auth';
import { Navigate } from 'react-router-dom';

export function Payments() {
  const { user } = useAuth();

  // Redirect non-student users
  if (user?.role !== 'student') {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Payments</h1>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <PaymentSummary />
          <PaymentHistory />
        </div>
      </div>
    </div>
  );
}