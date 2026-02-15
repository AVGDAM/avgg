import CityTherapyPage, { generateCityMetadata } from "@/components/CityTherapyPage";

export const metadata = generateCityMetadata("Albacete");

export default function Page() {
  return <CityTherapyPage city="Albacete" comunidad="Castilla-La Mancha" />;
}
