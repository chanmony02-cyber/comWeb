// src/pages/Contact/components/ContactHeroSection.jsx

import { GetInTouchForm } from "@/components/ui/GetInTouchForm";
import { siteConfig } from "@/config/siteConfig";
import { contactData } from "@/data/contact/contact";

export function ContactHeroSection() {
  const { hero, info } = contactData;

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — title + contact info */}
          <div className="pt-4">
            <h1 className="text-4xl md:text-5xl font-bold text-navy font-display mb-4">
              {hero.title}
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed whitespace-pre-line mb-8">
              {hero.subtitle}
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="block font-semibold text-navy text-base hover:text-primary-blue transition-colors font-sans"
              >
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="block font-semibold text-navy text-base hover:text-primary-blue transition-colors font-sans"
              >
                {siteConfig.phone}
              </a>
            </div>
          </div>

          {/* Right — GetInTouchForm in a card */}
          <div className="bg-card border border-border rounded-2xl shadow-sm p-8">
            <GetInTouchForm />
          </div>
        </div>
      </div>
    </section>
  );
}
