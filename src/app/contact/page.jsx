<<<<<<< Updated upstream
import { siteConfig } from "@/config/siteConfig";
import ContactPage from "@/pages/Contact";

export const metadata = {
  title: "Contact",
  description: siteConfig.description,
};

export default function Page() {
  return <ContactPage />;
}
=======
import ContactPage from "@/screens/Contact";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return <ContactPage />;
}

>>>>>>> Stashed changes
