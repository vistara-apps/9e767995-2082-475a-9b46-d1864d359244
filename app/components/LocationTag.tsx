'use client';

import { MapPin } from 'lucide-react';
import { LocationData } from '../types';

interface LocationTagProps {
  location: LocationData;
  variant?: 'default' | 'interactive';
  onClick?: () => void;
}

export function LocationTag({ location, variant = 'default', onClick }: LocationTagProps) {
  const displayText = location.state 
    ? `${location.state}, ${location.country || 'US'}`
    : 'Current Location';

  const baseStyles = 'inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm';
  const variants = {
    default: 'bg-white/90 text-gray-700',
    interactive: 'bg-white/90 text-gray-700 hover:bg-white cursor-pointer transition-colors',
  };

  return (
    <div 
      className={`${baseStyles} ${variants[variant]}`}
      onClick={onClick}
    >
      <MapPin className="w-4 h-4" />
      {displayText}
    </div>
  );
}
