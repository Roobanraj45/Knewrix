'use client';

import React from 'react';

export function AnimatedBackground() {
  // Purely CSS-driven background to avoid JS blocking time
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-background">
      {/* Static Light Grid - Using a lightweight CSS pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />
      
      {/* Single Optimized Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-[50%] h-[50%] opacity-[0.05] blur-[120px] bg-primary rounded-full animate-float" />
    </div>
  );
}