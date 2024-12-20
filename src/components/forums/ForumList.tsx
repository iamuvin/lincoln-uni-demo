import React from 'react';
import { MessageSquare, Eye } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface ForumTopic {
  id: string;
  title: string;
  courseId: string;
  author: string;
  lastActivity: string;
  replies: number;
  views: number;
}

interface ForumListProps {
  topics: ForumTopic[];
}

export function ForumList({ topics }: ForumListProps) {
  return (
    <div className="space-y-4">
      {topics.map((topic) => (
        <div
          key={topic.id}
          className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{topic.title}</h3>
              <p className="text-sm text-gray-600 mt-1">
                Started by {topic.author} • {formatDistanceToNow(new Date(topic.lastActivity))} ago
              </p>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <MessageSquare className="h-4 w-4 mr-1" />
                {topic.replies}
              </div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                {topic.views}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}