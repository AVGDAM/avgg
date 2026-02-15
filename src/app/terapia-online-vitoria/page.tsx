import CityTherapyPage, { generateCityMetadata } from "@/components/CityTherapyPage";

export const metadata = generateCityMetadata("Vitoria");

export default function Page() {
  return <CityTherapyPage city="Vitoria" province="Álava" comunidad="el País Vasco" />;
}
