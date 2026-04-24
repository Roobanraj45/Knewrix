'use client';

import * as React from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {Mail, Calendar, ArrowRight, MapPin, Phone, Loader2} from 'lucide-react';
import {GenAIStrategyTool} from '@/components/gen-ai-strategy-tool';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';
import {submitEnquiry} from '@/app/actions/submit-enquiry';
import {useToast} from '@/hooks/use-toast';

const enquirySchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company_name: z.string().optional(),
  address: z.string().optional(),
  enquiry_type: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type EnquiryFormValues = z.infer<typeof enquirySchema>;

export default function ContactPage() {
  const {toast} = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: {errors},
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      enquiry_type: 'general',
    }
  });

  const onSubmit = async (data: EnquiryFormValues) => {
    setIsSubmitting(true);
    const result = await submitEnquiry(data);
    setIsSubmitting(false);

    if (result.success) {
      toast({
        title: "Enquiry Sent",
        description: "Thank you for reaching out. We will get back to you shortly.",
      });
      reset();
    } else {
      toast({
        title: "Error",
        description: "There was a problem sending your enquiry. Please try again.",
        variant: "destructive",
      });
    }
  };

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
                    <p className="text-base font-medium">ST.JOSEPH'S School Street, Near Poonamallee Bus Stand (Bus Entry Point), Poonamallee, Chennai - 600056, Tamil Nadu, India</p>
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

          <div id="contact-form" className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 shadow-2xl h-fit">
            <h2 className="font-headline text-3xl font-bold mb-8">Get a Growth Audit</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <Input {...register('name')} placeholder="John Doe" className="bg-background" />
                  {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Business Email</label>
                  <Input {...register('email')} type="email" placeholder="john@company.com" className="bg-background" />
                  {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number</label>
                  <Input {...register('phone')} placeholder="+91 98765 43210" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Company Name</label>
                  <Input {...register('company_name')} placeholder="Acme Inc" className="bg-background" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Enquiry Type</label>
                  <Select onValueChange={(val) => setValue('enquiry_type', val)} defaultValue="general">
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Enquiry</SelectItem>
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="mobile">Mobile App</SelectItem>
                      <SelectItem value="marketing">Digital Marketing</SelectItem>
                      <SelectItem value="events">Event Management</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input {...register('subject')} placeholder="How can we help?" className="bg-background" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Address (Optional)</label>
                <Input {...register('address')} placeholder="City, State" className="bg-background" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message / Project Details</label>
                <Textarea {...register('message')} placeholder="Tell us about your scale challenges..." className="bg-background min-h-[120px]" />
                {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground py-6 text-lg font-bold shadow-lg shadow-primary/20" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
                  </>
                ) : (
                  'Request Growth Proposal'
                )}
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
