
import {Metadata} from 'next';
import { PROJECTS } from '@/lib/portfolio-data';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Zap, Rocket, Target, Users, Layout } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project = PROJECTS.find(p => p.id === params.id);
  if (!project) return { title: 'Project Not Found' };
  
  return {
    title: `${project.client} | Case Study`,
    description: project.overview,
  };
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = PROJECTS.find(p => p.id === params.id);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/portfolio" 
          className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        <header className="mb-20">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge className="bg-primary/10 text-primary border-primary/20 uppercase tracking-widest font-bold px-4 py-1.5 rounded-full text-[10px]">
              {project.category}
            </Badge>
            <Badge variant="outline" className="border-accent/40 text-accent font-bold px-4 py-1.5 rounded-full text-[10px]">
              Case Study: {project.id}
            </Badge>
          </div>
          <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tighter mb-8 italic">
            {project.client} <span className="not-italic gradient-text">Growth.</span>
          </h1>
          <p className="text-2xl text-muted-foreground max-w-3xl leading-relaxed font-medium">
            {project.overview}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-20">
            {/* The Challenge */}
            <section className="space-y-8">
              <div className="flex items-center gap-4 text-accent">
                <Zap size={32} />
                <h2 className="font-headline text-3xl font-bold">The Challenge</h2>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed bg-accent/5 p-8 rounded-3xl border border-accent/10">
                {project.problem}
              </p>
            </section>

            {/* Services & Strategy */}
            <section className="space-y-8">
              <div className="flex items-center gap-4 text-primary">
                <Layout size={32} />
                <h2 className="font-headline text-3xl font-bold">Services Delivered</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.services.map((service, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-2xl bg-secondary/30 border border-border/50">
                    <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                    <span className="font-bold">{service}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Marketing Strategy */}
            <section className="space-y-8">
              <div className="flex items-center gap-4 text-accent">
                <Target size={32} />
                <h2 className="font-headline text-3xl font-bold">Marketing Strategy</h2>
              </div>
              <div className="space-y-4">
                {project.marketingStrategy.map((strategy, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-accent/5 border border-accent/10 relative group hover:border-accent/30 transition-colors">
                     <p className="text-lg font-medium leading-relaxed">{strategy}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Results & Conclusion */}
            <section className="space-y-8 p-12 bg-primary text-primary-foreground rounded-[3rem] shadow-2xl shadow-primary/20 relative overflow-hidden">
               <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px'}} />
               <div className="relative z-10 space-y-6">
                 <h2 className="font-headline text-4xl font-bold italic">The Conclusion.</h2>
                 <p className="text-2xl leading-relaxed opacity-90 font-medium">
                   {project.conclusion}
                 </p>
                 <Separator className="bg-white/20" />
                 <div className="flex items-center gap-4">
                   <Rocket size={24} className="text-accent" />
                   <p className="text-lg font-bold">Result: {project.results}</p>
                 </div>
               </div>
            </section>
          </div>

          <aside className="space-y-12 h-fit sticky top-32">
            <div className="p-8 bg-card border border-border/50 rounded-3xl shadow-xl space-y-8">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                  <Rocket size={14} className="text-primary" /> Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <Badge key={i} variant="secondary" className="bg-secondary text-foreground">{t}</Badge>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                  <Users size={14} className="text-primary" /> Target Audience
                </h4>
                <ul className="space-y-2">
                  {project.targetAudience.map((target, i) => (
                    <li key={i} className="text-sm font-medium flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {target}
                    </li>
                  ))}
                </ul>
              </div>

              {project.link && (
                <Button asChild className="w-full bg-primary py-6 text-lg rounded-2xl">
                  <a href={project.link} target="_blank" className="flex items-center gap-2">
                    Visit Live Site <ArrowUpRight size={20} />
                  </a>
                </Button>
              )}
            </div>

            <div className="p-8 bg-accent/5 border border-accent/20 rounded-3xl text-center space-y-6">
               <h4 className="font-headline text-xl font-bold italic">Inspired by this project?</h4>
               <p className="text-sm text-muted-foreground">We can architect a similar growth engine for your brand.</p>
               <Button asChild variant="outline" className="w-full border-accent/30 hover:bg-accent hover:text-white transition-all">
                 <Link href="/contact">Book Growth Audit</Link>
               </Button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
