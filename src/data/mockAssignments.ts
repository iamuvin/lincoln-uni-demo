import { Assignment } from '../types';
import { addDays } from 'date-fns';

const now = new Date();

export const mockAssignments: Assignment[] = [
  {
    id: '1',
    title: 'Programming Assignment 1',
    courseId: 'cs101',
    description: 'Implement a basic calculator using Python',
    dueDate: addDays(now, 7).toISOString(),
    maxScore: 100
  },
  {
    id: '2',
    title: 'Data Structures Project',
    courseId: 'cs102',
    description: 'Implement a balanced binary search tree',
    dueDate: addDays(now, 14).toISOString(),
    maxScore: 100
  },
  {
    id: '3',
    title: 'Linear Algebra Quiz',
    courseId: 'math201',
    description: 'Online quiz on matrix operations',
    dueDate: addDays(now, 3).toISOString(),
    maxScore: 50
  }
];