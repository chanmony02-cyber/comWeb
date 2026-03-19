// src/pages/Services/ServicesPage.jsx

import MainLayout from "@/layouts/MainLayout";
import { GetInTouchForm } from "@/components/ui/GetInTouchForm";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { allServicesData } from "@/data/services/allServices";
import { ServicesHero } from "./components/ServicesHero";
import { OurServicesGrid } from "./components/OurServicesGrid";
import { WhyChooseUsSection } from "./components/WhyChooseUsSection";

export default function ServicesPage() {
  const { hero, services, whyChoose, faqs } = allServicesData;

  return (
    <MainLayout>
      <ServicesHero
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
      />
      <OurServicesGrid
        title={services.title}
        subtitle={services.subtitle}
        items={services.items}
      />
      <WhyChooseUsSection
        image={whyChoose.image}
        title={whyChoose.title}
        items={whyChoose.items}
      />
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-2xl">
          <FAQAccordion items={faqs}/>
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
