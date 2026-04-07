<<<<<<< Updated upstream
import { siteConfig } from "@/config/siteConfig";
import AboutPage from "@/pages/About";

export const metadata = {
  title: "About",
  description: siteConfig.description,
};

export default function Page() {
  return <AboutPage />;
}
=======
import AboutPage from "@/screens/About";

export const metadata = {
  title: "About",
};

export default function About() {
  return <AboutPage />;
}

>>>>>>> Stashed changes
