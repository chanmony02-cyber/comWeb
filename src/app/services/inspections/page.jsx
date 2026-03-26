import { InspectionsPage } from "@/features/ServiceDetail";
import { createPageMetadata } from "@/config/seo";

export const metadata = createPageMetadata(
  "Inspections",
  "Inspection services for safe and compliant infrastructure performance."
);

export default function Page() {
  return <InspectionsPage />;
}

