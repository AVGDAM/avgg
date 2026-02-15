import CityTherapyPage, { generateCityMetadata } from "@/components/CityTherapyPage";

export const metadata = generateCityMetadata("Pamplona");

export default function Page() {
  return <CityTherapyPage city="Pamplona" province="Navarra" comunidad="Navarra" />;
}
