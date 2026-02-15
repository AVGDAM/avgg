import CityTherapyPage, { generateCityMetadata } from "@/components/CityTherapyPage";

export const metadata = generateCityMetadata("Salamanca");

export default function Page() {
  return <CityTherapyPage city="Salamanca" comunidad="Castilla y León" />;
}
