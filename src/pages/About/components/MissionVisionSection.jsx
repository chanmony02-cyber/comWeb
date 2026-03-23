// src/pages/About/components/MissionVisionSection.jsx

export function MissionVisionSection({
  eyebrow,
  title,
  subtitle,
  missionTitle,
  missionText,
  missionBullets,
  visionTitle,
  visionText,
  visionBullets,
}) {
  return (
    <section className="py-16 md:py-24 bg-section-alt">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-primary-blue text-sm font-semibold uppercase tracking-widest">
            {eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy font-display mt-2 mb-3">
            {title}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto font-sans">
            {subtitle}
          </p>
        </div>

        {/* Mission + Vision cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mission */}
          <div className=" h-full bg-card border border-border rounded-2xl p-8 xl:p-20 flex flex-col gap-5 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-primary-blue/30 transition-all duration-300">
            {/* Icon */}
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-primary-blue/10 flex items-center justify-center">
              <svg
                className="w-8 h-8 md:w-10 md:h-10 text-primary-blue"
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
            </div>
            <h3 className="text-xl md:text-3xl font-bold text-navy font-display">
              {missionTitle}
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed font-sans">
              {missionText}
            </p>
            <ul className="flex flex-col gap-2 mt-1">
              {missionBullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-base text-muted-foreground font-sans"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-blue flex-shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          {/* Vision */}
          <div className="h-full bg-card border border-border rounded-2xl p-8 xl:p-20 flex flex-col gap-5 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-primary-blue/30 transition-all duration-300">
            {/* Icon */}
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-primary-blue/10 flex items-center justify-center">
              <svg
                className="w-8 h-8 md:w-10 md:h-10 text-primary-blue"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
            <h3 className="text-xl md:text-3xl font-bold text-navy font-display">
              {visionTitle}
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed font-sans">
              {visionText}
            </p>
            <ul className="flex flex-col gap-2 mt-1">
              {visionBullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-base text-muted-foreground font-sans"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-blue flex-shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
