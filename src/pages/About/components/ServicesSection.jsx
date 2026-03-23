// src/pages/About/components/ServicesSection.jsx

import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/ui/SectionHeader";

const ICONS = {
  consultants: (
    <svg
      className="w-7 h-7 text-navy"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
      />
    </svg>
  ),
  maintenance: (
    <svg
      className="w-7 h-7 text-navy"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
      />
    </svg>
  ),
  inspections: (
    <svg
      className="w-7 h-7 text-navy"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z"
      />
    </svg>
  ),
};

export function ServicesSection({ eyebrow, title, subtitle, items }) {
  return (
    <section className="py-16 md:py-28 bg-background">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3">
          <span className="text-primary-blue text-sm font-semibold uppercase tracking-widest">
            {eyebrow}
          </span>
          <SectionHeader
            title={title}
            subtitle={subtitle}
            align="center"
            titleClassName="text-navy text-3xl md:text-4xl lg:text-5xl"
            subtitleClassName="text-lg md:text-xl mb-5"
          />
        </div>

        {/* Service cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((service) => (
            <Link
              key={service.id}
              to={service.href}
              className="group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md hover:bg-primary-blue transition-all duration-300 flex flex-col"
            >
              {/* Image with padding */}
              <div className="p-10">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 lg:h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="px-5 pb-6 flex flex-col gap-3 flex-1 text-center">
                <p className="text-2xl font-bold text-primary-blue group-hover:text-white transition-colors duration-300 font-display">
                  {service.title}
                </p>
                <p className="text-md text-muted-foreground group-hover:text-white/80 leading-relaxed font-sans transition-colors duration-300">
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
