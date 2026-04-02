import {Metadata} from 'next';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Globe, Smartphone, BarChart3, Camera, Video, Calendar, Sparkles, Layers, Rocket, ShieldCheck, Zap, Laptop, Target, ArrowRight} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Enterprise Web Development, Custom Mobile Apps, Performance Marketing, and Cinematic Content Creation.',
};

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
        <header className="mb-16 text-center max-w-4xl mx-auto animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 uppercase tracking-widest font-bold px-4 py-1.5 rounded-full text-[10px]">
            The Knewrix Capability
          </Badge>
          <h1 className="font-headline text-4xl md:text-7xl font-bold mb-6 italic">
            Engineering <span className="gradient-text not-italic">Growth.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
            From the first line of code to the final content drop, we provide a unified approach to scaling global brands.
          </p>
        </header>

        {/* Sticky Local Navigation - Enhanced Design */}
        <div className="sticky top-16 z-40 bg-background/90 backdrop-blur-xl py-6 mb-24 border-b border-border/50">
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {DETAILED_SERVICES.map((service) => (
              <Link 
                key={service.id} 
                href={`#${service.id}`}
                className="group flex items-center gap-2 px-6 py-2.5 rounded-full border border-border/50 bg-secondary/30 hover:bg-primary/5 hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <service.icon size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground group-hover:text-primary transition-colors">
                  {service.title.split(' ')[service.title.split(' ').length - 1]}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-32">
          {DETAILED_SERVICES.map((service, i) => (
            <section key={service.id} id={service.id} className="scroll-mt-48">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
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
      </div>
    </div>
  );
}
