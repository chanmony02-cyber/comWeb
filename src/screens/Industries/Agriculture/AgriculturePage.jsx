<<<<<<< Updated upstream:src/pages/Industries/Agriculture/AgriculturePage.jsx
// src/pages/Industries/Agriculture/AgriculturePage.jsx

import MainLayout from "@/layouts/MainLayout";
import { agricultureData } from "@/data/industries/agriculture";
=======
>>>>>>> Stashed changes:src/screens/Industries/Agriculture/AgriculturePage.jsx
import { IndustryHero } from "../components/IndustryHero";
import { ProblemSection } from "../components/ProblemSection";
import { OurSolutionsGrid } from "../components/OurSolutionsGrid";
import { RecentProjectsList } from "../components/RecentProjectsList";
import { IndustryCTA } from "../components/IndustryCTA";
import { getAgricultureData } from "@/services/industries";

export default function AgriculturePage() {
  const agricultureData = getAgricultureData();
  const { hero, problem, solutions, projects, cta } = agricultureData;

  return (
    <MainLayout>
      <IndustryHero
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
        subtitleClassName="max-w-3xl"
      />
      <ProblemSection
        title={problem.title}
        paragraphs={problem.paragraphs}
        image={problem.image}
      />
      <OurSolutionsGrid
        label={solutions.label}
        title={solutions.title}
        subtitle={solutions.subtitle}
        items={solutions.items}
      />
      <RecentProjectsList
        label={projects.label}
        title={projects.title}
        items={projects.items}
      />
      <IndustryCTA title={cta.title} subtitle={cta.subtitle} />
    </MainLayout>
  );
}
