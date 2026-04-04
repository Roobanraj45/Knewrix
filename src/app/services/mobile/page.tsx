import {Metadata} from 'next';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Smartphone, Zap, Smartphone as MobileIcon, ShieldCheck, ArrowRight, Sparkles, Layers, Cpu} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Custom Mobile Apps',
  description: 'Native-grade iOS and Android experiences built for high retention and seamless user journeys.',
};

export default function MobileServicePage() {
  const features = [
    {
      title: 'Cross-Platform Power',
      desc: 'Building for iOS and Android simultaneously using frameworks that deliver native-grade performance.',
      icon: MobileIcon
    },
    {
      title: 'User-Centric UX',
      desc: 'Micro-interactions and intuitive navigation patterns designed to maximize daily active usage.',
      icon: Sparkles
    },
    {
      title: 'Scalable Backends',
      desc: 'Real-time data syncing and secure API integrations that handle thousands of concurrent users.',
      icon: ShieldCheck
    },
    {
      title: 'Offline First',
      desc: 'Ensuring your app works flawlessly even with poor connectivity, syncing data when back online.',
      icon: Layers
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
            Mobile <span className="gradient-text not-italic">First.</span>
          </h1>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            We create native-feeling mobile experiences that prioritize speed, user retention, and fluid interaction.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-gradient-to-br from-accent/10 via-background to-primary/10 border border-accent/5 flex items-center justify-center p-12">
            <div className="absolute inset-0 opacity-10" 
                 style={{backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--accent)) 1px, transparent 0)', backgroundSize: '32px 32px'}} />
            <div className="relative z-10 w-full h-full border-2 border-dashed border-accent/20 rounded-2xl flex flex-col items-center justify-center space-y-8">
               <div className="w-24 h-48 rounded-[2.5rem] bg-background border-4 border-border shadow-2xl flex items-center justify-center animate-float relative">
                 <div className="absolute top-4 w-12 h-1 bg-border rounded-full" />
                 <Smartphone size={48} className="text-accent" />
                 <div className="absolute bottom-4 w-4 h-4 rounded-full border-2 border-border" />
               </div>
               <div className="flex gap-4">
                 <div className="p-3 rounded-xl bg-background border border-border shadow-sm"><Cpu className="text-primary" size={24} /></div>
                 <div className="p-3 rounded-xl bg-background border border-border shadow-sm"><Zap className="text-accent" size={24} /></div>
               </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="font-headline text-4xl font-bold">Built for Engagement.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Knewrix, we understand that a mobile app is more than just a shrunk-down website. It's a high-touch environment that needs to be responsive, intuitive, and secure. We focus on building apps that users don't just download, but keep using every single day.
            </p>
            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-6 p-8 rounded-3xl bg-secondary/30 border border-border/50 group hover:border-accent/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
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

        <section className="bg-accent/5 rounded-[4rem] p-12 md:p-24 border border-accent/10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-headline text-4xl md:text-6xl font-bold mb-8 italic">Own the <span className="not-italic gradient-text">Palm.</span></h2>
            <p className="text-xl text-muted-foreground mb-12">
              Ready to take your business into your customers' pockets? Let's build a mobile strategy that converts.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground px-12 py-8 text-xl font-bold rounded-2xl shadow-2xl shadow-accent/20 hover:scale-105 transition-transform">
              <Link href="/contact" className="flex items-center gap-3">
                Build My App <ArrowRight size={24} />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
