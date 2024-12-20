import React from 'react';
import { DollarSign, Calendar } from 'lucide-react';
import { FeeCard } from './FeeCard';

export function SemesterFees() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-6">Semester Fees</h2>
      <div className="space-y-4">
        <FeeCard
          label="Total Fee"
          amount={250000}
          icon={DollarSign}
          variant="default"
        />
        <FeeCard
          label="Paid Amount"
          amount={150000}
          icon={DollarSign}
          variant="success"
        />
        <FeeCard
          label="Remaining Balance"
          amount={100000}
          icon={DollarSign}
          variant="danger"
        />
        <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-blue-500 mr-2" />
            <span className="text-sm font-medium text-blue-700">Next Payment Due</span>
          </div>
          <span className="text-sm font-semibold text-blue-700">March 15, 2024</span>
        </div>
      </div>
    </div>
  );
}