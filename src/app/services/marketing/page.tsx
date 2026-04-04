import {Metadata} from 'next';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {BarChart3, Rocket, Globe, Target, ArrowRight, Zap, Users, ShieldCheck, TrendingUp, Search, MousePointer2} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Digital Marketing & Growth',
  description: 'Data-led performance marketing systems designed to scale brand reach, maximize ROI, and dominate search results.',
};

export default function MarketingServicePage() {
  const features = [
    {
      title: 'Performance Optimization',
      desc: 'Aggressive ROAS-focused campaign management across Meta, Google, and LinkedIn with real-time scaling logic.',
      icon: TrendingUp
    },
    {
      title: 'Conversion Logic',
      desc: 'Continuous A/B testing and landing page optimization to maximize the value of every single visitor.',
      icon: MousePointer2
    },
    {
      title: 'Global Search Authority',
      desc: 'Strategic backlink building and SEO content clusters to drive high-intent organic traffic at scale.',
      icon: Search
    },
    {
      title: 'Unified Attribution',
      desc: 'Deep analytics tracking that connects every marketing dollar to a specific growth outcome and lifetime value.',
      icon: BarChart3
    },
    {
      title: 'Strategic Growth Audits',
      desc: 'Uncovering the bottlenecks in your funnel and identifying high-leverage opportunities for rapid scale.',
      icon: Target
    },
    {
      title: 'Brand Scaling',
      desc: 'Comprehensive roadmaps to take your local brand to a global audience with predictable acquisition costs.',
      icon: Rocket
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-24 text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 uppercase tracking-widest font-bold px-4 py-1.5 rounded-full text-[10px]">
            The Growth Engine
          </Badge>
          <h1 className="font-headline text-5xl md:text-8xl font-bold mb-8 italic">
            Market <span className="gradient-text not-italic">Dominance.</span>
          </h1>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            We move beyond simple "ads" to build <span className="text-foreground font-bold">automated acquisition systems</span> that scale your business predictably and profitably.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 border border-primary/5 flex items-center justify-center p-12">
            <div className="absolute inset-0 opacity-10" 
                 style={{backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)', backgroundSize: '32px 32px'}} />
            <div className="relative z-10 w-full h-full border-2 border-dashed border-primary/20 rounded-2xl flex flex-col items-center justify-center space-y-8">
               <div className="w-32 h-32 rounded-full bg-background border border-border shadow-2xl flex items-center justify-center animate-pulse">
                 <Target size={64} className="text-primary" />
               </div>
               <div className="flex gap-4">
                 <div className="p-3 rounded-xl bg-background border border-border shadow-sm"><BarChart3 className="text-accent" size={24} /></div>
                 <div className="p-3 rounded-xl bg-background border border-border shadow-sm"><Users className="text-primary" size={24} /></div>
               </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="font-headline text-4xl font-bold">Data-Driven Domination</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Knewrix, we focus on the metrics that matter: ROI, CAC, and LTV. Our marketing systems are engineered in parallel with your tech, ensuring every click is captured in a high-conversion ecosystem.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <div key={i} className="flex flex-col gap-4 p-6 rounded-2xl bg-secondary/30 border border-border/50 group hover:border-primary/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-background flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <feature.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-1">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary/5 rounded-[4rem] p-12 md:p-24 border border-primary/10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-headline text-4xl md:text-6xl font-bold mb-8 italic">Audit Your <span className="not-italic gradient-text">Growth.</span></h2>
            <p className="text-xl text-muted-foreground mb-12">
              Uncover the bottlenecks in your acquisition funnel and start scaling with precision.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground px-12 py-8 text-xl font-bold rounded-2xl shadow-2xl shadow-primary/20 hover:scale-105 transition-transform">
              <Link href="/contact" className="flex items-center gap-3">
                Request Growth Audit <ArrowRight size={24} />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
