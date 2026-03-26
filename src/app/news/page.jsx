import { siteConfig } from "@/config/siteConfig";
import { NewsEventsPage } from "@/pages/NewsEvents";

export const metadata = {
  title: "News & Events",
  description: siteConfig.description,
};

export default function Page() {
  return <NewsEventsPage />;
}
