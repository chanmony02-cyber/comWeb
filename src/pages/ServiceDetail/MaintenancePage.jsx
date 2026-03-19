// src/pages/ServiceDetail/MaintenancePage.jsx

import MainLayout from "@/layouts/MainLayout";
import { BackButton } from "@/components/ui/BackButton";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GetInTouchForm } from "@/components/ui/GetInTouchForm";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { maintenanceData } from "@/data/services/maintenance";
import { ServiceOverview } from "./components/ServiceOverview";
import { CommonIssuesGrid } from "./components/CommonIssuesGrid";
import { EquipmentGrid } from "./components/EquipmentGrid";

export default function MaintenancePage() {
  const { hero, overview, commonIssues, equipment, faqs } = maintenanceData;

  return (
    <MainLayout>
      <section className="pt-10 pb-6 bg-background">
        <div className="container">
          <BackButton />
          <div className="mt-6">
            <SectionHeader
              title={hero.title}
              subtitle={hero.subtitle}
              align="center"
              titleClassName="text-3xl md:text-4xl lg:text-5xl"
            />
          </div>
        </div>
      </section>

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

      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-navy font-display text-center mb-10">FAQs</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="py-16 bg-section-alt">
        <div className="container">
          <div className="max-w-md mx-auto bg-card border border-border rounded-2xl shadow-sm p-8">
            <GetInTouchForm />
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
