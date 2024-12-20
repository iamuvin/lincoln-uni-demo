import { OnlineSession } from '../types/session';
import { addHours, addDays } from 'date-fns';

const now = new Date();

export const mockSessions: OnlineSession[] = [
  {
    id: '1',
    courseId: 'CS101',
    title: 'Introduction to Data Structures',
    startTime: addHours(now, 1).toISOString(),
    duration: 60,
    meetingUrl: 'https://meet.example.com/cs101',
    lecturer: 'Dr. Sarah Johnson',
    status: 'scheduled'
  },
  {
    id: '2',
    courseId: 'CS102',
    title: 'Algorithm Analysis',
    startTime: addDays(now, 1).toISOString(),
    duration: 90,
    meetingUrl: 'https://meet.example.com/cs102',
    lecturer: 'Dr. Sarah Johnson',
    status: 'scheduled'
  },
  {
    id: '3',
    courseId: 'CS101',
    title: 'Binary Trees Overview',
    startTime: addDays(now, -1).toISOString(),
    duration: 60,
    meetingUrl: 'https://meet.example.com/cs101-past',
    lecturer: 'Dr. Sarah Johnson',
    status: 'ended',
    recording: 'https://recordings.example.com/cs101-binary-trees'
  }
];