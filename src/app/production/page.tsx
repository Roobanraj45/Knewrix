import {Metadata} from 'next';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Camera, Video, Sparkles, Image as ImageIcon, Film, Users, Zap, Calendar } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Studio Production',
  description: 'High-end visual storytelling. From editorial photography to cinematic brand films, we create the content that builds brand authority.',
};

export default function ProductionPage() {
  const showcase = [
    { title: 'Brand Storytelling', desc: 'Cinematic films that capture the soul of your business.', icon: Film },
    { title: 'Editorial Shoots', desc: 'High-fashion and corporate photography for premium interfaces.', icon: Camera },
    { title: 'Event Activations', desc: 'Full-scale physical launches with integrated digital coverage.', icon: Calendar },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-24 text-center max-w-4xl mx-auto animate-fade-in">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 uppercase tracking-widest font-bold px-4 py-1">The Topic: Creative Production</Badge>
          <h1 className="font-headline text-5xl md:text-8xl font-bold mb-8 italic">
            Visual <span className="gradient-text not-italic">Dominance.</span>
          </h1>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            In a world of noise, high-end imagery is the only way to establish instant trust. At Knewrix, we don't just build the platform; we create the content that lives on it.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative aspect-square rounded-[3rem] overflow-hidden glossy shadow-2xl animate-fade-up">
            <img 
              src="https://picsum.photos/seed/knewrix-production/1000/1000" 
              alt="Studio production" 
              className="object-cover w-full h-full"
              data-ai-hint="Photography studio equipment"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
          
          <div className="space-y-12">
            <div>
              <h2 className="font-headline text-4xl font-bold mb-6">Our Creative Capability</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Elite brands require elite visual storytelling. We operate a full-service production house capable of handling everything from editorial photography to large-scale brand activations.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {showcase.map((item, i) => (
                <div key={i} className="animated-card flex gap-6 p-8 rounded-3xl group">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="bg-primary text-primary-foreground px-10 py-8 text-lg font-bold rounded-2xl shadow-xl shadow-primary/20 transition-transform hover:scale-105">
              <Link href="/contact">Book a Shoot</Link>
            </Button>
          </div>
        </section>

        <section className="bg-secondary/30 rounded-[4rem] p-12 md:p-24 border border-border/50 text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="font-headline text-4xl md:text-6xl font-bold mb-8 italic">The Knewrix <span className="not-italic gradient-text">Method.</span></h2>
            <p className="text-xl text-muted-foreground mb-12">
              We sync our code releases with our creative drops. This ensures that your brand launch feels unified, powerful, and blazingly fast.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { label: 'Content Strategy', icon: Zap },
                { label: 'Execution', icon: ImageIcon },
                { label: 'Deployment', icon: Users }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-white/50 flex items-center justify-center text-accent shadow-sm">
                    <step.icon size={24} />
                  </div>
                  <span className="font-bold text-sm uppercase tracking-widest">{step.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent/5 blur-[100px] rounded-full animate-glow" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 blur-[100px] rounded-full animate-glow" />
        </section>
      </div>
    </div>
  );
}
