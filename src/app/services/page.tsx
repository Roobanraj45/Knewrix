import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {CheckCircle2, Globe, Smartphone, BarChart3, Camera, Video, Calendar, Sparkles, Layers, Rocket, ShieldCheck, Zap, Laptop, Target, Cpu, Search, ArrowRight} from 'lucide-react';
import Link from 'next/link';

const DETAILED_SERVICES = [
  {
    id: 'websites',
    title: 'Enterprise Websites',
    subtitle: 'SEO-Dominant Platforms',
    icon: Laptop,
    description: 'We build high-performance web ecosystems that serve as the foundation of your digital authority. Our websites are not just digital brochures; they are conversion-optimized engines engineered for global scale.',
    details: [
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
      }
    ],
    cta: 'Discuss Your Web Project'
  },
  {
    id: 'mobile',
    title: 'Custom Mobile Apps',
    subtitle: 'High-Retention Experiences',
    icon: Smartphone,
    description: 'Our mobile division focuses on creating native-feeling experiences that users love to return to. We prioritize fluid animations, offline capabilities, and seamless user journeys.',
    details: [
      {
        title: 'Cross-Platform Power',
        desc: 'Building for iOS and Android simultaneously using frameworks that deliver native-grade performance.',
        icon: Smartphone
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
      }
    ],
    cta: 'Build Your App'
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    subtitle: 'Data-Led Growth Systems',
    icon: BarChart3,
    description: 'We move beyond simple "ads" to build automated acquisition systems. We use deep analytics to find your most profitable customers and scale your reach predictably.',
    details: [
      {
        title: 'Performance Optimization',
        desc: 'Aggressive ROAS-focused campaign management across Meta, Google, and LinkedIn.',
        icon: Rocket
      },
      {
        title: 'Conversion Logic',
        desc: 'Continuous A/B testing and landing page optimization to squeeze every drop of value from your traffic.',
        icon: BarChart3
      },
      {
        title: 'Global Search Authority',
        desc: 'Strategic backlink building and content clusters to drive high-intent organic traffic.',
        icon: Globe
      }
    ],
    cta: 'Audit My Marketing'
  },
  {
    id: 'content',
    title: 'Content Creation',
    subtitle: 'Cinematic Brand Narrative',
    icon: Camera,
    description: 'Visual dominance is the key to trust. We combine editorial-grade photography with cinematic brand films to create an emotional resonance that code alone cannot achieve.',
    details: [
      {
        title: 'Editorial Photography',
        desc: 'High-spec brand and product imagery captured with industry-leading Phase One equipment.',
        icon: Camera
      },
      {
        title: 'Brand Film Strategy',
        desc: 'Story-driven video production that stops the scroll and builds long-term brand equity.',
        icon: Video
      },
      {
        title: 'Event Activations',
        desc: 'Coordinating high-impact physical launches with integrated digital coverage and live content drops.',
        icon: Calendar
      }
    ],
    cta: 'Book a Creative Session'
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-24 text-center max-w-4xl mx-auto animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 uppercase tracking-widest font-bold px-4 py-1.5 rounded-full text-[10px]">
            The Knewrix Capability
          </Badge>
          <h1 className="font-headline text-4xl md:text-7xl font-bold mb-6 italic">
            Engineering <span className="gradient-text not-italic">Growth.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            From the first line of code to the final content drop, we provide a unified approach to scaling global brands.
          </p>
        </header>

        <div className="space-y-32">
          {DETAILED_SERVICES.map((service, i) => (
            <section key={service.id} id={service.id} className="scroll-mt-32">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                  {/* Service Info Column */}
                  <div className="lg:col-span-5 space-y-8 animate-fade-up" style={{animationDelay: '100ms'}}>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                        <service.icon size={28} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-0.5">{service.subtitle}</p>
                        <h2 className="font-headline text-4xl font-bold leading-tight">{service.title}</h2>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    <div className="pt-6">
                      <Button asChild size="lg" className="rounded-xl shadow-lg shadow-primary/10 px-8 font-bold group">
                        <Link href="/contact" className="flex items-center gap-2">
                          {service.cta} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  
                  {/* Detailed Feature Cards Column */}
                  <div className="lg:col-span-7 grid grid-cols-1 gap-6">
                    {service.details.map((detail, idx) => (
                      <div 
                        key={idx} 
                        className="animated-card flex gap-6 p-10 rounded-[2.5rem] bg-secondary/30 group animate-fade-up border-primary/5 hover:border-primary/20 transition-all relative overflow-hidden" 
                        style={{animationDelay: `${idx * 150 + 200}ms`}}
                      >
                        <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors" />
                        <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-2xl bg-background flex items-center justify-center text-primary border border-border group-hover:bg-primary/5 transition-colors">
                          <detail.icon size={24} />
                        </div>
                        <div>
                          <h5 className="font-bold text-2xl mb-2 group-hover:text-primary transition-colors">{detail.title}</h5>
                          <p className="text-muted-foreground leading-relaxed text-base">{detail.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Studio Technical Inventory */}
        <section className="mt-40 p-12 md:p-20 bg-primary/5 rounded-[4rem] border border-primary/10 relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-accent/40 text-accent font-bold text-[10px] uppercase tracking-widest px-3">Technical Ecosystem</Badge>
            <h2 className="font-headline text-4xl md:text-5xl font-bold italic">Our <span className="not-italic gradient-text">Inventory.</span></h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We leverage an enterprise-grade stack and professional production gear to ensure your brand operates at the highest global standards.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: Laptop, label: 'Next.js 15', sub: 'Web Engine' },
              { icon: Smartphone, label: 'React Native', sub: 'Mobile Core' },
              { icon: Camera, label: 'Phase One', sub: 'High-Res' },
              { icon: Video, label: 'RED Komodo', sub: 'Cinematic' },
              { icon: Layers, label: 'Vercel Edge', sub: 'Global Scale' },
              { icon: ShieldCheck, label: 'Secure Logic', sub: 'Enterprise' }
            ].map((tech, i) => (
              <div key={i} className="flex flex-col items-center gap-4 group animate-fade-up" style={{animationDelay: `${i * 100}ms`}}>
                <div className="w-16 h-16 rounded-2xl bg-background flex items-center justify-center text-primary/40 group-hover:text-primary group-hover:scale-110 transition-all duration-500 border border-border shadow-sm">
                  <tech.icon size={28} />
                </div>
                <div className="text-center">
                  <span className="block text-xs font-bold uppercase tracking-widest text-foreground">{tech.label}</span>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{tech.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
