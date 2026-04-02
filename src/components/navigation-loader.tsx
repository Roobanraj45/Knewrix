'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function NavigationLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Immediate completion on route change
    setProgress(100);
    const timer = setTimeout(() => {
      setIsVisible(false);
      setProgress(0);
    }, 400);

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
        // Instant feedback without heavy JS loops
        setProgress(30);
      }
    };

    window.addEventListener('click', handleAnchorClick, { passive: true });
    return () => window.removeEventListener('click', handleAnchorClick);
  }, []);

  if (!isVisible && progress === 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-1 pointer-events-none">
      <div
        className="h-full bg-primary transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}