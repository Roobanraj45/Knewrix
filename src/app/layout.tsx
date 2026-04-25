import type {Metadata, Viewport} from 'next';
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
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
  preload: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0ea5e9',
};

export const metadata: Metadata = {
  title: {
    default: 'Knewrix | Software House & Digital Growth Partner',
    template: '%s | Knewrix',
  },
  description: 'Knewrix is a premier software house specializing in high-performance Websites, Mobile Apps, and Digital Marketing to scale ambitious brands. Experts in TNSTC, GSRTC, Chaloyaar, and Enterprise IT Ticketing systems.',
  metadataBase: new URL('https://knewrix.com'),
  keywords: [
    'Knewrix',
    'Knewrix Private Limited',
    'Software House Chennai',
    'Digital Marketing Poonamallee',
    'Web Development Tamil Nadu',
    'Mobile App Development India',
    'TNSTC App Development',
    'GSRTC App Development',
    'Chaloyaar Booking Platform',
    'AmazoPrint Custom Printing',
    'ETM Machines IT Servicing',
    'Electronic Ticketing Machine TN',
    'Brand Scaling Chennai',
    'Growth Audit Agency',
    'SEO Services Tamil Nadu',
    'Next.js 15 Software House',
    'Corporate Event Management IT',
    'IT Sector Logistics',
    'Custom Gift Hampers for IT',
    'React Native Mobile Apps',
    'Flutter App Development Chennai',
    'Government Bus Booking App',
    'High-Performance Digital Ads',
    'Meta Ads Specialist India',
    'Kandhan Solar',
    'Subramanya Swami Realty',
    'Priya Jewellery Marketing',
  ],
  icons: {
    icon: [
      { url: '/knwerix_header.png', type: 'image/png' },
    ],
    shortcut: '/knwerix_header.png',
    apple: '/knwerix_header.png',
  },
  openGraph: {
    title: 'Knewrix | Software House & Digital Growth Partner',
    description: 'Engineering the future of growth. We architect high-scale systems like TNSTC & GSRTC apps and provide end-to-end digital growth strategies.',
    url: 'https://knewrix.com',
    siteName: 'Knewrix',
    images: [
      {
        url: '/knwerix_header.png',
        width: 1200,
        height: 630,
        alt: 'Knewrix Digital Growth Partner',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Knewrix | Software House & Digital Growth Partner',
    description: 'High-performance Websites, Mobile Apps, and Digital Marketing for ambitious global brands.',
    images: ['/knwerix_header.png'],
    creator: '@knewrix',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased selection:bg-primary/20 selection:text-primary relative font-body bg-background text-foreground">
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
