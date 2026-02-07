import React, { useState } from 'react';
import { MapPin, Users, Sparkles, ArrowRight, Mail, Phone, ArrowLeft, X, User, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface OnboardingScreenProps {
  onComplete: () => void;
  onBack?: () => void;
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onComplete, onBack }) => {
  const [step, setStep] = useState(0);
  const [isSignUp, setIsSignUp] = useState(false);

  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Planning',
      description: 'Let our AI create perfect itineraries tailored to your preferences',
      color: 'from-primary to-accent',
    },
    {
      icon: Users,
      title: 'Find Trip Mates',
      description: 'Connect with compatible travelers based on your travel style',
      color: 'from-secondary to-sunset-pink',
    },
    {
      icon: MapPin,
      title: 'Live Map',
      description: 'See who\'s traveling now, trending spots & meet travelers nearby',
      color: 'from-success to-primary',
    },
  ];

  if (step < 3) {
    const feature = features[step];
    const Icon = feature.icon;

    return (
      <div className="h-full flex flex-col bg-background min-h-[480px]">
        {/* Header: Back + Skip */}
        <div className="flex items-center justify-between p-4 border-b border-border/50">
          <button
            onClick={step === 0 ? () => onBack?.() : () => setStep(step - 1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors p-2 -ml-2 rounded-xl hover:bg-muted/50"
            aria-label={step === 0 ? 'Close' : 'Back'}
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">{step === 0 ? 'Back' : 'Back'}</span>
          </button>
          <button
            onClick={onComplete}
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors px-3 py-2 rounded-xl hover:bg-primary/10"
          >
            Skip
          </button>
        </div>

        {/* Illustration Area */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 py-10">
          <div className={`w-28 h-28 rounded-3xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}>
            <Icon className="w-14 h-14 text-white" />
          </div>
          <h2 className="text-xl font-bold text-foreground text-center mb-3">
            {feature.title}
          </h2>
          <p className="text-muted-foreground text-center text-sm leading-relaxed max-w-[260px]">
            {feature.description}
          </p>
        </div>

        {/* Progress Dots & Next Button */}
        <div className="p-6 pt-0 space-y-5">
          <div className="flex justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === step ? 'w-8 bg-primary' : 'w-2 bg-muted'
                }`}
              />
            ))}
          </div>
          <Button
            onClick={() => setStep(step + 1)}
            className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl text-base font-semibold"
          >
            Next
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    );
  }

  // Login / Sign up Screen
  return (
    <div className="h-full flex flex-col bg-background min-h-[520px]">
      {/* Header: Back + Close */}
      <div className="flex items-center justify-between p-4 border-b border-border/50 flex-shrink-0">
        <button
          onClick={() => setStep(2)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors p-2 -ml-2 rounded-xl hover:bg-muted/50"
          aria-label="Back"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back</span>
        </button>
        <button
          onClick={() => onBack?.()}
          className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Brand strip */}
      <div className="px-6 py-5 flex items-center gap-3 border-b border-border/50">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <MapPin className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-foreground">TripSync</h1>
          <p className="text-xs text-muted-foreground">Travel Smarter. Travel Together.</p>
        </div>
      </div>

      {/* Form */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-5">
        <div>
          <h2 className="text-xl font-bold text-foreground">
            {isSignUp ? 'Create account' : 'Welcome back'}
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            {isSignUp ? 'Sign up to find travel buddies and plan trips' : 'Sign in to continue your journey'}
          </p>
        </div>

        <div className="space-y-3">
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            <input
              type="email"
              placeholder="Email address"
              className="w-full h-12 pl-11 pr-4 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
          <div className="relative">
            {isSignUp ? (
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            ) : (
              <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            )}
            <input
              type={isSignUp ? 'text' : 'tel'}
              placeholder={isSignUp ? 'Full name' : 'Phone number'}
              className="w-full h-12 pl-11 pr-4 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
          {isSignUp && (
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
              <input
                type="password"
                placeholder="Password (min 6 characters)"
                className="w-full h-12 pl-11 pr-4 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
          )}
        </div>

        <Button
          onClick={onComplete}
          className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl text-base font-semibold"
        >
          {isSignUp ? 'Sign up' : 'Continue'}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>

        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center">
            <span className="px-3 bg-background text-xs text-muted-foreground">or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button type="button" className="h-12 rounded-xl border border-input bg-background flex items-center justify-center gap-2 text-sm font-medium hover:bg-muted/50 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google
          </button>
          <button type="button" className="h-12 rounded-xl border border-input bg-foreground text-background flex items-center justify-center gap-2 text-sm font-medium hover:opacity-90 transition-opacity">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Apple
          </button>
        </div>

        <p className="text-center text-sm text-muted-foreground pt-2">
          {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-primary font-semibold hover:underline"
          >
            {isSignUp ? 'Sign in' : 'Sign up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default OnboardingScreen;
