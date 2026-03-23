// src/pages/About/components/WhyPartnerSection.jsx

const PARTNER_ICONS = {
  certified: (
    <svg
      className="w-5 h-5 text-primary-blue"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    </svg>
  ),
  onTime: (
    <svg
      className="w-5 h-5 text-primary-blue"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <circle cx="12" cy="12" r="8" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8v4l3 2"
      />
    </svg>
  ),
  support: (
    <svg
      className="w-5 h-5 text-primary-blue"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 12a8 8 0 0 1 16 0m-14 0v3a2 2 0 0 0 2 2h1m10-5v3a2 2 0 0 1-2 2h-1"
      />
    </svg>
  ),
  technology: (
    <svg
      className="w-5 h-5 text-primary-blue"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m13 2-2 6h4l-2 6m7-3a8 8 0 1 1-14.9 3.5"
      />
    </svg>
  ),
  custom: (
    <svg
      className="w-5 h-5 text-primary-blue"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v3m0 12v3m9-9h-3M6 12H3m14.95-6.95-2.12 2.12M9.17 14.83l-2.12 2.12m0-9.78 2.12 2.12m7.66 7.66 2.12 2.12"
      />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  quality: (
    <svg
      className="w-5 h-5 text-primary-blue"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3l7 3v5c0 4.418-3.134 8.418-7 10-3.866-1.582-7-5.582-7-10V6l7-3Z"
      />
    </svg>
  ),
  headset: (
    <svg
      className="w-5 h-5 text-primary-blue"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 12a8 8 0 0 1 16 0m-14 0v4a2 2 0 0 0 2 2h1m10-6v4a2 2 0 0 1-2 2h-1"
      />
    </svg>
  ),
};

export function WhyPartnerSection({
  eyebrow,
  title,
  highlight,
  subtitle,
  image,
  items,
  helpCard,
}) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-10 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-blue text-white text-md font-semibold mb-4 font-sans">
              {eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy font-display mb-4">
              {title}{" "}
              {highlight ? (
                <span className="text-primary-blue">{highlight}</span>
              ) : null}
            </h2>
            <p className="text-muted-foreground text-md md:text-lg max-w-2xl font-sans">
              {subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {items.map((item) => (
                <div key={item.id} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center flex-shrink-0">
                    {PARTNER_ICONS[item.icon] ?? PARTNER_ICONS.quality}
                  </div>
                  <div>
                    <h3 className="text-md font-semibold text-navy font-display mb-1">
                      {item.title}
                    </h3>
                    <p className="text-md text-muted-foreground leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative pb-10">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src={image}
                alt={title}
                className="w-full h-80 md:h-[460px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 bg-card border border-border rounded-2xl shadow-lg p-5 max-w-[260px]">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-primary-blue/10 flex items-center justify-center">
                  {PARTNER_ICONS.headset}
                </span>
                <div>
                  <p className="text-md font-semibold text-navy font-display">
                    {helpCard.title}
                  </p>
                  <p className="text-md font-semibold text-primary-blue">
                    {helpCard.subtitle}
                  </p>
                </div>
              </div>
              <p className="text-md text-muted-foreground mt-3 font-sans leading-relaxed">
                {helpCard.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
