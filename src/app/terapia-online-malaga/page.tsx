import CityTherapyPage, { generateCityMetadata } from "@/components/CityTherapyPage";

export const metadata = generateCityMetadata("Málaga");

export default function Page() {
  return <CityTherapyPage city="Málaga" comunidad="Andalucía" />;
}
