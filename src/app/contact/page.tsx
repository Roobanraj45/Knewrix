import {Metadata} from 'next';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Mail, Calendar, ArrowRight, MapPin, Phone} from 'lucide-react';
import {GenAIStrategyTool} from '@/components/gen-ai-strategy-tool';

export const metadata: Metadata = {
  title: 'Book a Growth Audit',
  description: 'Ready to scale? Connect with Knewrix experts for a technical and strategic growth audit of your business.',
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-24 text-center">
          <h1 className="font-headline text-5xl md:text-6xl font-bold mb-6">Build your growth engine.</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to scale your brand? Fill out the form or visit us at our innovation hubs.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details & AI Tool */}
          <div className="space-y-8">
            <div>
              <h2 className="font-headline text-3xl font-bold mb-8">Reach Out</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-6 p-6 rounded-2xl bg-secondary/30 border border-border/50 hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Innovation Hub</p>
                    <p className="text-base font-medium">Senjoshosp School Street, Near Poonamallee Bus Stand (Bus Entry Point), Poonamallee, Chennai - 600056, Tamil Nadu</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-6 rounded-2xl bg-secondary/30 border border-border/50 hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Direct Line</p>
                    <p className="text-lg font-medium">+91 96007 12539</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-6 rounded-2xl bg-secondary/30 border border-border/50 hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Email</p>
                    <p className="text-lg font-medium">hello@knewrix.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-6 rounded-2xl bg-secondary/30 border border-border/50 hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Booking</p>
                    <a href="#" className="text-lg font-medium text-accent flex items-center gap-2">
                      Schedule strategy session <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h2 className="font-headline text-2xl font-bold mb-4">Uncover your growth bottlenecks</h2>
              <p className="text-muted-foreground mb-8">Use our AI tool specially tuned for strategic business landscape analysis.</p>
              <GenAIStrategyTool />
            </div>
          </div>

          {/* Contact Form */}
          <div id="contact-form" className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 shadow-2xl h-fit">
            <h2 className="font-headline text-3xl font-bold mb-8">Get a Growth Audit</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <Input placeholder="John Doe" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Business Email</label>
                  <Input type="email" placeholder="john@company.com" className="bg-background" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Company Name</label>
                  <Input placeholder="Acme Inc" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Monthly Revenue</label>
                  <Input placeholder="e.g. $50,000" className="bg-background" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Primary Goal</label>
                <Textarea placeholder="Tell us about your scale challenges..." className="bg-background min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground py-6 text-lg font-bold shadow-lg shadow-primary/20">
                Request Growth Proposal
              </Button>
              <p className="text-xs text-center text-muted-foreground pt-4">
                We respect your privacy. Data handled according to data protection laws.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
