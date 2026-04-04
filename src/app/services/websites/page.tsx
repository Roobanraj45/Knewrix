import {Metadata} from 'next';
import Image from 'next/image';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Laptop, Target, ArrowRight, ShieldCheck, Cpu, Layout, Code, ShoppingCart, Settings, Globe, BarChart3, Zap} from 'lucide-react';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Enterprise Websites',
  description: 'High-performance, SEO-dominant web ecosystems engineered with Next.js 15 for global brand authority. Custom design, E-commerce, and CMS solutions.',
};

export default function WebsitesServicePage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'web-hero');
  const uiImage = PlaceHolderImages.find(img => img.id === 'web-ui-ux');
  
  const features = [
    {
      title: 'Custom Web Design',
      desc: 'Our design philosophy centers on user-centric research and brand alignment. We create unique, high-fidelity visual identities that reflect your brand\'s elite positioning. Every interface is crafted using modern UI/UX practices to ensure intuitive navigation and maximum user engagement across mobile, tablet, and desktop.',
      icon: Layout
    },
    {
      title: 'Performance Engineering',
      desc: 'We specialize in enterprise-grade frontend and backend engineering. Utilizing modern frameworks like React and Next.js 15, we build websites that are not just visually stunning but technically superior. Our clean-code architecture ensures your platform is secure, blazingly fast, and fully scalable for future growth.',
      icon: Code
    },
    {
      title: 'E-Commerce Ecosystems',
      desc: 'Transform your business into a global digital storefront. Our e-commerce solutions feature seamless payment gateway integrations, robust inventory management, and conversion-optimized checkout journeys. We focus on reducing friction and maximizing the average order value for every visitor.',
      icon: ShoppingCart
    },
    {
      title: 'Strategic CMS Integration',
      desc: 'Retain full control over your content with our flexible CMS solutions. Whether you need the familiarity of WordPress, the power of a Headless CMS, or a fully custom-built administrative dashboard, we provide easy-to-manage systems that are inherently SEO-friendly and highly adaptable to your evolving content needs.',
      icon: Settings
    },
    {
      title: 'SEO & Search Authority',
      desc: 'A beautiful website is only valuable if it is found. We implement semantic HTML structures and technical SEO best practices from day one. By prioritizing Core Web Vitals and blazingly fast load times, we ensure your brand dominates search results on Google, Bing, and other major platforms to drive consistent organic growth.',
      icon: Target
    },
    {
      title: 'Proactive Maintenance',
      desc: 'Digital excellence requires constant vigilance. Our support goes beyond simple bug fixes; we provide regular security monitoring, automated backups, and proactive updates to ensure your digital face remains flawless. With Knewrix, you gain a dedicated technical partner committed to your long-term success.',
      icon: ShieldCheck
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-24 text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 uppercase tracking-widest font-bold px-4 py-1.5 rounded-full text-[10px]">
            The Digital Face of Growth
          </Badge>
          <h1 className="font-headline text-5xl md:text-8xl font-bold mb-8 italic leading-tight">
            Web <span className="gradient-text not-italic">Authority.</span>
          </h1>
          <p className="text-2xl text-muted-foreground leading-relaxed font-medium">
            Your website is your most powerful employee. At Knewrix, we don't just "build sites"—we engineer <span className="text-foreground font-bold">high-conversion digital ecosystems</span> that work 24/7 to establish trust and drive global revenue.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="font-headline text-4xl font-bold">The Knewrix Web Strategy</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that a website should be more than a static brochure; it should be a dynamic engine for growth. Our approach starts with a deep audit of your business DNA, your competitors, and your audience's behavior.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By combining elite software engineering with data-led design, we ensure that every pixel serves a purpose. We prioritize the technical foundations—Speed, Security, and SEO—to give you an unfair advantage in an increasingly competitive digital landscape.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2 p-6 rounded-2xl bg-secondary/30 border border-border/50">
                <Zap className="text-primary" size={24} />
                <h4 className="font-bold">Next.js 15 Ready</h4>
                <p className="text-xs text-muted-foreground">Cutting-edge performance with Server Actions and optimized rendering.</p>
              </div>
              <div className="flex flex-col gap-2 p-6 rounded-2xl bg-secondary/30 border border-border/50">
                <Globe className="text-accent" size={24} />
                <h4 className="font-bold">Global Scale</h4>
                <p className="text-xs text-muted-foreground">Architected to handle massive concurrent traffic with zero downtime.</p>
              </div>
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
                 <div className="p-4 rounded-2xl bg-background/80 backdrop-blur-md border border-border shadow-xl"><Cpu className="text-accent" size={32} /></div>
                 <div className="p-4 rounded-2xl bg-background/80 backdrop-blur-md border border-border shadow-xl"><BarChart3 className="text-primary" size={32} /></div>
                 <div className="ml-auto bg-primary text-primary-foreground px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest shadow-lg">
                   Enterprise Grade
                 </div>
               </div>
            </div>
          </div>
        </section>

        <section className="mb-32">
          <div className="mb-16 max-w-2xl">
            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6">Engineered Features</h2>
            <p className="text-lg text-muted-foreground">Explore the specific technical pillars that make a Knewrix website an industry-leading platform.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="flex flex-col gap-6 p-8 rounded-[2.5rem] bg-card border border-border/50 group hover:border-primary/40 transition-all shadow-sm hover:shadow-xl duration-500">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
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

        {/* Secondary Info Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 py-20 border-y border-border/50">
          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-secondary/30 border border-border/50 group shadow-lg">
            {uiImage && (
              <Image 
                src={uiImage.imageUrl}
                alt={uiImage.description}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                data-ai-hint={uiImage.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
          </div>
          <div className="space-y-6">
            <h3 className="font-headline text-3xl font-bold">Seamless Experience, Absolute Security</h3>
            <p className="text-muted-foreground leading-relaxed">
              We understand that modern web users demand instant gratification. That's why we prioritize server-side rendering and edge delivery to ensure your site loads in milliseconds, regardless of where your user is located.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Security isn't an afterthought; it's baked into every layer. From SSL certificates and encrypted data handling to DDoS protection and regular security audits, we ensure your business and your customers are always protected.
            </p>
            <ul className="space-y-3 pt-4">
              {['Ultra-low latency delivery', 'Encrypted data protocols', 'GDPR & DPDP Compliant', 'Automated Daily Backups'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold text-foreground">
                  <ShieldCheck size={18} className="text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground rounded-[4rem] p-12 md:p-24 text-center shadow-2xl shadow-primary/20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" 
               style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px'}} />
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="font-headline text-4xl md:text-6xl font-bold mb-8 italic">Get Your Website <span className="not-italic text-accent">Today.</span></h2>
            <p className="text-xl opacity-90 mb-12 font-medium">
              Don't leave your digital presence to chance. Our growth audits analyze your technical needs and provide a roadmap for market leadership.
            </p>
            <Button asChild size="lg" className="bg-white text-primary px-12 py-8 text-xl font-bold rounded-2xl shadow-2xl hover:scale-105 transition-transform hover:bg-secondary">
              <Link href="/contact" className="flex items-center gap-3">
                Request a Free Consultation <ArrowRight size={24} />
              </Link>
            </Button>
            <p className="mt-8 text-xs font-bold uppercase tracking-widest opacity-60">
              No obligation • Data-led analysis • Expert strategy
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
