<<<<<<< Updated upstream
import { siteConfig } from "@/config/siteConfig";
import HomePage from "@/pages/Home";

export const metadata = {
  title: "Home",
  description: siteConfig.description,
};

export default function Page() {
  return <HomePage />;
}
=======
import Home from "@/screens/Home";

export const metadata = {
  title: "Home",
};

export default function HomeAliasPage() {
  return <Home />;
}

>>>>>>> Stashed changes
