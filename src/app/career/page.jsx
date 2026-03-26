import CareerPage from "@/features/Career/CareerPage";
import { createPageMetadata } from "@/config/seo";

export const metadata = createPageMetadata(
  "Career",
  "Explore open positions and career opportunities."
);

export default function Page() {
  return <CareerPage />;
}

