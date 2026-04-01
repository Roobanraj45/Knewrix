import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Target, Users, Lightbulb, Code, Rocket, ShieldCheck} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-24 text-center max-w-4xl mx-auto animate-in fade-in slide-in-from-top-8 duration-1000">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 uppercase tracking-widest font-bold">The Knewrix Story</Badge>
          <h1 className="font-headline text-5xl md:text-7xl font-bold mb-8">
            Engineering the <span className="gradient-text">Future of Growth.</span>
          </h1>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            Knewrix is a full-service software house and digital marketing partner dedicated to turning bold ideas into scalable global brands.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="p-12 md:p-20 bg-secondary/30 rounded-[2.5rem] border border-border/50 flex flex-col justify-center min-h-[400px] animate-in slide-in-from-left-8 duration-1000">
            <h2 className="font-headline text-4xl md:text-6xl font-bold text-primary/20 select-none">CODE. CREATIVE. CONVERSION.</h2>
            <div className="w-20 h-2 bg-primary mt-8 rounded-full" />
          </div>
          <div className="space-y-8 animate-in slide-in-from-right-8 duration-1000">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Why We Are Different</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most software companies focus solely on writing code. Most marketing agencies focus solely on driving traffic. Knewrix was born from the realization that digital success requires an integrated approach.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We combine deep technical expertise in **Web and Mobile** with high-performance **Digital Marketing** strategies. This synergy ensures that every product we build is technically robust and strategically positioned for massive user acquisition.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {[
                {icon: Code, title: 'Deep Technical Stack', desc: 'Enterprise-grade code using modern frameworks.'},
                {icon: Rocket, title: 'Strategic Marketing', desc: 'ROI-focused campaigns built for scale.'}
              ].map((val, i) => (
                <div key={i} className="animated-card flex gap-4 p-6 rounded-2xl bg-secondary/30 group">
                  <val.icon className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform" size={24} />
                  <div>
                    <h4 className="font-bold mb-1">{val.title}</h4>
                    <p className="text-sm text-muted-foreground">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary/5 rounded-[3rem] p-12 md:p-20 border border-primary/10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6">Our Core Philosophy</h2>
            <p className="text-xl text-muted-foreground">
              We focus on measurable outcomes: high-performance software, global search dominance, and predictable growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {title: 'Predictable Growth', icon: Target, desc: 'Moving from erratic sales to automated, data-driven growth engines.'},
              {title: 'Technical Excellence', icon: ShieldCheck, desc: 'Ensuring your platform is secure, fast, and blazingly reliable.'},
              {title: 'Agile Execution', icon: Lightbulb, desc: 'Rapid prototyping and continuous deployment to beat the competition.'}
            ].map((value, i) => (
              <div key={i} className="animated-card p-10 bg-background/80 backdrop-blur-sm rounded-3xl group">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <value.icon size={20} />
                </div>
                <h4 className="font-headline text-xl font-bold mb-4">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-32 text-center py-20 bg-accent/5 rounded-[3rem] border border-accent/10 overflow-hidden relative">
          <div className="relative z-10 px-6">
            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-8">Ready to Build Your Digital Legacy?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Partner with the software house that understands your market as well as your code.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground px-12 py-8 text-xl font-bold rounded-2xl shadow-2xl shadow-primary/20 hover:scale-105 transition-transform">
              <a href="/contact">Book a Growth Audit</a>
            </Button>
          </div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 blur-[100px] rounded-full" />
        </section>
      </div>
    </div>
  );
}
