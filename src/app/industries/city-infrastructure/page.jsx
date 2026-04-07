<<<<<<< Updated upstream
import { siteConfig } from "@/config/siteConfig";
import CityInfrastructurePage from "@/pages/Industries/CityInfrastructure";

export const metadata = {
  title: "City Infrastructure",
  description: siteConfig.description,
};

export default function Page() {
  return <CityInfrastructurePage />;
}
=======
import CityInfrastructurePage from "@/screens/Industries/CityInfrastructure";

export const metadata = {
  title: "City Infrastructure",
};

export default function CityInfrastructure() {
  return <CityInfrastructurePage />;
}

>>>>>>> Stashed changes
