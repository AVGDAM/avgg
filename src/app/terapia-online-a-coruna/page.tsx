import CityTherapyPage, { generateCityMetadata } from "@/components/CityTherapyPage";

export const metadata = generateCityMetadata("A Coruña");

export default function Page() {
  return <CityTherapyPage city="A Coruña" comunidad="Galicia" />;
}
