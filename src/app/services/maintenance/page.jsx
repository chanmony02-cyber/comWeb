import { MaintenancePage } from "@/features/ServiceDetail";
import { createPageMetadata } from "@/config/seo";

export const metadata = createPageMetadata(
  "Maintenance",
  "Maintenance services for reliable smart infrastructure operations."
);

export default function Page() {
  return <MaintenancePage />;
}

