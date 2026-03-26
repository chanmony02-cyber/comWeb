import AgriculturePage from "@/features/Industries/Agriculture/AgriculturePage";
import { createPageMetadata } from "@/config/seo";

export const metadata = createPageMetadata(
  "Agriculture",
  "Smart infrastructure solutions for agriculture applications."
);

export default function Page() {
  return <AgriculturePage />;
}

