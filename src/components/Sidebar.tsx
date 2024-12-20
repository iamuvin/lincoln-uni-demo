import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { cn } from '../lib/utils';
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  Users,
  MessageSquare,
  Calendar,
  Settings,
  Video,
  CreditCard,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
  const { user } = useAuth();

  const navigation = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Online Sessions', href: '/sessions', icon: Video },
    { name: 'Courses', href: '/courses', icon: BookOpen },
    { name: 'Assignments', href: '/assignments', icon: FileText },
    { name: 'Forums', href: '/forums', icon: MessageSquare },
    { name: 'Calendar', href: '/calendar', icon: Calendar },
    { name: 'People', href: '/people', icon: Users },
    // Show payments only for students
    ...(user?.role === 'student' ? [{ name: 'Payments', href: '/payments', icon: CreditCard }] : []),
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-40 w-64 transform bg-white transition-transform duration-200 ease-in-out lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex h-full flex-col">
          {/* Close button - mobile only */}
          <div className="flex items-center justify-end px-4 py-2 lg:hidden">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-900"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation items */}
          <nav className="flex-1 space-y-1 px-4 py-4">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={onClose}
                  className={cn(
                    "group flex items-center px-2 py-2 text-sm font-medium rounded-md",
                    isActive
                      ? "bg-primary-50 text-primary-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  <item.icon className={cn(
                    "mr-3 h-5 w-5 flex-shrink-0",
                    isActive ? "text-primary-600" : "text-gray-400 group-hover:text-gray-500"
                  )} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}