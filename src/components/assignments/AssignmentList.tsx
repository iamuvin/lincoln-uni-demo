import React from 'react';
import { Assignment } from '../../types';
import { format } from 'date-fns';
import { Calendar, FileText } from 'lucide-react';

interface AssignmentListProps {
  assignments: Assignment[];
}

export function AssignmentList({ assignments }: AssignmentListProps) {
  return (
    <div className="space-y-4">
      {assignments.map((assignment) => (
        <div
          key={assignment.id}
          className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-primary-50 rounded-lg">
                <FileText className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{assignment.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{assignment.description}</p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  Due {format(new Date(assignment.dueDate), 'MMM d, yyyy')}
                </div>
              </div>
            </div>
            <span className="text-sm font-medium text-gray-600">
              {assignment.maxScore} points
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}