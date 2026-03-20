// src/pages/Career/components/WhyJoinSection.jsx

import { SectionHeader } from "@/components/ui/SectionHeader";

const ICONS = {
  "growth-budget": (
    <svg
      className="w-7 h-7 text-primary-blue"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
      />
    </svg>
  ),
  health: (
    <svg
      className="w-7 h-7 text-primary-blue"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
      />
    </svg>
  ),
  knowledge: (
    <svg
      className="w-7 h-7 text-primary-blue"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
      />
    </svg>
  ),
};

export function WhyJoinSection({ benefits }) {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <SectionHeader
          title="Why Join Our Company?"
          subtitle="We take care of our people so they can take care of the mission."
          align="center"
          titleClassName="text-3xl md:text-4xl lg:text-5xl text-navy"
          subtitleClassName="text-md md:text-lg"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-card border border-border rounded-2xl p-8 xl:p-10 flex flex-col items-center text-center gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon circle */}
              <div className="w-14 h-14 rounded-full bg-sky-accent/30 flex items-center justify-center">
                {ICONS[benefit.icon]}
              </div>

              <h3 className="text-lg md:text-xl font-bold text-navy font-display">
                {benefit.title}
              </h3>
              <p className="text-md text-muted-foreground leading-relaxed font-sans">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
