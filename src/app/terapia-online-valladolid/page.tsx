import CityTherapyPage, { generateCityMetadata } from "@/components/CityTherapyPage";

export const metadata = generateCityMetadata("Valladolid");

export default function Page() {
  return <CityTherapyPage city="Valladolid" comunidad="Castilla y León" />;
}
