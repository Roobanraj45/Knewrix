import {Metadata} from 'next';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Shield, Lock, Eye, FileText, UserCheck, Scale, Database, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Knewrix Private Limited Privacy Charter. Compliant with DPDP Act 2023 and global data protection standards.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 uppercase tracking-widest font-bold px-4 py-1">Statutory Compliance</Badge>
          <h1 className="font-headline text-4xl md:text-6xl font-bold mb-6 italic">Privacy <span className="not-italic gradient-text">Charter.</span></h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Knewrix Private Limited is committed to the highest standards of data integrity and protection, aligned with the Digital Personal Data Protection (DPDP) Act, 2023.
          </p>
        </header>

        <div className="space-y-12 bg-card border border-border/50 rounded-[2.5rem] p-8 md:p-12 shadow-sm">
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary mb-2">
              <ShieldCheck size={24} />
              <h2 className="text-2xl font-bold">1. Introduction & Scope</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              This Privacy Policy describes how Knewrix Private Limited ("Company", "we", "us", or "our") collects, uses, and shares personal data of users of this website and our clients. We act as a <strong>Data Fiduciary</strong> as defined under the DPDP Act, 2023.
            </p>
          </section>

          <Separator />

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary mb-2">
              <Database size={24} />
              <h2 className="text-2xl font-bold">2. Data We Process</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              We process personal data only for specified, lawful purposes for which you have given your affirmative consent:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {[
                { title: 'Identity Data', desc: 'Name, professional email, and company designation.' },
                { title: 'Business Data', desc: 'Growth challenges, revenue metrics, and project goals.' },
                { title: 'Technical Data', desc: 'IP address, browser type, and usage patterns via cookies.' },
                { title: 'Communication Data', desc: 'Logs of interactions for audit and service quality.' }
              ].map((data, i) => (
                <div key={i} className="p-4 rounded-xl bg-secondary/30 border border-border/50">
                  <h4 className="font-bold text-sm mb-1">{data.title}</h4>
                  <p className="text-xs text-muted-foreground">{data.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <Separator />

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary mb-2">
              <UserCheck size={24} />
              <h2 className="text-2xl font-bold">3. Rights of Data Principals</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Under the DPDP Act, 2023, you (the Data Principal) possess the following rights which we are committed to upholding:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground text-sm">
              <li><strong>Right to Information:</strong> Access to a summary of personal data being processed and the processing activities.</li>
              <li><strong>Right to Correction & Erasure:</strong> Rectification of inaccurate data or completion of incomplete data, and the right to request deletion of data no longer necessary.</li>
              <li><strong>Right to Withdraw Consent:</strong> You may withdraw consent at any time, with the understanding that this may impact service delivery.</li>
              <li><strong>Right of Grievance Redressal:</strong> Access to an internal mechanism to address any concerns regarding data processing.</li>
            </ul>
          </section>

          <Separator />

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary mb-2">
              <Lock size={24} />
              <h2 className="text-2xl font-bold">4. Data Security Architecture</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Our technical infrastructure utilizes industry-standard encryption (AES-256) and secure cloud environments provided by Vercel and Firebase. We implement strict <strong>Access Control Lists (ACLs)</strong> to ensure that only authorized personnel can access sensitive business data.
            </p>
          </section>

          <Separator />

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary mb-2">
              <Scale size={24} />
              <h2 className="text-2xl font-bold">5. Statutory Disclosures</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              We may disclose personal data if required by Indian law enforcement or regulatory authorities under the Information Technology Act, 2000, or to protect the legal rights and property of Knewrix Private Limited.
            </p>
          </section>

          <Separator />

          <section className="space-y-6">
            <div className="flex items-center gap-3 text-primary mb-2">
              <FileText size={24} />
              <h2 className="text-2xl font-bold">6. Grievance Redressal Mechanism</h2>
            </div>
            <div className="p-8 rounded-[2rem] bg-primary/5 border border-primary/10 shadow-inner">
              <p className="text-xs font-bold text-primary mb-4 uppercase tracking-[0.2em]">Mandatory Disclosure (IT Rules, 2021)</p>
              <div className="space-y-2 text-sm">
                <p><span className="font-bold text-foreground">Officer:</span> Grievance Redressal Officer</p>
                <p><span className="font-bold text-foreground">Entity:</span> Knewrix Private Limited</p>
                <p><span className="font-bold text-foreground">Email:</span> compliance@knewrix.com</p>
                <p><span className="font-bold text-foreground">Address:</span> ST.JOSEPH'S School Street, Near Poonamallee Bus Stand (Bus Entry Point), Poonamallee, Chennai - 600056, Tamil Nadu</p>
              </div>
              <p className="mt-4 text-xs text-muted-foreground italic">
                We acknowledge all grievances within 48 hours and resolve them within 15 business days.
              </p>
            </div>
          </section>
        </div>

        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>Last Revised: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </footer>
      </div>
    </div>
  );
}
