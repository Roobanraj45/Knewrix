import {Metadata} from 'next';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Laptop, Zap, Target, Layers, ArrowRight, ShieldCheck, Globe, Cpu, Layout, Code, ShoppingCart, Settings} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Enterprise Websites',
  description: 'High-performance, SEO-dominant web ecosystems engineered with Next.js 15 for global brand authority. Custom design, E-commerce, and CMS solutions.',
};

export default function WebsitesServicePage() {
  const features = [
    {
      title: 'Custom Web Design',
      desc: 'Unique designs tailored to your brand identity with responsive layouts for mobile, tablet, and desktop using modern UI/UX practices.',
      icon: Layout
    },
    {
      title: 'Website Development',
      desc: 'Expert frontend and backend engineering using React, Next.js, and scalable architectures for performance and security.',
      icon: Code
    },
    {
      title: 'E-Commerce Solutions',
      desc: 'Full-scale online stores with payment gateway integration, inventory management, and conversion-optimized user journeys.',
      icon: ShoppingCart
    },
    {
      title: 'CMS Integration',
      desc: 'Easy-to-manage content systems (WordPress, Headless, or Custom) that are SEO-friendly, flexible, and robust.',
      icon: Settings
    },
    {
      title: 'SEO & Performance',
      desc: 'Blazingly fast load times and semantic structures optimized for search engines like Google and Bing to drive organic growth.',
      icon: Target
    },
    {
      title: 'Maintenance & Support',
      desc: 'Regular updates, security monitoring, and dedicated technical support to ensure your digital face remains flawless.',
      icon: ShieldCheck
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-24 text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 uppercase tracking-widest font-bold px-4 py-1.5 rounded-full text-[10px]">
            The Digital Face
          </Badge>
          <h1 className="font-headline text-5xl md:text-8xl font-bold mb-8 italic">
            Web <span className="gradient-text not-italic">Authority.</span>
          </h1>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            Your website is the digital face of your business. We create platforms that not only look stunning but also <span className="text-foreground font-bold">drive results, engage users, and grow your brand online.</span>
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
            <h2 className="font-headline text-4xl font-bold">About Our Web Strategy</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every site we build is tailored to your business goals, designed to provide a seamless user experience, and optimized for performance and search engines. We specialize in modern, responsive, and secure websites that work flawlessly across devices.
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
            <h2 className="font-headline text-4xl md:text-6xl font-bold mb-8 italic">Get Your Website <span className="not-italic gradient-text">Today.</span></h2>
            <p className="text-xl text-muted-foreground mb-12">
              Ready to elevate your digital presence? Our growth audits analyze your technical needs and provide a roadmap for market leadership.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground px-12 py-8 text-xl font-bold rounded-2xl shadow-2xl shadow-primary/20 hover:scale-105 transition-transform">
              <Link href="/contact" className="flex items-center gap-3">
                Request a Free Consultation <ArrowRight size={24} />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
