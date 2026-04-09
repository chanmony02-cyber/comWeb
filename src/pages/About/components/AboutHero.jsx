import { motion, useReducedMotion } from "framer-motion";
import VHTLogo from "@/assets/images/VHT_Logo - Stroke.png";
import { siteConfig } from "@/config/siteConfig";

const SERVICE_TAGS = [
  "Distribution Grid",
  "City Infrastructure",
  "Agriculture",
];

// Atom Orbit
const ATOM_ORBITS = [
  {
    inset: "inset-[8%]",
    tilt: "-16deg",
    squeeze: 0.64,
    duration: 16,
    reverse: false,
    particle: {
      tone: "bg-sky-accent",
      size: "h-3.5 w-3.5",
      glow: "shadow-[0_0_18px_rgba(159,207,255,0.95)]",
    },
  },
  {
    inset: "inset-[16%]",
    tilt: "28deg",
    squeeze: 0.78,
    duration: 20,
    reverse: true,
    particle: {
      tone: "bg-white",
      size: "h-3 w-3",
      glow: "shadow-[0_0_16px_rgba(255,255,255,0.9)]",
    },
  },
  {
    inset: "inset-[24%]",
    tilt: "8deg",
    squeeze: 0.9,
    duration: 24,
    reverse: false,
    particle: {
      tone: "bg-primary-blue",
      size: "h-2.5 w-2.5",
      glow: "shadow-[0_0_14px_rgba(42,140,213,0.95)]",
    },
  },
];

const SPARKS = [
  { top: "18%", left: "32%", rotate: "-28deg", width: "w-10", delay: 0 },
  { top: "28%", left: "78%", rotate: "18deg", width: "w-12", delay: 0.35 },
  { top: "70%", left: "24%", rotate: "32deg", width: "w-10", delay: 0.7 },
  { top: "79%", left: "66%", rotate: "-20deg", width: "w-14", delay: 1.05 },
];

const MICRO_SPARKS = [
  { top: "14%", left: "42%", delay: 0.1 },
  { top: "22%", left: "71%", delay: 0.55 },
  { top: "35%", left: "86%", delay: 0.25 },
  { top: "62%", left: "84%", delay: 0.85 },
  { top: "76%", left: "56%", delay: 0.4 },
  { top: "68%", left: "18%", delay: 1.15 },
  { top: "40%", left: "10%", delay: 0.7 },
  { top: "24%", left: "18%", delay: 1.35 },
];

// const ELECTRIC_SPARKS = [
//   {
//     top: "6%",
//     left: "14%",
//     rotate: "-18deg",
//     width: "w-28",
//     height: "h-6",
//     delay: 0,
//     d: "M2 18L10 12L16 20L23 9L30 15L38 7L46 18L54 12L61 20L69 11L77 16L86 9L98 14",
//   },
//   {
//     top: "14%",
//     right: "7%",
//     rotate: "14deg",
//     width: "w-24",
//     height: "h-5",
//     delay: 0.4,
//     d: "M3 14L11 8L18 18L26 10L33 15L41 6L49 13L58 9L66 16L74 8L83 14L91 7L98 11",
//   },
//   {
//     bottom: "10%",
//     left: "18%",
//     rotate: "20deg",
//     width: "w-20",
//     height: "h-5",
//     delay: 0.8,
//     d: "M2 16L9 11L15 19L23 9L30 17L38 8L46 15L54 10L61 19L69 12L77 18L85 10L98 16",
//   },
//   {
//     bottom: "18%",
//     right: "10%",
//     rotate: "-12deg",
//     width: "w-26",
//     height: "h-6",
//     delay: 1.1,
//     d: "M1 16L9 9L17 18L24 12L31 20L39 10L47 17L55 8L63 15L71 10L80 18L88 11L98 15",
//   },
// ];

export function AboutHero({ title, subtitle }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-navy py-16 md:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(42,140,213,0.35),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(159,207,255,0.2),transparent_26%),radial-gradient(circle_at_50%_85%,rgba(255,255,255,0.08),transparent_24%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,20,57,0.96),rgba(0,20,57,0.78))]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:72px_72px]"
      />

      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="text-center lg:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary-blue backdrop-blur-sm">
              {siteConfig.name}
            </div>

            <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl font-display mb-5 leading-tight">
              {title}
            </h1>
            <p className="text-white/85 text-md md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans">
              {subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              {SERVICE_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs sm:text-sm font-medium text-white/90 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[520px] items-center justify-center">
            <div className="relative aspect-square w-full max-w-[460px]">
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(42,140,213,0.22)_0%,rgba(42,140,213,0.06)_42%,transparent_72%)] blur-2xl" />
              <div className="absolute inset-[9%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_38%,transparent_74%)] blur-xl" />

              {/* // Atom Orbit */}
              {ATOM_ORBITS.map((orbit) => (
                <motion.div
                  key={`${orbit.inset}-${orbit.tilt}`}
                  aria-hidden="true"
                  className="absolute inset-0"
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : {
                          rotate: orbit.reverse ? -360 : 360,
                          opacity: [0.55, 0.95, 0.65],
                        }
                  }
                  transition={
                    prefersReducedMotion
                      ? undefined
                      : {
                          duration: orbit.duration,
                          repeat: Infinity,
                          ease: "linear",
                        }
                  }
                >
                  <div
                    className={`absolute ${orbit.inset} rounded-full border border-white/12 bg-white/5`}
                    style={{
                      transform: `rotate(${orbit.tilt}) scaleY(${orbit.squeeze})`,
                    }}
                  >
                    <div className="absolute inset-0 rounded-full shadow-[0_0_22px_rgba(159,207,255,0.18)]" />

                    <span
                      className={`absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 ${orbit.particle.size} rounded-full ${orbit.particle.tone} ${orbit.particle.glow}`}
                    />

                    <span className="absolute right-[18%] top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-white/75 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                  </div>
                </motion.div>
              ))}

              <motion.div
                aria-hidden="true"
                className="absolute inset-0"
                animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }}
                transition={
                  prefersReducedMotion
                    ? undefined
                    : { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }
              >
                <div className="absolute inset-[14%] flex items-center justify-center rounded-full bg-[#001439]/70 shadow-[0_0_0_1px_rgba(255,255,255,0.9),0_0_36px_rgba(159,207,255,0.55),0_0_90px_rgba(255,255,255,0.22)] backdrop-blur-md">
                  <img
                    src={VHTLogo}
                    alt={`${siteConfig.name} logo`}
                    className="h-28 w-28 sm:h-32 sm:w-32 lg:h-40 lg:w-40 object-contain drop-shadow-[0_0_28px_rgba(255,255,255,0.35)]"
                  />
                </div>
              </motion.div>

              {SPARKS.map((spark) => (
                <motion.div
                  key={`${spark.top}-${spark.left}`}
                  aria-hidden="true"
                  className="absolute flex items-center gap-1"
                  style={{
                    top: spark.top,
                    left: spark.left,
                    transform: `rotate(${spark.rotate})`,
                  }}
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : {
                          opacity: [0.18, 1, 0.25],
                          scale: [0.85, 1.15, 0.9],
                        }
                  }
                  transition={
                    prefersReducedMotion
                      ? undefined
                      : {
                          duration: 2.6,
                          delay: spark.delay,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                  }
                >
                  <span
                    className={`h-px ${spark.width} bg-gradient-to-r from-transparent via-white/95 to-transparent`}
                    style={{
                      filter: "drop-shadow(0 0 8px rgba(255,255,255,0.95))",
                    }}
                  />
                  <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.95)]" />
                </motion.div>
              ))}

              {MICRO_SPARKS.map((spark) => (
                <motion.span
                  key={`micro-${spark.top}-${spark.left}`}
                  aria-hidden="true"
                  className="absolute h-1 w-1 rounded-full bg-white/95 shadow-[0_0_12px_rgba(255,255,255,0.95)]"
                  style={{ top: spark.top, left: spark.left }}
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : {
                          opacity: [0.1, 1, 0.15],
                          scale: [0.6, 1.4, 0.8],
                        }
                  }
                  transition={
                    prefersReducedMotion
                      ? undefined
                      : {
                          duration: 1.8,
                          delay: spark.delay,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                  }
                />
              ))}

              {/* {ELECTRIC_SPARKS.map((spark) => (
                <motion.svg
                  key={`electric-${spark.delay}-${spark.rotate}`}
                  aria-hidden="true"
                  viewBox="0 0 100 40"
                  className={`absolute ${spark.width} ${spark.height} overflow-visible`}
                  style={{
                    top: spark.top,
                    right: spark.right,
                    bottom: spark.bottom,
                    left: spark.left,
                    transform: `rotate(${spark.rotate})`,
                  }}
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : {
                          opacity: [0.1, 1, 0.15],
                          scale: [0.9, 1.05, 0.92],
                        }
                  }
                  transition={
                    prefersReducedMotion
                      ? undefined
                      : {
                          duration: 1.6,
                          delay: spark.delay,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                  }
                >
                  <path
                    d={spark.d}
                    fill="none"
                    stroke="rgba(159,207,255,0.9)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.35"
                    style={{
                      filter: "drop-shadow(0 0 10px rgba(159,207,255,0.9))",
                    }}
                  />
                  <path
                    d={spark.d}
                    fill="none"
                    stroke="rgba(255,255,255,0.98)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      filter:
                        "drop-shadow(0 0 6px rgba(159,207,255,0.95)) drop-shadow(0 0 12px rgba(255,255,255,0.7))",
                    }}
                  />
                </motion.svg>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
