export interface EcoAction {
  id: string;
  name: string;
  points: number;
  description: string;
  category: 'transport' | 'energy' | 'waste' | 'food';
  icon: string;
}

export interface Plant {
  id: string;
  name: string;
  cost: number;
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary';
  description: string;
  imageUrl: string;
}

export interface UserProgress {
  points: number;
  level: number;
  plants: Plant[];
  completedActions: string[];
}