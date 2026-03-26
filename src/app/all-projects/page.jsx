import { siteConfig } from "@/config/siteConfig";
import AllProjectsPage from "@/pages/AllProjects";

export const metadata = {
  title: "All Projects",
  description: siteConfig.description,
};

export default function Page() {
  return <AllProjectsPage />;
}
