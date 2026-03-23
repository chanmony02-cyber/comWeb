// src/pages/About/components/IndustriesWeServeSection.jsx

import { Link } from "react-router-dom";

const INDUSTRY_ICONS = {
  distribution: (
    <svg
      className="w-5 h-5 text-white"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"
      />
    </svg>
  ),
  city: (
    <svg
      className="w-5 h-5 text-white"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 21h18M5 21V7a2 2 0 0 1 2-2h4v16M13 21V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v16M9 9h1M9 13h1M9 17h1M15 9h1M15 13h1M15 17h1"
      />
    </svg>
  ),
  agriculture: (
    <svg
      className="w-5 h-5 text-white"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <circle cx="7" cy="17" r="2.5" />
      <circle cx="17" cy="17" r="3.5" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 17h2l2-5h6l2 5h5M9 12V9h4l2 3"
      />
    </svg>
  ),
};

export function IndustriesWeServeSection({ eyebrow, title, subtitle, items }) {
  return (
    <section className="py-16 md:py-24 bg-section-alt">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sky-accent/40 text-primary-blue text-md font-semibold mb-4 font-sans">
            {eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy font-display mb-3">
            {title}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto font-sans">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              className="group relative rounded-2xl overflow-hidden shadow-md border border-white/60"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/45 to-transparent" />
              <div className="absolute left-5 right-5 bottom-5 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-10 h-10 rounded-xl bg-primary-blue/90 flex items-center justify-center shadow-lg">
                    {INDUSTRY_ICONS[item.icon]}
                  </span>
                  <h3 className="text-lg font-semibold font-display">
                    {item.title}
                  </h3>
                </div>
                <p className="text-md text-white/80 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
