import CityTherapyPage, { generateCityMetadata } from "@/components/CityTherapyPage";

export const metadata = generateCityMetadata("Burgos");

export default function Page() {
  return <CityTherapyPage city="Burgos" comunidad="Castilla y León" />;
}
