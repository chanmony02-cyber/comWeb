// src/pages/ServiceDetail/components/EquipmentGrid.jsx

import { SectionHeader } from "@/components/ui/SectionHeader";

function CheckItem({ label }) {
  return (
    <li className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
      <svg className="w-4 h-4 text-primary-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 12l2.5 2.5 5-5" />
      </svg>
      {label}
    </li>
  );
}

export function EquipmentGrid({ title, subtitle, items }) {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          align="center"
          titleClassName="text-3xl md:text-4xl"
          subtitleClassName="max-w-xl"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4"
            >
              {/* Image */}
              <div className="rounded-xl overflow-hidden shadow-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <p className="text-base font-bold text-navy font-display">{item.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                  {item.description}
                </p>
                <ul className="mt-1 flex flex-col gap-1">
                  {item.bullets.map((bullet) => (
                    <CheckItem key={bullet} label={bullet} />
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
