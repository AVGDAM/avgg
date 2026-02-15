import type { Metadata } from 'next';
import SectorPageTemplate from '@/components/SectorPageTemplate';
import { sectorsData } from '@/data/sectors';

const data = sectorsData.tiendas;

export const metadata: Metadata = {
  title: data.metadata.title,
  description: data.metadata.description,
  keywords: data.metadata.keywords,
};

export default function TiendasPage() {
  return <SectorPageTemplate data={data} />;
}
