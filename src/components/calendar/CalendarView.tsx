import React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, BookOpen, FileText, GraduationCap } from 'lucide-react';

interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  courseId?: string;
  type: 'class' | 'exam' | 'assignment' | 'holiday';
}

interface CalendarViewProps {
  events: CalendarEvent[];
}

export function CalendarView({ events }: CalendarViewProps) {
  const getEventIcon = (type: CalendarEvent['type']) => {
    switch (type) {
      case 'class':
        return BookOpen;
      case 'exam':
        return GraduationCap;
      case 'assignment':
        return FileText;
      case 'holiday':
        return CalendarIcon;
    }
  };

  const getEventColor = (type: CalendarEvent['type']) => {
    switch (type) {
      case 'class':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'exam':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'assignment':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'holiday':
        return 'bg-purple-50 text-purple-700 border-purple-200';
    }
  };

  return (
    <div className="space-y-4">
      {events.map((event) => {
        const Icon = getEventIcon(event.type);
        const colorClass = getEventColor(event.type);
        
        return (
          <div
            key={event.id}
            className={`flex items-start p-4 rounded-lg border ${colorClass}`}
          >
            <Icon className="h-6 w-6 mr-4 flex-shrink-0" />
            <div>
              <h3 className="font-medium">{event.title}</h3>
              <p className="text-sm mt-1">
                {format(new Date(event.start), 'MMM d, yyyy h:mm a')}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}