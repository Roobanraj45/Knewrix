
import {Metadata} from 'next';
import Image from 'next/image';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Camera, Video, Film, Sparkles, ArrowRight, Zap, Users, Calendar, PlayCircle, Smartphone, MonitorPlay, Layers} from 'lucide-react';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Cinematic Content Creation & Video Production',
  description: 'High-end brand narratives, corporate video shoots, editorial photography, and cinematic films to establish instant digital trust and brand authority.',
};

export default function ContentServicePage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'content-hero');

  const videoServices = [
    { title: 'Corporate Video Shoots', icon: MonitorPlay, desc: 'Professional visual storytelling for company profiles, culture films, and internal communications.' },
    { title: 'Event Coverage', icon: Calendar, desc: 'Comprehensive cinematic documentation for Weddings, Functions, and Corporate Launches.' },
    { title: 'Social Media Reels & Ads', icon: Smartphone, desc: 'High-engagement short-form vertical video editing specifically engineered for Meta and TikTok.' },
    { title: 'Professional Video Editing', icon: Layers, desc: 'Elite post-production services including color grading, sound design, and motion graphics.' },
    { title: 'Brand & Promotional Videos', icon: Film, desc: 'Strategic commercials designed to capture your brand soul and drive emotional resonance.' },
    { title: 'Product Shoots & Ad Films', icon: Video, desc: 'High-spec visual assets for product launches and high-performance digital ad campaigns.' }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-24 text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 uppercase tracking-widest font-bold px-4 py-1.5 rounded-full text-[10px]">
            The Visual Authority
          </Badge>
          <h1 className="font-headline text-5xl md:text-8xl font-bold mb-8 italic">
            Visual <span className="gradient-text not-italic">Trust.</span>
          </h1>
          <p className="text-2xl text-muted-foreground leading-relaxed font-medium">
            In a digital-first world, high-end imagery is the only way to establish <span className="text-foreground font-bold">instant brand authority</span>. We don't just "produce content"—we architect cinematic narratives that convert.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="font-headline text-4xl font-bold">Resonance Over Reach</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Knewrix Studio, we combine technical precision with artistic soul. Our content creation process is integrated with our growth strategy, ensuring that every frame produced serves a specific marketing objective—whether it's building trust, explaining a complex product, or driving immediate sales.
              </p>
              <div className="p-8 rounded-[2.5rem] bg-secondary/30 border border-border/50 relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="font-headline text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Sparkles size={24} className="text-accent" /> Premium Studio Quality
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    We operate with elite cinema-grade equipment and an editorial eye. From high-fashion photography to large-scale brand films, our production value is optimized for premium digital interfaces.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['4K/8K Production', 'Editorial Photography', 'Advanced Post-Production', 'Motion Graphics'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm font-bold">
                        <Zap size={16} className="text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground rounded-2xl font-bold px-10">
                <Link href="/contact">Book a Strategy Shoot</Link>
              </Button>
            </div>
          </div>

          <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-secondary/30 border border-border/50 group shadow-2xl">
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
                 <div className="p-4 rounded-2xl bg-background/80 backdrop-blur-md border border-border shadow-xl"><Camera className="text-accent" size={32} /></div>
                 <div className="p-4 rounded-2xl bg-background/80 backdrop-blur-md border border-border shadow-xl"><PlayCircle className="text-primary" size={32} /></div>
                 <div className="ml-auto bg-primary text-primary-foreground px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest shadow-lg">
                   Cinema Grade
                 </div>
               </div>
            </div>
          </div>
        </section>

        <section className="mb-32">
          <div className="mb-16 max-w-2xl">
            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6">Our Video Services</h2>
            <p className="text-lg text-muted-foreground">Strategic video production designed for impact across every touchpoint of your customer journey.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoServices.map((service, i) => (
              <div key={i} className="flex flex-col gap-6 p-8 rounded-[2.5rem] bg-card border border-border/50 group hover:border-accent/40 transition-all shadow-sm hover:shadow-xl duration-500">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
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

        <section className="bg-accent text-accent-foreground rounded-[4rem] p-12 md:p-24 text-center shadow-2xl shadow-accent/20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" 
               style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px'}} />
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="font-headline text-4xl md:text-6xl font-bold mb-8 italic">Capture the <span className="not-italic text-white">Vision.</span></h2>
            <p className="text-xl opacity-90 mb-12 font-medium">
              Ready to stop blend-in and start standing out? Our visual audits help you identify the content gaps that are costing you trust.
            </p>
            <Button asChild size="lg" className="bg-white text-accent px-12 py-8 text-xl font-bold rounded-2xl shadow-2xl hover:scale-105 transition-transform hover:bg-secondary">
              <Link href="/contact" className="flex items-center gap-3">
                Request a Production Quote <ArrowRight size={24} />
              </Link>
            </Button>
            <p className="mt-8 text-xs font-bold uppercase tracking-widest opacity-60">
              Editorial Style • Cinema Production • High Performance
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
