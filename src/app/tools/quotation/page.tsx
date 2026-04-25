
'use client';

import * as React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Trash2, Printer, Building, Mail, Phone, FileText, Loader2, Save } from 'lucide-react';
import Image from 'next/image';
import { format } from 'date-fns';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { saveQuotation, getNextQuotationNumber } from '@/app/actions/save-quotation';
import { useToast } from '@/hooks/use-toast';

const quotationSchema = z.object({
  quotationNumber: z.string().min(1, 'Required'),
  date: z.string().min(1, 'Required'),
  clientName: z.string().min(2, 'Client name is required'),
  clientEmail: z.string().email('Invalid email'),
  clientAddress: z.string().optional(),
  items: z.array(z.object({
    description: z.string().min(1, 'Description required'),
    quantity: z.number().min(1),
    unitPrice: z.number().min(0),
  })).min(1, 'Add at least one item'),
  notes: z.string().optional(),
  gstEnabled: z.boolean().default(true),
});

type QuotationValues = z.infer<typeof quotationSchema>;

export default function QuotationPage() {
  const [isPreview, setIsPreview] = React.useState(false);
  const [isSaving, setIsSaving] = React.useState(false);
  const { toast } = useToast();

  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<QuotationValues>({
    resolver: zodResolver(quotationSchema),
    defaultValues: {
      quotationNumber: 'KNX-000000',
      date: format(new Date(), 'yyyy-MM-dd'),
      gstEnabled: true,
      items: [{ description: '', quantity: 1, unitPrice: 0 }],
      notes: 'Payment Terms: 50% Advance, 50% on Delivery. Validity: 15 Days.',
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });

  const watchedValues = watch();

  React.useEffect(() => {
    const fetchNextNumber = async () => {
      const nextNum = await getNextQuotationNumber();
      setValue('quotationNumber', nextNum);
    };
    fetchNextNumber();
  }, [setValue]);

  const calculateSubtotal = () => {
    return watchedValues.items.reduce((acc, item) => acc + (item.quantity * item.unitPrice), 0);
  };

  const subtotal = calculateSubtotal();
  const gst = watchedValues.gstEnabled ? subtotal * 0.18 : 0;
  const total = subtotal + gst;

  const handlePrint = () => {
    window.print();
  };

  const onSubmit = async (data: QuotationValues) => {
    setIsSaving(true);
    const result = await saveQuotation({
      ...data,
      subtotal,
      gst,
      total,
      created_at: new Date().toISOString(),
    });
    setIsSaving(false);

    if (result.success) {
      toast({
        title: "Quotation Saved",
        description: `Reference ${data.quotationNumber} has been added to the database.`,
      });
      setIsPreview(true);
    } else {
      toast({
        title: "Save Failed",
        description: "Could not sync with Firebase. Please check connection.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 print:hidden">
          <div>
            <h1 className="font-headline text-4xl font-bold tracking-tight">Quotation <span className="text-primary">Engine.</span></h1>
            <p className="text-muted-foreground mt-2 text-sm">Enterprise estimate generator with Firebase synchronization.</p>
          </div>
          <div className="flex gap-4">
            {isPreview && (
              <Button 
                variant="outline" 
                onClick={() => setIsPreview(false)}
                className="rounded-xl font-bold"
              >
                Back to Edit
              </Button>
            )}
            {!isPreview && (
              <Button 
                onClick={handleSubmit(onSubmit)}
                disabled={isSaving}
                className="rounded-xl font-bold gap-2"
              >
                {isSaving ? <Loader2 className="animate-spin h-4 w-4" /> : <Save size={18} />}
                Save & Preview
              </Button>
            )}
            {isPreview && (
              <Button onClick={handlePrint} className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl font-bold gap-2">
                <Printer size={18} /> Download / Print
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* FORM SECTION */}
          <div className={cn("lg:col-span-5 space-y-8 print:hidden", isPreview ? "hidden lg:block opacity-50 pointer-events-none" : "")}>
            <Card className="rounded-[2rem] border-border/50 shadow-xl overflow-hidden">
              <CardHeader className="bg-primary/5 border-b border-border/50 p-8">
                <div className="flex items-center gap-2 font-bold">
                  <FileText className="text-primary" size={20} />
                  New Quotation Entry
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Serial No.</label>
                      <Input {...register('quotationNumber')} readOnly className="bg-secondary/50 font-mono font-bold" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Date</label>
                      <Input {...register('date')} type="date" className="bg-background" />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-sm font-bold flex items-center gap-2">
                      <Building size={16} className="text-primary" /> Client Profile
                    </h3>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Recipient Name</label>
                      <Input {...register('clientName')} placeholder="Full Name or Org" />
                      {errors.clientName && <p className="text-xs text-destructive">{errors.clientName.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                      <Input {...register('clientEmail')} placeholder="billing@client.com" />
                      {errors.clientEmail && <p className="text-xs text-destructive">{errors.clientEmail.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Address Details</label>
                      <Textarea {...register('clientAddress')} placeholder="City, State, ZIP..." className="min-h-[80px]" />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-bold">Services & Items</h3>
                      <Button type="button" size="sm" variant="outline" onClick={() => append({ description: '', quantity: 1, unitPrice: 0 })} className="rounded-full gap-2 text-[10px] h-8">
                        <Plus size={12} /> Add Row
                      </Button>
                    </div>
                    
                    <div className="space-y-3">
                      {fields.map((field, index) => (
                        <div key={field.id} className="p-4 rounded-xl bg-secondary/30 border border-border/50 relative group">
                          <button 
                            type="button" 
                            onClick={() => remove(index)}
                            className="absolute -top-1 -right-1 p-1 bg-destructive text-destructive-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Trash2 size={10} />
                          </button>
                          <div className="space-y-3">
                            <Input 
                              {...register(`items.${index}.description`)} 
                              placeholder="Describe service..." 
                              className="bg-background text-sm"
                            />
                            <div className="grid grid-cols-2 gap-3">
                              <Input 
                                type="number" 
                                {...register(`items.${index}.quantity`, { valueAsNumber: true })} 
                                placeholder="Qty" 
                                className="bg-background text-sm"
                              />
                              <Input 
                                type="number" 
                                {...register(`items.${index}.unitPrice`, { valueAsNumber: true })} 
                                placeholder="Price (₹)" 
                                className="bg-background text-sm"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Disclosures & Terms</label>
                    <Textarea {...register('notes')} className="bg-background min-h-[100px] text-xs" />
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* DOCUMENT PREVIEW SECTION */}
          <div className="lg:col-span-7">
            <div id="quotation-document" className="bg-white text-black p-12 md:p-20 rounded-[2.5rem] shadow-2xl border border-border/50 min-h-[1123px] flex flex-col relative overflow-hidden print:shadow-none print:border-none print:rounded-none print:p-0 print:m-0 print:min-h-0">
              
              {/* Centered Watermark Logo */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] grayscale">
                <Image src="/knwerix_header.png" alt="Watermark" width={600} height={600} />
              </div>

              {/* Header */}
              <div className="flex justify-between items-start mb-16 relative z-10">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Image src="/knwerix_header.png" alt="Logo" width={44} height={44} />
                    <div className="flex flex-col">
                      <span className="font-headline text-2xl font-bold tracking-tighter leading-none">
                        KNEW<span className="text-primary">RIX</span>
                      </span>
                      <span className="text-[7px] font-bold uppercase tracking-[0.3em] text-gray-500">
                        Digital Growth Partner
                      </span>
                    </div>
                  </div>
                  <div className="text-[10px] text-gray-600 space-y-0.5 uppercase tracking-wide">
                    <p className="font-bold text-black text-xs">Knewrix Private Limited</p>
                    <p className="max-w-[280px]">ST.JOSEPH'S School Street, Near Poonamallee Bus Stand</p>
                    <p>Poonamallee, Chennai - 600056, Tamil Nadu, India</p>
                    <p className="flex items-center gap-1.5 pt-2"><Mail size={10} /> hello@knewrix.com</p>
                    <p className="flex items-center gap-1.5"><Phone size={10} /> +91 96007 12539</p>
                  </div>
                </div>
                <div className="text-right">
                  <h2 className="text-4xl font-bold tracking-tighter uppercase mb-6 text-gray-200">Quotation</h2>
                  <div className="space-y-1.5 text-[10px] uppercase font-bold tracking-widest">
                    <p><span className="text-gray-400 mr-2">Serial ID</span> <span className="bg-gray-100 px-2 py-0.5 rounded">{watchedValues.quotationNumber}</span></p>
                    <p><span className="text-gray-400 mr-2">Issue Date</span> <span>{watchedValues.date}</span></p>
                  </div>
                </div>
              </div>

              {/* Bill To */}
              <div className="mb-16 relative z-10">
                <h4 className="text-[9px] uppercase font-bold tracking-[0.2em] text-gray-400 mb-4 border-b pb-2">Issued To</h4>
                <div className="space-y-1">
                  <p className="text-lg font-bold uppercase">{watchedValues.clientName || 'Valued Recipient'}</p>
                  <p className="text-[11px] font-medium text-gray-600 tracking-wide">{watchedValues.clientEmail}</p>
                  {watchedValues.clientAddress && (
                    <p className="text-[9px] text-gray-500 max-w-[320px] mt-2 whitespace-pre-wrap leading-relaxed italic">{watchedValues.clientAddress}</p>
                  )}
                </div>
              </div>

              {/* Items Table */}
              <div className="flex-grow relative z-10">
                <Table className="border-y border-gray-100">
                  <TableHeader>
                    <TableRow className="bg-gray-50/50 border-none">
                      <TableHead className="text-black font-bold uppercase text-[9px] tracking-[0.1em] py-4">Description of Service</TableHead>
                      <TableHead className="text-black font-bold uppercase text-[9px] tracking-[0.1em] py-4 text-center w-[60px]">Qty</TableHead>
                      <TableHead className="text-black font-bold uppercase text-[9px] tracking-[0.1em] py-4 text-right w-[120px]">Price (₹)</TableHead>
                      <TableHead className="text-black font-bold uppercase text-[9px] tracking-[0.1em] py-4 text-right w-[120px]">Subtotal (₹)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {watchedValues.items.map((item, i) => (
                      <TableRow key={i} className="border-gray-50">
                        <TableCell className="py-6 align-top">
                          <p className="font-bold text-sm tracking-tight">{item.description || 'Professional Service Item'}</p>
                        </TableCell>
                        <TableCell className="py-6 text-center align-top text-xs font-medium">{item.quantity}</TableCell>
                        <TableCell className="py-6 text-right align-top text-xs font-medium">{item.unitPrice.toLocaleString('en-IN')}</TableCell>
                        <TableCell className="py-6 text-right align-top font-bold text-sm">{(item.quantity * item.unitPrice).toLocaleString('en-IN')}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Totals */}
              <div className="flex justify-end mt-12 mb-16 relative z-10">
                <div className="w-[320px] space-y-4">
                  <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest text-gray-500">
                    <span>Taxable Value</span>
                    <span className="text-black">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  {watchedValues.gstEnabled && (
                    <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest text-gray-500">
                      <span>GST Component (18%)</span>
                      <span className="text-black">₹{gst.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-xl font-bold bg-black text-white p-5 rounded-2xl shadow-xl">
                    <span className="uppercase tracking-tighter italic">Net Payable</span>
                    <span>₹{total.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              {/* Notes & Footer */}
              <div className="space-y-10 relative z-10">
                <div className="max-w-[500px]">
                  <h4 className="text-[9px] uppercase font-bold tracking-[0.15em] text-gray-400 mb-2 border-b pb-1">Notes & Contract Terms</h4>
                  <p className="text-[10px] text-gray-500 leading-relaxed italic whitespace-pre-wrap">{watchedValues.notes}</p>
                </div>
                
                <div className="pt-12 flex flex-col items-center border-t border-gray-100">
                   <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-2">Notice</p>
                   <p className="text-[9px] text-gray-500 italic text-center leading-relaxed max-w-[400px]">
                     This is a computer-generated quotation and does not require a physical signature. All transactions are subject to the legal framework of Knewrix Private Limited.
                   </p>
                </div>
              </div>
              
              {/* Statutory Footer */}
              <div className="mt-auto pt-10 text-center">
                <p className="text-[7px] uppercase font-bold tracking-[0.5em] text-gray-300">Certified Digital Estimate • Generated by Knewrix ERP</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #quotation-document, #quotation-document * {
            visibility: visible;
          }
          #quotation-document {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 40px !important;
            margin: 0;
            border: none;
            box-shadow: none;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
