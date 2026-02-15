import type { Metadata } from 'next';
import SectorPageTemplate from '@/components/SectorPageTemplate';
import { sectorsData } from '@/data/sectors';

const data = sectorsData.dentistas;

export const metadata: Metadata = {
  title: data.metadata.title,
  description: data.metadata.description,
  keywords: data.metadata.keywords,
};

export default function DentistasPage() {
  return <SectorPageTemplate data={data} />;
}
