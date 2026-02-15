import CityTherapyPage, { generateCityMetadata } from "@/components/CityTherapyPage";

export const metadata = generateCityMetadata("Santander");

export default function Page() {
  return <CityTherapyPage city="Santander" comunidad="Cantabria" />;
}
