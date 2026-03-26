import { siteConfig } from "@/config/siteConfig";
import { InspectionsPage } from "@/pages/ServiceDetail";

export const metadata = {
  title: "Inspections",
  description: siteConfig.description,
};

export default function Page() {
  return <InspectionsPage />;
}
