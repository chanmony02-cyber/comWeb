import { ConsultantsPage } from "@/features/ServiceDetail";
import { createPageMetadata } from "@/config/seo";

export const metadata = createPageMetadata(
  "Consultants",
  "Consulting services for smart infrastructure planning and delivery."
);

export default function Page() {
  return <ConsultantsPage />;
}

