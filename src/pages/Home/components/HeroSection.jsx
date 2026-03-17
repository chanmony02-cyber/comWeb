// import { useState, useEffect, useCallback, useRef } from "react";

// const heroSlides = [
//   {
//     id: 1,
//     eyebrow: "SMART INFRASTRUCTURE",
//     title: "FUTURE-READY CITIES",
//     description:
//       "Transforming urban landscapes with intelligent electrical systems, smart metering, and sustainable energy infrastructure for modern cities.",
//     buttons: [
//       { label: "Learn More", href: "/city-infrastructure", variant: "primary" },
//       { label: "Contact Us", href: "/contact-us", variant: "outline" },
//     ],
//     image:
//       "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=80&fit=crop",
//     overlay: "from-primary/85 via-primary/55 to-accent/25",
//   },
//   {
//     id: 2,
//     eyebrow: "OUR MISSION",
//     title: "WE MAKE QUALITY",
//     description:
//       "Providing innovative electrical infrastructure solutions for utilities and enterprises. Excellence in consulting, maintenance, and inspection services.",
//     buttons: [
//       { label: "About Us", href: "/about-us", variant: "primary" },
//       { label: "Contact Us", href: "/contact-us", variant: "outline" },
//     ],
//     image:
//       "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80&fit=crop",
//     overlay: "from-primary/85 via-primary/60 to-accent/25",
//   },
//   {
//     id: 3,
//     eyebrow: "POWER DISTRIBUTION",
//     title: "RELIABLE GRID SOLUTIONS",
//     description:
//       "Building resilient power distribution networks that ensure uninterrupted electricity supply to communities and industries across the nation.",
//     buttons: [
//       {
//         label: "Explore Solutions",
//         href: "/distribution-grid",
//         variant: "primary",
//       },
//     ],
//     image:
//       "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80&fit=crop",
//     overlay: "from-primary/80 via-primary/58 to-accent/35",
//   },
// ];

// export default function HeroSection() {
//   const [current, setCurrent] = useState(0);
//   const [paused, setPaused] = useState(false);
//   const intervalRef = useRef(null);
//   const AUTO_PLAY = 5000;

//   const goTo = useCallback(
//     (i) => setCurrent((i + heroSlides.length) % heroSlides.length),
//     [],
//   );
//   const prev = useCallback(() => goTo(current - 1), [current, goTo]);
//   const next = useCallback(() => goTo(current + 1), [current, goTo]);

//   useEffect(() => {
//     if (paused) return;
//     intervalRef.current = setInterval(next, AUTO_PLAY);
//     return () => clearInterval(intervalRef.current);
//   }, [paused, next]);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "ArrowLeft") prev();
//       if (e.key === "ArrowRight") next();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [prev, next]);

//   return (
//     <section
//       className="relative w-full h-[500px] md:h-[600px] lg:h-[680px] overflow-hidden bg-navy select-none"
//       onMouseEnter={() => setPaused(true)}
//       onMouseLeave={() => setPaused(false)}
//       aria-label="Hero Slider"
//     >
//       {heroSlides.map((slide, i) => (
//         <div
//           key={slide.id}
//           className={`absolute inset-0 transition-opacity duration-700 ${
//             i === current ? "opacity-100" : "opacity-0 pointer-events-none"
//           }`}
//         >
//           <img
//             src={slide.image}
//             alt={slide.title.replace("\n", " ")}
//             className="absolute inset-0 w-full h-full object-cover"
//           />
//           <div
//             className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`}
//           />
//           {/* content */}
//           <div className="relative z-10 h-full flex items-center">
//             <div className="w-full max-w-7xl mx-auto px-8">
//               <div className="max-w-[800px]">
//                 <p
//                   className={`text-sky-accent text-sm md:text-base tracking-[0.15em] mb-3 font-display transition-all duration-700 delay-100 ${i === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
//                 >
//                   {slide.eyebrow}
//                 </p>
//                 <h1
//                   className={`text-primary-foreground font-bold leading-[1.05] mb-5 text-4xl md:text-5xl lg:text-[3.25rem] font-display transition-all duration-700 delay-150 ${i === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
//                   style={{ whiteSpace: "pre-line" }}
//                 >
//                   {slide.title}
//                 </h1>
//                 <p
//                   className={`text-primary-foreground/85 text-base md:text-[1.05rem] leading-relaxed mb-8 max-w-[470px] font-sans transition-all duration-700 delay-200 ${i === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
//                 >
//                   {slide.description}
//                 </p>
//                 <div
//                   className={`flex flex-wrap gap-3 transition-all duration-700 delay-300 ${i === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
//                 >
//                   {slide.buttons.map((btn) =>
//                     btn.variant === "primary" ? (
//                       <a
//                         key={btn.label}
//                         href={btn.href}
//                         className="inline-flex items-center justify-center px-7 py-[11px] rounded bg-primary-blue text-accent-foreground font-semibold text-[0.95rem] font-display hover:bg-primary-blue/90 transition-colors duration-200"
//                       >
//                         {btn.label}
//                       </a>
//                     ) : (
//                       <a
//                         key={btn.label}
//                         href={btn.href}
//                         className="inline-flex items-center justify-center px-7 py-[11px] rounded border border-primary-foreground/65 text-primary-foreground font-semibold text-[0.95rem] font-display hover:bg-primary-foreground/15 hover:border-primary-foreground transition-all duration-200"
//                       >
//                         {btn.label}
//                       </a>
//                     ),
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* Arrows */}
//       {[
//         ["prev", prev],
//         ["next", next],
//       ].map(([dir, fn]) => (
//         <div
//           key={dir}
//           className={`absolute ${dir === "prev" ? "left-4 md:left-[100px]" : "right-4 md:right-[100px]"} top-1/2 -translate-y-1/2 z-20`}
//         >
//           <button
//             onClick={fn}
//             aria-label={`${dir === "prev" ? "Previous" : "Next"} slide`}
//             className="w-10 h-10 rounded-full border border-primary-foreground/40 bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/25 hover:border-primary-foreground/70 transition-all duration-200 backdrop-blur-sm"
//           >
//             <svg
//               width="18"
//               height="18"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               {dir === "prev" ? (
//                 <polyline points="15 18 9 12 15 6" />
//               ) : (
//                 <polyline points="9 18 15 12 9 6" />
//               )}
//             </svg>
//           </button>
//         </div>
//       ))}

//       {/* Dots */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
//         {heroSlides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => goTo(i)}
//             aria-label={`Slide ${i + 1}`}
//             className={`rounded-full transition-all duration-300 ${i === current ? "w-8 h-2.5 bg-primary-blue" : "w-2.5 h-2.5 bg-primary-foreground/50 hover:bg-primary-foreground/80"}`}
//           />
//         ))}
//       </div>

//       {/* Progress bar */}
//       {!paused && (
//         <div
//           key={`bar-${current}`}
//           className="absolute bottom-0 left-0 h-[3px] bg-primary-blue z-30"
//           style={{ animation: `heroBar ${AUTO_PLAY}ms linear forwards` }}
//         />
//       )}
//       <style>{`@keyframes heroBar { from{width:0%} to{width:100%} }`}</style>
//     </section>
//   );
// }

////////////////////// new verison code

import { useState, useEffect, useCallback, useRef } from "react";
import { heroSlides } from "@/data/heroSlides/heroSlides";

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);
  const AUTO_PLAY = 5000;

  const goTo = useCallback(
    (i) => setCurrent((i + heroSlides.length) % heroSlides.length),
    [],
  );
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(next, AUTO_PLAY);
    return () => clearInterval(intervalRef.current);
  }, [paused, next]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  };
  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    else if (diff < -50) prev();
    setPaused(false);
  };

  return (
    <section
      className="relative w-full h-[500px] md:h-[600px] lg:h-[680px] overflow-hidden bg-navy select-none"
      // onMouseEnter={() => setPaused(true)}
      // onMouseLeave={() => setPaused(false)}
      aria-label="Hero Slider"
    >
      {/* Desktop: opacity-based slides */}
      <div className="hidden xl:block absolute inset-0">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title.replace("\n", " ")}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div
              className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`}
            />

            <div className="relative z-10 h-full flex items-center">
              <div className="w-full max-w-7xl mx-[130px] px-8 md:px-16">
                <div className="max-w-[800px]">
                  <p
                    className={`text-sky-accent text-sm md:text-base tracking-[0.15em] mb-3 font-display transition-all duration-700 delay-100 ${i === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                  >
                    {slide.eyebrow}
                  </p>
                  <h1
                    className={`text-primary-foreground font-bold leading-[1.05] mb-5 text-4xl md:text-5xl lg:text-[3.25rem] font-display transition-all duration-700 delay-150 ${i === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {slide.title}
                  </h1>
                  <p
                    className={`text-primary-foreground/85 text-base md:text-[1.05rem] leading-relaxed mb-8 max-w-[470px] font-sans transition-all duration-700 delay-200 ${i === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                  >
                    {slide.description}
                  </p>
                  <div
                    className={`flex flex-wrap gap-3 transition-all duration-700 delay-300 ${i === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                  >
                    {slide.buttons.map((btn) =>
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
          </div>
        ))}
      </div>

      {/* Mobile: swipe-based slides */}
      <div
        className="xl:hidden absolute inset-0"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {heroSlides.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title.replace("\n", " ")}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`}
            />
            <div className="relative z-10 h-full flex items-center">
              <div className="w-full max-w-7xl mx-auto px-6">
                <div className="max-w-[580px]">
                  <p className="text-sky-accent text-sm tracking-[0.15em] mb-3 font-display">
                    {slide.eyebrow}
                  </p>
                  <h1
                    className="text-primary-foreground font-bold leading-[1.05] mb-5 text-3xl font-display"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {slide.title}
                  </h1>
                  <p className="text-primary-foreground/85 text-sm leading-relaxed mb-6 max-w-[470px] font-sans">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {slide.buttons.map((btn) =>
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
          </div>
        ))}
      </div>

      {/* Arrows â€“ desktop only */}
      {[
        ["prev", prev],
        ["next", next],
      ].map(([dir, fn]) => (
        <div
          key={dir}
          className={`hidden xl:block absolute ${dir === "prev" ? "left-4 md:left-6" : "right-4 md:right-6"} top-1/2 -translate-y-1/2 z-20`}
        >
          <button
            onClick={fn}
            aria-label={`${dir === "prev" ? "Previous" : "Next"} slide`}
            className="w-10 h-10 rounded-full border border-primary-foreground/40 bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/25 hover:border-primary-foreground/70 transition-all duration-200 backdrop-blur-sm px-px mx-[80px]"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {dir === "prev" ? (
                <polyline points="15 18 9 12 15 6" />
              ) : (
                <polyline points="9 18 15 12 9 6" />
              )}
            </svg>
          </button>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${i === current ? "w-8 h-2.5 bg-primary-blue" : "w-2.5 h-2.5 bg-primary-foreground/50 hover:bg-primary-foreground/80"}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      {!paused && (
        <div
          key={`bar-${current}`}
          className="absolute bottom-0 left-0 h-[3px] bg-primary-blue z-30"
          style={{ animation: `heroBar ${AUTO_PLAY}ms linear forwards` }}
        />
      )}
      <style>{`@keyframes heroBar { from{width:0%} to{width:100%} } .scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
}
