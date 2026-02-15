import type { Metadata } from 'next';
import SectorPageTemplate from '@/components/SectorPageTemplate';
import { sectorsData } from '@/data/sectors';

const data = sectorsData.asesorias;

export const metadata: Metadata = {
  title: data.metadata.title,
  description: data.metadata.description,
  keywords: data.metadata.keywords,
  openGraph: {
    title: data.metadata.title,
    description: data.metadata.description,
    url: 'https://avgg.es/diseno-web-asesorias',
    siteName: 'AVGG',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AVGG - Diseño Web para Asesorías',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: data.metadata.title,
    description: data.metadata.description,
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://avgg.es/diseno-web-asesorias',
  },
};

export default function AsesoriasPage() {
  return <SectorPageTemplate data={data} />;
}
