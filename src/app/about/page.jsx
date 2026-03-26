import AboutPage from "@/features/About/AboutPage";
import { createPageMetadata } from "@/config/seo";

export const metadata = createPageMetadata(
  "About",
  "Learn more about VHT Company, our mission, values, and expertise."
);

export default function Page() {
  return <AboutPage />;
}

