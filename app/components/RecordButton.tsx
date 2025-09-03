'use client';

import { useState } from 'react';
import { Mic, Square } from 'lucide-react';
import { cn } from '../utils/cn';

interface RecordButtonProps {
  variant?: 'inactive' | 'active' | 'pulsing';
  onStart?: () => void;
  onStop?: () => void;
}

export function RecordButton({ variant = 'inactive', onStart, onStop }: RecordButtonProps) {
  const [isRecording, setIsRecording] = useState(false);

  const handleClick = () => {
    if (isRecording) {
      setIsRecording(false);
      onStop?.();
    } else {
      setIsRecording(true);
      onStart?.();
    }
  };

  const buttonVariants = {
    inactive: 'bg-white/90 text-gray-700',
    active: 'bg-error text-white',
    pulsing: 'bg-error text-white animate-pulse-record',
  };

  const currentVariant = isRecording ? 'active' : variant;

  return (
    <button
      className={cn(
        'w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-card hover:shadow-modal',
        buttonVariants[currentVariant]
      )}
      onClick={handleClick}
    >
      {isRecording ? (
        <Square className="w-6 h-6" />
      ) : (
        <Mic className="w-6 h-6" />
      )}
    </button>
  );
}
