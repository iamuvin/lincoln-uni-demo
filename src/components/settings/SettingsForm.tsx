import React from 'react';
import { useAuth } from '../../store/auth';
import { Bell, Lock, Eye, Globe } from 'lucide-react';

export function SettingsForm() {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      {/* Profile Settings */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Profile Settings</h2>
        <div className="flex items-center space-x-4">
          <img
            src={user?.avatar}
            alt={user?.name}
            className="h-16 w-16 rounded-full"
          />
          <div>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              Change Photo
            </button>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <div className="flex items-center mb-4">
          <Bell className="h-5 w-5 text-gray-400 mr-2" />
          <h2 className="text-lg font-medium text-gray-900">Notification Settings</h2>
        </div>
        <div className="space-y-4">
          {['Email notifications', 'Push notifications', 'SMS notifications'].map((setting) => (
            <div key={setting} className="flex items-center justify-between">
              <span className="text-sm text-gray-700">{setting}</span>
              <button
                className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 bg-primary-600"
                role="switch"
                aria-checked="true"
              >
                <span className="translate-x-5 inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Privacy Settings */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <div className="flex items-center mb-4">
          <Lock className="h-5 w-5 text-gray-400 mr-2" />
          <h2 className="text-lg font-medium text-gray-900">Privacy Settings</h2>
        </div>
        <div className="space-y-4">
          {['Profile visibility', 'Show online status', 'Share activity status'].map((setting) => (
            <div key={setting} className="flex items-center justify-between">
              <span className="text-sm text-gray-700">{setting}</span>
              <button
                className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 bg-gray-200"
                role="switch"
                aria-checked="false"
              >
                <span className="translate-x-0 inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}