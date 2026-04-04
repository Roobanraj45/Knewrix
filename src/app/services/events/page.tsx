import {Metadata} from 'next';
import Image from 'next/image';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Building, PartyPopper, Gift, Target, ArrowRight, Zap, Users, Calendar, Sparkles, MapPin, Layers, Cpu, Coffee} from 'lucide-react';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Corporate Event Management & IT Sector Planning',
  description: 'Professional corporate event management, IT company servicing, theme-based branding, and customized gift hampers. Complete execution by Knewrix.',
};

export default function EventServicePage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'events-hero');

  const eventServices = [
    { 
      title: 'Corporate IT Events', 
      icon: Building, 
      desc: 'High-stakes Meetings, Product Launches, and Global Conferences tailored specifically for the fast-paced IT and Tech sectors.' 
    },
    { 
      title: 'IT Sector Servicing', 
      icon: Cpu, 
      desc: 'Providing zero-friction operational support and logistics for technology firms, from town halls to team-building retreats.' 
    },
    { 
      title: 'Customized Gift Hampers', 
      icon: Gift, 
      desc: 'Bespoke corporate gifting solutions for clients and employees, curated to reflect your brand values and premium identity.' 
    },
    { 
      title: 'Strategic Planning', 
      icon: Calendar, 
      desc: 'Comprehensive conceptualization and timeline management for professional gatherings where precision is non-negotiable.' 
    },
    { 
      title: 'Branding & Theme Setup', 
      icon: Target, 
      desc: 'Immersive, theme-based environments that transform office spaces or external venues into powerful brand experiences.' 
    },
    { 
      title: 'Execution Mastery', 
      icon: Layers, 
      desc: 'End-to-end coordination and on-site logistics to ensure a seamless experience for both the hosts and the attendees.' 
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-24 text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 uppercase tracking-widest font-bold px-4 py-1.5 rounded-full text-[10px]">
            The Experience Architect
          </Badge>
          <h1 className="font-headline text-5xl md:text-8xl font-bold mb-8 italic">
            Physical <span className="gradient-text not-italic">Impact.</span>
          </h1>
          <p className="text-2xl text-muted-foreground leading-relaxed font-medium">
            Events are the ultimate physical touchpoint for your brand. At Knewrix, we engineer <span className="text-foreground font-bold">immersive event ecosystems</span> specifically for the corporate IT landscape.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="font-headline text-4xl font-bold">Engineering Corporate Synergy</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Great events don't just happen; they are engineered. For IT companies, the requirement is often speed, precision, and a sophisticated aesthetic. We approach event management with technical rigor, ensuring every operational detail—from network setup to premium catering—is executed flawlessly.
              </p>
              <div className="p-8 rounded-[2.5rem] bg-primary/5 border border-primary/20 relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="font-headline text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                    <Coffee size={24} /> Servicing the IT Sector
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    We specialize in high-end corporate environments where every detail—from customized gift hampers for your dev team to the theme-based lighting for a launch—is synchronized with your corporate narrative.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['Corporate Gifting', 'IT Product Launches', 'Tech Conferences', 'Executive Retreats'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm font-bold">
                        <Zap size={16} className="text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground rounded-2xl font-bold px-10">
                <Link href="/contact">Plan My Corporate Event</Link>
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden bg-secondary/30 border border-border/50 group shadow-2xl">
            {heroImage && (
              <Image 
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
                data-ai-hint={heroImage.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
               <div className="flex gap-4 items-center">
                 <div className="p-4 rounded-2xl bg-background/80 backdrop-blur-md border border-border shadow-xl"><MapPin className="text-primary" size={32} /></div>
                 <div className="p-4 rounded-2xl bg-background/80 backdrop-blur-md border border-border shadow-xl"><Users className="text-accent" size={32} /></div>
                 <div className="ml-auto bg-primary text-primary-foreground px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest shadow-lg">
                   Corporate Ready
                 </div>
               </div>
            </div>
          </div>
        </section>

        <section className="mb-32">
          <div className="mb-16 max-w-2xl">
            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6">Our Event Pillars</h2>
            <p className="text-lg text-muted-foreground">Comprehensive management services tailored for the ambitious modern enterprise.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventServices.map((service, i) => (
              <div key={i} className="flex flex-col gap-6 p-8 rounded-[2.5rem] bg-card border border-border/50 group hover:border-primary/40 transition-all shadow-sm hover:shadow-xl duration-500">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <service.icon size={28} />
                </div>
                <div>
                  <h4 className="font-headline text-xl font-bold mb-3 tracking-tight">{service.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-primary text-primary-foreground rounded-[4rem] p-12 md:p-24 text-center shadow-2xl shadow-primary/20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" 
               style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px'}} />
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="font-headline text-4xl md:text-6xl font-bold mb-8 italic">Engineer an <span className="not-italic text-accent">Experience.</span></h2>
            <p className="text-xl opacity-90 mb-12 font-medium">
              Ready to transform your next IT product launch or corporate meeting into a landmark brand event? Our planners are ready to architect your success.
            </p>
            <Button asChild size="lg" className="bg-white text-primary px-12 py-8 text-xl font-bold rounded-2xl shadow-2xl hover:scale-105 transition-transform hover:bg-secondary">
              <Link href="/contact" className="flex items-center gap-3">
                Book Corporate Consultation <ArrowRight size={24} />
              </Link>
            </Button>
            <p className="mt-8 text-xs font-bold uppercase tracking-widest opacity-60">
              Zero-Friction Logistics • Custom Gifting • IT Sector Specialists
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
