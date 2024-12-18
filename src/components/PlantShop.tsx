import React from 'react';
import { Plant } from '../types';
import { availablePlants } from '../data/plants';

interface PlantShopProps {
  userPoints: number;
  onPurchase: (plant: Plant) => void;
}

export default function PlantShop({ userPoints, onPurchase }: PlantShopProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Plant Shop</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {availablePlants.map((plant) => (
          <div key={plant.id} className="border rounded-lg p-4">
            <img
              src={plant.imageUrl}
              alt={plant.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg">{plant.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{plant.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-green-600 font-bold">{plant.cost} points</span>
              <button
                onClick={() => onPurchase(plant)}
                disabled={userPoints < plant.cost}
                className={`px-4 py-2 rounded-md ${
                  userPoints >= plant.cost
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                Purchase
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}