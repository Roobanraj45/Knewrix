'use client';

import React, { useEffect, useState } from 'react';

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-background">
      {/* Optimized Background Gradient - Much lighter than multiple blurred divs */}
      <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.2),transparent_70%)]" />
      
      {/* Subtle Moving Layer */}
      <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] opacity-[0.05] animate-float-slow bg-[radial-gradient(circle_at_20%_30%,hsl(var(--accent)/0.3),transparent_50%)]" />

      {/* Static Light Grid - Fixed performance-heavy perspective transforms */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }}
      />
    </div>
  );
}
