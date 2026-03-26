import { siteConfig } from "@/config/siteConfig";
import AgriculturePage from "@/pages/Industries/Agriculture";

export const metadata = {
  title: "Agriculture",
  description: siteConfig.description,
};

export default function Page() {
  return <AgriculturePage />;
}
