import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import { OnlineSession } from '../../types/session';
import { format } from 'date-fns';
import { isLiveSession, hasRecording, getSessionStatusLabel } from '../../lib/session';

interface SessionCardProps {
  session: OnlineSession;
  onJoin: (session: OnlineSession) => void;
}

export function SessionCard({ session, onJoin }: SessionCardProps) {
  const startTime = new Date(session.startTime);
  const isLive = isLiveSession(session);
  const canJoin = isLive || session.status === 'scheduled';
  const showRecording = hasRecording(session);

  const statusColors = {
    live: 'bg-green-100 text-green-800',
    scheduled: 'bg-blue-100 text-blue-800',
    ended: 'bg-gray-100 text-gray-800'
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{session.title}</h3>
          <div className="space-y-1">
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
              {format(startTime, 'MMMM d, yyyy')}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
              {format(startTime, 'h:mm a')} ({session.duration} minutes)
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <User className="h-4 w-4 mr-2 flex-shrink-0" />
              {session.lecturer}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start sm:items-end gap-2">
          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColors[session.status]}`}>
            {getSessionStatusLabel(session.status)}
          </span>
        </div>
      </div>
      
      <div className="mt-4 flex flex-col sm:flex-row gap-2">
        {canJoin && (
          <button
            onClick={() => onJoin(session)}
            className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            {isLive ? 'Join Now' : 'Join When Live'}
          </button>
        )}
        {showRecording && (
          <a
            href={session.recording}
            className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch Recording
          </a>
        )}
      </div>
    </div>
  );
}