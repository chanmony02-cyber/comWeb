// src/pages/ServiceDetail/MaintenancePage.jsx

import MainLayout from "@/layouts/MainLayout";
import { GetInTouchForm } from "@/components/ui/GetInTouchForm";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { maintenanceData } from "@/data/services/maintenance";
import { ServiceDetailHero } from "./components/ServiceDetailHero";
import { ServiceOverview } from "./components/ServiceOverview";
import { CommonIssuesGrid } from "./components/CommonIssuesGrid";
import { EquipmentGrid } from "./components/EquipmentGrid";

export default function MaintenancePage() {
  const { hero, overview, commonIssues, equipment, faqs } = maintenanceData;

  return (
    <MainLayout>
      <ServiceDetailHero
        title={hero.title}
        subtitle={hero.subtitle}
      />
      <ServiceOverview
        title={overview.title}
        paragraphs={overview.paragraphs}
        image={overview.image}
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
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-2xl">
          <FAQAccordion items={faqs} />
        </div>
      </section>
      <section className="py-16 md:py-20 bg-section-alt">
        <div className="container">
          <div className="max-w-md mx-auto bg-card border border-border rounded-2xl shadow-sm p-8">
            <GetInTouchForm />
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
