// src/pages/ServiceDetail/ConsultantsPage.jsx

import MainLayout from "@/layouts/MainLayout";
import { GetInTouchForm } from "@/components/ui/GetInTouchForm";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { consultantsData } from "@/data/services/consultants";
import { ServiceDetailHero } from "./components/ServiceDetailHero";
import { ServiceOverview } from "./components/ServiceOverview";
import { CoreExpertiseGrid } from "./components/CoreExpertiseGrid";
import { OurProcessSteps } from "./components/OurProcessSteps";

export default function ConsultantsPage() {
  const { hero, overview, expertise, process, faqs } = consultantsData;

  return (
    <MainLayout>
      <ServiceDetailHero
        title={hero.title}
        subtitle={hero.subtitle}
        heroImage={hero.heroImage}
      />
      <ServiceOverview
        title={overview.title}
        paragraphs={overview.paragraphs}
        image={overview.image}
        bgAlt
      />
      <CoreExpertiseGrid
        title={expertise.title}
        items={expertise.items}
      />
      <OurProcessSteps
        title={process.title}
        subtitle={process.subtitle}
        steps={process.steps}
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
