import type {Metadata} from 'next';
import './globals.css';
import {Navigation} from '@/components/navigation';
import {Footer} from '@/components/footer';
import {Toaster} from '@/components/ui/toaster';
import {AnimatedBackground} from '@/components/animated-background';
import {NavigationLoader} from '@/components/navigation-loader';
import {Suspense} from 'react';
import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

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
    <html lang="en" className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased selection:bg-primary/20 selection:text-primary relative font-body">
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
