import {Metadata} from 'next';
import Image from 'next/image';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {BarChart3, Rocket, Globe, Target, ArrowRight, Zap, Users, ShieldCheck, TrendingUp, Search, MousePointer2, Facebook, Instagram, Share2} from 'lucide-react';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Digital Marketing & Growth Strategy',
  description: 'Data-led performance marketing systems designed to scale brand reach, maximize ROI, and dominate search results. Specialized Meta Ads and Paid Social expertise.',
};

export default function MarketingServicePage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'marketing-hero');
  const adsImage = PlaceHolderImages.find(img => img.id === 'marketing-ads');

  const features = [
    {
      title: 'Meta Ads & Paid Social Mastery',
      desc: 'We specialize in aggressive ROAS-focused campaign management across Meta (Facebook & Instagram). Our approach involves high-cadence creative testing, sophisticated audience segmentation, and algorithmic optimization to ensure your ad spend translates directly into scalable revenue.',
      icon: Facebook
    },
    {
      title: 'Google Ads & Search Intent',
      desc: 'Capture users exactly when they are looking for your solution. We manage complex Search, Display, and Video campaigns that prioritize high-intent keywords and maximize your Quality Score to reduce customer acquisition costs (CAC).',
      icon: Search
    },
    {
      title: 'Conversion Rate Optimization (CRO)',
      desc: 'A click is only as valuable as the action it leads to. We perform deep psychological audits of your landing pages, conducting continuous A/B testing on messaging, layouts, and CTAs to ensure your traffic is captured in a high-conversion environment.',
      icon: MousePointer2
    },
    {
      title: 'Unified Growth Attribution',
      desc: 'Data is useless without clarity. We implement server-side tracking and advanced attribution models (first-touch, last-touch, linear) to give you a 360-degree view of how every marketing dollar contributes to your Lifetime Value (LTV).',
      icon: BarChart3
    },
    {
      title: 'SEO & Content Authority',
      desc: 'Dominate organic search with a technical and content-led strategy. We build semantic content clusters and high-authority backlink profiles that establish your brand as the leader in your industry, driving compounding organic growth over time.',
      icon: TrendingUp
    },
    {
      title: 'Strategic Brand Scaling',
      desc: 'Moving from local to global requires a roadmap. We design comprehensive market entry strategies, localized messaging, and scalable acquisition engines that allow your brand to expand into new territories with predictable costs and measurable impact.',
      icon: Globe
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-24 text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 uppercase tracking-widest font-bold px-4 py-1.5 rounded-full text-[10px]">
            The Growth Engine
          </Badge>
          <h1 className="font-headline text-5xl md:text-8xl font-bold mb-8 italic leading-tight">
            Digital <span className="gradient-text not-italic">Marketing.</span>
          </h1>
          <p className="text-2xl text-muted-foreground leading-relaxed font-medium">
            Marketing is no longer just about "getting seen"—it is about <span className="text-foreground font-bold">architecting acquisition systems</span>. At Knewrix, we combine data science with creative psychology to build automated engines that scale your business predictably and profitably.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="font-headline text-4xl font-bold">Data-Led, Results-Driven</h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                The modern digital landscape is a battlefield of algorithms. To win, your brand needs more than just a presence; it needs a sophisticated, cross-channel strategy that leverages real-time data to make spending decisions.
              </p>
              <div className="p-8 rounded-[2.5rem] bg-accent/5 border border-accent/20 relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="font-headline text-2xl font-bold text-accent mb-4 flex items-center gap-2">
                    <Zap size={24} /> Meta Ads Specialist
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We are specialists in high-performance Meta Ads management. By syncing your tech stack with Meta's Conversions API (CAPI), we bypass browser limitations to provide the most accurate data for the Meta algorithm, resulting in significantly lower CPAs and higher ROAS.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['CAPI Integration', 'Creative Strategy', 'Dynamic Retargeting', 'Advanced Lookalikes'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm font-bold">
                        <ShieldCheck size={16} className="text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground rounded-2xl font-bold px-10">
                <Link href="/contact">Request Growth Audit</Link>
              </Button>
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
                 <div className="p-4 rounded-2xl bg-background/80 backdrop-blur-md border border-border shadow-xl"><TrendingUp className="text-accent" size={32} /></div>
                 <div className="p-4 rounded-2xl bg-background/80 backdrop-blur-md border border-border shadow-xl"><Share2 className="text-primary" size={32} /></div>
                 <div className="ml-auto bg-primary text-primary-foreground px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest shadow-lg">
                   ROI Focused
                 </div>
               </div>
            </div>
          </div>
        </section>

        <section className="mb-32">
          <div className="mb-16 max-w-2xl">
            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6">The Growth Engine</h2>
            <p className="text-lg text-muted-foreground">Our digital marketing services are engineered to work in parallel with your tech stack, ensuring every dollar spent on acquisition is maximized for conversion and retention.</p>
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

        {/* Paid Social Deep Dive */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 py-20 border-y border-border/50">
          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-secondary/30 border border-border/50 group shadow-lg">
            {adsImage && (
              <Image 
                src={adsImage.imageUrl}
                alt={adsImage.description}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                data-ai-hint={adsImage.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
          </div>
          <div className="space-y-6">
            <h3 className="font-headline text-3xl font-bold">The Science of Paid Social</h3>
            <p className="text-muted-foreground leading-relaxed">
              We don't just "run ads." we build psychological hooks and data-driven loops. Our paid social strategy focuses on the entire lifecycle of a user—from the first thumb-stopping creative to the final conversion event.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By integrating deep analytics with high-end creative production, we ensure that your brand story is told to the right person at the right time, with the right message to drive action.
            </p>
            <ul className="space-y-3 pt-4">
              {['Dynamic Creative Optimization (DCO)', 'Full-Funnel Retargeting Chains', 'Multi-Touch Attribution Audits', 'Algorithmic Scale Logic'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold text-foreground">
                  <TrendingUp size={18} className="text-primary" />
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
            <h2 className="font-headline text-4xl md:text-6xl font-bold mb-8 italic">Audit Your <span className="not-italic text-accent">Growth.</span></h2>
            <p className="text-xl opacity-90 mb-12 font-medium">
              Ready to stop guessing and start scaling? Our growth audits uncover the exact bottlenecks in your funnel and provide a roadmap for market dominance.
            </p>
            <Button asChild size="lg" className="bg-white text-primary px-12 py-8 text-xl font-bold rounded-2xl shadow-2xl hover:scale-105 transition-transform hover:bg-secondary">
              <Link href="/contact" className="flex items-center gap-3">
                Request Growth Audit <ArrowRight size={24} />
              </Link>
            </Button>
            <p className="mt-8 text-xs font-bold uppercase tracking-widest opacity-60">
              Data-Led Analysis • Meta Specialist • Proven ROAS
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
