'use client';

import * as React from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {cn} from '@/lib/utils';
import {Button} from '@/components/ui/button';
import {Menu, X} from 'lucide-react';

const NAV_ITEMS = [
  {name: 'Home', href: '/'},
  {name: 'Services', href: '/services'},
  {name: 'Studio', href: '/production'},
  {name: 'About', href: '/about'},
  {name: 'Portfolio', href: '/portfolio'},
];

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 premium-blur border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="group flex flex-col items-start">
              <span className="font-headline text-xl md:text-2xl font-bold tracking-tighter leading-none">
                KNEW<span className="text-primary">RIX</span>
              </span>
              <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-muted-foreground group-hover:text-primary transition-colors mt-0.5">
                Digital Growth Partner
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  pathname === item.href ? "text-accent" : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild variant="default" size="sm" className="bg-primary hover:bg-primary/90 rounded-xl px-5 py-0 h-9 font-bold">
              <Link href="/contact">Book Audit</Link>
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  pathname === item.href ? "text-accent bg-accent/10" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button asChild className="w-full bg-primary" onClick={() => setIsOpen(false)}>
                <Link href="/contact">Book a Growth Audit</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}