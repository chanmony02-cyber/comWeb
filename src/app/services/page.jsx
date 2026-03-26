import { siteConfig } from "@/config/siteConfig";
import ServicesPage from "@/pages/Services";

export const metadata = {
  title: "Services",
  description: siteConfig.description,
};

export default function Page() {
  return <ServicesPage />;
}
