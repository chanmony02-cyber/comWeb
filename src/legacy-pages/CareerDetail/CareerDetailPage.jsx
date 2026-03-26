import { notFound } from "next/navigation";
import MainLayout from "@/layouts/MainLayout";
import { careerPositions } from "@/data/career/career";
import { CareerDetailContentSection } from "./components/CareerDetailContentSection";

export default function CareerDetailPage({ params }) {
  const { id } = params;
  const position = careerPositions.find((item) => item.id === Number(id));

  if (!position) {
    notFound();
  }

  return (
    <MainLayout>
      <CareerDetailContentSection position={position} />
    </MainLayout>
  );
}
