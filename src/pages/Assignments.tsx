import React from 'react';
import { mockAssignments } from '../data/mockAssignments';
import { AssignmentList } from '../components/assignments/AssignmentList';

export function Assignments() {
  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Assignments</h1>
        <div className="mt-8">
          <AssignmentList assignments={mockAssignments} />
        </div>
      </div>
    </div>
  );
}