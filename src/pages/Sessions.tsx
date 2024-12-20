import React, { useState } from 'react';
import { mockSessions } from '../data/mockSessions';
import { SessionsList } from '../components/sessions/SessionsList';
import { JoinSessionModal } from '../components/sessions/JoinSessionModal';
import { OnlineSession } from '../types/session';

export function Sessions() {
  const [selectedSession, setSelectedSession] = useState<OnlineSession | null>(null);

  const handleJoinSession = (session: OnlineSession) => {
    setSelectedSession(session);
  };

  const handleCloseModal = () => {
    setSelectedSession(null);
  };

  const handleJoinWithSettings = (withVideo: boolean, withAudio: boolean) => {
    if (selectedSession) {
      // In a real application, these settings would be passed to the video conferencing platform
      const queryParams = new URLSearchParams({
        video: withVideo.toString(),
        audio: withAudio.toString(),
      });
      const joinUrl = `${selectedSession.meetingUrl}?${queryParams.toString()}`;
      window.open(joinUrl, '_blank', 'noopener,noreferrer');
      handleCloseModal();
    }
  };

  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Online Sessions</h1>
        <div className="mt-8">
          <SessionsList
            sessions={mockSessions}
            onJoinSession={handleJoinSession}
          />
        </div>
      </div>

      {selectedSession && (
        <JoinSessionModal
          session={selectedSession}
          isOpen={true}
          onClose={handleCloseModal}
          onJoin={handleJoinWithSettings}
        />
      )}
    </div>
  );
}