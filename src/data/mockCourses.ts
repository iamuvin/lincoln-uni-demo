import { Course } from '../types';

export const mockCourses: Course[] = [
  {
    id: 'cs101',
    code: 'CS101',
    title: 'Introduction to Computer Science',
    description: 'Fundamental concepts of programming and computer science',
    lecturer: 'Dr. Sarah Johnson',
    schedule: 'Mon, Wed 10:00 AM',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop'
  },
  {
    id: 'cs102',
    code: 'CS102',
    title: 'Data Structures and Algorithms',
    description: 'Advanced programming concepts and algorithm analysis',
    lecturer: 'Dr. Michael Chen',
    schedule: 'Tue, Thu 2:00 PM',
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop'
  },
  {
    id: 'math201',
    code: 'MATH201',
    title: 'Linear Algebra',
    description: 'Vector spaces, matrices, and linear transformations',
    lecturer: 'Prof. Emily White',
    schedule: 'Mon, Wed, Fri 1:00 PM',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop'
  }
];