// src/pages/About/components/PowerSection.jsx

import { Link } from "react-router-dom";

// Icon map for the four pillars
const PILLAR_ICONS = {
  quality: (
    <svg
      className="w-7 h-7 text-sky-accent"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
      />
    </svg>
  ),
  safety: (
    <svg
      className="w-7 h-7 text-sky-accent"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    </svg>
  ),
  accuracy: (
    <svg
      className="w-7 h-7 text-sky-accent"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 15.75m-7.5-7.5 7.5 7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  ),
  reliance: (
    <svg
      className="w-7 h-7 text-sky-accent"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
      />
    </svg>
  ),
};

export function PowerSection({
  eyebrow,
  title,
  highlight,
  description,
  cta,
  pillars,
}) {
  return (
    <section className="py-16 md:py-24 bg-navy">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ── Left — headline + description + CTA ─────── */}
          <div>
            <p className="text-sky-accent text-md font-semibold tracking-widest uppercase mb-3 font-sans">
              {eyebrow}
            </p>
            <h2 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl font-display leading-tight mb-3 whitespace-pre-line">
              {title}
            </h2>
            {/* Highlighted word on its own line with blue background pill */}
            <span className="inline-block bg-primary-blue text-white font-bold text-3xl md:text-4xl lg:text-5xl font-display px-3 py-1 rounded mb-6">
              {highlight}
            </span>
            <p className="text-white/70 text-md md:text-lg leading-relaxed font-sans mb-8 max-w-xl">
              {description}
            </p>
            <Link
              to={cta.href}
              className="inline-flex items-center gap-1 px-6 py-3 border border-white/50 text-white text-md font-semibold rounded-md hover:bg-primary-blue hover:text-white transition-colors font-display"
            >
              {cta.label}
            </Link>
          </div>

          {/* ── Right — 2×2 pillar cards ──────────────────── */}
          <div className="grid grid-cols-2 gap-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="h-52 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-center items-center gap-3 text-center hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary-blue/20 flex items-center justify-center">
                  {PILLAR_ICONS[pillar.icon]}
                </div>
                <p className="text-white font-semibold text-xl font-display">
                  {pillar.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
