// src/pages/ServiceDetail/components/CoreExpertiseGrid.jsx

import { SectionHeader } from "@/components/ui/SectionHeader";

// Icon map — resolves string keys from data layer into SVG elements
const ICONS = {
  "cost-optimization": (
    <svg
      className="w-8 h-8 text-primary-blue"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  ),
  consulting: (
    <svg
      className="w-8 h-8 text-primary-blue"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
      />
    </svg>
  ),
  design: (
    <svg
      className="w-8 h-8 text-primary-blue"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125"
      />
    </svg>
  ),
};

export function CoreExpertiseGrid({ title, items }) {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <SectionHeader
          title={title}
          align="center"
          titleClassName="lg:text-4xl text-3xl"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-card border border-border rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 items-center text-center xl:p-16 p-6"
            >
              {/* Icon circle */}
              <div className="w-12 h-12 rounded-full border border-primary-blue/30 bg-sky-accent/10 flex items-center justify-center">
                {ICONS[item.icon]}
              </div>
              <h3 className="text-md lg:text-2xl font-bold text-navy font-display">
                {item.title}
              </h3>
              <p className="text-md text-muted-foreground leading-relaxed font-sans ">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
