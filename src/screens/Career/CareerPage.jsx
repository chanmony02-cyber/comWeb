// src/pages/Career/CareerPage.jsx

<<<<<<< Updated upstream:src/pages/Career/CareerPage.jsx
import MainLayout from "@/layouts/MainLayout";
import {
  careerHero,
  careerBenefits,
  careerDepartments,
  careerPositions,
  careerCTA,
} from "@/data/career/career";
=======
>>>>>>> Stashed changes:src/screens/Career/CareerPage.jsx
import { CareerHero } from "./components/CareerHero";
import { WhyJoinSection } from "./components/WhyJoinSection";
import { PositionsSection } from "./components/PositionsSection";
import { CareerCTA } from "./components/CareerCTA";
import {
  getCareerBenefits,
  getCareerCTA,
  getCareerDepartments,
  getCareerHero,
  getCareerPositions,
} from "@/services/career";

export default function CareerPage() {
  const careerHero = getCareerHero();
  const careerBenefits = getCareerBenefits();
  const careerDepartments = getCareerDepartments();
  const careerPositions = getCareerPositions();
  const careerCTA = getCareerCTA();

  return (
    <MainLayout>
      <CareerHero
        title={careerHero.title}
        subtitle={careerHero.subtitle}
        backgroundImage={careerHero.backgroundImage}
      />
      <WhyJoinSection benefits={careerBenefits} />
      <PositionsSection
        departments={careerDepartments}
        positions={careerPositions}
      />
      <CareerCTA
        text={careerCTA.text}
        buttonLabel={careerCTA.buttonLabel}
        buttonHref={careerCTA.buttonHref}
      />
    </MainLayout>
  );
}
