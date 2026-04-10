import { memo } from "react";

/**
 * HeroDigitalTransformSlide - Type 2: Digital Transformation hero
 * Title + description + divider line style
 * Completely isolated component with own styling and responsive logic
 *
 * Props:
 *   - slide: { eyebrow, title, description, useSecondaryColor, preventWrap, buttons, image, overlay }
 *   - isActive: boolean (fade in/out based on this)
 */
export const HeroDigitalTransformSlide = memo(
  function HeroDigitalTransformSlide({ slide, isActive }) {
    return (
      <>
        {/* Background image */}
        <img
          src={slide.image}
          alt={(slide.title || "Digital Transformation").replace("\n", " ")}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${slide.overlay || ""}`}
        />

        {/* Hero content - Desktop */}
        <div className="hidden xl:flex relative z-10 h-full items-center">
          <div className="max-w-7xl mx-[200px] px-0">
            <div className={`max-w-[900px]`}>
              {/* Eyebrow text */}
              <p
                className={`text-sky-accent text-sm md:text-base tracking-[0.15em] mb-6 font-display transition-all duration-700 delay-100 ${
                  isActive
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
              >
                {slide.eyebrow}
              </p>

              {/* Main title */}
              {slide.title && (
                <h1
                  className={`text-primary-foreground font-bold leading-[1.05] mb-5 font-display transition-all duration-700 delay-150 text-4xl md:text-3xl lg:text-[39px] ${
                    isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                  style={{ whiteSpace: "pre-line" }}
                >
                  {slide.title}
                </h1>
              )}

              {/* Description with optional divider */}
              <div
                className={`mb-8 ${
                  slide.preventWrap ? "max-w-[900px]" : "max-w-[580px]"
                } transition-all duration-700 delay-200 ${
                  isActive
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
              >
                <p
                  className={`${
                    slide.useSecondaryColor
                      ? "text-sky-accent"
                      : "text-primary-foreground/85"
                  } text-base md:text-xl leading-relaxed font-sans ${
                    slide.preventWrap ? "whitespace-normal break-words" : ""
                  }`}
                >
                  {slide.description}
                </p>
              </div>

              {/* Buttons */}
              <div
                className={`flex flex-wrap gap-3 transition-all duration-700 delay-300 ${
                  isActive
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
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
        </div>

        {/* Hero content - Mobile */}
        <div className="xl:hidden relative z-10 h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className={`max-w-[580px] ${slide.preventWrap ? "" : ""}`}>
              {/* Mobile eyebrow */}
              <p className="text-sky-accent text-sm tracking-[0.15em] mb-3 font-display">
                {slide.eyebrow}
              </p>

              {/* Mobile title */}
              {slide.title && (
                <h1
                  className="text-primary-foreground font-bold leading-[1.05] mb-5 text-3xl font-display"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {slide.title}
                </h1>
              )}

              {/* Mobile description */}
              <p
                className={`${
                  slide.useSecondaryColor
                    ? "text-sky-accent"
                    : "text-primary-foreground/85"
                } text-sm leading-relaxed mb-6 ${
                  slide.preventWrap ? "max-w-full" : "max-w-[470px]"
                } font-sans ${
                  slide.preventWrap ? "whitespace-normal break-words" : ""
                }`}
              >
                {slide.description}
              </p>

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
  },
);

HeroDigitalTransformSlide.displayName = "HeroDigitalTransformSlide";
