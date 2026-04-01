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
      {/* Light Sky Atmospheric Layers */}
      <div className="absolute inset-0 opacity-[0.4]">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-[120px] animate-glow"
            style={{
              width: `${Math.random() * 600 + 400}px`,
              height: `${Math.random() * 600 + 400}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 2 === 0 ? 'hsl(var(--primary) / 0.15)' : 'hsl(var(--accent) / 0.1)',
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 15 + 10}s`,
            }}
          />
        ))}
      </div>

      {/* Soft Light Grid Layer */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          transform: 'perspective(1000px) rotateX(60deg) translateY(-100px)',
          transformOrigin: 'top'
        }}
      />

      {/* Floating Circles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-primary/10 rounded-full animate-float-slow"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.2
            }}
          />
        ))}
      </div>
    </div>
  );
}
