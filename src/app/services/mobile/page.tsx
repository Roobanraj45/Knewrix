import {Metadata} from 'next';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Smartphone, Zap, ShieldCheck, ArrowRight, Sparkles, Layers, Cpu, Smartphone as MobileIcon, Bell, Infinity, Fingerprint} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Custom Mobile Apps',
  description: 'Native-grade iOS and Android experiences built for high retention, seamless user journeys, and real-time engagement.',
};

export default function MobileServicePage() {
  const features = [
    {
      title: 'Native-Grade Performance',
      desc: 'Leveraging modern frameworks to deliver lightning-fast, smooth interactions on both iOS and Android.',
      icon: MobileIcon
    },
    {
      title: 'User-Centric UX',
      desc: 'Intuitive navigation patterns and micro-interactions designed to maximize daily active usage and user delight.',
      icon: Sparkles
    },
    {
      title: 'Real-Time Engagement',
      desc: 'Push notifications, live updates, and background syncing to keep your users connected 24/7.',
      icon: Bell
    },
    {
      title: 'Enterprise Security',
      desc: 'Biometric authentication and high-level encryption to ensure user data remains private and secure.',
      icon: Fingerprint
    },
    {
      title: 'Offline Capabilities',
      desc: 'Ensuring your app remains functional even in areas with poor connectivity, syncing data seamlessly once online.',
      icon: Infinity
    },
    {
      title: 'Scalable Architecture',
      desc: 'Built on robust backends that can handle thousands of concurrent users as your business scales.',
      icon: ShieldCheck
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-24 text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 uppercase tracking-widest font-bold px-4 py-1.5 rounded-full text-[10px]">
            The Palm Presence
          </Badge>
          <h1 className="font-headline text-5xl md:text-8xl font-bold mb-8 italic">
            Mobile <span className="gradient-text not-italic">First.</span>
          </h1>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            In a mobile-dominated world, your app is your most powerful retention tool. We build experiences that users <span className="text-foreground font-bold">don't just download, but keep using every single day.</span>
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-gradient-to-br from-accent/10 via-background to-primary/10 border border-accent/5 flex items-center justify-center p-12">
            <div className="absolute inset-0 opacity-10" 
                 style={{backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--accent)) 1px, transparent 0)', backgroundSize: '32px 32px'}} />
            <div className="relative z-10 w-full h-full border-2 border-dashed border-accent/20 rounded-2xl flex flex-col items-center justify-center space-y-8">
               <div className="w-24 h-48 rounded-[2.5rem] bg-background border-4 border-border shadow-2xl flex items-center justify-center animate-float relative">
                 <div className="absolute top-4 w-12 h-1 bg-border rounded-full" />
                 <MobileIcon size={48} className="text-accent" />
                 <div className="absolute bottom-4 w-4 h-4 rounded-full border-2 border-border" />
               </div>
               <div className="flex gap-4">
                 <div className="p-3 rounded-xl bg-background border border-border shadow-sm"><Cpu className="text-primary" size={24} /></div>
                 <div className="p-3 rounded-xl bg-background border border-border shadow-sm"><Zap className="text-accent" size={24} /></div>
               </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="font-headline text-4xl font-bold">Engineering Engagement</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mobile strategy focuses on fluid performance and intuitive UX. We understand the nuances of both iOS and Android platforms, ensuring that your application feels native and high-performance in every customer's pocket.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <div key={i} className="flex flex-col gap-4 p-6 rounded-2xl bg-secondary/30 border border-border/50 group hover:border-accent/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-background flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
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

        <section className="bg-accent/5 rounded-[4rem] p-12 md:p-24 border border-accent/10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-headline text-4xl md:text-6xl font-bold mb-8 italic">Own the <span className="not-italic gradient-text">Market.</span></h2>
            <p className="text-xl text-muted-foreground mb-12">
              Ready to take your business into your customers' pockets? Let's build a mobile strategy that delivers predictable growth.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground px-12 py-8 text-xl font-bold rounded-2xl shadow-2xl shadow-accent/20 hover:scale-105 transition-transform">
              <Link href="/contact" className="flex items-center gap-3">
                Build My App Today <ArrowRight size={24} />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
