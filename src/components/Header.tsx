import React from 'react';
import { TreePine } from 'lucide-react';

export default function Header({ points }: { points: number }) {
  return (
    <header className="bg-green-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TreePine className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Carbon Grove</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-green-700 rounded-full px-4 py-2">
              <span className="font-semibold">{points} Points</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}