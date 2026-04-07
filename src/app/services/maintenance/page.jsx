<<<<<<< Updated upstream
import { siteConfig } from "@/config/siteConfig";
import { MaintenancePage } from "@/pages/ServiceDetail";

export const metadata = {
  title: "Maintenance",
  description: siteConfig.description,
};

export default function Page() {
  return <MaintenancePage />;
}
=======
import { MaintenancePage } from "@/screens/ServiceDetail";

export const metadata = {
  title: "Maintenance",
};

export default function Maintenance() {
  return <MaintenancePage />;
}

>>>>>>> Stashed changes
