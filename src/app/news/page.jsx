import { NewsEventsPage } from "@/features/NewsEvents";
import { createPageMetadata } from "@/config/seo";

export const metadata = createPageMetadata(
  "News & Events",
  "Read the latest company news, updates, and events."
);

export default function Page() {
  return <NewsEventsPage />;
}

