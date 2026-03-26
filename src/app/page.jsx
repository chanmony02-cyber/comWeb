import Home from "@/features/Home/Home";
import { createPageMetadata } from "@/config/seo";

export const metadata = createPageMetadata(
  "Home",
  "Smart infrastructure solutions for electrical equipment, services, industries, and projects."
);

export default function Page() {
  return <Home />;
}

