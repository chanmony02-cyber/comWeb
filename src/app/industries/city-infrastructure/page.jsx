import CityInfrastructurePage from "@/features/Industries/CityInfrastructure/CityInfrastructurePage";
import { createPageMetadata } from "@/config/seo";

export const metadata = createPageMetadata(
  "City Infrastructure",
  "Solutions supporting modern city infrastructure systems."
);

export default function Page() {
  return <CityInfrastructurePage />;
}

