interface ForumTopic {
  id: string;
  title: string;
  courseId: string;
  author: string;
  lastActivity: string;
  replies: number;
  views: number;
}

export const mockForumTopics: ForumTopic[] = [
  {
    id: '1',
    title: 'Help with Assignment 1',
    courseId: 'cs101',
    author: 'John Smith',
    lastActivity: new Date().toISOString(),
    replies: 5,
    views: 42
  },
  {
    id: '2',
    title: 'Study Group for Midterm',
    courseId: 'cs102',
    author: 'Emma Wilson',
    lastActivity: new Date().toISOString(),
    replies: 12,
    views: 156
  },
  {
    id: '3',
    title: 'Matrix Operations Question',
    courseId: 'math201',
    author: 'David Lee',
    lastActivity: new Date().toISOString(),
    replies: 3,
    views: 28
  }
];