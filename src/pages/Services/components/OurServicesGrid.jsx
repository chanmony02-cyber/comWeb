// src/pages/Services/components/OurServicesGrid.jsx

import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function OurServicesGrid({ title, subtitle, items }) {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <SectionHeader title={title} subtitle={subtitle} align="center" />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((service) => (
            <Link
              key={service.id}
              to={service.href}
              className="group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text */}
              <div className="p-5 flex flex-col gap-2 flex-1">
                <p className="text-base font-bold text-primary-blue font-display group-hover:text-navy transition-colors">
                  {service.title}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
