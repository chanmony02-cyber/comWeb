<<<<<<< Updated upstream
import { siteConfig } from "@/config/siteConfig";
import DistributionGridPage from "@/pages/Industries/DistributionGrid";

export const metadata = {
  title: "Distribution Grid",
  description: siteConfig.description,
};

export default function Page() {
  return <DistributionGridPage />;
}
=======
import DistributionGridPage from "@/screens/Industries/DistributionGrid";

export const metadata = {
  title: "Distribution Grid",
};

export default function DistributionGrid() {
  return <DistributionGridPage />;
}

>>>>>>> Stashed changes
