import {Card, CardContent} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import {Camera, Globe, Zap} from 'lucide-react';

const PROJECTS = [
  {
    client: 'EcoScale Global',
    type: 'Event & Platform',
    icon: Globe,
    problem: 'Launching a global brand without a unified digital presence or a high-impact physical launch event.',
    solution: 'Designed an enterprise SaaS platform and managed a 500-guest immersive launch event with full video production.',
    results: 'Reached 50k+ users and closed $1.5M in wholesale contracts during launch night.',
    tag: 'AgriTech',
    image: 'https://picsum.photos/seed/ecoscale/600/400'
  },
  {
    client: 'Aura Fashion',
    type: 'Creative Production',
    icon: Camera,
    problem: 'High-end products were failing to sell due to generic stock imagery and low-performing social ads.',
    solution: 'Conducted a 3-day editorial photoshoot and produced 50+ high-converting social media brand films.',
    results: 'ROAS increased from 2.1x to 5.4x within the first month of content deployment.',
    tag: 'Luxury D2C',
    image: 'https://picsum.photos/seed/aura/600/400'
  },
  {
    client: 'Lumina Ed',
    type: 'Software & Marketing',
    icon: Zap,
    problem: 'Massive student churn due to poor mobile performance and lack of engaging video content.',
    solution: 'Engineered a PWA for offline learning and integrated a custom high-performance video player system.',
    results: 'Day 30 retention grew by 65% and user engagement session time doubled.',
    tag: 'EdTech',
    image: 'https://picsum.photos/seed/lumina/600/400'
  }
];

export default function PortfolioPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-24 text-center max-w-4xl mx-auto">
          <h1 className="font-headline text-5xl md:text-8xl font-bold mb-6 italic">Works <span className="not-italic gradient-text">& Growth.</span></h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            See how we combine engineering precision with cinematic creativity to scale brands from local to global.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, i) => (
            <Card key={i} className="animated-card bg-card overflow-hidden flex flex-col group border-primary/5">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.client} 
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  data-ai-hint="Corporate event photoshoot"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground font-bold">{project.tag}</Badge>
                </div>
              </div>
              <CardContent className="p-10 flex-grow flex flex-col space-y-8">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-1">{project.type}</p>
                    <h2 className="font-headline text-3xl font-bold">{project.client}</h2>
                  </div>
                  <project.icon className="text-muted-foreground" size={24} />
                </div>
                
                <div className="space-y-6 flex-grow">
                  <div>
                    <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">Challenge</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">Outcome</h3>
                    <p className="text-foreground font-bold leading-relaxed">{project.results}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
