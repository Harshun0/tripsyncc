import React, { useState } from 'react';
import {
  MapPin,
  Users,
  TrendingUp,
  Gem,
  DollarSign,
  Utensils,
  Car,
  Hotel,
  Flame,
  User,
  Image,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ConnectSection: React.FC = () => {
  const [selectedPin, setSelectedPin] = useState<string | null>(null);

  // Live Travel Vibe - mock data
  const liveTravelers = [
    { id: '1', name: 'Priya S.', city: 'Goa', spot: 'Anjuna Beach', posts: 12, avatar: 'P' },
    { id: '2', name: 'Rahul K.', city: 'Goa', spot: 'Fontainhas', posts: 8, avatar: 'R' },
    { id: '3', name: 'Ananya M.', city: 'Goa', spot: 'Dudhsagar', posts: 15, avatar: 'A' },
  ];

  const trendingSpots = [
    { name: 'Fontainhas', activity: 'High', count: 24 },
    { name: 'Anjuna Beach', activity: 'Very High', count: 31 },
    { name: 'Assagao', activity: 'Medium', count: 12 },
  ];

  // Hidden Gems - mock data
  const hiddenGems = [
    {
      name: 'Cafe Bhonsle',
      vibe: 'Only locals know this place',
      tags: ['Breakfast', 'Chai', 'Quiet'],
      rating: 4.8,
    },
    {
      name: 'Butterfly Beach (South Goa)',
      vibe: 'Underrated beach, no crowds',
      tags: ['Beach', 'Sunset', 'Secluded'],
      rating: 4.9,
    },
    {
      name: 'Chorao Island Backwaters',
      vibe: 'Secret mangrove trails',
      tags: ['Nature', 'Kayak', 'Birding'],
      rating: 4.7,
    },
  ];

  // City-wise costs - user-generated style
  const cityCosts = [
    { city: 'Goa', stay: '₹1,200–2,500/night', food: '₹400–800/day', transport: '₹300–600/day', source: '12 travelers' },
    { city: 'Rishikesh', stay: '₹800–1,800/night', food: '₹350–600/day', transport: '₹150–400/day', source: '8 travelers' },
    { city: 'Leh', stay: '₹1,500–3,000/night', food: '₹500–900/day', transport: '₹800–1,500/day', source: '6 travelers' },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            Connect & Explore
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="text-primary">Connect</span> with Travelers & Places
          </h2>
          <p className="text-lg text-muted-foreground">
            Live map, hidden gems, and real city costs—powered by travelers like you.
          </p>
        </div>

        <div className="space-y-16">
          {/* 1) Live Travel Vibe Map */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                <Flame className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Live Travel Vibe Map</h3>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Map placeholder + pins concept */}
              <div className="lg:col-span-2 travel-card p-6 min-h-[320px] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 rounded-2xl" />
                <div className="relative flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-muted-foreground">Real-time view</span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-success/10 text-success text-xs font-medium rounded-full">
                      <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                      Live
                    </span>
                  </div>
                  {/* Map mock with clickable pins */}
                  <div className="flex-1 border-2 border-dashed border-primary/20 rounded-2xl bg-muted/30 flex items-center justify-center relative">
                    <MapPin className="w-16 h-16 text-primary/30 absolute top-1/4 left-1/3" />
                    <MapPin className="w-14 h-14 text-primary/50 absolute top-1/2 left-1/2 cursor-pointer hover:scale-110 transition-transform" onClick={() => setSelectedPin(selectedPin === 'center' ? null : 'center')} />
                    <MapPin className="w-12 h-12 text-secondary/40 absolute bottom-1/3 right-1/4" />
                    <p className="text-muted-foreground text-sm text-center px-4">
                      Map: Who&apos;s traveling now • Trending spots • Activity heat
                    </p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Button size="sm" className="rounded-full gap-1">
                      <Users className="w-3.5 h-3.5" />
                      Meet travelers nearby
                    </Button>
                    <span className="text-xs text-muted-foreground self-center">Click a pin → profile + posts</span>
                  </div>
                </div>
              </div>

              {/* Sidebar: Travelers + Trending */}
              <div className="space-y-6">
                <div className="travel-card p-6">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    In this city right now
                  </h4>
                  <div className="space-y-3">
                    {liveTravelers.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => setSelectedPin(selectedPin === t.id ? null : t.id)}
                        className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-colors ${
                          selectedPin === t.id ? 'bg-primary/10 border border-primary/30' : 'bg-muted/50 hover:bg-muted'
                        }`}
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-semibold text-primary text-sm">
                          {t.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-foreground text-sm truncate">{t.name}</p>
                          <p className="text-xs text-muted-foreground truncate">{t.spot}</p>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground text-xs">
                          <Image className="w-3.5 h-3.5" />
                          {t.posts}
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="travel-card p-6">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-secondary" />
                    Trending spots
                  </h4>
                  <div className="space-y-2">
                    {trendingSpots.map((s, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                        <span className="font-medium text-foreground text-sm">{s.name}</span>
                        <span className="text-xs text-muted-foreground">{s.activity} ({s.count})</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2) Hidden Gems */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Gem className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Hidden Gems</h3>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Not the usual tourist spots—algorithm suggests underrated local spots. &quot;Only locals know this place&quot; vibe.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {hiddenGems.map((gem, i) => (
                <div key={i} className="travel-card p-6 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-foreground">{gem.name}</h4>
                    <span className="text-xs font-medium text-foreground bg-secondary/10 text-secondary px-2 py-1 rounded-full">
                      {gem.rating} ★
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground italic mb-4 flex-1">&quot;{gem.vibe}&quot;</p>
                  <div className="flex flex-wrap gap-2">
                    {gem.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3) City-wise costs */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">City-wise Costs</h3>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              User-generated real data: average stay, food, and local transport. Practical and valuable for planning.
            </p>
            <div className="overflow-x-auto">
              <div className="min-w-[640px] grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cityCosts.map((city, i) => (
                  <div key={i} className="travel-card p-6">
                    <h4 className="font-semibold text-foreground text-lg mb-4 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      {city.city}
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3">
                        <Hotel className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        <div>
                          <p className="text-muted-foreground">Stay</p>
                          <p className="font-medium text-foreground">{city.stay}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Utensils className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        <div>
                          <p className="text-muted-foreground">Food</p>
                          <p className="font-medium text-foreground">{city.food}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Car className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        <div>
                          <p className="text-muted-foreground">Local transport</p>
                          <p className="font-medium text-foreground">{city.transport}</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
                      <User className="w-3 h-3" />
                      From {city.source}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
