import { OnlineSession } from '../types/session';
import { isAfter, isBefore, addMinutes } from 'date-fns';

export function isLiveSession(session: OnlineSession): boolean {
  const now = new Date();
  const startTime = new Date(session.startTime);
  const endTime = addMinutes(startTime, session.duration);
  
  return session.status === 'live' || (
    isAfter(now, startTime) && isBefore(now, endTime)
  );
}

export function isUpcomingSession(session: OnlineSession): boolean {
  const now = new Date();
  const startTime = new Date(session.startTime);
  return session.status === 'scheduled' && isAfter(startTime, now);
}

export function isPastSession(session: OnlineSession): boolean {
  const now = new Date();
  const startTime = new Date(session.startTime);
  const endTime = addMinutes(startTime, session.duration);
  
  return session.status === 'ended' || isAfter(now, endTime);
}

export function hasRecording(session: OnlineSession): boolean {
  return session.status === 'ended' && !!session.recording;
}

export function getSessionStatusLabel(status: OnlineSession['status']): string {
  switch (status) {
    case 'live':
      return 'Live';
    case 'scheduled':
      return 'Upcoming';
    case 'ended':
      return 'Ended';
  }
}

export function getTimeUntilSession(session: OnlineSession): string {
  const now = new Date();
  const startTime = new Date(session.startTime);
  const diffInMinutes = Math.floor((startTime.getTime() - now.getTime()) / (1000 * 60));
  
  if (diffInMinutes < 60) {
    return `Starts in ${diffInMinutes} minutes`;
  }
  
  const hours = Math.floor(diffInMinutes / 60);
  return `Starts in ${hours} hours`;
}