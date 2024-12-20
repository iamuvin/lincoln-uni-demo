import React from 'react';
import { OnlineSession } from '../../types/session';
import { Video, Mic, Settings } from 'lucide-react';

interface JoinSessionModalProps {
  session: OnlineSession;
  isOpen: boolean;
  onClose: () => void;
  onJoin: (withVideo: boolean, withAudio: boolean) => void;
}

export function JoinSessionModal({ session, isOpen, onClose, onJoin }: JoinSessionModalProps) {
  const [withVideo, setWithVideo] = React.useState(true);
  const [withAudio, setWithAudio] = React.useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Join {session.title}</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Video className="h-5 w-5 text-gray-400 mr-2" />
              <span>Camera</span>
            </div>
            <button
              onClick={() => setWithVideo(!withVideo)}
              className={`${
                withVideo ? 'bg-primary-600' : 'bg-gray-200'
              } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`}
            >
              <span
                className={`${
                  withVideo ? 'translate-x-5' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out mt-1`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Mic className="h-5 w-5 text-gray-400 mr-2" />
              <span>Microphone</span>
            </div>
            <button
              onClick={() => setWithAudio(!withAudio)}
              className={`${
                withAudio ? 'bg-primary-600' : 'bg-gray-200'
              } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`}
            >
              <span
                className={`${
                  withAudio ? 'translate-x-5' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out mt-1`}
              />
            </button>
          </div>

          <div className="flex items-center text-sm text-gray-500">
            <Settings className="h-4 w-4 mr-2" />
            <span>Check your audio and video settings before joining</span>
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Cancel
          </button>
          <button
            onClick={() => onJoin(withVideo, withAudio)}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Join Session
          </button>
        </div>
      </div>
    </div>
  );
}