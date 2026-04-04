
import {Metadata} from 'next';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Globe, Smartphone, BarChart3, Camera, Laptop, ArrowRight, PartyPopper} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Services | Knewrix Digital Capabilities',
  description: 'Enterprise Web Development, Custom Mobile Apps, Performance Marketing, Cinematic Content Creation, and End-to-End Event Management.',
};

const SERVICE_DIRECTORY = [
  {
    id: 'websites',
    title: 'Enterprise Websites',
    subtitle: 'SEO-Dominant Platforms',
    icon: Laptop,
    href: '/services/websites',
    color: 'text-primary',
    bg: 'bg-primary/5'
  },
  {
    id: 'mobile',
    title: 'Custom Mobile Apps',
    subtitle: 'High-Retention Experiences',
    icon: Smartphone,
    href: '/services/mobile',
    color: 'text-accent',
    bg: 'bg-accent/5'
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    subtitle: 'Data-Led Growth Systems',
    icon: BarChart3,
    href: '/services/marketing',
    color: 'text-primary',
    bg: 'bg-primary/5'
  },
  {
    id: 'content',
    title: 'Content Creation',
    subtitle: 'Cinematic Brand Narrative',
    icon: Camera,
    href: '/services/content',
    color: 'text-accent',
    bg: 'bg-accent/5'
  },
  {
    id: 'events',
    title: 'Event Management',
    subtitle: 'End-to-End Planning',
    icon: PartyPopper,
    href: '/services/events',
    color: 'text-primary',
    bg: 'bg-primary/5'
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-24 text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 uppercase tracking-widest font-bold px-4 py-1.5 rounded-full text-[10px]">
            The Knewrix Capability
          </Badge>
          <h1 className="font-headline text-5xl md:text-8xl font-bold mb-8 italic">
            Engineering <span className="gradient-text not-italic">Growth.</span>
          </h1>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            From digital architecture to physical experiences, we provide a unified approach to scaling global brands. Select a capability to explore our deep expertise.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {SERVICE_DIRECTORY.map((service) => (
            <Link 
              key={service.id} 
              href={service.href}
              className={`group relative overflow-hidden rounded-[2.5rem] border border-border/50 ${service.bg} p-12 transition-all hover:border-primary/30 hover:shadow-2xl`}
            >
              <div className="relative z-10 space-y-8">
                <div className={`w-16 h-16 rounded-2xl bg-background flex items-center justify-center ${service.color} shadow-sm group-hover:scale-110 transition-transform`}>
                  <service.icon size={32} />
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest ${service.color} mb-2`}>{service.subtitle}</p>
                  <h2 className="font-headline text-4xl font-bold tracking-tight">{service.title}</h2>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                  Explore Depth <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <service.icon size={160} />
              </div>
            </Link>
          ))}
        </div>

        <section className="mt-32 bg-secondary/30 rounded-[3rem] p-12 md:p-20 text-center border border-border/50">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-8">Not sure where to start?</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Book a complimentary Growth Audit. We'll analyze your current digital and physical footprint and identify the highest leverage opportunities for scale.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground px-12 py-8 text-xl font-bold rounded-2xl shadow-xl shadow-primary/20">
            <Link href="/contact">Book My Audit</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
