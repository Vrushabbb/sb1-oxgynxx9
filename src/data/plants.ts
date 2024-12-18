import { Plant } from '../types';

export const availablePlants: Plant[] = [
  {
    id: 'oak',
    name: 'Mighty Oak',
    cost: 500,
    rarity: 'legendary',
    description: 'A majestic oak tree that stands tall and proud',
    imageUrl: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800'
  },
  {
    id: 'cherry',
    name: 'Cherry Blossom',
    cost: 300,
    rarity: 'rare',
    description: 'Beautiful pink blossoms that symbolize renewal',
    imageUrl: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=800'
  },
  {
    id: 'bamboo',
    name: 'Lucky Bamboo',
    cost: 100,
    rarity: 'common',
    description: 'Fast-growing and brings good fortune',
    imageUrl: 'https://images.unsplash.com/photo-1567331711402-509c12c41959?auto=format&fit=crop&w=800'
  }
];