'use client';

import { useState, useEffect } from 'react';
import { Shield, MapPin, MessageSquare, AlertTriangle, Users } from 'lucide-react';
import { AppShell } from './components/AppShell';
import { Card } from './components/Card';
import { Button } from './components/Button';
import { RecordButton } from './components/RecordButton';
import { LocationTag } from './components/LocationTag';
import { AlertBanner } from './components/AlertBanner';
import { ScriptDisplay } from './components/ScriptDisplay';
import { useLocation } from './hooks/useLocation';
import { mockLegalCards, mockScripts } from './utils/mockData';

export default function HomePage() {
  const { location, loading: locationLoading, error: locationError } = useLocation();
  const [currentCard, setCurrentCard] = useState(mockLegalCards[0]);
  const [showScripts, setShowScripts] = useState(false);
  const [selectedScript, setSelectedScript] = useState(mockScripts[0]);

  // Simulate location-based content update
  useEffect(() => {
    if (location?.state) {
      // In a real app, this would fetch location-specific legal cards
      console.log('Location detected:', location.state);
    }
  }, [location]);

  const handleRecordStart = () => {
    console.log('Recording started');
    // In a real app, this would start audio/video recording
  };

  const handleRecordStop = () => {
    console.log('Recording stopped');
    // In a real app, this would stop recording and send alerts
  };

  return (
    <AppShell variant="withHeader">
      <div className="py-6 space-y-6">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">
              Know Your Rights, Instantly
            </h1>
            <p className="text-white/80 text-lg">
              Mobile-first legal guidance when you need it most
            </p>
          </div>

          {/* Location Display */}
          <div className="flex justify-center">
            {location ? (
              <LocationTag location={location} />
            ) : locationLoading ? (
              <div className="text-white/60">Detecting location...</div>
            ) : (
              <div className="text-white/60">Location unavailable</div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="flex justify-center gap-4 mt-6">
            <Button 
              variant="secondary" 
              onClick={() => setShowScripts(!showScripts)}
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Scripts
            </Button>
            <Button variant="secondary">
              <Users className="w-4 h-4 mr-2" />
              Contacts
            </Button>
          </div>
        </div>

        {/* Location Error Alert */}
        {locationError && (
          <AlertBanner variant="warning">
            Location access denied. Some features may be limited. {locationError}
          </AlertBanner>
        )}

        {/* Emergency Record Button */}
        <div className="flex justify-center">
          <div className="text-center">
            <RecordButton 
              onStart={handleRecordStart}
              onStop={handleRecordStop}
            />
            <p className="text-white/80 text-sm mt-2">Emergency Record</p>
          </div>
        </div>

        {/* Legal Rights Card */}
        <Card variant="standard">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-semibold text-gray-900">Your Rights</h2>
            </div>
            <div className="text-sm text-gray-500">
              {location?.state || 'General'}
            </div>
          </div>
          
          <div className="prose prose-sm max-w-none">
            <div dangerouslySetInnerHTML={{ 
              __html: currentCard.content.replace(/\n/g, '<br>').replace(/#{1,3}\s/g, '<strong>').replace(/\*\*/g, '</strong><strong>').replace(/- /g, '• ')
            }} />
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <Button size="sm">
              Share Rights Card
            </Button>
          </div>
        </Card>

        {/* Scripts Section */}
        {showScripts && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Quick Scripts</h2>
              <Button 
                size="sm" 
                variant="secondary"
                onClick={() => setShowScripts(false)}
              >
                Hide
              </Button>
            </div>
            
            <div className="grid gap-3">
              {mockScripts.map((script) => (
                <Card 
                  key={script.scriptId}
                  variant="compact"
                  className="cursor-pointer hover:shadow-lg"
                  onClick={() => setSelectedScript(script)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900">{script.title}</h3>
                      <p className="text-sm text-gray-600 capitalize">
                        {script.scenario} • {script.language}
                      </p>
                    </div>
                    <MessageSquare className="w-5 h-5 text-gray-400" />
                  </div>
                </Card>
              ))}
            </div>
            
            {selectedScript && (
              <ScriptDisplay script={selectedScript} />
            )}
          </div>
        )}

        {/* Stats Dashboard */}
        <div className="grid grid-cols-2 gap-4">
          <Card variant="highlight">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">36K</div>
              <div className="text-white/80 text-sm">Citizens Helped</div>
            </div>
          </Card>
          
          <Card variant="standard">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">95%</div>
              <div className="text-gray-600 text-sm">Success Rate</div>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <Card variant="standard">
          <div className="text-center space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">
              Get Premium Features
            </h3>
            <p className="text-gray-600 text-sm">
              Unlimited multilingual scripts, advanced features, and priority support
            </p>
            <Button className="w-full">
              Upgrade to Premium - $4.99/mo
            </Button>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
