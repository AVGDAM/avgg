import CityTherapyPage, { generateCityMetadata } from "@/components/CityTherapyPage";

export const metadata = generateCityMetadata("Cádiz");

export default function Page() {
  return <CityTherapyPage city="Cádiz" comunidad="Andalucía" />;
}
