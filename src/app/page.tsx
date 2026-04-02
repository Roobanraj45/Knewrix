import Link from 'next/link';
import Image from 'next/image';
import {Button} from '@/components/ui/button';
import {Badge} from '@/components/ui/badge';
import {ArrowRight, Globe, Smartphone, Video, Target, ShieldCheck, BarChart3, Rocket, Award, Users} from 'lucide-react';

export default function Home() {
  const techServices = [
    { 
      id: '01',
      icon: Globe, 
      title: 'High-Performance Web', 
      desc: 'Ultra-low latency web platforms engineered with Next.js 15. We prioritize SEO dominance.',
      features: ['Server-Side Excellence', 'SEO Optimization', 'Global Scale']
    },
    { 
      id: '02',
      icon: Smartphone, 
      title: 'Scalable Mobile Apps', 
      desc: 'Native iOS and Android experiences built for user retention.',
      features: ['Cross-Platform Power', 'User-Centric UX', 'Seamless Integration']
    },
    { 
      id: '03',
      icon: BarChart3, 
      title: 'Digital Marketing', 
      desc: 'ROI-focused acquisition systems utilizing deep analytics.',
      features: ['Performance Ads', 'Conversion Strategy', 'Data Analytics']
    },
    { 
      id: '04',
      icon: Video, 
      title: 'Content Creation', 
      desc: 'High-end visual storytelling designed for digital platforms.',
      features: ['Brand Films', 'Social Content', 'Strategic Narrative']
    },
  ];

  const statistics = [
    { label: 'Revenue Generated', value: '$150M+' },
    { label: 'Active Users Scaled', value: '2.4M' },
    { label: 'Project Success Rate', value: '98%' },
    { label: 'Global Awards', value: '12' }
  ];

  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-20">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-36 md:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 border-primary/40 text-primary bg-primary/5 uppercase tracking-[0.3em] font-bold px-4 py-1.5 rounded-full text-[10px]">
              Digital Growth Partner
            </Badge>
            
            <h1 className="font-headline text-4xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tighter">
              We build software.<br />
              <span className="gradient-text">We scale brands.</span>
            </h1>

            <p className="text-base md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
              Knewrix is a technology firm delivering <span className="text-foreground font-bold">Websites</span>, <span className="text-foreground font-bold">Apps</span>, and <span className="text-foreground font-bold">Marketing</span> for global brands.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground shadow-xl shadow-primary/10 hover:scale-105 transition-all rounded-xl font-bold px-8">
                <Link href="/contact">Book Audit</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/20 bg-primary/5 hover:bg-primary/10 rounded-xl font-bold px-8">
                <Link href="/services">Capabilities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 md:-mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {statistics.map((stat, i) => (
            <div key={i} className="p-6 md:p-8 rounded-[2rem] text-center bg-card/50 border border-border/50">
              <p className="text-2xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Synergy Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary/5 border border-primary/10 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <Badge variant="outline" className="border-accent/40 text-accent font-bold px-3 py-1 text-[10px]">Integrated Strategy</Badge>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                The Knewrix <span className="gradient-text">Synergy.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium max-w-lg">
                We combine elite engineering with cinematic storytelling to dominate markets.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Target, title: 'Unified Growth', desc: 'Tech and marketing in parallel.' },
                  { icon: ShieldCheck, title: 'ROI Focused', desc: 'Built to convert.' }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-2 p-4 rounded-2xl bg-background/50 border border-border/50">
                    <item.icon size={16} className="text-primary" />
                    <h4 className="font-bold text-sm">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src="https://picsum.photos/seed/knewrix-strategy/800/450" 
                alt="Knewrix Strategy" 
                fill
                priority
                className="object-cover"
                data-ai-hint="Corporate strategy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pillar Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 space-y-3">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">The Growth Engine.</h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Architecting systems with data-led acquisition models.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techServices.map((service, i) => (
            <div 
              key={i} 
              className="group relative border border-border/50 rounded-[2rem] p-8 flex flex-col bg-card/30 hover:border-primary/30 transition-all" 
            >
              <service.icon size={24} className="text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed mb-6 flex-grow">
                {service.desc}
              </p>
              <div className="space-y-2 pt-4 border-t border-border/50">
                {service.features.slice(0, 2).map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[10px] font-bold text-foreground/80">
                    <div className="w-1 h-1 rounded-full bg-accent" />
                    {feat}
                  </div>
                ))}
              </div>
              <div className="pt-6">
                <Link href="/services" className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-primary group-hover:translate-x-1 transition-transform">
                  Explore <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="bg-secondary/40 p-10 md:p-16 rounded-[3rem] border border-border/50 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">Ready to scale?</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Join 50+ brands scaling through Knewrix Tech-Creative strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-xl px-10 font-bold bg-primary text-primary-foreground hover:scale-105 transition-transform">
              <Link href="/contact">Request Strategy Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
