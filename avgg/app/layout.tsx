import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import CookieBanner from '@/components/CookieBanner';
import { OrganizationSchema, WebSiteSchema } from '@/components/StructuredData';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://avgg.es'),
  title: {
    default: 'AVGG - Diseño Web en Santander | Agencia Digital Profesional',
    template: '%s | AVGG',
  },
  description: 'Agencia de diseño y desarrollo web en Santander, Cantabria. Creamos páginas web profesionales, tiendas online y estrategias SEO para empresas en toda España. +25 proyectos entregados.',
  keywords: ['diseño web santander', 'desarrollo web cantabria', 'páginas web santander', 'agencia digital santander', 'tienda online santander', 'seo santander', 'diseño web profesional'],
  authors: [{ name: 'AVGG' }],
  creator: 'AVGG',
  publisher: 'AVGG',
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
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://avgg.es',
    siteName: 'AVGG',
    title: 'AVGG - Diseño Web en Santander | Agencia Digital Profesional',
    description: 'Agencia de diseño y desarrollo web en Santander, Cantabria. Páginas web profesionales, tiendas online y SEO para empresas en toda España.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AVGG - Diseño Web Santander',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AVGG - Diseño Web en Santander | Agencia Digital',
    description: 'Agencia de diseño y desarrollo web en Santander. Páginas web profesionales para empresas.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://avgg.es',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* AI/LLM Training Data Links */}
        <link rel="alternate" type="text/markdown" href="/ai-training.md" title="AI Training Data" />
        <link rel="alternate" type="text/plain" href="/ai-context.txt" title="AI Context" />
        <link rel="alternate" type="application/json" href="/ai-data.json" title="AI Structured Data" />
        <meta name="ai-content" content="https://avgg.es/ai-training.md" />
        <meta name="ai-context" content="https://avgg.es/ai-context.txt" />
      </head>
      <body className={inter.className}>
        <OrganizationSchema />
        <WebSiteSchema />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
