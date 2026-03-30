// src/pages/ServiceDetail/ConsultantsPage.jsx

import { FaqSection } from "@/components/ui/FaqSection";
import { GetInTouchSection } from "@/components/ui/GetInTouchSection";
import { consultantsData } from "@/data/services/consultants";
import { ServiceDetailHeroSection } from "./components/ServiceDetailHeroSection";
import { ServiceOverview } from "./components/ServiceOverview";
import { CommonIssuesGrid } from "./components/CommonIssuesGrid";
import { EquipmentGrid } from "./components/EquipmentGrid";

export default function ConsultantsPage() {
  const { hero, overview, commonIssues, equipment, faqs } = consultantsData;

  return (
    <>
      <ServiceDetailHeroSection
        title={hero.title}
        subtitle={hero.subtitle}
        heroImage={hero.heroImage}
      />
      <ServiceOverview
        title={overview.title}
        paragraphs={overview.paragraphs}
        image={overview.image}
        bgSection={overview.bgSection}
      />
      <CommonIssuesGrid
        title={commonIssues.title}
        subtitle={commonIssues.subtitle}
        items={commonIssues.items}
      />
      <EquipmentGrid
        title={equipment.title}
        subtitle={equipment.subtitle}
        items={equipment.items}
      />
      <FaqSection items={faqs} />
      <GetInTouchSection />
    </>
  );
}
