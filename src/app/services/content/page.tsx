import {Metadata} from 'next';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Camera, Video, Film, Sparkles, ArrowRight, Zap, Users, Calendar, Image as ImageIcon, PlayCircle} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cinematic Content Creation',
  description: 'High-end brand narratives, editorial photography, and cinematic films to establish instant digital trust and brand authority.',
};

export default function ContentServicePage() {
  const features = [
    {
      title: 'Editorial Photography',
      desc: 'High-spec product imagery, fashion editorial, and corporate portraits designed for premium digital interfaces.',
      icon: Camera
    },
    {
      title: 'Cinematic Brand Films',
      desc: 'Story-driven films and commercials that capture the soul of your business and build emotional resonance.',
      icon: Film
    },
    {
      title: 'Social Ad Production',
      desc: 'High-converting short-form video and visual content specifically engineered for performance marketing.',
      icon: PlayCircle
    },
    {
      title: 'Brand Visual Language',
      desc: 'Developing a unique and consistent aesthetic that defines your brand across all physical and digital touchpoints.',
      icon: Sparkles
    },
    {
      title: 'Event Activations',
      desc: 'Full-scale physical launch coverage and live streaming to bridge the gap between real-world and digital impact.',
      icon: Calendar
    },
    {
      title: 'Post-Production Mastery',
      desc: 'Elite-level editing, color grading, and motion graphics to ensure every frame reflects your brand excellence.',
      icon: Zap
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-24 text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 uppercase tracking-widest font-bold px-4 py-1.5 rounded-full text-[10px]">
            The Visual Authority
          </Badge>
          <h1 className="font-headline text-5xl md:text-8xl font-bold mb-8 italic">
            Visual <span className="gradient-text not-italic">Trust.</span>
          </h1>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            In a world of digital noise, high-end imagery is the only way to establish <span className="text-foreground font-bold">instant brand authority</span> and emotional connection.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-gradient-to-br from-accent/10 via-background to-primary/10 border border-accent/5 flex items-center justify-center p-12">
            <div className="absolute inset-0 opacity-10" 
                 style={{backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--accent)) 1px, transparent 0)', backgroundSize: '32px 32px'}} />
            <div className="relative z-10 w-full h-full border-2 border-dashed border-accent/20 rounded-2xl flex flex-col items-center justify-center space-y-8">
               <div className="w-32 h-32 rounded-3xl bg-background border border-border shadow-2xl flex items-center justify-center animate-pulse">
                 <Camera size={64} className="text-accent" />
               </div>
               <div className="flex gap-4">
                 <div className="p-3 rounded-xl bg-background border border-border shadow-sm"><Video className="text-primary" size={24} /></div>
                 <div className="p-3 rounded-xl bg-background border border-border shadow-sm"><ImageIcon className="text-accent" size={24} /></div>
               </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="font-headline text-4xl font-bold">Resonance Over Reach</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Knewrix Studio, we combine technical precision with artistic soul. We don't just "produce content"; we create visual legacies. Our production quality is optimized for high-performance interfaces, ensuring a luxury experience.
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
            <h2 className="font-headline text-4xl md:text-6xl font-bold mb-8 italic">Capture the <span className="not-italic gradient-text">Vision.</span></h2>
            <p className="text-xl text-muted-foreground mb-12">
              Partner with the creative house that understands your market as well as your code.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground px-12 py-8 text-xl font-bold rounded-2xl shadow-2xl shadow-accent/20 hover:scale-105 transition-transform">
              <Link href="/contact" className="flex items-center gap-3">
                Book a Strategy Shoot <ArrowRight size={24} />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
