import { EcoAction } from '../types';
import { Bike, Bus, Lightbulb, Recycle, Salad, TreeDeciduous, Water } from 'lucide-react';

export const ecoActions: EcoAction[] = [
  {
    id: '1',
    name: 'Cycle to Work',
    points: 50,
    description: 'Choose cycling over driving for your commute',
    category: 'transport',
    icon: 'Bike'
  },
  {
    id: '2',
    name: 'Use Public Transport',
    points: 30,
    description: 'Take the bus or train instead of driving',
    category: 'transport',
    icon: 'Bus'
  },
  {
    id: '3',
    name: 'LED Light Switch',
    points: 20,
    description: 'Replace traditional bulbs with LED alternatives',
    category: 'energy',
    icon: 'Lightbulb'
  },
  {
    id: '4',
    name: 'Proper Recycling',
    points: 25,
    description: 'Correctly sort and recycle your waste',
    category: 'waste',
    icon: 'Recycle'
  },
  {
    id: '5',
    name: 'Meatless Monday',
    points: 40,
    description: 'Choose plant-based meals for a day',
    category: 'food',
    icon: 'Salad'
  }
];