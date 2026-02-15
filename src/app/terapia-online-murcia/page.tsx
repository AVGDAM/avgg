import CityTherapyPage, { generateCityMetadata } from "@/components/CityTherapyPage";

export const metadata = generateCityMetadata("Murcia");

export default function Page() {
  return <CityTherapyPage city="Murcia" comunidad="la Región de Murcia" />;
}
