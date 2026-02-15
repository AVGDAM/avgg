import CityTherapyPage, { generateCityMetadata } from "@/components/CityTherapyPage";

export const metadata = generateCityMetadata("Oviedo");

export default function Page() {
  return <CityTherapyPage city="Oviedo" comunidad="Asturias" />;
}
