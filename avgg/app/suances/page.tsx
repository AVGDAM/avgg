import type { Metadata } from 'next';
import CityPageTemplate from '@/components/CityPageTemplate';
import { cantabriaCities } from '@/data/cities';
import { convertCityData } from '@/lib/cityDataHelper';

const cityData = cantabriaCities.find(c => c.slug === 'suances')!;
const data = convertCityData(cityData);

export const metadata: Metadata = {
  title: data.metadata.title,
  description: data.metadata.description,
  keywords: data.metadata.keywords,
};

export default function SuancesPage() {
  return <CityPageTemplate data={data} />;
}
