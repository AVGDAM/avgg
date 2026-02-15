import CityTherapyPage, { generateCityMetadata } from "@/components/CityTherapyPage";

export const metadata = generateCityMetadata("Zaragoza");

export default function Page() {
  return <CityTherapyPage city="Zaragoza" comunidad="Aragón" />;
}
