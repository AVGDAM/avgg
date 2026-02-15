import CityTherapyPage, { generateCityMetadata } from "@/components/CityTherapyPage";

export const metadata = generateCityMetadata("Castellón");

export default function Page() {
  return <CityTherapyPage city="Castellón" comunidad="la Comunidad Valenciana" />;
}
