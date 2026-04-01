'use client';

import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Gavel, ShieldAlert, Cpu, Globe2, AlertTriangle, Briefcase, Landmark, Scale } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 uppercase tracking-widest font-bold px-4 py-1">Legal Framework</Badge>
          <h1 className="font-headline text-4xl md:text-6xl font-bold mb-6 italic">Master <span className="not-italic gradient-text">Terms.</span></h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            These Terms of Service govern the professional engagement between Knewrix Private Limited and its Clients. 
          </p>
        </header>

        <div className="space-y-12 bg-card border border-border/50 rounded-[2.5rem] p-8 md:p-12 shadow-sm">
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-accent mb-2">
              <Briefcase size={24} />
              <h2 className="text-2xl font-bold">1. Nature of Engagement</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Knewrix Private Limited provides software house services, creative production, and performance marketing. All engagements are formalized via a <strong>Statement of Work (SOW)</strong>. These Terms are incorporated by reference into every SOW executed by the Company.
            </p>
          </section>

          <Separator />

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-accent mb-2">
              <Cpu size={24} />
              <h2 className="text-2xl font-bold">2. Intellectual Property Rights (IPR)</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Protection of IPR is fundamental to our operations. The following structure applies to all deliverables:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
                <h4 className="font-bold text-sm mb-2 uppercase tracking-wider text-foreground">Work Product</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Upon full and final payment, ownership of customized code and creative assets specifically developed for the Client is transferred to the Client.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20">
                <h4 className="font-bold text-sm mb-2 uppercase tracking-wider text-accent">Background IP</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Knewrix retains ownership of all pre-existing frameworks, libraries, and proprietary software logic used to build the Work Product.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-accent mb-2">
              <Landmark size={24} />
              <h2 className="text-2xl font-bold text-foreground">3. GST & Payment Obligations</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              All professional fees are subject to <strong>18% Goods and Services Tax (GST)</strong> as per the laws of India. 
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-sm">
              <li>Invoices are payable within 7 business days of the invoice date.</li>
              <li>Delays in payment exceeding 15 days shall accrue interest at a rate of 2% per month.</li>
              <li>Payments must be made via bank transfer or approved digital channels.</li>
            </ul>
          </section>

          <Separator />

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary mb-2">
              <ShieldAlert size={24} />
              <h2 className="text-2xl font-bold text-foreground">4. Limitation of Liability</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To the fullest extent permitted by the Information Technology Act, 2000, Knewrix Private Limited’s total aggregate liability for any claim arising out of these Terms or the services provided shall not exceed the <strong>actual amount paid by the Client</strong> for the specific milestone or service that gave rise to the claim.
            </p>
            <p className="text-xs text-muted-foreground italic bg-muted p-4 rounded-xl border-l-4 border-primary">
              The Company shall not be liable for any indirect, incidental, or consequential damages, including loss of profits, data loss, or business interruption.
            </p>
          </section>

          <Separator />

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-accent mb-2">
              <AlertTriangle size={24} />
              <h2 className="text-2xl font-bold">5. Client Indemnification</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              The Client shall indemnify and hold Knewrix Private Limited harmless against any third-party claims, liabilities, or expenses (including legal fees) arising from content, data, or intellectual property provided by the Client that infringes upon third-party rights or violates local regulations.
            </p>
          </section>

          <Separator />

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-accent mb-2">
              <Globe2 size={24} />
              <h2 className="text-2xl font-bold">6. Governing Law & Dispute Resolution</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              These Terms are governed by the laws of the Republic of India. 
            </p>
            <div className="p-6 rounded-2xl bg-secondary/20 border border-border space-y-4">
              <div className="flex gap-4">
                <Gavel className="text-primary flex-shrink-0" size={20} />
                <p className="text-sm"><strong>Jurisdiction:</strong> Exclusive jurisdiction for any legal proceedings shall lie with the courts of <strong>Chennai, Tamil Nadu</strong>.</p>
              </div>
              <div className="flex gap-4">
                <Scale className="text-primary flex-shrink-0" size={20} />
                <p className="text-sm"><strong>Arbitration:</strong> Any dispute shall first be referred to mandatory mediation, and if unresolved, to binding arbitration in accordance with the Arbitration and Conciliation Act, 1996.</p>
              </div>
            </div>
          </section>
        </div>

        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>Effective Date: January 1, {new Date().getFullYear()} | Knewrix Private Limited</p>
        </footer>
      </div>
    </div>
  );
}