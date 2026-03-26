import AllProjectsPage from "@/features/AllProjects/AllProjectsPage";
import { createPageMetadata } from "@/config/seo";

export const metadata = createPageMetadata(
  "All Projects",
  "Browse the full list of completed and featured projects."
);

export default function Page() {
  return <AllProjectsPage />;
}

