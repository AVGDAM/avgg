import CityTherapyPage, { generateCityMetadata } from "@/components/CityTherapyPage";

export const metadata = generateCityMetadata("Granada");

export default function Page() {
  return <CityTherapyPage city="Granada" comunidad="Andalucía" />;
}
