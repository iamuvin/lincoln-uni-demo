export type UserRole = 'admin' | 'lecturer' | 'student';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Course {
  id: string;
  title: string;
  code: string;
  description: string;
  lecturer: string;
  schedule: string;
  thumbnail: string;
}

export interface Assignment {
  id: string;
  title: string;
  courseId: string;
  dueDate: string;
  description: string;
  maxScore: number;
}

export interface Lecture {
  id: string;
  title: string;
  courseId: string;
  date: string;
  recording?: string;
  materials: string[];
}