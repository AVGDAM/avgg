import type { Metadata } from 'next';
import SectorPageTemplate from '@/components/SectorPageTemplate';
import { sectorsData } from '@/data/sectors';

const data = sectorsData.abogados;

export const metadata: Metadata = {
  title: data.metadata.title,
  description: data.metadata.description,
  keywords: data.metadata.keywords,
};

export default function AbogadosPage() {
  return <SectorPageTemplate data={data} />;
}
