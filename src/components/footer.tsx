import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="group flex flex-col items-start mb-6">
              <span className="font-headline text-2xl font-bold tracking-tighter leading-none">
                KNEW<span className="text-primary">RIX</span>
              </span>
              <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-muted-foreground group-hover:text-primary transition-colors mt-0.5">
                Digital Growth Partner
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              Your end-to-end digital growth partner. We build products, establish brands, and scale growth through integrated strategy and execution.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest">LinkedIn</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest">Twitter</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest">Instagram</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-headline font-semibold mb-6">Expertise</h4>
            <ul className="space-y-4">
              <li><Link href="/services#websites" className="text-muted-foreground hover:text-foreground transition-colors">Websites</Link></li>
              <li><Link href="/services#mobile" className="text-muted-foreground hover:text-foreground transition-colors">Mobile Apps</Link></li>
              <li><Link href="/services#marketing" className="text-muted-foreground hover:text-foreground transition-colors">Digital Marketing</Link></li>
              <li><Link href="/services#content" className="text-muted-foreground hover:text-foreground transition-colors">Brand Identity</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Knewrix Growth Partner. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
