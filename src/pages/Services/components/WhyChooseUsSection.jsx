// src/pages/Services/components/WhyChooseUsSection.jsx

// Checkmark icon — inline SVG, no external dependency needed
function CheckIcon() {
  return (
    <svg
      className="w-10 h-10 text-primary-blue flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
    >
      <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 12l3 3 6-6" />
    </svg>
  );
}

export function WhyChooseUsSection({ image, title, items }) {
  return (
    <section className="py-16 md:py-20 bg-section-alt">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — image */}
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src={image}
              alt={title}
              className="w-full h-72 md:h-96 object-cover"
            />
          </div>

          {/* Right — title + 2x2 grid */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy font-display mb-10">
              {title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {items.map((item) => (
                <div key={item.id} className="flex flex-col items-center text-center gap-3">
                  <CheckIcon />
                  <p className="text-base font-bold text-navy font-display">{item.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
