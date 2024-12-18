import React from 'react';
import { EcoAction } from '../types';
import * as Icons from 'lucide-react';

interface ActionCardProps {
  action: EcoAction;
  onComplete: (id: string) => void;
  isCompleted: boolean;
}

export default function ActionCard({ action, onComplete, isCompleted }: ActionCardProps) {
  const IconComponent = Icons[action.icon as keyof typeof Icons];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-green-100 rounded-full">
            <IconComponent className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold">{action.name}</h3>
        </div>
        <span className="text-green-600 font-bold">+{action.points}</span>
      </div>
      <p className="text-gray-600 mb-4">{action.description}</p>
      <button
        onClick={() => onComplete(action.id)}
        disabled={isCompleted}
        className={`w-full py-2 px-4 rounded-md transition-colors ${
          isCompleted
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
            : 'bg-green-600 text-white hover:bg-green-700'
        }`}
      >
        {isCompleted ? 'Completed' : 'Complete Action'}
      </button>
    </div>
  );
}