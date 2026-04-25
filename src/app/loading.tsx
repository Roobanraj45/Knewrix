import { Loader2 } from 'lucide-react';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative">
          <Image 
            src="/knwerix_header.png" 
            alt="Knewrix Loading" 
            width={80} 
            height={80} 
            className="animate-pulse"
          />
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse" />
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="font-headline text-2xl font-bold tracking-tighter text-foreground">
            KNEW<span className="text-primary">RIX</span>
          </h2>
          <div className="h-1 w-32 bg-secondary rounded-full overflow-hidden relative">
            <div className="absolute inset-0 bg-primary animate-brand-loading" />
          </div>
          <p className="text-muted-foreground text-[8px] font-bold tracking-[0.4em] uppercase opacity-40">
            Optimizing Performance
          </p>
        </div>
      </div>
    </div>
  );
}
