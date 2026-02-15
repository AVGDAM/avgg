import CityTherapyPage, { generateCityMetadata } from "@/components/CityTherapyPage";

export const metadata = generateCityMetadata("León");

export default function Page() {
  return <CityTherapyPage city="León" comunidad="Castilla y León" />;
}
