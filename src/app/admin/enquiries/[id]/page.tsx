
'use client';

import * as React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Loader2, Mail, Phone, Calendar, Building, MessageSquare, MapPin, Tag, FileText, Users, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';
import { Separator } from '@/components/ui/separator';

type EnquiryData = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company_name?: string;
  address?: string;
  enquiry_type?: string;
  subject?: string;
  message: string;
  status: string;
  created_at: string;
};

export default function EnquiryDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [enquiry, setEnquiry] = React.useState<EnquiryData | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const fetchEnquiry = React.useCallback(async () => {
    try {
      const response = await fetch(`https://studio-2506567351-f45ca-default-rtdb.firebaseio.com/enquiries/${id}.json`);
      if (!response.ok) throw new Error('Failed to fetch enquiry details');
      
      const data = await response.json();
      if (data) {
        setEnquiry({ id: id as string, ...data });
      } else {
        setError('Enquiry not found.');
      }
    } catch (err) {
      setError('Could not load lead details.');
    } finally {
      setLoading(false);
    }
  }, [id]);

  React.useEffect(() => {
    fetchEnquiry();
  }, [fetchEnquiry]);

  if (loading) {
    return (
      <div className="pt-32 pb-24 flex items-center justify-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !enquiry) {
    return (
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4">
        <div className="p-12 text-center bg-destructive/10 text-destructive rounded-[2rem] border border-destructive/20 font-bold">
          {error || 'Lead not found.'}
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" onClick={() => router.push('/admin/enquiries')}>Back to Dashboard</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button 
          variant="ghost" 
          onClick={() => router.push('/admin/enquiries')}
          className="mb-8 hover:bg-primary/5 text-muted-foreground hover:text-primary gap-2"
        >
          <ArrowLeft size={16} /> Back to Enquiry Dashboard
        </Button>

        <Card className="rounded-[2.5rem] overflow-hidden border-none shadow-2xl">
          <div className="bg-primary p-12 text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '16px 16px'}} />
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <Badge className="bg-white text-primary font-bold uppercase text-xs tracking-widest">{enquiry.enquiry_type || 'General'}</Badge>
                <Badge className="bg-accent text-accent-foreground font-bold uppercase text-xs tracking-widest">{enquiry.status || 'New'}</Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">{enquiry.name}</h1>
              <p className="text-primary-foreground/80 font-medium flex items-center gap-2">
                <Calendar size={18} /> Lead received on {format(new Date(enquiry.created_at), 'MMMM dd, yyyy @ HH:mm')}
              </p>
            </div>
          </div>

          <div className="p-12 space-y-12 bg-background">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <section className="space-y-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                  <Users size={16} className="text-primary" /> Contact Profile
                </h4>
                <div className="space-y-4 bg-secondary/30 p-6 rounded-3xl border border-border/50">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"><Mail size={18} /></div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-muted-foreground">Email Address</p>
                      <p className="font-bold">{enquiry.email}</p>
                    </div>
                  </div>
                  {enquiry.phone && (
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"><Phone size={18} /></div>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-muted-foreground">Direct Phone</p>
                        <p className="font-bold">{enquiry.phone}</p>
                      </div>
                    </div>
                  )}
                  {enquiry.address && (
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"><MapPin size={18} /></div>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-muted-foreground">Location</p>
                        <p className="font-bold leading-relaxed">{enquiry.address}</p>
                      </div>
                    </div>
                  )}
                </div>
              </section>

              <section className="space-y-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                  <Building size={16} className="text-primary" /> Business Context
                </h4>
                <div className="space-y-4 bg-secondary/30 p-6 rounded-3xl border border-border/50">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"><Building size={18} /></div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-muted-foreground">Company</p>
                      <p className="font-bold">{enquiry.company_name || 'Private Inquiry'}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"><Tag size={18} /></div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-muted-foreground">Service Interest</p>
                      <p className="font-bold capitalize">{enquiry.enquiry_type || 'General Growth'}</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <section className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                <FileText size={16} className="text-primary" /> Project Intelligence
              </h4>
              <div className="space-y-6 bg-secondary/30 p-8 rounded-[3rem] border border-border/50">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Subject</p>
                  <p className="text-2xl font-bold italic">"{enquiry.subject || 'N/A'}"</p>
                </div>
                <Separator className="bg-border/50" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                    <MessageSquare size={14} /> Lead Requirements
                  </p>
                  <div className="text-lg text-foreground/80 leading-relaxed bg-background/50 p-8 rounded-2xl border-l-4 border-primary">
                    {enquiry.message}
                  </div>
                </div>
              </div>
            </section>

            <div className="flex justify-end pt-8">
              <a 
                href={`mailto:${enquiry.email}`}
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-primary/20 hover:scale-105 transition-transform"
              >
                <Mail size={20} /> Reply to Lead
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
