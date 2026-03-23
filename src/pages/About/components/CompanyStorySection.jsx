// src/pages/About/components/CompanyStorySection.jsx

import { Link } from "react-router-dom";

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-primary-blue flex-shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

export function CompanyStorySection({
  label,
  title,
  stat,
  paragraphs,
  checkItems,
  cta,
}) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ── Left — image collage with stat badge ─────── */}
          <div className="relative">
            {/* Stat badge — top-left overlap */}
            <div className="absolute -top-4 -left-4 z-10 bg-primary-blue text-white rounded-xl px-5 py-4 shadow-lg text-center min-w-[90px]">
              <p className="text-2xl font-bold font-display leading-none">{stat.value}</p>
              <p className="text-xs font-sans mt-1 leading-tight opacity-90">{stat.label}</p>
            </div>

            {/* Two stacked images mimicking the collage in the mockup */}
            <div className="grid grid-cols-2 gap-3 pt-6 pl-6">
              <div className="rounded-xl overflow-hidden shadow-md col-span-1 row-span-2">
                <img
                  src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=500&q=80&fit=crop"
                  alt="Electrical work"
                  className="w-full h-full object-cover"
                  style={{ minHeight: "280px" }}
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=80&fit=crop"
                  alt="Infrastructure project"
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80&fit=crop"
                  alt="Engineering team"
                  className="w-full h-40 object-cover"
                />
              </div>
            </div>
          </div>

          {/* ── Right — text content ──────────────────────── */}
          <div>
            {/* Label pill */}
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sky-accent/30 text-primary-blue text-sm font-semibold mb-4 font-sans">
              {label}
            </span>

            {/* Title — supports \n line breaks */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy font-display mb-5 leading-tight whitespace-pre-line">
              {title.split("Electrical Infrastructure").map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>
                    {part}
                    <span className="text-primary-blue">Electrical Infrastructure</span>
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </h2>

            {/* Paragraphs */}
            <div className="space-y-3 mb-6">
              {paragraphs.map((para, i) => (
                <p key={i} className="text-muted-foreground text-md leading-relaxed font-sans">
                  {para}
                </p>
              ))}
            </div>

            {/* Check items — 2-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {checkItems.map((item) => (
                <div key={item.id} className="flex items-start gap-2">
                  <CheckIcon />
                  <span className="text-md text-foreground font-sans">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              to={cta.href}
              className="inline-flex items-center gap-1 px-6 py-2.5 bg-primary-blue text-white text-md font-semibold rounded-md hover:bg-primary-blue/90 transition-colors font-display"
            >
              {cta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
