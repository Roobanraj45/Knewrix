'use client';

import * as React from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {cn} from '@/lib/utils';
import {Button} from '@/components/ui/button';
import {Menu, X, ChevronDown, Globe, Smartphone, BarChart3, Camera} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const NAV_ITEMS = [
  {name: 'Home', href: '/'},
  {
    name: 'Services',
    href: '/services',
    items: [
      {name: 'Websites', href: '/services/websites', icon: Globe},
      {name: 'Mobile Apps', href: '/services/mobile', icon: Smartphone},
      {name: 'Marketing', href: '/services/marketing', icon: BarChart3},
      {name: 'Content Creation', href: '/services/content', icon: Camera},
    ],
  },
  {name: 'Studio', href: '/production'},
  {name: 'About', href: '/about'},
  {name: 'Portfolio', href: '/portfolio'},
];

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
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
              item.items ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-all hover:text-primary outline-none group",
                    pathname.startsWith(item.href) ? "text-primary" : "text-muted-foreground"
                  )}>
                    {item.name} 
                    <ChevronDown size={14} className="group-data-[state=open]:rotate-180 transition-transform duration-200" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56 p-2 rounded-2xl border-border/50 bg-background/95 backdrop-blur-xl shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="grid gap-1">
                      {item.items.map((subItem) => (
                        <DropdownMenuItem key={subItem.name} asChild className="rounded-xl px-3 py-2.5 focus:bg-primary/10 focus:text-primary cursor-pointer transition-colors group">
                          <Link href={subItem.href} className="flex items-center gap-3">
                            <subItem.icon size={16} className="text-muted-foreground group-focus:text-primary" />
                            <span className="font-medium text-sm">{subItem.name}</span>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </div>
                    <div className="mt-2 pt-2 border-t border-border/50">
                      <DropdownMenuItem asChild className="rounded-xl focus:bg-primary focus:text-primary-foreground cursor-pointer font-bold justify-center py-2">
                        <Link href={item.href}>View All Capabilities</Link>
                      </DropdownMenuItem>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === item.href ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              )
            ))}
            <Button asChild variant="default" size="sm" className="bg-primary hover:bg-primary/90 rounded-xl px-5 py-0 h-9 font-bold shadow-lg shadow-primary/20">
              <Link href="/contact">Book Audit</Link>
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-foreground transition-colors p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.name} className="py-2">
                {item.items ? (
                  <>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block px-3 py-2 rounded-xl text-lg font-bold",
                        pathname === item.href ? "text-primary bg-primary/5" : "text-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                    <div className="mt-1 ml-4 grid gap-1 border-l-2 border-primary/10 pl-4">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary"
                        >
                          <subItem.icon size={14} />
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-3 py-2 rounded-xl text-lg font-bold",
                      pathname === item.href ? "text-primary bg-primary/5" : "text-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 px-3">
              <Button asChild className="w-full bg-primary py-6 text-lg rounded-2xl" onClick={() => setIsOpen(false)}>
                <Link href="/contact">Request Growth Audit</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
