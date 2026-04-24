'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Loader2, Mail, Phone, Calendar, Building, MessageSquare, Search, Filter, MapPin, Tag, FileText } from 'lucide-react';
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
  const [searchQuery, setSearchQuery] = React.useState('');
  const [typeFilter, setTypeFilter] = React.useState<string>('all');
  const [selectedEnquiry, setSelectedEnquiry] = React.useState<EnquiryData | null>(null);

  const fetchEnquiries = React.useCallback(async () => {
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
  }, []);

  React.useEffect(() => {
    fetchEnquiries();
  }, [fetchEnquiries]);

  const filteredEnquiries = React.useMemo(() => {
    return enquiries.filter((enquiry) => {
      const matchesSearch = 
        enquiry.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        enquiry.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (enquiry.company_name?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);
      
      const matchesType = typeFilter === 'all' || enquiry.enquiry_type === typeFilter;
      
      return matchesSearch && matchesType;
    });
  }, [enquiries, searchQuery, typeFilter]);

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
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="font-headline text-4xl font-bold italic">Enquiry <span className="not-italic text-primary">Intelligence.</span></h1>
            <p className="text-muted-foreground">Internal lead management and growth audit database.</p>
          </div>
          <Badge variant="outline" className="h-fit py-1.5 px-4 font-bold border-primary/20 bg-primary/5 text-primary">
            {enquiries.length} Total Records
          </Badge>
        </header>

        <Card className="mb-8 border-border/50 bg-secondary/20 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <Input 
                placeholder="Search leads..." 
                className="pl-10 bg-background border-border/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter size={16} className="text-muted-foreground" />
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="bg-background border-border/50">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Service Types</SelectItem>
                  <SelectItem value="general">General Enquiry</SelectItem>
                  <SelectItem value="web">Web Development</SelectItem>
                  <SelectItem value="mobile">Mobile App</SelectItem>
                  <SelectItem value="marketing">Digital Marketing</SelectItem>
                  <SelectItem value="events">Event Management</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {error ? (
          <div className="p-12 text-center bg-destructive/10 text-destructive rounded-[2rem] border border-destructive/20 font-bold">
            {error}
          </div>
        ) : filteredEnquiries.length === 0 ? (
          <Card className="p-20 text-center bg-secondary/30 rounded-[2rem] border-dashed">
            <div className="flex flex-col items-center gap-4">
              <Search size={48} className="text-muted-foreground/30" />
              <p className="text-muted-foreground font-medium italic">No leads found matching your filters.</p>
            </div>
          </Card>
        ) : (
          <div className="grid gap-8">
            <Card className="border-border/50 bg-card overflow-hidden rounded-[2rem] shadow-xl">
              <Table>
                <TableHeader className="bg-secondary/50">
                  <TableRow>
                    <TableHead className="font-bold">Date Received</TableHead>
                    <TableHead className="font-bold">Lead Details</TableHead>
                    <TableHead className="font-bold">Organization</TableHead>
                    <TableHead className="font-bold">Category</TableHead>
                    <TableHead className="font-bold">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredEnquiries.map((enquiry) => (
                    <TableRow 
                      key={enquiry.id} 
                      className="hover:bg-primary/5 transition-colors group cursor-pointer" 
                      onClick={() => setSelectedEnquiry(enquiry)}
                    >
                      <TableCell className="font-medium whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} className="text-primary" />
                          {enquiry.created_at ? format(new Date(enquiry.created_at), 'MMM dd, yyyy') : 'N/A'}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <p className="font-bold text-foreground group-hover:text-primary transition-colors">{enquiry.name}</p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Mail size={12} /> {enquiry.email}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {enquiry.company_name ? (
                          <div className="flex items-center gap-2 text-sm font-medium">
                            <Building size={14} className="text-primary/60" />
                            {enquiry.company_name}
                          </div>
                        ) : <span className="text-muted-foreground italic text-xs">Individual</span>}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="capitalize bg-background text-[10px] font-bold tracking-wider">
                          {enquiry.enquiry_type || 'General'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-accent text-accent-foreground font-bold text-[10px] rounded-sm">
                          {enquiry.status || 'New'}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        )}

        {/* Detailed View Modal */}
        <Dialog open={!!selectedEnquiry} onOpenChange={(open) => !open && setSelectedEnquiry(null)}>
          <DialogContent className="max-w-3xl rounded-[2.5rem] p-0 overflow-hidden border-none shadow-2xl">
            {selectedEnquiry && (
              <div className="flex flex-col">
                <div className="bg-primary p-8 text-primary-foreground relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '16px 16px'}} />
                  <DialogHeader className="relative z-10 text-left">
                    <div className="flex justify-between items-start mb-4">
                      <Badge className="bg-white text-primary font-bold uppercase text-[10px] tracking-widest">{selectedEnquiry.enquiry_type}</Badge>
                      <Badge className="bg-accent text-accent-foreground font-bold uppercase text-[10px] tracking-widest">{selectedEnquiry.status}</Badge>
                    </div>
                    <DialogTitle className="text-3xl font-bold tracking-tight mb-1">{selectedEnquiry.name}</DialogTitle>
                    <DialogDescription className="text-primary-foreground/80 font-medium flex items-center gap-2">
                      <Calendar size={14} /> Received on {format(new Date(selectedEnquiry.created_at), 'MMMM dd, yyyy @ HH:mm')}
                    </DialogDescription>
                  </DialogHeader>
                </div>

                <div className="p-8 space-y-8 bg-background max-h-[70vh] overflow-y-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <section className="space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                        <Users size={14} className="text-primary" /> Contact Profile
                      </h4>
                      <div className="space-y-3 bg-secondary/30 p-4 rounded-2xl border border-border/50">
                        <div className="flex items-center gap-3">
                          <Mail size={16} className="text-primary" />
                          <span className="text-sm font-medium">{selectedEnquiry.email}</span>
                        </div>
                        {selectedEnquiry.phone && (
                          <div className="flex items-center gap-3">
                            <Phone size={16} className="text-primary" />
                            <span className="text-sm font-medium">{selectedEnquiry.phone}</span>
                          </div>
                        )}
                        {selectedEnquiry.address && (
                          <div className="flex items-center gap-3">
                            <MapPin size={16} className="text-primary" />
                            <span className="text-sm font-medium leading-relaxed">{selectedEnquiry.address}</span>
                          </div>
                        )}
                      </div>
                    </section>

                    <section className="space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                        <Building size={14} className="text-primary" /> Business Context
                      </h4>
                      <div className="space-y-3 bg-secondary/30 p-4 rounded-2xl border border-border/50">
                        <div className="flex items-center gap-3">
                          <Building size={16} className="text-primary" />
                          <span className="text-sm font-bold">{selectedEnquiry.company_name || 'Individual Inquiry'}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Tag size={16} className="text-primary" />
                          <span className="text-sm font-medium">Service: <span className="capitalize">{selectedEnquiry.enquiry_type || 'General'}</span></span>
                        </div>
                      </div>
                    </section>
                  </div>

                  <section className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                      <FileText size={14} className="text-primary" /> Enquiry Intelligence
                    </h4>
                    <div className="space-y-4 bg-secondary/30 p-6 rounded-[2rem] border border-border/50">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Subject</p>
                        <p className="text-lg font-bold">{selectedEnquiry.subject || 'N/A'}</p>
                      </div>
                      <Separator className="bg-border/50" />
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 flex items-center gap-2">
                          <MessageSquare size={12} /> Detailed Requirements
                        </p>
                        <div className="text-sm text-muted-foreground leading-relaxed italic bg-background/50 p-4 rounded-xl border-l-4 border-primary">
                          "{selectedEnquiry.message}"
                        </div>
                      </div>
                    </div>
                  </section>
                </div>

                <div className="p-6 bg-secondary/10 border-t border-border/50 flex justify-end gap-3">
                  <a 
                    href={`mailto:${selectedEnquiry.email}`}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
                  >
                    <Mail size={16} /> Reply to Lead
                  </a>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

import { Separator } from '@/components/ui/separator';