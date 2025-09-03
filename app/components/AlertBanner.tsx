'use client';

import { ReactNode } from 'react';
import { AlertTriangle, Info, X } from 'lucide-react';

interface AlertBannerProps {
  children: ReactNode;
  variant?: 'info' | 'warning' | 'error';
  onDismiss?: () => void;
}

export function AlertBanner({ children, variant = 'info', onDismiss }: AlertBannerProps) {
  const variants = {
    info: 'bg-blue-50 text-blue-800 border-blue-200',
    warning: 'bg-yellow-50 text-yellow-800 border-yellow-200',
    error: 'bg-red-50 text-red-800 border-red-200',
  };

  const icons = {
    info: Info,
    warning: AlertTriangle,
    error: AlertTriangle,
  };

  const Icon = icons[variant];

  return (
    <div className={`border rounded-lg p-4 flex items-start gap-3 ${variants[variant]}`}>
      <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
      <div className="flex-1">{children}</div>
      {onDismiss && (
        <button 
          onClick={onDismiss}
          className="flex-shrink-0 p-1 hover:bg-black/10 rounded"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
