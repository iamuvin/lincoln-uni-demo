import React from 'react';
import { CreditCard } from 'lucide-react';
import { SemesterFees } from './fees/SemesterFees';
import { ExamResitFees } from './fees/ExamResitFees';
import { SportsClubFees } from './fees/SportsClubFees';

export function PaymentSummary() {
  return (
    <div className="space-y-6">
      <SemesterFees />
      <ExamResitFees />
      <SportsClubFees />
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
          <CreditCard className="h-4 w-4 mr-2" />
          Make Payment
        </button>
      </div>
    </div>
  );
}