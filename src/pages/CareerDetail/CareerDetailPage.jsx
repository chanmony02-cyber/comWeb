import { useParams } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import { careerPositions } from "@/data/career/career";
import { CareerDetailContentSection } from "./components/CareerDetailContentSection";

export default function CareerDetailPage() {
  const { id } = useParams();
  const position = careerPositions.find((item) => item.id === Number(id));

  if (!position) {
    return (
      <MainLayout>
        <div className="container py-20 text-center">
          <p className="text-muted-foreground text-md font-sans">
            Position not found.
          </p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <CareerDetailContentSection position={position} />
    </MainLayout>
  );
}
