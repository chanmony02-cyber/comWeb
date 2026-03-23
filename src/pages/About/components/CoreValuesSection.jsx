// src/pages/About/components/CoreValuesSection.jsx

const ICONS = {
  quality: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-primary-blue"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0"
      />
    </svg>
  ),
  safety: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-primary-blue"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
      />
    </svg>
  ),
  accuracy: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-primary-blue"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  reliance: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-primary-blue"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
    >
      <path d="M18 21a8 8 0 0 0-16 0" />
      <circle cx="10" cy="8" r="5" />
      <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
    </svg>
  ),
  innovation: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-primary-blue"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  ),
  integrity: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-primary-blue"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0"
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
