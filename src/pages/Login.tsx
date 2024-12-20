import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { GraduationCap } from 'lucide-react';
import type { UserRole } from '../types';

export function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (role: UserRole) => {
    login(role);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <GraduationCap className="h-12 w-12 text-primary-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Lincoln University LMS
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Demo Access - Choose a role to continue
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-4">
            {(['admin', 'lecturer', 'student'] as const).map((role) => (
              <button
                key={role}
                onClick={() => handleLogin(role)}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 capitalize"
              >
                Login as {role}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}