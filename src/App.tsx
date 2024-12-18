import React, { useState } from 'react';
import Header from './components/Header';
import ActionCard from './components/ActionCard';
import Garden from './components/Garden';
import PlantShop from './components/PlantShop';
import { ecoActions } from './data/actions';
import { UserProgress, Plant } from './types';

function App() {
  const [userProgress, setUserProgress] = useState<UserProgress>({
    points: 0,
    level: 1,
    plants: [],
    completedActions: [],
  });

  const handleActionComplete = (actionId: string) => {
    if (!userProgress.completedActions.includes(actionId)) {
      const action = ecoActions.find((a) => a.id === actionId);
      if (action) {
        setUserProgress((prev) => ({
          ...prev,
          points: prev.points + action.points,
          completedActions: [...prev.completedActions, actionId],
        }));
      }
    }
  };

  const handlePlantPurchase = (plant: Plant) => {
    if (userProgress.points >= plant.cost) {
      setUserProgress((prev) => ({
        ...prev,
        points: prev.points - plant.cost,
        plants: [...prev.plants, plant],
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header points={userProgress.points} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Eco Actions</h2>
            <div className="grid gap-6">
              {ecoActions.map((action) => (
                <ActionCard
                  key={action.id}
                  action={action}
                  onComplete={handleActionComplete}
                  isCompleted={userProgress.completedActions.includes(action.id)}
                />
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <Garden
              plants={userProgress.plants}
              onPlantSelect={() => {}}
            />
            
            <PlantShop
              userPoints={userProgress.points}
              onPurchase={handlePlantPurchase}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;