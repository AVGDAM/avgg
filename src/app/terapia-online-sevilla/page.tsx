import CityTherapyPage, { generateCityMetadata } from "@/components/CityTherapyPage";

export const metadata = generateCityMetadata("Sevilla");

export default function Page() {
  return <CityTherapyPage city="Sevilla" comunidad="Andalucía" />;
}
