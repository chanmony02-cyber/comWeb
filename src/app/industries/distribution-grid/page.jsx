import DistributionGridPage from "@/features/Industries/DistributionGrid/DistributionGridPage";
import { createPageMetadata } from "@/config/seo";

export const metadata = createPageMetadata(
  "Distribution Grid",
  "Solutions for distribution grid infrastructure and reliability."
);

export default function Page() {
  return <DistributionGridPage />;
}

