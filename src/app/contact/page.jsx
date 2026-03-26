import ContactPage from "@/features/Contact/ContactPage";
import { createPageMetadata } from "@/config/seo";

export const metadata = createPageMetadata(
  "Contact",
  "Get in touch with the VHT Company team."
);

export default function Page() {
  return <ContactPage />;
}

