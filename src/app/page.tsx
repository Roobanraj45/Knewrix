import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {Badge} from '@/components/ui/badge';
import {ArrowRight, Globe, Smartphone, Video, Target, ShieldCheck, BarChart3, Zap, Layers, Rocket, Award, Users} from 'lucide-react';

export default function Home() {
  const techServices = [
    { 
      id: '01',
      icon: Globe, 
      title: 'High-Performance Web', 
      desc: 'Ultra-low latency web platforms engineered with Next.js 15. We prioritize SEO dominance and enterprise-grade reliability.',
      features: ['Server-Side Excellence', 'SEO Optimization', 'Global Scale']
    },
    { 
      id: '02',
      icon: Smartphone, 
      title: 'Scalable Mobile Apps', 
      desc: 'Native iOS and Android experiences built for user retention. High-performance apps that feel intuitive.',
      features: ['Cross-Platform Power', 'User-Centric UX', 'Seamless Integration']
    },
    { 
      id: '03',
      icon: BarChart3, 
      title: 'Digital Marketing', 
      desc: 'ROI-focused acquisition systems utilizing deep analytics. We build the engine that drives predictable growth.',
      features: ['Performance Ads', 'Conversion Strategy', 'Data Analytics']
    },
    { 
      id: '04',
      icon: Video, 
      title: 'Content Creation', 
      desc: 'High-end visual storytelling designed for digital platforms. We create content that stops the scroll and builds trust.',
      features: ['Brand Films', 'Social Content', 'Strategic Narrative']
    },
  ];

  const statistics = [
    { label: 'Revenue Generated', value: '$150M+' },
    { label: 'Active Users Scaled', value: '2.4M' },
    { label: 'Project Success Rate', value: '98.5%' },
    { label: 'Global Awards', value: '12' }
  ];

  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-36 md:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in opacity-0">
              <Badge variant="outline" className="mb-6 border-primary/40 text-primary bg-primary/5 uppercase tracking-[0.3em] font-bold px-4 py-1.5 rounded-full text-[10px]">
                End-to-End Digital Growth Partner
              </Badge>
            </div>
            
            <h1 className="font-headline text-5xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tighter">
              <span className="block animate-fade-up opacity-0 [animation-delay:200ms]">
                We build software.
              </span>
              <span className="block gradient-text animate-fade-up opacity-0 [animation-delay:400ms]">
                We scale brands.
              </span>
            </h1>

            <div className="animate-fade-up opacity-0 [animation-delay:600ms]">
              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
                Knewrix is a premium technology firm delivering <span className="text-foreground font-bold">Websites</span>, <span className="text-foreground font-bold">Mobile Apps</span>, and <span className="text-foreground font-bold">Digital Marketing</span> for ambitious global brands.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0 [animation-delay:800ms]">
              <Button asChild size="lg" className="bg-primary text-primary-foreground text-base px-8 py-6 shadow-xl shadow-primary/10 hover:scale-105 transition-all rounded-xl font-bold">
                <Link href="/contact">Book a Growth Audit</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8 py-6 border-primary/20 bg-primary/5 hover:bg-primary/10 rounded-xl glossy font-bold">
                <Link href="/services">Our Capabilities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {statistics.map((stat, i) => (
            <div key={i} className="animated-card p-6 md:p-8 rounded-[2rem] text-center bg-white/50 animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Synergy Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary/5 border border-primary/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-left">
              <div className="space-y-3">
                <Badge variant="outline" className="border-accent/40 text-accent font-bold px-3 py-1 text-[10px]">Integrated Strategy</Badge>
                <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                  The Knewrix <br/><span className="gradient-text">Synergy.</span>
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium max-w-lg">
                We realized that elite software requires cinematic storytelling and strategic marketing to dominate global markets. **Knewrix does both.**
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  { icon: Target, title: 'Unified Growth', desc: 'Engineering and marketing developed in parallel.' },
                  { icon: ShieldCheck, title: 'ROI Focused', desc: 'Ensuring tech performs as beautifully as it converts.' }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-3 p-5 rounded-2xl bg-background/50 border border-border/50">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <item.icon size={16} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl group">
              <img 
                src="https://picsum.photos/seed/knewrix-strategy/800/600" 
                alt="Strategy meeting" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                data-ai-hint="Corporate strategy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 glossy rounded-2xl border-white/20">
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Core Methodology</p>
                <p className="font-bold text-base leading-snug">Engineering platforms born to scale.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Growth Engine Pillar Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-3">
          <Badge className="bg-primary/10 text-primary px-3 py-1 text-[10px]">Software & Growth</Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">The Growth Engine.</h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            We architect enterprise systems integrated with data-led acquisition models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techServices.map((service, i) => (
            <div 
              key={i} 
              className="group relative animated-card rounded-[2.5rem] p-8 flex flex-col bg-secondary/20 animate-fade-up opacity-0 border-primary/5 hover:border-primary/20 transition-all" 
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="absolute top-6 right-8 text-4xl font-black text-primary/5 select-none group-hover:text-primary/10 transition-colors">
                {service.id}
              </div>
              
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                <service.icon size={24} />
              </div>
              
              <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors min-h-[3rem] flex items-center">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-xs leading-relaxed mb-8 flex-grow">
                {service.desc}
              </p>

              <div className="space-y-3 pt-4 border-t border-border/50">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-[10px] font-bold text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feat}
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <Button asChild variant="ghost" className="p-0 h-auto hover:bg-transparent text-primary font-bold group-hover:translate-x-1 transition-transform">
                  <Link href="/services" className="flex items-center gap-2 text-[10px] uppercase tracking-widest">
                    Explore Capability <ArrowRight size={14} />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Strategic Value Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Rocket, title: 'Rapid Deployment', desc: 'Moving from concept to market in record time.' },
            { icon: ShieldCheck, title: 'Enterprise Security', desc: 'Built-in protection for your data and users.' },
            { icon: Layers, title: 'Full-Stack Control', desc: 'Owning every layer of the digital experience.' },
            { icon: Zap, title: 'Creative Edge', desc: 'Cinematic visuals that drive emotional trust.' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-4 p-8 rounded-3xl bg-accent/5 border border-accent/10 hover:bg-accent/10 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-white/80 flex items-center justify-center text-accent shadow-sm group-hover:scale-110 transition-transform">
                <item.icon size={20} />
              </div>
              <h4 className="font-bold text-base leading-tight">{item.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-accent/5 rounded-[4rem] p-12 md:p-20 border border-accent/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary/20 blur-[60px] rounded-full animate-glow" />
              <img 
                src="https://picsum.photos/seed/knewrix-global/800/800" 
                alt="Global impact" 
                className="rounded-[3rem] shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-1000"
                data-ai-hint="Global business"
              />
            </div>
            <div className="space-y-8">
              <Badge className="bg-accent text-accent-foreground font-bold px-4">Global Scale</Badge>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[0.9]">
                Scaling Beyond <br/><span className="gradient-text italic">Boundaries.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our infrastructure is built for massive concurrent traffic. Whether you are launching a global platform or scaling a local innovation, Knewrix ensures your brand stays blazingly fast and SEO-dominant.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: Globe, text: 'Edge-distributed cloud architecture' },
                  { icon: Award, text: 'Tier-1 Security compliance' },
                  { icon: Users, text: '24/7 Strategic performance monitoring' }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm font-bold">
                    <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-primary">
                      <item.icon size={16} />
                    </div>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-secondary/40 p-12 md:p-20 rounded-[4rem] border border-border/50 relative overflow-hidden text-center">
          <div className="max-w-2xl mx-auto relative z-10 space-y-8">
            <div className="flex justify-center -space-x-4 mb-4">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-12 h-12 rounded-full border-4 border-background overflow-hidden bg-muted group transition-transform hover:z-20 hover:scale-110">
                   <img src={`https://picsum.photos/seed/${i+10}/100/100`} alt="Client" />
                 </div>
               ))}
            </div>
            <h2 className="text-4xl md:text-6xl font-bold italic tracking-tighter">Ready to scale?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              Join 50+ ambitious brands who have scaled through Knewrix's Tech-Creative strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="rounded-xl px-10 py-6 text-lg font-bold shadow-xl bg-primary text-primary-foreground hover:scale-105 transition-transform">
                <Link href="/contact">Request a Strategy Call</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-xl px-10 py-6 text-lg font-bold glossy border-primary/20 bg-background/50">
                <Link href="/portfolio">View Case Studies</Link>
              </Button>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-50" />
        </div>
      </section>
    </div>
  );
}
