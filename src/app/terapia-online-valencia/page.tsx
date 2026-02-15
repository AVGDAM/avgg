import CityTherapyPage, { generateCityMetadata } from "@/components/CityTherapyPage";

export const metadata = generateCityMetadata("Valencia");

export default function Page() {
  return <CityTherapyPage city="Valencia" comunidad="la Comunidad Valenciana" />;
}
