
import {Metadata} from 'next';
import Image from 'next/image';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Smartphone, Zap, ShieldCheck, ArrowRight, Sparkles, Layers, Cpu, Smartphone as MobileIcon, Bell, Infinity, Fingerprint, Code, Rocket, TabletSmartphone} from 'lucide-react';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Custom Mobile Apps',
  description: 'Enterprise-grade iOS and Android experiences built with Swift, Kotlin, React Native, and Flutter. High-retention mobile ecosystems by Knewrix.',
};

export default function MobileServicePage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'mobile-hero');
  const devImage = PlaceHolderImages.find(img => img.id === 'mobile-dev');

  const features = [
    {
      title: 'Strategic UI/UX Design',
      desc: 'Mobile users demand instant clarity. Our design process focuses on thumb-friendly navigation, intuitive gesture patterns, and emotional engagement. We create high-fidelity prototypes that allow you to feel the user journey before a single line of code is written, ensuring maximum user retention from day one.',
      icon: Sparkles
    },
    {
      title: 'Native & Cross-Platform Mastery',
      desc: 'We choose the right tool for the job. Whether it is high-performance native development using Swift (iOS) and Kotlin (Android), or highly efficient cross-platform reach using React Native and Flutter, we ensure your app is blazingly fast, responsive, and shares a consistent logic across all device ecosystems.',
      icon: TabletSmartphone
    },
    {
      title: 'Real-Time Engagement Systems',
      desc: 'A mobile app is a direct line to your customer. We engineer sophisticated real-time features including intelligent push notifications, background data synchronization, and live WebSocket connections. These systems ensure your users are always connected to the latest updates without manual refreshes.',
      icon: Bell
    },
    {
      title: 'Enterprise-Grade Security',
      desc: 'Security is paramount in mobile environments. We implement industry-standard biometric authentication (FaceID/TouchID), end-to-end data encryption, and secure keychain storage. Our apps are built to comply with global data protection standards (GDPR/DPDP), protecting both your business and your users.',
      icon: Fingerprint
    },
    {
      title: 'Offline-First Architecture',
      desc: 'Connectivity should not be a barrier. We build apps with robust local caching and background synchronization logic. This allows your users to continue interacting with critical features even in low-connectivity areas, with seamless data reconciliation once they are back online.',
      icon: Infinity
    },
    {
      title: 'Full Lifecycle Management',
      desc: 'Launching is just the beginning. Knewrix provides comprehensive App Store Optimization (ASO), automated deployment pipelines, and continuous performance monitoring. We ensure your app remains compatible with every new OS release and scales effortlessly as your user base grows globally.',
      icon: Rocket
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-24 text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 uppercase tracking-widest font-bold px-4 py-1.5 rounded-full text-[10px]">
            The Palm Presence
          </Badge>
          <h1 className="font-headline text-5xl md:text-8xl font-bold mb-8 italic leading-tight">
            Mobile <span className="gradient-text not-italic">Dominance.</span>
          </h1>
          <p className="text-2xl text-muted-foreground leading-relaxed font-medium">
            In a mobile-first world, your application is your most powerful asset for user loyalty. At Knewrix, we don't just "develop apps"—we engineer <span className="text-foreground font-bold">high-retention mobile ecosystems</span> that users don't just download, but integrate into their daily lives.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="font-headline text-4xl font-bold">Engineering Engagement</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Modern mobile engineering requires a balance of raw performance and intuitive psychology. We start by auditing your users' specific pain points to architect a solution that feels seamless on every screen.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By leveraging the latest in mobile technology—from hardware-accelerated graphics to sophisticated background tasks—we ensure your app feels native, fast, and blazingly reliable, regardless of the device.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2 p-6 rounded-2xl bg-secondary/30 border border-border/50">
                <Code className="text-accent" size={24} />
                <h4 className="font-bold">Modern Stack</h4>
                <p className="text-xs text-muted-foreground">Expertise in Swift, Kotlin, React Native, and Flutter.</p>
              </div>
              <div className="flex flex-col gap-2 p-6 rounded-2xl bg-secondary/30 border border-border/50">
                <Zap className="text-primary" size={24} />
                <h4 className="font-bold">Zero Latency</h4>
                <p className="text-xs text-muted-foreground">Optimized for millisecond response times and fluid interactions.</p>
              </div>
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
                 <div className="p-4 rounded-2xl bg-background/80 backdrop-blur-md border border-border shadow-xl"><MobileIcon className="text-accent" size={32} /></div>
                 <div className="p-4 rounded-2xl bg-background/80 backdrop-blur-md border border-border shadow-xl"><Layers className="text-primary" size={32} /></div>
                 <div className="ml-auto bg-accent text-accent-foreground px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest shadow-lg">
                   High Retention
                 </div>
               </div>
            </div>
          </div>
        </section>

        <section className="mb-32">
          <div className="mb-16 max-w-2xl">
            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6">Mobile Excellence</h2>
            <p className="text-lg text-muted-foreground">Explore the specific technical pillars that make a Knewrix mobile application an industry leader in performance and engagement.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="flex flex-col gap-6 p-8 rounded-[2.5rem] bg-card border border-border/50 group hover:border-accent/40 transition-all shadow-sm hover:shadow-xl duration-500">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <feature.icon size={28} />
                </div>
                <div>
                  <h4 className="font-headline text-2xl font-bold mb-4 tracking-tight">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Architecture Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 py-20 border-y border-border/50">
          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-secondary/30 border border-border/50 group shadow-lg">
            {devImage && (
              <Image 
                src={devImage.imageUrl}
                alt={devImage.description}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                data-ai-hint={devImage.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors duration-500" />
          </div>
          <div className="space-y-6">
            <h3 className="font-headline text-3xl font-bold">Built for Scale, Secured for Trust</h3>
            <p className="text-muted-foreground leading-relaxed">
              We understand that your mobile app is often the most intimate touchpoint with your customers. That is why we prioritize data sovereignty and extreme security. Every app we build undergoes rigorous penetration testing and performance stress audits before it hits the App Store.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our backends are built on cloud-native architectures that auto-scale based on demand, ensuring that whether you have 100 or 100,000 concurrent users, the experience remains blazingly fast and reliable.
            </p>
            <ul className="space-y-3 pt-4">
              {['End-to-End API Encryption', 'High-Concurrency Cloud Backends', 'Biometric & Multi-Factor Auth', 'Automated Performance Audits'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold text-foreground">
                  <ShieldCheck size={18} className="text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-accent text-accent-foreground rounded-[4rem] p-12 md:p-24 text-center shadow-2xl shadow-accent/20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" 
               style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px'}} />
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="font-headline text-4xl md:text-6xl font-bold mb-8 italic">Own the <span className="not-italic text-white">Market.</span></h2>
            <p className="text-xl opacity-90 mb-12 font-medium">
              Ready to take your business into your customers' pockets? Our mobile growth audits identify the highest-leverage opportunities for scale.
            </p>
            <Button asChild size="lg" className="bg-white text-accent px-12 py-8 text-xl font-bold rounded-2xl shadow-2xl hover:scale-105 transition-transform hover:bg-secondary">
              <Link href="/contact" className="flex items-center gap-3">
                Build My App Today <ArrowRight size={24} />
              </Link>
            </Button>
            <p className="mt-8 text-xs font-bold uppercase tracking-widest opacity-60">
              Native Performance • Cloud Ready • Expert Strategy
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
