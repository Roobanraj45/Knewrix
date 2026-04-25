
'use client';

import * as React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Plus, Trash2, Download, Printer, Landmark, Building, Mail, Phone, MapPin, Calendar, FileText } from 'lucide-react';
import Image from 'next/image';
import { format } from 'date-fns';
import { Separator } from '@/components/ui/separator';

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

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<QuotationValues>({
    resolver: zodResolver(quotationSchema),
    defaultValues: {
      quotationNumber: `QTN-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
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

  const calculateSubtotal = () => {
    return watchedValues.items.reduce((acc, item) => acc + (item.quantity * item.unitPrice), 0);
  };

  const subtotal = calculateSubtotal();
  const gst = watchedValues.gstEnabled ? subtotal * 0.18 : 0;
  const total = subtotal + gst;

  const handlePrint = () => {
    window.print();
  };

  const onSubmit = () => {
    setIsPreview(true);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 print:hidden">
          <div>
            <h1 className="font-headline text-4xl font-bold tracking-tight">Quotation <span className="text-primary">Engine.</span></h1>
            <p className="text-muted-foreground mt-2">Generate professional estimates for Knewrix clients.</p>
          </div>
          <div className="flex gap-4">
            <Button 
              variant={isPreview ? "outline" : "default"} 
              onClick={() => setIsPreview(false)}
              className="rounded-xl font-bold"
            >
              Edit Form
            </Button>
            <Button 
              variant={isPreview ? "default" : "outline"} 
              onClick={handleSubmit(onSubmit)}
              className="rounded-xl font-bold"
            >
              Preview Quotation
            </Button>
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
                <CardTitle className="flex items-center gap-2">
                  <FileText className="text-primary" size={20} />
                  Quotation Details
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Quotation #</label>
                      <Input {...register('quotationNumber')} className="bg-background" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Date</label>
                      <Input {...register('date')} type="date" className="bg-background" />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-sm font-bold flex items-center gap-2">
                      <Building size={16} className="text-primary" /> Client Information
                    </h3>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Client Name</label>
                      <Input {...register('clientName')} placeholder="Company or Individual Name" />
                      {errors.clientName && <p className="text-xs text-destructive">{errors.clientName.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                      <Input {...register('clientEmail')} placeholder="client@example.com" />
                      {errors.clientEmail && <p className="text-xs text-destructive">{errors.clientEmail.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Address</label>
                      <Textarea {...register('clientAddress')} placeholder="Street address, City, State" />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-bold">Line Items</h3>
                      <Button type="button" size="sm" variant="outline" onClick={() => append({ description: '', quantity: 1, unitPrice: 0 })} className="rounded-full gap-2">
                        <Plus size={14} /> Add Item
                      </Button>
                    </div>
                    
                    <div className="space-y-4">
                      {fields.map((field, index) => (
                        <div key={field.id} className="p-4 rounded-xl bg-secondary/30 border border-border/50 relative group">
                          <button 
                            type="button" 
                            onClick={() => remove(index)}
                            className="absolute -top-2 -right-2 p-1.5 bg-destructive text-destructive-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Trash2 size={12} />
                          </button>
                          <div className="space-y-3">
                            <Input 
                              {...register(`items.${index}.description`)} 
                              placeholder="Service description" 
                              className="bg-background"
                            />
                            <div className="grid grid-cols-2 gap-3">
                              <Input 
                                type="number" 
                                {...register(`items.${index}.quantity`, { valueAsNumber: true })} 
                                placeholder="Qty" 
                                className="bg-background"
                              />
                              <Input 
                                type="number" 
                                {...register(`items.${index}.unitPrice`, { valueAsNumber: true })} 
                                placeholder="Price" 
                                className="bg-background"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Terms & Notes</label>
                    <Textarea {...register('notes')} className="bg-background min-h-[100px]" />
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* PREVIEW SECTION */}
          <div className="lg:col-span-7">
            <div id="quotation-document" className="bg-white text-black p-8 md:p-16 rounded-[2rem] shadow-2xl border border-border/50 min-h-[1100px] flex flex-col print:shadow-none print:border-none print:rounded-none print:p-0 print:m-0 print:min-h-0">
              {/* Header */}
              <div className="flex justify-between items-start mb-16">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Image src="/knwerix_header.png" alt="Logo" width={48} height={48} />
                    <div className="flex flex-col">
                      <span className="font-headline text-2xl font-bold tracking-tighter leading-none">
                        KNEW<span className="text-[#0ea5e9]">RIX</span>
                      </span>
                      <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-gray-500">
                        Digital Growth Partner
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p className="font-bold text-black">Knewrix Private Limited</p>
                    <p className="max-w-[300px] leading-relaxed">ST.JOSEPH'S School Street, Near Poonamallee Bus Stand, Poonamallee, Chennai - 600056</p>
                    <p>Tamil Nadu, India</p>
                    <p className="flex items-center gap-2"><Mail size={12} /> hello@knewrix.com</p>
                    <p className="flex items-center gap-2"><Phone size={12} /> +91 96007 12539</p>
                  </div>
                </div>
                <div className="text-right">
                  <h2 className="text-4xl font-bold tracking-tighter uppercase mb-4 text-gray-300">Quotation</h2>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-gray-500 uppercase font-bold text-[10px] tracking-widest mr-2">Number</span> <span className="font-bold">{watchedValues.quotationNumber}</span></p>
                    <p><span className="text-gray-500 uppercase font-bold text-[10px] tracking-widest mr-2">Date</span> <span className="font-bold">{watchedValues.date}</span></p>
                  </div>
                </div>
              </div>

              {/* Bill To */}
              <div className="mb-16">
                <h4 className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-4 border-b pb-2">Client Details</h4>
                <div className="space-y-1">
                  <p className="text-xl font-bold">{watchedValues.clientName || 'Valued Client'}</p>
                  <p className="text-sm text-gray-600">{watchedValues.clientEmail}</p>
                  {watchedValues.clientAddress && (
                    <p className="text-sm text-gray-600 max-w-[300px] mt-2 whitespace-pre-wrap">{watchedValues.clientAddress}</p>
                  )}
                </div>
              </div>

              {/* Items Table */}
              <div className="flex-grow">
                <Table className="border-y">
                  <TableHeader>
                    <TableRow className="bg-gray-50 border-none">
                      <TableHead className="text-black font-bold uppercase text-[10px] tracking-wider py-4">Description</TableHead>
                      <TableHead className="text-black font-bold uppercase text-[10px] tracking-wider py-4 text-center w-[80px]">Qty</TableHead>
                      <TableHead className="text-black font-bold uppercase text-[10px] tracking-wider py-4 text-right w-[150px]">Unit Price</TableHead>
                      <TableHead className="text-black font-bold uppercase text-[10px] tracking-wider py-4 text-right w-[150px]">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {watchedValues.items.map((item, i) => (
                      <TableRow key={i} className="border-gray-100">
                        <TableCell className="py-6 align-top">
                          <p className="font-medium text-base">{item.description || 'Service Description'}</p>
                        </TableCell>
                        <TableCell className="py-6 text-center align-top">{item.quantity}</TableCell>
                        <TableCell className="py-6 text-right align-top">₹{item.unitPrice.toLocaleString('en-IN')}</TableCell>
                        <TableCell className="py-6 text-right align-top font-bold">₹{(item.quantity * item.unitPrice).toLocaleString('en-IN')}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Totals */}
              <div className="flex justify-end mt-12 mb-16">
                <div className="w-[300px] space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 uppercase tracking-widest font-bold text-[10px]">Subtotal</span>
                    <span className="font-bold">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  {watchedValues.gstEnabled && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 uppercase tracking-widest font-bold text-[10px]">GST (18%)</span>
                      <span className="font-bold">₹{gst.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between text-xl font-bold bg-[#0ea5e9] text-white p-4 rounded-xl">
                    <span className="uppercase tracking-tighter">Total</span>
                    <span>₹{total.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              {/* Notes & Footer */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2 border-b pb-1">Notes & Terms</h4>
                  <p className="text-xs text-gray-600 leading-relaxed whitespace-pre-wrap">{watchedValues.notes}</p>
                </div>
                
                <div className="pt-12 grid grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-4">Bank Details</h4>
                    <div className="text-[10px] text-gray-600 space-y-1">
                      <p><span className="font-bold text-black">A/C Name:</span> Knewrix Private Limited</p>
                      <p><span className="font-bold text-black">Bank:</span> [Your Bank Name]</p>
                      <p><span className="font-bold text-black">IFSC:</span> [Your IFSC Code]</p>
                      <p><span className="font-bold text-black">Account:</span> [Your Account Number]</p>
                    </div>
                  </div>
                  <div className="text-right flex flex-col items-end justify-end">
                    <div className="w-[180px] h-[60px] border-b border-gray-300 mb-2"></div>
                    <p className="text-[10px] font-bold uppercase tracking-widest">Authorized Signatory</p>
                    <p className="text-[8px] text-gray-500 mt-1">For Knewrix Private Limited</p>
                  </div>
                </div>
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
            padding: 0;
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

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
