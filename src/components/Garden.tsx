import React from 'react';
import { Plant } from '../types';

interface GardenProps {
  plants: Plant[];
  onPlantSelect: (plant: Plant) => void;
}

export default function Garden({ plants, onPlantSelect }: GardenProps) {
  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100 p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Your Digital Garden</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plants.map((plant) => (
          <div
            key={plant.id}
            className="relative group cursor-pointer"
            onClick={() => onPlantSelect(plant)}
          >
            <img
              src={plant.imageUrl}
              alt={plant.name}
              className="w-full h-48 object-cover rounded-lg shadow-md transition-transform group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 rounded-b-lg">
              <h3 className="font-semibold">{plant.name}</h3>
              <span className="text-sm text-green-300">{plant.rarity}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}