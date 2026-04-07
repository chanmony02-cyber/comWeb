<<<<<<< Updated upstream
import { siteConfig } from "@/config/siteConfig";
import AllProjectsPage from "@/pages/AllProjects";

export const metadata = {
  title: "All Projects",
  description: siteConfig.description,
};

export default function Page() {
  return <AllProjectsPage />;
}
=======
import AllProjectsPage from "@/screens/AllProjects";

export const metadata = {
  title: "Projects",
};

export default function AllProjects() {
  return <AllProjectsPage />;
}

>>>>>>> Stashed changes
