import type { Metadata } from 'next';
import CityPageTemplate from '@/components/CityPageTemplate';
import { spainCities } from '@/data/cities';
import { convertCityData } from '@/lib/cityDataHelper';

const cityData = spainCities.find(c => c.slug === 'alicante')!;
const data = convertCityData(cityData);

export const metadata: Metadata = {
  title: data.metadata.title,
  description: data.metadata.description,
  keywords: data.metadata.keywords,
  openGraph: {
    title: data.metadata.title,
    description: data.metadata.description,
    url: 'https://avgg.es/alicante',
    siteName: 'AVGG',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AVGG - Diseño Web en Alicante',
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
    canonical: 'https://avgg.es/alicante',
  },
};

export default function AlicantePages() {
  return <CityPageTemplate data={data} />;
}
