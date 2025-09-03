'use client';

import { ReactNode } from 'react';
import { cn } from '../utils/cn';

interface CardProps {
  children: ReactNode;
  variant?: 'standard' | 'highlight' | 'compact';
  className?: string;
  onClick?: () => void;
}

export function Card({ children, variant = 'standard', className, onClick }: CardProps) {
  const baseStyles = 'rounded-lg shadow-card transition-all duration-300';
  
  const variants = {
    standard: 'bg-white/90 backdrop-blur-sm p-6',
    highlight: 'bg-gradient-to-r from-gradient-start to-gradient-end text-white p-6',
    compact: 'bg-white/90 backdrop-blur-sm p-4',
  };

  const hoverStyles = onClick ? 'cursor-pointer hover:shadow-modal hover:scale-105' : '';

  return (
    <div 
      className={cn(baseStyles, variants[variant], hoverStyles, className)}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
