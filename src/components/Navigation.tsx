import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { LogOut, Menu, GraduationCap } from 'lucide-react';

interface NavigationProps {
  onMenuClick: () => void;
}

export function Navigation({ onMenuClick }: NavigationProps) {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <button
              type="button"
              className="lg:hidden -ml-2 mr-2 p-2 rounded-md text-gray-600 hover:text-gray-900"
              onClick={onMenuClick}
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900 hidden sm:block">Lincoln University</span>
              <span className="ml-2 text-xl font-semibold text-gray-900 sm:hidden">LU</span>
            </div>
          </div>

          <div className="flex items-center">
            {user && (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700 hidden sm:block">{user.name}</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src={user.avatar}
                  alt={user.name}
                />
                <button
                  onClick={logout}
                  className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <LogOut className="mr-2 h-4 w-4 hidden sm:block" />
                  <span className="hidden sm:block">Logout</span>
                  <LogOut className="h-4 w-4 sm:hidden" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}