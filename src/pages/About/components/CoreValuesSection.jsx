// src/pages/About/components/CoreValuesSection.jsx

const ICONS = {
  quality: (
    <svg
      className="w-6 h-6 text-primary-blue"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s-6.716-4.422-8.485-8.104C2.062 10.12 3.5 7.5 6.5 7.5c1.7 0 3.015.89 3.8 2.043C11.085 8.39 12.4 7.5 14.1 7.5c3 0 4.438 2.62 2.985 5.396C15.716 16.578 12 21 12 21Z"
      />
    </svg>
  ),
  safety: (
    <svg
      className="w-6 h-6 text-primary-blue"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3l7 3v5c0 4.418-3.134 8.418-7 10-3.866-1.582-7-5.582-7-10V6l7-3Z"
      />
    </svg>
  ),
  accuracy: (
    <svg
      className="w-6 h-6 text-primary-blue"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
    >
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
    </svg>
  ),
  reliance: (
    <svg
      className="w-6 h-6 text-primary-blue"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 11a3 3 0 1 0-6 0m6 0a3 3 0 0 1 3 3v2m-3-5a3 3 0 0 0-3 3v2m0-5a3 3 0 1 1 6 0m-9 0a3 3 0 1 0-6 0m6 0a3 3 0 0 1 3 3v2m-3-5a3 3 0 0 0-3 3v2"
      />
    </svg>
  ),
  innovation: (
    <svg
      className="w-6 h-6 text-primary-blue"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 18h6m-5 3h4m-2-3v-2a5 5 0 1 1 2-9.584M10 6.5 9 5m6.5 1.5L15 5M6.5 12H5m14 0h-1.5"
      />
    </svg>
  ),
  integrity: (
    <svg
      className="w-6 h-6 text-primary-blue"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s-6.716-4.422-8.485-8.104C2.062 10.12 3.5 7.5 6.5 7.5c1.7 0 3.015.89 3.8 2.043C11.085 8.39 12.4 7.5 14.1 7.5c3 0 4.438 2.62 2.985 5.396C15.716 16.578 12 21 12 21Z"
      />
    </svg>
  ),
};

export function CoreValuesSection({ eyebrow, title, subtitle, items }) {
  return (
    <section className="py-16 md:py-24 bg-background">
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

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-card border border-border rounded-2xl px-7 py-16 flex-col gap-4 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-primary-blue/30 transition-all duration-300 flex justify-center items-center"
            >
              <div className="w-14 h-14 rounded-xl bg-sky-accent/20 flex items-center justify-center flex-shrink-0">
                {ICONS[item.icon] ?? (
                  <div className="w-8 h-8 rounded-full bg-primary-blue" />
                )}
              </div>
              <h3 className="text-2xl font-bold text-navy font-display">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-md leading-relaxed font-sans text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
