import CityTherapyPage, { generateCityMetadata } from "@/components/CityTherapyPage";

export const metadata = generateCityMetadata("Huelva");

export default function Page() {
  return <CityTherapyPage city="Huelva" comunidad="Andalucía" />;
}
