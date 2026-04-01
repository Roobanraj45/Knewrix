'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function NavigationLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Navigation completed - slow exit to show success
    setProgress(100);
    const timer = setTimeout(() => {
      setIsVisible(false);
      setProgress(0);
    }, 800);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (
        anchor &&
        anchor.href &&
        anchor.host === window.location.host &&
        anchor.pathname !== window.location.pathname &&
        !anchor.hasAttribute('download') &&
        anchor.target !== '_blank' &&
        !e.ctrlKey &&
        !e.metaKey &&
        !e.shiftKey &&
        e.button === 0
      ) {
        setIsVisible(true);
        // Start with a small progress
        setProgress(15);
      }
    };

    window.addEventListener('click', handleAnchorClick);
    return () => window.removeEventListener('click', handleAnchorClick);
  }, []);

  useEffect(() => {
    // Artificial progress slowdown for a more "weighted" feel
    if (isVisible && progress < 90) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) return prev;
          // Increment extremely slowly for a smooth, high-end feel
          const diff = (90 - prev) * 0.05;
          return prev + diff;
        });
      }, 400);
      return () => clearInterval(interval);
    }
  }, [isVisible, progress]);

  if (!isVisible && progress === 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-1.5 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient transition-all duration-500 ease-in-out"
        style={{ width: `${progress}%` }}
      />
      <div className="absolute top-0 right-0 h-full w-48 bg-gradient-to-r from-transparent via-white/40 to-white/60 blur-md" />
    </div>
  );
}
