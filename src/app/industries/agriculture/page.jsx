<<<<<<< Updated upstream
import { siteConfig } from "@/config/siteConfig";
import AgriculturePage from "@/pages/Industries/Agriculture";

export const metadata = {
  title: "Agriculture",
  description: siteConfig.description,
};

export default function Page() {
  return <AgriculturePage />;
}
=======
import AgriculturePage from "@/screens/Industries/Agriculture";

export const metadata = {
  title: "Agriculture",
};

export default function Agriculture() {
  return <AgriculturePage />;
}

>>>>>>> Stashed changes
