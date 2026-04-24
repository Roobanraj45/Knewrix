'use client';

import * as React from 'react';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, Calendar, Building, Search, Filter, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import Link from 'next/link';

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
          <Card className="border-border/50 bg-card overflow-hidden rounded-[2rem] shadow-xl">
            <Table>
              <TableHeader className="bg-secondary/50">
                <TableRow>
                  <TableHead className="font-bold">Date Received</TableHead>
                  <TableHead className="font-bold">Lead Details</TableHead>
                  <TableHead className="font-bold">Organization</TableHead>
                  <TableHead className="font-bold">Category</TableHead>
                  <TableHead className="font-bold">Status</TableHead>
                  <TableHead className="font-bold text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEnquiries.map((enquiry) => (
                  <TableRow 
                    key={enquiry.id} 
                    className="hover:bg-primary/5 transition-colors group"
                  >
                    <TableCell className="font-medium whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-primary" />
                        {enquiry.created_at ? format(new Date(enquiry.created_at), 'MMM dd, yyyy') : 'N/A'}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <p className="font-bold text-foreground">{enquiry.name}</p>
                        <p className="text-xs text-muted-foreground">{enquiry.email}</p>
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
                    <TableCell className="text-right">
                      <Button asChild variant="ghost" size="sm" className="hover:bg-primary hover:text-white rounded-full group">
                        <Link href={`/admin/enquiries/${enquiry.id}`} className="flex items-center gap-2">
                          Manage <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        )}
      </div>
    </div>
  );
}