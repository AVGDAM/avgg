import CityTherapyPage, { generateCityMetadata } from "@/components/CityTherapyPage";

export const metadata = generateCityMetadata("Badajoz");

export default function Page() {
  return <CityTherapyPage city="Badajoz" comunidad="Extremadura" />;
}
