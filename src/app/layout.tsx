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
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0ea5e9',
};

export const metadata: Metadata = {
  title: {
    default: 'Knewrix | Software & Digital Growth Partner',
    template: '%s | Knewrix',
  },
  description: 'Knewrix is a premier software house specializing in high-performance Websites, Mobile Apps, and Digital Marketing to scale ambitious brands globally.',
  keywords: [
    'Software House',
    'Digital Marketing Agency',
    'Web Development',
    'Mobile App Development',
    'Brand Scaling',
    'Growth Audit',
    'SEO Services',
    'Content Creation',
    'Chennai Tech Company',
    'Knewrix Private Limited',
    'Next.js Development',
    'Performance Marketing'
  ],
  authors: [{ name: 'Knewrix Private Limited' }],
  creator: 'Knewrix Private Limited',
  publisher: 'Knewrix Private Limited',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Knewrix | Software & Digital Growth Partner',
    description: 'Engineering the future of growth. We build products, establish brands, and scale growth through integrated strategy.',
    url: 'https://knewrix.com',
    siteName: 'Knewrix',
    images: [
      {
        url: 'https://picsum.photos/seed/knewrix-og/1200/630',
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
    title: 'Knewrix | Software & Digital Growth Partner',
    description: 'High-performance Websites, Mobile Apps, and Digital Marketing for ambitious global brands.',
    images: ['https://picsum.photos/seed/knewrix-twitter/1200/630'],
    creator: '@knewrix',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
  },
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
