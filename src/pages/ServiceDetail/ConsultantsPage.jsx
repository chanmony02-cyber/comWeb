// src/pages/ServiceDetail/ConsultantsPage.jsx

import MainLayout from "@/layouts/MainLayout";
import { BackButton } from "@/components/ui/BackButton";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GetInTouchForm } from "@/components/ui/GetInTouchForm";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { consultantsData } from "@/data/services/consultants";
import { ServiceOverview } from "./components/ServiceOverview";
import { CoreExpertiseGrid } from "./components/CoreExpertiseGrid";
import { OurProcessSteps } from "./components/OurProcessSteps";

export default function ConsultantsPage() {
  const { hero, overview, expertise, process, faqs } = consultantsData;

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

      <div className="container pb-10">
        <div className="rounded-2xl overflow-hidden shadow-sm">
          <img
            src={hero.heroImage}
            alt={hero.title}
            className="w-full h-64 md:h-80 lg:h-96 object-cover"
          />
        </div>
      </div>

      <ServiceOverview
        title={overview.title}
        paragraphs={overview.paragraphs}
        image={overview.image}
        bgSection={overview.bgSection}
      />
      <CoreExpertiseGrid title={expertise.title} items={expertise.items} />
      <OurProcessSteps
        title={process.title}
        subtitle={process.subtitle}
        steps={process.steps}
      />

      <section className="py-16 md:py-20 bg-background">
        <div className="container">
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
