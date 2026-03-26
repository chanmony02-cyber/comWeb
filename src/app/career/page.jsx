import { siteConfig } from "@/config/siteConfig";
import CareerPage from "@/pages/Career";

export const metadata = {
  title: "Career",
  description: siteConfig.description,
};

export default function Page() {
  return <CareerPage />;
}
