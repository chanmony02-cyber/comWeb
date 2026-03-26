// src/pages/Career/CareerPage.jsx

import MainLayout from "@/layouts/MainLayout";
import {
  careerHero,
  careerBenefits,
  careerDepartments,
  careerPositions,
  careerCTA,
} from "@/data/career/career";
import { CareerHero } from "./components/CareerHero";
import { WhyJoinSection } from "./components/WhyJoinSection";
import { PositionsSection } from "./components/PositionsSection";
import { CareerCTA } from "./components/CareerCTA";

export default function CareerPage() {
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
