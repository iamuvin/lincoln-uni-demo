import React from 'react';
import { mockPeople } from '../data/mockPeople';
import { PeopleList } from '../components/people/PeopleList';

export function People() {
  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">People</h1>
        <div className="mt-8">
          <PeopleList people={mockPeople} />
        </div>
      </div>
    </div>
  );
}