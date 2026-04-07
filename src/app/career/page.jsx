<<<<<<< Updated upstream
import { siteConfig } from "@/config/siteConfig";
import CareerPage from "@/pages/Career";

export const metadata = {
  title: "Career",
  description: siteConfig.description,
};

export default function Page() {
  return <CareerPage />;
}
=======
import CareerPage from "@/screens/Career";

export const metadata = {
  title: "Career",
};

export default function Career() {
  return <CareerPage />;
}

>>>>>>> Stashed changes
