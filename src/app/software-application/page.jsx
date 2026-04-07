<<<<<<< Updated upstream
import { siteConfig } from "@/config/siteConfig";
import SoftwareApplicationPage from "@/pages/SoftwareApplication";

export const metadata = {
  title: "Software Application",
  description: siteConfig.description,
};

export default function Page() {
  return <SoftwareApplicationPage />;
}
=======
import SoftwareApplicationPage from "@/screens/SoftwareApplication";

export const metadata = {
  title: "Software Application",
};

export default function SoftwareApplication() {
  return <SoftwareApplicationPage />;
}

>>>>>>> Stashed changes
