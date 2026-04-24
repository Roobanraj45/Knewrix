import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="group flex flex-col items-start">
              <span className="font-headline text-2xl font-bold tracking-tighter leading-none">
                KNEW<span className="text-primary">RIX</span>
              </span>
              <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-muted-foreground group-hover:text-primary transition-colors mt-0.5">
                Digital Growth Partner
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Engineering the future of growth. We combine elite software development with cinematic creative strategy and end-to-end event mastery.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a 
                href="https://www.facebook.com/profile.php?id=61587202530144" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all" 
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.instagram.com/knewrixtech/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all" 
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Expertise Column */}
          <div>
            <h4 className="font-headline font-bold text-lg mb-6 tracking-tight italic">Expertise.</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/services/websites" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Enterprise Websites
                </Link>
              </li>
              <li>
                <Link href="/services/mobile" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Mobile Application
                </Link>
              </li>
              <li>
                <Link href="/services/marketing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/content" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Content Creation
                </Link>
              </li>
              <li>
                <Link href="/services/events" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Event Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-headline font-bold text-lg mb-6 tracking-tight italic">Company.</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  The Story
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/production" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Studio Production
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Book a Growth Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="font-headline font-bold text-lg mb-6 tracking-tight italic">Connect.</h4>
            <div className="space-y-4">
              <div className="flex gap-4">
                <MapPin className="text-primary flex-shrink-0" size={18} />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Senjoshosp School Street,<br />
                  Near Poonamallee Bus Stand,<br />
                  Poonamallee, Chennai - 600056
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-primary flex-shrink-0" size={18} />
                <p className="text-sm text-muted-foreground font-medium">+91 96007 12539</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-primary flex-shrink-0" size={18} />
                <p className="text-sm text-muted-foreground font-medium">hello@knewrix.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-muted-foreground font-medium">
            © {currentYear} Knewrix Private Limited. Built for global scale.
          </p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground hover:text-primary transition-colors">
              Privacy Charter
            </Link>
            <Link href="/terms" className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground hover:text-primary transition-colors">
              Legal Framework
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
