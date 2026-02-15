import type { Metadata } from 'next';
import CityPageTemplate from '@/components/CityPageTemplate';
import { spainCities } from '@/data/cities';
import { convertCityData } from '@/lib/cityDataHelper';

const cityData = spainCities.find(c => c.slug === 'bilbao')!;
const data = convertCityData(cityData);

export const metadata: Metadata = {
  title: data.metadata.title,
  description: data.metadata.description,
  keywords: data.metadata.keywords,
};

export default function BilbaoPage() {
  return <CityPageTemplate data={data} />;
}
