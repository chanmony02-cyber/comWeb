import ServicesPage from "@/features/Services/ServicesPage";
import { createPageMetadata } from "@/config/seo";

export const metadata = createPageMetadata(
  "Services",
  "View the full range of services offered by VHT Company."
);

export default function Page() {
  return <ServicesPage />;
}

