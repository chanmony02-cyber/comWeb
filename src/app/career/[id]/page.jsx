import { notFound } from "next/navigation";
<<<<<<< Updated upstream
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
=======

import { CareerDetailContentSection } from "@/screens/CareerDetail/components/CareerDetailContentSection";
import {
  getCareerPositionById,
  getCareerPositions,
} from "@/services/career";

export function generateStaticParams() {
  return getCareerPositions().map((position) => ({
    id: String(position.id),
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const position = getCareerPositionById(id);
  if (!position) return { title: "Career" };
  return {
    title: position.title,
    description: position.aboutRole,
  };
}

export default async function CareerDetailPage({ params }) {
  const { id } = await params;
  const position = getCareerPositionById(id);
  if (!position) notFound();

  return <CareerDetailContentSection position={position} />;
>>>>>>> Stashed changes
}
