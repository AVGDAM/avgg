import CityTherapyPage, { generateCityMetadata } from "@/components/CityTherapyPage";

export const metadata = generateCityMetadata("Logroño");

export default function Page() {
  return <CityTherapyPage city="Logroño" province="La Rioja" comunidad="La Rioja" />;
}
