import { notFound } from "next/navigation";
import MainLayout from "@/layouts/MainLayout";
import { careerPositions } from "@/data/career/career";
import { CareerDetailContentSection } from "@/pages/CareerDetail/components/CareerDetailContentSection";

export async function generateStaticParams() {
  return careerPositions.map((position) => ({ id: String(position.id) }));
}

export async function generateMetadata({ params }) {
  const position = careerPositions.find((item) => item.id === Number(params.id));

  if (!position) {
    return {};
  }

  return {
    title: position.title,
    description: position.summary ?? "",
  };
}

export default function Page({ params }) {
  const position = careerPositions.find((item) => item.id === Number(params.id));

  if (!position) {
    notFound();
  }

  return (
    <MainLayout>
      <CareerDetailContentSection position={position} />
    </MainLayout>
  );
}
