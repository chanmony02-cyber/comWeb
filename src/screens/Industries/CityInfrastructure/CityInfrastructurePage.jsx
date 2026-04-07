<<<<<<< Updated upstream:src/pages/Industries/CityInfrastructure/CityInfrastructurePage.jsx
// src/pages/Industries/CityInfrastructure/CityInfrastructurePage.jsx

import MainLayout from "@/layouts/MainLayout";
import { cityInfrastructureData } from "@/data/industries/cityInfrastructure";
=======
>>>>>>> Stashed changes:src/screens/Industries/CityInfrastructure/CityInfrastructurePage.jsx
import { IndustryHero } from "../components/IndustryHero";
import { ProblemSection } from "../components/ProblemSection";
import { OurSolutionsGrid } from "../components/OurSolutionsGrid";
import { RecentProjectsList } from "../components/RecentProjectsList";
import { IndustryCTA } from "../components/IndustryCTA";
import { getCityInfrastructureData } from "@/services/industries";

export default function CityInfrastructurePage() {
  const cityInfrastructureData = getCityInfrastructureData();
  const { hero, problem, solutions, projects, cta } = cityInfrastructureData;

  return (
    <MainLayout>
      <IndustryHero
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
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
