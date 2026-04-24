'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Loader2, Mail, Phone, Calendar, Building, MessageSquare } from 'lucide-react';
import { format } from 'date-fns';

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

export default function EnquiriesPage() {
  const [enquiries, setEnquiries] = React.useState<EnquiryData[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    async function fetchEnquiries() {
      try {
        const response = await fetch('https://studio-2506567351-f45ca-default-rtdb.firebaseio.com/enquiries.json');
        if (!response.ok) throw new Error('Failed to fetch enquiries');
        
        const data = await response.json();
        if (data) {
          const formattedData: EnquiryData[] = Object.entries(data).map(([id, val]: [string, any]) => ({
            id,
            ...val,
          })).sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
          setEnquiries(formattedData);
        }
      } catch (err) {
        setError('Could not load enquiries. Please check your database connection.');
      } finally {
        setLoading(false);
      }
    }

    fetchEnquiries();
  }, []);

  if (loading) {
    return (
      <div className="pt-32 pb-24 flex items-center justify-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="font-headline text-4xl font-bold mb-4">Enquiry Dashboard</h1>
          <p className="text-muted-foreground">Internal view of all growth audit requests and business inquiries.</p>
        </header>

        {error ? (
          <div className="p-8 text-center bg-destructive/10 text-destructive rounded-2xl border border-destructive/20">
            {error}
          </div>
        ) : enquiries.length === 0 ? (
          <Card className="p-12 text-center bg-secondary/30">
            <p className="text-muted-foreground">No enquiries found in the database yet.</p>
          </Card>
        ) : (
          <div className="grid gap-8">
            <Card className="border-border/50 bg-card/50 overflow-hidden">
              <Table>
                <TableHeader className="bg-secondary/50">
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {enquiries.map((enquiry) => (
                    <TableRow key={enquiry.id} className="hover:bg-primary/5 transition-colors group cursor-pointer" onClick={() => {}}>
                      <TableCell className="font-medium whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} className="text-muted-foreground" />
                          {enquiry.created_at ? format(new Date(enquiry.created_at), 'MMM dd, yyyy') : 'N/A'}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <p className="font-bold">{enquiry.name}</p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Mail size={12} /> {enquiry.email}
                          </div>
                          {enquiry.phone && (
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Phone size={12} /> {enquiry.phone}
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        {enquiry.company_name ? (
                          <div className="flex items-center gap-2 text-sm">
                            <Building size={14} className="text-primary" />
                            {enquiry.company_name}
                          </div>
                        ) : '-'}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="capitalize bg-background">
                          {enquiry.enquiry_type || 'General'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-accent text-accent-foreground">
                          {enquiry.status || 'New'}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enquiries.slice(0, 6).map((enquiry) => (
                <Card key={enquiry.id} className="border-border/50 bg-card hover:border-primary/30 transition-all">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start mb-2">
                      <Badge className="bg-primary/10 text-primary border-primary/20 uppercase text-[8px] tracking-widest">
                        {enquiry.enquiry_type}
                      </Badge>
                      <span className="text-[10px] text-muted-foreground uppercase font-bold">
                        {enquiry.created_at ? format(new Date(enquiry.created_at), 'HH:mm') : ''}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{enquiry.name}</CardTitle>
                    <CardDescription className="text-xs flex items-center gap-1">
                      <Building size={12} /> {enquiry.company_name || 'Individual'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-3 rounded-xl bg-secondary/50 text-xs italic leading-relaxed text-muted-foreground border border-border/50">
                      <MessageSquare size={12} className="mb-1 text-primary" />
                      "{enquiry.message.length > 120 ? enquiry.message.substring(0, 120) + '...' : enquiry.message}"
                    </div>
                    <div className="flex items-center gap-2 pt-2">
                      <div className="flex-1 h-px bg-border" />
                      <Badge variant="outline" className="text-[8px] font-bold">Details</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
