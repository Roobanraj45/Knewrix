
import {Metadata} from 'next';
import {Card, CardContent} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Globe, Smartphone, BarChart3, PartyPopper, ArrowUpRight, CheckCircle2, Zap} from 'lucide-react';
import Link from 'next/link';
import { PROJECTS } from '@/lib/portfolio-data';

export const metadata: Metadata = {
  title: 'Our Success Stories',
  description: 'Explore the high-impact projects where Knewrix delivered massive ROI through unified tech and creative strategy.',
};

const CATEGORIES = [
  { id: 'mobile', name: 'Mobile Applications', icon: Smartphone },
  { id: 'marketing', name: 'Digital Marketing & Growth', icon: BarChart3 },
  { id: 'web', name: 'Web Development', icon: Globe },
  { id: 'events', name: 'IT Servicing & Events', icon: PartyPopper },
];

export default function PortfolioPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-24 text-center max-w-4xl mx-auto animate-in fade-in slide-in-from-top-8 duration-700">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 uppercase tracking-widest font-bold px-4 py-1.5 rounded-full text-[10px]">
            The Result of Strategy
          </Badge>
          <h1 className="font-headline text-5xl md:text-8xl font-bold mb-8 italic tracking-tighter">
            Works <span className="not-italic gradient-text">& Growth.</span>
          </h1>
          <p className="text-2xl text-muted-foreground leading-relaxed font-medium">
            From state-wide government transit apps to precision marketing for high-value real estate and energy.
          </p>
        </header>

        {/* Category Jump Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-24 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {CATEGORIES.map((cat) => (
            <a 
              key={cat.id} 
              href={`#${cat.id}`}
              className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-secondary/30 border border-border/50 hover:border-primary/50 transition-all hover:scale-105"
            >
              <cat.icon size={18} className="text-primary" />
              <span className="text-sm font-bold uppercase tracking-wider">{cat.name}</span>
            </a>
          ))}
        </div>

        {/* Projects Sections */}
        <div className="space-y-32">
          {CATEGORIES.map((category) => {
            const categoryProjects = PROJECTS.filter(p => p.category === category.id);
            if (categoryProjects.length === 0) return null;

            return (
              <section key={category.id} id={category.id} className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <category.icon size={24} />
                  </div>
                  <h2 className="font-headline text-3xl md:text-4xl font-bold italic">
                    {category.name} <span className="not-italic text-primary/50">_Case Studies</span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {categoryProjects.map((project, i) => (
                    <Card key={i} className="animated-card bg-card overflow-hidden flex flex-col group border-primary/5 shadow-2xl">
                      <Link href={`/portfolio/${project.id}`} className="block">
                        <div className={`relative aspect-video overflow-hidden bg-gradient-to-br ${project.color} flex flex-col items-center justify-center p-12 transition-all duration-700 group-hover:scale-[1.02]`}>
                          <div className="absolute inset-0 opacity-10" 
                               style={{backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '16px 16px'}} />
                          
                          <div className="relative z-10 text-center space-y-4">
                             <p className="text-xs font-bold uppercase tracking-widest text-primary/60">{project.type}</p>
                             <h3 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">{project.client}</h3>
                             <div className="flex flex-wrap justify-center gap-2 pt-4">
                               {project.tech.map((t, idx) => (
                                 <Badge key={idx} variant="outline" className="bg-background/50 backdrop-blur-sm border-primary/20">{t}</Badge>
                               ))}
                             </div>
                          </div>
                          <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button size="icon" variant="secondary" className="rounded-full shadow-2xl">
                              <ArrowUpRight size={20} />
                            </Button>
                          </div>
                        </div>
                      </Link>

                      <CardContent className="p-10 space-y-8 flex-grow">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                            <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                              <Zap size={12} className="text-accent" /> The Challenge
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{project.problem}</p>
                          </div>
                          <div className="space-y-3">
                            <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                              <CheckCircle2 size={12} className="text-primary" /> The Growth
                            </h4>
                            <p className="text-foreground font-bold leading-relaxed line-clamp-3">{project.results}</p>
                          </div>
                        </div>
                        
                        <div className="pt-6 border-t border-border/50 flex justify-between items-center">
                          <p className="text-xs text-muted-foreground font-medium italic">Strategic solution by Knewrix.</p>
                          <Button asChild variant="link" className="text-primary font-bold gap-2 p-0">
                            <Link href={`/portfolio/${project.id}`}>
                              View Full Story <ArrowUpRight size={14} />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Global CTA */}
        <section className="mt-32 text-center py-24 bg-primary/5 rounded-[4rem] border border-primary/10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" 
               style={{backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)', backgroundSize: '40px 40px'}} />
          <div className="relative z-10 px-6">
            <h2 className="font-headline text-4xl md:text-7xl font-bold mb-8">Ready for your <span className="gradient-text">Success Story?</span></h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
              We've helped these brands scale. Now it's your turn. Let's architect your growth engine together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground px-12 py-8 text-xl font-bold rounded-2xl shadow-2xl shadow-primary/20 hover:scale-105 transition-transform">
                <Link href="/contact">Book a Growth Audit</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/20 bg-background px-12 py-8 text-xl font-bold rounded-2xl hover:bg-secondary transition-colors">
                <Link href="/services">Our Capabilities</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
