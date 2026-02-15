import CityTherapyPage, { generateCityMetadata } from "@/components/CityTherapyPage";

export const metadata = generateCityMetadata("Palma");

export default function Page() {
  return <CityTherapyPage city="Palma" province="Baleares" comunidad="las Islas Baleares" />;
}
