import { create } from 'zustand';
import type { User, UserRole } from '../types';

interface AuthState {
  user: User | null;
  login: (role: UserRole) => void;
  logout: () => void;
}

const demoUsers: Record<UserRole, User> = {
  admin: {
    id: '1',
    name: 'Admin User',
    email: 'admin@lincoln.edu',
    role: 'admin',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
  },
  lecturer: {
    id: '2',
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@lincoln.edu',
    role: 'lecturer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
  student: {
    id: '3',
    name: 'John Smith',
    email: 'john.smith@lincoln.edu',
    role: 'student',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
  },
};

export const useAuth = create<AuthState>((set) => ({
  user: null,
  login: (role) => set({ user: demoUsers[role] }),
  logout: () => set({ user: null }),
}));