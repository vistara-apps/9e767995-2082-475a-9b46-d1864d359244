'use client';

import { Copy, Volume2 } from 'lucide-react';
import { useState } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { Script } from '../types';

interface ScriptDisplayProps {
  script: Script;
  variant?: 'fullWidth' | 'inline';
}

export function ScriptDisplay({ script, variant = 'fullWidth' }: ScriptDisplayProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(script.scriptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(script.scriptText);
      utterance.lang = script.language === 'es' ? 'es-ES' : 'en-US';
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <Card variant="standard" className={variant === 'fullWidth' ? 'w-full' : ''}>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{script.title}</h3>
        <p className="text-sm text-gray-600 capitalize">{script.scenario} • {script.language}</p>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <p className="text-gray-800 leading-relaxed">{script.scriptText}</p>
      </div>
      
      <div className="flex gap-2">
        <Button 
          variant="secondary" 
          size="sm"
          onClick={handleCopy}
        >
          <Copy className="w-4 h-4 mr-2" />
          {copied ? 'Copied!' : 'Copy'}
        </Button>
        
        <Button 
          variant="secondary" 
          size="sm"
          onClick={handleSpeak}
        >
          <Volume2 className="w-4 h-4 mr-2" />
          Speak
        </Button>
      </div>
    </Card>
  );
}
