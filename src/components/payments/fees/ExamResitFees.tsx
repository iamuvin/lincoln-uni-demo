import React from 'react';
import { DollarSign, FileText } from 'lucide-react';
import { FeeCard } from './FeeCard';
import { mockExamResits } from '../../../data/mockPayments';

export function ExamResitFees() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-6">Exam Resit Fees</h2>
      <div className="space-y-4">
        {mockExamResits.map((resit) => (
          <div key={resit.id} className="p-4 bg-gray-50 rounded-lg space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-sm font-medium text-gray-700">{resit.courseName}</span>
              </div>
              <span className="text-sm font-semibold text-gray-900">${resit.fee}</span>
            </div>
            <p className="text-xs text-gray-500">Date: {resit.date}</p>
          </div>
        ))}
        <FeeCard
          label="Total Resit Fees"
          amount={mockExamResits.reduce((sum, resit) => sum + resit.fee, 0)}
          icon={DollarSign}
          variant="warning"
        />
      </div>
    </div>
  );
}