import CityTherapyPage, { generateCityMetadata } from "@/components/CityTherapyPage";

export const metadata = generateCityMetadata("Bilbao");

export default function Page() {
  return <CityTherapyPage city="Bilbao" province="Vizcaya" comunidad="el País Vasco" />;
}
