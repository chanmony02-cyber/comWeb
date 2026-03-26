import { notFound } from "next/navigation";
import CareerDetailPage from "@/features/CareerDetail/CareerDetailPage";
import { createPageMetadata } from "@/config/seo";
import { careerPositions } from "@/data/career/career";

export async function generateStaticParams() {
  return careerPositions.map((position) => ({
    id: String(position.id),
  }));
}

export async function generateMetadata({ params }) {
  const position = careerPositions.find(
    (item) => item.id === Number(params.id),
  );

  if (!position) {
    return createPageMetadata("Career Detail", "Career opportunity details page.");
  }

  return createPageMetadata(position.title, position.aboutRole);
}

export default function Page({ params }) {
  const position = careerPositions.find((item) => item.id === Number(params.id));

  if (!position) {
    notFound();
  }

  return <CareerDetailPage params={params} />;
}
