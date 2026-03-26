import { siteConfig } from "@/config/siteConfig";
import CityInfrastructurePage from "@/pages/Industries/CityInfrastructure";

export const metadata = {
  title: "City Infrastructure",
  description: siteConfig.description,
};

export default function Page() {
  return <CityInfrastructurePage />;
}
