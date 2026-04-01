import type {Metadata} from 'next';
import './globals.css';
import {Navigation} from '@/components/navigation';
import {Footer} from '@/components/footer';
import {Toaster} from '@/components/ui/toaster';
import {AnimatedBackground} from '@/components/animated-background';
import {NavigationLoader} from '@/components/navigation-loader';
import {Suspense} from 'react';

export const metadata: Metadata = {
  title: 'Knewrix | Software & Digital Growth Partner',
  description: 'Knewrix is a premier software house specializing in Websites, Mobile Apps, and Digital Marketing to scale ambitious brands globally.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased selection:bg-primary/20 selection:text-primary relative">
        <Suspense fallback={null}>
          <NavigationLoader />
        </Suspense>
        <AnimatedBackground />
        <Navigation />
        <main className="min-h-screen relative z-10">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
