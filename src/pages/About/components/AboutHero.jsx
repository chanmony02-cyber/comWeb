import { motion, useReducedMotion } from "framer-motion";
import VHTLogo from "@/assets/images/VHT_Logo.png";
import { siteConfig } from "@/config/siteConfig";

const FOCUS_POINTS = [
  {
    label: "Reliability",
    top: "18%",
    left: "50%",
    delay: 0,
  },
  {
    label: "Safety",
    top: "48%",
    left: "84%",
    delay: 0.2,
  },
  {
    label: "Efficiency",
    top: "80%",
    left: "50%",
    delay: 0.4,
  },
  {
    label: "Innovation",
    top: "48%",
    left: "16%",
    delay: 0.6,
  },
];

const SERVICE_TAGS = [
  "Electrical Power Grid",
  "City Infrastructure",
  "Smart Agriculture",
];

const NEON_STROKES = [
  {
    className: "top-[23%] left-[29%] h-[2px] w-[18%] rotate-[-18deg]",
    delay: 0,
  },
  {
    className: "top-[31%] right-[24%] h-[2px] w-[16%] rotate-[24deg]",
    delay: 0.25,
  },
  {
    className: "bottom-[25%] left-[27%] h-[2px] w-[22%] rotate-[12deg]",
    delay: 0.5,
  },
];

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

              <motion.img
                aria-hidden="true"
                src={VHTLogo}
                alt=""
                className="absolute inset-0 m-auto h-[82%] w-[82%] object-contain select-none pointer-events-none opacity-10 blur-[0.5px]"
                animate={
                  prefersReducedMotion
                    ? undefined
                    : { rotate: [-3, 3, -3], scale: [0.98, 1.02, 0.98] }
                }
                transition={
                  prefersReducedMotion
                    ? undefined
                    : { duration: 10, repeat: Infinity, ease: "easeInOut" }
                }
              />

              {NEON_STROKES.map((stroke) => (
                <motion.div
                  key={stroke.className}
                  aria-hidden="true"
                  className={`absolute ${stroke.className} rounded-full bg-[linear-gradient(90deg,transparent,rgba(159,207,255,0.98),rgba(42,140,213,0.35),transparent)] shadow-[0_0_18px_rgba(159,207,255,0.45)]`}
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : {
                          opacity: [0.25, 1, 0.35],
                          scaleX: [0.95, 1.08, 0.98],
                          filter: [
                            "drop-shadow(0 0 2px rgba(159,207,255,0.45))",
                            "drop-shadow(0 0 10px rgba(159,207,255,0.8))",
                            "drop-shadow(0 0 3px rgba(159,207,255,0.5))",
                          ],
                        }
                  }
                  transition={
                    prefersReducedMotion
                      ? undefined
                      : {
                          duration: 3.8,
                          delay: stroke.delay,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                  }
                />
              ))}

              <motion.div
                aria-hidden="true"
                className="absolute inset-6 rounded-full border border-white/10"
                animate={prefersReducedMotion ? undefined : { rotate: 360 }}
                transition={
                  prefersReducedMotion
                    ? undefined
                    : { duration: 28, repeat: Infinity, ease: "linear" }
                }
              />
              <motion.div
                aria-hidden="true"
                className="absolute inset-16 rounded-full border border-primary-blue/25 border-dashed"
                animate={prefersReducedMotion ? undefined : { rotate: -360 }}
                transition={
                  prefersReducedMotion
                    ? undefined
                    : { duration: 22, repeat: Infinity, ease: "linear" }
                }
              />
              <motion.div
                aria-hidden="true"
                className="absolute inset-28 rounded-full border border-sky-accent/20"
                animate={
                  prefersReducedMotion
                    ? undefined
                    : { scale: [1, 1.04, 1], opacity: [0.55, 0.9, 0.55] }
                }
                transition={
                  prefersReducedMotion
                    ? undefined
                    : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
                }
              />

              <motion.div
                aria-hidden="true"
                className="absolute inset-0"
                animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
                transition={
                  prefersReducedMotion
                    ? undefined
                    : { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }
              >
                <div className="absolute inset-0 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_80px_rgba(42,140,213,0.22)]" />

                <div className="absolute inset-10 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.05)_38%,rgba(255,255,255,0)_72%)]" />

                <div className="absolute inset-[18%] flex items-center justify-center rounded-full border border-white/15 bg-[#001439]/70 shadow-[0_0_60px_rgba(0,0,0,0.35)] backdrop-blur-md">
                  <img
                    src={VHTLogo}
                    alt={`${siteConfig.name} logo`}
                    className="h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32 object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                  />
                </div>
              </motion.div>

              {FOCUS_POINTS.map((point, index) => (
                <motion.div
                  key={point.label}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ top: point.top, left: point.left }}
                  initial={false}
                  animate={
                    prefersReducedMotion
                      ? {}
                      : {
                          y: [0, -6, 0],
                          opacity: [0.7, 1, 0.7],
                        }
                  }
                  transition={
                    prefersReducedMotion
                      ? undefined
                      : {
                          duration: 4.5 + index * 0.35,
                          delay: point.delay,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                  }
                >
                  <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm shadow-lg">
                    <span className="h-2 w-2 rounded-full bg-sky-accent shadow-[0_0_12px_rgba(159,207,255,0.85)]" />
                    {point.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
