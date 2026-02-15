import CityTherapyPage, { generateCityMetadata } from "@/components/CityTherapyPage";

export const metadata = generateCityMetadata("Córdoba");

export default function Page() {
  return <CityTherapyPage city="Córdoba" comunidad="Andalucía" />;
}
