import React from 'react';
import { DollarSign, Trophy } from 'lucide-react';
import { FeeCard } from './FeeCard';
import { mockSportsClubs } from '../../../data/mockPayments';

export function SportsClubFees() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-6">Sports Club Fees</h2>
      <div className="space-y-4">
        {mockSportsClubs.map((club) => (
          <div key={club.id} className="p-4 bg-gray-50 rounded-lg space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Trophy className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-sm font-medium text-gray-700">{club.name}</span>
              </div>
              <span className="text-sm font-semibold text-gray-900">${club.fee}</span>
            </div>
            <p className="text-xs text-gray-500">{club.schedule}</p>
          </div>
        ))}
        <FeeCard
          label="Total Club Fees"
          amount={mockSportsClubs.reduce((sum, club) => sum + club.fee, 0)}
          icon={DollarSign}
          variant="warning"
        />
      </div>
    </div>
  );
}