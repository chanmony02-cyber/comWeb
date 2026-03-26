import { siteConfig } from "@/config/siteConfig";
import AboutPage from "@/pages/About";

export const metadata = {
  title: "About",
  description: siteConfig.description,
};

export default function Page() {
  return <AboutPage />;
}
