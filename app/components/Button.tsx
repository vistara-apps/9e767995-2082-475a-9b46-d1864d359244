'use client';

import { ReactNode } from 'react';
import { cn } from '../utils/cn';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'destructive' | 'iconOnly';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick, 
  disabled = false,
  className 
}: ButtonProps) {
  const baseStyles = 'font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-gradient-to-r from-gradient-start to-gradient-end text-white hover:opacity-90 focus:ring-primary',
    secondary: 'bg-white/90 text-gray-900 hover:bg-white focus:ring-gray-500 border border-gray-200',
    destructive: 'bg-error text-white hover:bg-red-600 focus:ring-error',
    iconOnly: 'bg-white/90 text-gray-700 hover:bg-white focus:ring-gray-500 p-2',
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const iconOnlySize = variant === 'iconOnly' ? '' : sizes[size];

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        iconOnlySize,
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
