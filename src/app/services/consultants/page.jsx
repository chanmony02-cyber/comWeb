<<<<<<< Updated upstream
import { siteConfig } from "@/config/siteConfig";
import { ConsultantsPage } from "@/pages/ServiceDetail";

export const metadata = {
  title: "Consultants",
  description: siteConfig.description,
};

export default function Page() {
  return <ConsultantsPage />;
}
=======
import { ConsultantsPage } from "@/screens/ServiceDetail";

export const metadata = {
  title: "Consultants",
};

export default function Consultants() {
  return <ConsultantsPage />;
}

>>>>>>> Stashed changes
