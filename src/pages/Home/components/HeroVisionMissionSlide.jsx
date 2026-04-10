import { memo } from "react";

/**
 * HeroVisionMissionSlide - Type 1: Vision/Mission hero with emphasized labels
 * Completely isolated component with own styling and responsive logic
 *
 * Props:
 *   - slide: { eyebrow, title, content: [{label, text}], buttons, image, overlay, emphasizeLabels }
 *   - isActive: boolean (fade in/out based on this)
 */
export const HeroVisionMissionSlide = memo(function HeroVisionMissionSlide({
  slide,
  isActive,
}) {
  return (
    <>
      {/* Background image */}
      <img
        src={slide.image}
        alt={(slide.title || "Vision & Mission").replace("\n", " ")}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${slide.overlay || ""}`}
      />

      {/* Hero content - Desktop */}
      <div className="hidden xl:flex relative z-10 h-full items-center">
        <div className="max-w-7xl mx-[200px] px-0">
          {/* Eyebrow text */}
          <p
            className={`text-sky-accent text-sm md:text-base tracking-[0.15em] mb-6 font-display transition-all duration-700 delay-100 ${
              isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            {slide.eyebrow}
          </p>

          {/* Main title - if present */}
          {slide.title && (
            <h1
              className={`text-primary-foreground font-bold leading-[1.05] mb-5 font-display transition-all duration-700 delay-150 text-5xl md:text-6xl lg:text-[4rem] ${
                isActive
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ whiteSpace: "pre-line" }}
            >
              {slide.title}
            </h1>
          )}

          {/* Vision/Mission structured content */}
          <div
            className={`mb-8 space-y-10 max-w-[800px] text-primary-foreground/90 font-sans transition-all duration-700 delay-200 ${
              isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            {slide.content &&
              slide.content.map((item) => (
                <p
                  key={item.label}
                  className="text-lg md:text-xl lg:text-xl leading-relaxed"
                >
                  {/* Emphasized label (VISION:, MISSION:, etc.) */}
                  <span
                    className={`block mb-1 font-sans ${
                      slide.emphasizeLabels
                        ? "text-sky-accent text-lg md:text-xl lg:text-5xl font-bold uppercase tracking-wide"
                        : "text-sky-accent text-sm md:text-base tracking-[0.18em]"
                    }`}
                  >
                    {item.label}
                  </span>
                  {item.text}
                </p>
              ))}
          </div>

          {/* Buttons */}
          <div
            className={`flex flex-wrap gap-3 transition-all duration-700 delay-300 ${
              isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            {(slide.buttons || []).map((btn) =>
              btn.variant === "primary" ? (
                <a
                  key={btn.label}
                  href={btn.href}
                  className="inline-flex items-center justify-center px-7 py-[11px] rounded bg-primary-blue text-accent-foreground font-semibold text-[0.95rem] font-display hover:bg-primary-blue/90 transition-colors duration-200"
                >
                  {btn.label}
                </a>
              ) : (
                <a
                  key={btn.label}
                  href={btn.href}
                  className="inline-flex items-center justify-center px-7 py-[11px] rounded border border-primary-foreground/65 text-primary-foreground font-semibold text-[0.95rem] font-display hover:bg-primary-foreground/15 hover:border-primary-foreground transition-all duration-200"
                >
                  {btn.label}
                </a>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Hero content - Mobile */}
      <div className="xl:hidden relative z-10 h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="max-w-[620px]">
            {/* Mobile eyebrow */}
            <p className="text-sky-accent text-sm tracking-[0.15em] mb-3 font-display">
              {slide.eyebrow}
            </p>

            {/* Mobile title - if present */}
            {slide.title && (
              <h1
                className="text-primary-foreground font-bold leading-[1.05] mb-5 text-3xl font-display"
                style={{ whiteSpace: "pre-line" }}
              >
                {slide.title}
              </h1>
            )}

            {/* Mobile Vision/Mission structured content */}
            <div className="mb-6 space-y-4 text-primary-foreground/90 font-sans">
              {slide.content &&
                slide.content.map((item) => (
                  <p
                    key={item.label}
                    className="text-base md:text-lg leading-relaxed"
                  >
                    {/* Mobile emphasized label */}
                    <span
                      className={`block mb-1 font-display ${
                        slide.emphasizeLabels
                          ? "text-primary-foreground text-base md:text-lg font-semibold uppercase tracking-wide"
                          : "text-sky-accent text-xs tracking-[0.18em]"
                      }`}
                    >
                      {item.label}
                    </span>
                    {item.text}
                  </p>
                ))}
            </div>

            {/* Mobile buttons */}
            <div className="flex flex-wrap gap-3">
              {(slide.buttons || []).map((btn) =>
                btn.variant === "primary" ? (
                  <a
                    key={btn.label}
                    href={btn.href}
                    className="inline-flex items-center justify-center px-6 py-[10px] rounded bg-primary-blue text-accent-foreground font-semibold text-sm font-display"
                  >
                    {btn.label}
                  </a>
                ) : (
                  <a
                    key={btn.label}
                    href={btn.href}
                    className="inline-flex items-center justify-center px-6 py-[10px] rounded border border-primary-foreground/65 text-primary-foreground font-semibold text-sm font-display"
                  >
                    {btn.label}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

HeroVisionMissionSlide.displayName = "HeroVisionMissionSlide";
