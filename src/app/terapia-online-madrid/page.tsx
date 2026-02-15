import CityTherapyPage, { generateCityMetadata } from "@/components/CityTherapyPage";

export const metadata = generateCityMetadata("Madrid");

export default function TerapiaOnlineMadridPage() {
  return <CityTherapyPage city="Madrid" comunidad="la Comunidad de Madrid" />;
}
