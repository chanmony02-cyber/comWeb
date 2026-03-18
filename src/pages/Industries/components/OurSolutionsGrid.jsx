// src/pages/Industries/components/OurSolutionsGrid.jsx

import { SectionHeader } from "@/components/ui/SectionHeader";

export function OurSolutionsGrid({ label, title, subtitle, items }) {
  return (
    <section className="py-16 md:py-20 bg-section-alt">
      <div className="container">
        <SectionHeader
          label={label}
          title={title}
          subtitle={subtitle}
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((solution) => (
            <div key={solution.id} className="flex flex-col">
              <div className="rounded-xl overflow-hidden shadow-sm">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-52 md:h-60 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="mt-3 text-sm font-semibold text-navy font-display">
                {solution.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
