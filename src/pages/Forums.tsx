import React from 'react';
import { mockForumTopics } from '../data/mockForums';
import { ForumList } from '../components/forums/ForumList';

export function Forums() {
  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Discussion Forums</h1>
        <div className="mt-8">
          <ForumList topics={mockForumTopics} />
        </div>
      </div>
    </div>
  );
}