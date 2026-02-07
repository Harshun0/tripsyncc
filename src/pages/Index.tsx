import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingChatButton from '@/components/layout/FloatingChatButton';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import TravelersSection from '@/components/sections/TravelersSection';
import FeedSection from '@/components/sections/FeedSection';
import ItinerarySection from '@/components/sections/ItinerarySection';
import ConnectSection from '@/components/sections/ConnectSection';
import ExpenseSection from '@/components/sections/ExpenseSection';
import ProfileSection from '@/components/sections/ProfileSection';
import MessagesModal from '@/components/sections/MessagesModal';
import AIChatModal from '@/components/sections/AIChatModal';
import OnboardingScreen from '@/components/screens/OnboardingScreen';

const Index: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [activeSection, setActiveSection] = useState('landing');
  const [showMessages, setShowMessages] = useState(false);
  const [showAIChat, setShowAIChat] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogin = () => {
    setShowLoginModal(true);
  };

  const handleLoginComplete = () => {
    setIsLoggedIn(true);
    setShowLoginModal(false);
    setActiveSection('home');
  };

  // Login / Sign up Modal
  if (showLoginModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="w-full max-w-md max-h-[90vh] bg-background rounded-2xl shadow-2xl overflow-hidden flex flex-col">
          <OnboardingScreen
            onComplete={handleLoginComplete}
            onBack={() => setShowLoginModal(false)}
          />
        </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'landing':
        return (
          <>
            <HeroSection 
              onGetStarted={handleLogin}
              onExplore={() => handleNavigate('explore')}
            />
            <FeaturesSection />
            <TravelersSection />
            <ItinerarySection />
            <ConnectSection />
          </>
        );
      case 'home':
        return (
          <div className="pt-20">
            <FeedSection />
          </div>
        );
      case 'explore':
        return (
          <div className="pt-20">
            <TravelersSection />
          </div>
        );
      case 'itinerary':
        return (
          <div className="pt-20">
            <ItinerarySection />
          </div>
        );
      case 'connect':
        return (
          <div className="pt-20">
            <ConnectSection />
          </div>
        );
      case 'expenses':
        return (
          <div className="pt-20">
            <ExpenseSection />
          </div>
        );
      case 'profile':
        return (
          <div className="pt-20">
            <ProfileSection />
          </div>
        );
      default:
        return (
          <>
            <HeroSection 
              onGetStarted={handleLogin}
              onExplore={() => handleNavigate('explore')}
            />
            <FeaturesSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        activeSection={activeSection} 
        onNavigate={handleNavigate}
        onAskAI={() => setShowAIChat(true)}
        isLoggedIn={isLoggedIn}
        onLogin={handleLogin}
      />
      
      <main>
        {renderContent()}
      </main>
      
      <Footer />
      
      {/* Floating Messages Button */}
      <FloatingChatButton 
        onClick={() => setShowMessages(!showMessages)} 
        isOpen={showMessages}
      />
      
      {/* Messages Modal - Chats with persons */}
      <MessagesModal 
        isOpen={showMessages} 
        onClose={() => setShowMessages(false)} 
      />

      {/* AI Chat Modal - Ask AI button */}
      <AIChatModal 
        isOpen={showAIChat} 
        onClose={() => setShowAIChat(false)} 
      />
    </div>
  );
};

export default Index;
