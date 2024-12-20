import React from 'react';
import { Mail } from 'lucide-react';

interface Person {
  id: string;
  name: string;
  role: 'student' | 'lecturer' | 'admin';
  email: string;
  avatar: string;
  department?: string;
}

interface PeopleListProps {
  people: Person[];
}

export function PeopleList({ people }: PeopleListProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person) => (
        <div
          key={person.id}
          className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center space-x-4">
            <img
              src={person.avatar}
              alt={person.name}
              className="h-12 w-12 rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{person.name}</h3>
              <p className="text-sm text-gray-600 capitalize">{person.role}</p>
              {person.department && (
                <p className="text-sm text-gray-500">{person.department}</p>
              )}
            </div>
          </div>
          <div className="mt-4">
            <a
              href={`mailto:${person.email}`}
              className="inline-flex items-center text-sm text-primary-600 hover:text-primary-700"
            >
              <Mail className="h-4 w-4 mr-2" />
              {person.email}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}