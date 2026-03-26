import { siteConfig } from "@/config/siteConfig";
import { MaintenancePage } from "@/pages/ServiceDetail";

export const metadata = {
  title: "Maintenance",
  description: siteConfig.description,
};

export default function Page() {
  return <MaintenancePage />;
}
