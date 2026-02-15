import CityTherapyPage, { generateCityMetadata } from "@/components/CityTherapyPage";

export const metadata = generateCityMetadata("Tarragona");

export default function Page() {
  return <CityTherapyPage city="Tarragona" comunidad="Cataluña" />;
}
