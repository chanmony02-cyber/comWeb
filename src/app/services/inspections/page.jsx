<<<<<<< Updated upstream
import { siteConfig } from "@/config/siteConfig";
import { InspectionsPage } from "@/pages/ServiceDetail";

export const metadata = {
  title: "Inspections",
  description: siteConfig.description,
};

export default function Page() {
  return <InspectionsPage />;
}
=======
import { InspectionsPage } from "@/screens/ServiceDetail";

export const metadata = {
  title: "Inspections",
};

export default function Inspections() {
  return <InspectionsPage />;
}

>>>>>>> Stashed changes
