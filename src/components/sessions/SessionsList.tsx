import React from 'react';
import { SessionCard } from './SessionCard';
import { OnlineSession } from '../../types/session';
import { isLiveSession, isUpcomingSession, isPastSession } from '../../lib/session';

interface SessionsListProps {
  sessions: OnlineSession[];
  onJoinSession: (session: OnlineSession) => void;
}

export function SessionsList({ sessions, onJoinSession }: SessionsListProps) {
  const liveSessions = sessions.filter(isLiveSession);
  const upcomingSessions = sessions.filter(isUpcomingSession);
  const pastSessions = sessions.filter(isPastSession);

  return (
    <div className="space-y-8">
      {liveSessions.length > 0 && (
        <section>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Live Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {liveSessions.map(session => (
              <SessionCard
                key={session.id}
                session={session}
                onJoin={onJoinSession}
              />
            ))}
          </div>
        </section>
      )}

      {upcomingSessions.length > 0 && (
        <section>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Upcoming Sessions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingSessions.map(session => (
              <SessionCard
                key={session.id}
                session={session}
                onJoin={onJoinSession}
              />
            ))}
          </div>
        </section>
      )}

      {pastSessions.length > 0 && (
        <section>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Past Sessions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pastSessions.map(session => (
              <SessionCard
                key={session.id}
                session={session}
                onJoin={onJoinSession}
              />
            ))}
          </div>
        </section>
      )}

      {sessions.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No sessions found</p>
        </div>
      )}
    </div>
  );
}