import CityTherapyPage, { generateCityMetadata } from "@/components/CityTherapyPage";

export const metadata = generateCityMetadata("Barcelona");

export default function Page() {
  return <CityTherapyPage city="Barcelona" comunidad="Cataluña" />;
}
