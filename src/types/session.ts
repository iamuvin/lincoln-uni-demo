export interface OnlineSession {
  id: string;
  courseId: string;
  title: string;
  startTime: string;
  duration: number; // in minutes
  meetingUrl: string;
  lecturer: string;
  status: 'scheduled' | 'live' | 'ended';
  recording?: string;
}

export interface SessionAttendee {
  userId: string;
  sessionId: string;
  joinedAt: string;
  leftAt?: string;
}