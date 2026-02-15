import CityTherapyPage, { generateCityMetadata } from "@/components/CityTherapyPage";

export const metadata = generateCityMetadata("Gijón");

export default function Page() {
  return <CityTherapyPage city="Gijón" province="Asturias" comunidad="Asturias" />;
}
