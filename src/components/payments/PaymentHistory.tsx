import React from 'react';
import { format } from 'date-fns';
import { Check, X } from 'lucide-react';
import { mockPayments } from '../../data/mockPayments';
import { formatCurrency } from '../../lib/currency';

export function PaymentHistory() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-6">Payment History</h2>
      
      <div className="space-y-4">
        {mockPayments.map((payment) => (
          <div
            key={payment.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div>
              <p className="font-medium text-gray-900">{formatCurrency(payment.amount)}</p>
              <p className="text-sm text-gray-500">
                {format(new Date(payment.date), 'MMM d, yyyy')}
              </p>
              {payment.description && (
                <p className="text-xs text-gray-500">{payment.description}</p>
              )}
            </div>
            <div className="flex items-center">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  payment.status === 'success'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {payment.status === 'success' ? (
                  <Check className="h-3 w-3 mr-1" />
                ) : (
                  <X className="h-3 w-3 mr-1" />
                )}
                {payment.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}