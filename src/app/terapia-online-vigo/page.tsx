import CityTherapyPage, { generateCityMetadata } from "@/components/CityTherapyPage";

export const metadata = generateCityMetadata("Vigo");

export default function Page() {
  return <CityTherapyPage city="Vigo" province="Pontevedra" comunidad="Galicia" />;
}
