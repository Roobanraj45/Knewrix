import {Metadata} from 'next';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Laptop, Zap, Target, Layers, ArrowRight, ShieldCheck, Globe, Cpu} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Enterprise Websites',
  description: 'High-performance, SEO-dominant web ecosystems engineered with Next.js 15 for global brand authority.',
};

export default function WebsitesServicePage() {
  const features = [
    {
      title: 'Next.js 15 Architecture',
      desc: 'Leveraging the latest in server-side rendering and static generation for ultra-fast load times.',
      icon: Zap
    },
    {
      title: 'SEO-First Engineering',
      desc: 'Semantic HTML and optimized metadata structures designed to dominate search engine results from day one.',
      icon: Target
    },
    {
      title: 'Headless CMS Integration',
      desc: 'Giving your team total content control without compromising on technical performance.',
      icon: Layers
    },
    {
      title: 'Global Performance',
      desc: 'Edge computing and CDN optimization to ensure your site is fast in every corner of the world.',
      icon: Globe
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-24 text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 uppercase tracking-widest font-bold px-4 py-1.5 rounded-full text-[10px]">
            Core Capability
          </Badge>
          <h1 className="font-headline text-5xl md:text-8xl font-bold mb-8 italic">
            Web <span className="gradient-text not-italic">Authority.</span>
          </h1>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            We don't just build websites; we engineer digital ecosystems that serve as the foundation of your brand's global scaling strategy.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 border border-primary/5 flex items-center justify-center p-12">
            <div className="absolute inset-0 opacity-10" 
                 style={{backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)', backgroundSize: '32px 32px'}} />
            <div className="relative z-10 w-full h-full border-2 border-dashed border-primary/20 rounded-2xl flex flex-col items-center justify-center space-y-8">
               <div className="w-32 h-32 rounded-3xl bg-background border border-border shadow-2xl flex items-center justify-center animate-float">
                 <Laptop size={64} className="text-primary" />
               </div>
               <div className="flex gap-4">
                 <div className="p-3 rounded-xl bg-background border border-border shadow-sm"><Cpu className="text-accent" size={24} /></div>
                 <div className="p-3 rounded-xl bg-background border border-border shadow-sm"><ShieldCheck className="text-primary" size={24} /></div>
               </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="font-headline text-4xl font-bold">Engineered for Performance.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Knewrix specialized in enterprise-grade web development. Our approach prioritizes technical excellence, accessibility, and high conversion rates. We use a strictly defined stack that ensures your platform remains scalable as your business grows.
            </p>
            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-6 p-8 rounded-3xl bg-secondary/30 border border-border/50 group hover:border-primary/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary/5 rounded-[4rem] p-12 md:p-24 border border-primary/10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-headline text-4xl md:text-6xl font-bold mb-8 italic">Ready to Lead the <span className="not-italic gradient-text">Market?</span></h2>
            <p className="text-xl text-muted-foreground mb-12">
              Our growth audits analyze your current technical infrastructure and provide a roadmap for digital dominance.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground px-12 py-8 text-xl font-bold rounded-2xl shadow-2xl shadow-primary/20 hover:scale-105 transition-transform">
              <Link href="/contact" className="flex items-center gap-3">
                Request Web Audit <ArrowRight size={24} />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
