<<<<<<<< Updated upstream:src/pages/CareerDetail/CareerDetailPage.jsx
import { useParams } from "react-router-dom";
========
import { notFound } from "next/navigation";
>>>>>>>> Stashed changes:src/legacy-pages/CareerDetail/CareerDetailPage.jsx
import MainLayout from "@/layouts/MainLayout";
import { careerPositions } from "@/data/career/career";
import { CareerDetailContentSection } from "./components/CareerDetailContentSection";

export default function CareerDetailPage() {
  const { id } = useParams();
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
