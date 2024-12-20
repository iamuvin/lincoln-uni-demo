import React from 'react';
import { mockEvents } from '../data/mockEvents';
import { CalendarView } from '../components/calendar/CalendarView';

export function Calendar() {
  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Academic Calendar</h1>
        <div className="mt-8">
          <CalendarView events={mockEvents} />
        </div>
      </div>
    </div>
  );
}