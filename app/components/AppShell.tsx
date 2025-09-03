'use client';

import { ReactNode } from 'react';
import { Shield, Menu, User } from 'lucide-react';

interface AppShellProps {
  children: ReactNode;
  variant?: 'default' | 'withHeader' | 'withFooter';
}

export function AppShell({ children, variant = 'default' }: AppShellProps) {
  const showHeader = variant === 'withHeader' || variant === 'default';
  const showFooter = variant === 'withFooter';

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-600">
      {showHeader && (
        <header className="glass-effect border-b border-white/20">
          <div className="max-w-xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-white" />
              <h1 className="text-xl font-bold text-white">Zara Rights</h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-lg glass-effect text-white">
                <Menu className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg glass-effect text-white">
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>
      )}
      
      <main className="max-w-xl mx-auto px-6">
        {children}
      </main>
      
      {showFooter && (
        <footer className="glass-effect border-t border-white/20 mt-8">
          <div className="max-w-xl mx-auto px-6 py-4 text-center">
            <p className="text-white/80 text-sm">© 2024 Zara Rights. Know Your Rights.</p>
          </div>
        </footer>
      )}
    </div>
  );
}
