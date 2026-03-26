import SoftwareApplicationPage from "@/features/SoftwareApplication/SoftwareApplicationPage";
import { createPageMetadata } from "@/config/seo";

export const metadata = createPageMetadata(
  "Software Application",
  "Discover the software application platform and its capabilities."
);

export default function Page() {
  return <SoftwareApplicationPage />;
}

