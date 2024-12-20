interface Person {
  id: string;
  name: string;
  role: 'student' | 'lecturer' | 'admin';
  email: string;
  avatar: string;
  department?: string;
}

export const mockPeople: Person[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    role: 'lecturer',
    email: 'sarah.johnson@lincoln.edu',
    department: 'Computer Science',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
  },
  {
    id: '2',
    name: 'John Smith',
    role: 'student',
    email: 'john.smith@lincoln.edu',
    department: 'Computer Science',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
  },
  {
    id: '3',
    name: 'Emma Wilson',
    role: 'student',
    email: 'emma.wilson@lincoln.edu',
    department: 'Mathematics',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
  }
];