import CityTherapyPage, { generateCityMetadata } from "@/components/CityTherapyPage";

export const metadata = generateCityMetadata("Alicante");

export default function Page() {
  return <CityTherapyPage city="Alicante" comunidad="la Comunidad Valenciana" />;
}
