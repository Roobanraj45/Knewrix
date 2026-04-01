import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      <div className="relative flex flex-col items-center gap-8">
        <div className="relative">
          <Loader2 className="h-16 w-16 text-primary animate-spin [animation-duration:2s]" />
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse" />
        </div>
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground animate-fade-in">
            KNEW<span className="text-primary">RIX</span>
          </h2>
          <div className="h-1.5 w-48 bg-secondary rounded-full overflow-hidden relative">
            <div className="absolute inset-0 bg-primary animate-brand-loading" />
          </div>
          <p className="text-muted-foreground text-[10px] font-bold tracking-[0.4em] uppercase opacity-60">
            Powering Growth
          </p>
        </div>
      </div>
    </div>
  );
}
