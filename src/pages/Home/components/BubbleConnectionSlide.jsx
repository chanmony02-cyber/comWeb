import { useEffect, useMemo, useRef, useState } from "react";

const BUBBLE_LAYOUT = [
  {
    x: 41.5,
    y: 34,
    size: "clamp(11.3rem, 14vw, 13.7rem)",
    labelLines: ["Enhancing", "System", "Reliability"],
    delay: "0ms",
    glow: "radial-gradient(circle at 50% 50%, rgba(92, 199, 255, 0.34), rgba(92, 199, 255, 0.12) 42%, transparent 72%)",
  },
  {
    x: 54.6,
    y: 22.5,
    size: "clamp(11.6rem, 14.6vw, 14.1rem)",
    labelLines: ["Improving", "Operational", "Efficiency"],
    delay: "180ms",
    glow: "radial-gradient(circle at 50% 50%, rgba(110, 216, 255, 0.3), rgba(110, 216, 255, 0.1) 42%, transparent 72%)",
  },
  {
    x: 72.8,
    y: 31.5,
    size: "clamp(11.2rem, 13.8vw, 13.5rem)",
    labelLines: ["Strengthening", "Resiliency"],
    delay: "360ms",
    glow: "radial-gradient(circle at 50% 50%, rgba(82, 190, 255, 0.3), rgba(82, 190, 255, 0.1) 42%, transparent 72%)",
  },
  {
    x: 42.6,
    y: 74.8,
    size: "clamp(10.7rem, 13vw, 12.7rem)",
    labelLines: ["Ensuring", "Safety"],
    delay: "540ms",
    glow: "radial-gradient(circle at 50% 50%, rgba(116, 178, 255, 0.24), rgba(116, 178, 255, 0.08) 42%, transparent 72%)",
  },
  {
    x: 69,
    y: 79,
    size: "clamp(14.7rem, 18vw, 17.1rem)",
    labelLines: [
      "Elevating\u00A0Customer",
      "Engagement And",
      "Service Quality",
    ],
    delay: "720ms",
    glow: "radial-gradient(circle at 50% 50%, rgba(121, 211, 255, 0.28), rgba(121, 211, 255, 0.1) 42%, transparent 72%)",
  },
];

const CONNECTIONS = [
  {
    path: "M 42 34 C 46 31, 50 27, 55 23",
    runnerDurations: [5.5, 6.8],
  },
  {
    path: "M 55 23 C 61 24, 68 28, 73 31",
    runnerDurations: [5.95, 7.15],
  },
  {
    path: "M 42 34 C 39 46, 39 62, 43 75",
    runnerDurations: [6.4, 7.6],
  },
  {
    path: "M 55 23 C 50 35, 44 52, 43 75",
    runnerDurations: [6.85, 7.95],
  },
  {
    path: "M 55 23 C 61 36, 66 58, 69 79",
    runnerDurations: [7.3, 8.25],
  },
  {
    path: "M 73 31 C 74 44, 74 60, 69 79",
    runnerDurations: [7.75, 8.6],
  },
  {
    path: "M 43 75 C 51 73, 60 73, 69 79",
    runnerDurations: [8.2, 8.95],
  },
];

const MESH_LINES = [
  { points: "14,35 34,18 58,26 76,16" },
  { points: "16,60 35,44 52,56 76,46" },
  { points: "20,72 38,68 56,80 72,70" },
  { points: "28,20 34,44 48,28 60,52 78,34" },
];

const MESH_POINTS = [
  { x: 18, y: 34, size: 2.8 },
  { x: 34, y: 18, size: 2.2 },
  { x: 58, y: 27, size: 2.4 },
  { x: 75, y: 16, size: 2.2 },
  { x: 20, y: 61, size: 2.2 },
  { x: 38, y: 43, size: 2.3 },
  { x: 52, y: 56, size: 2.1 },
  { x: 76, y: 46, size: 2.6 },
  { x: 55, y: 80, size: 2.4 },
  { x: 72, y: 69, size: 2.1 },
];

const RING_SPARKLES = [
  { x: "10%", y: "66%", size: "0.28rem" },
  { x: "17%", y: "78%", size: "0.22rem" },
  { x: "28%", y: "87%", size: "0.18rem" },
  { x: "72%", y: "8%", size: "0.24rem" },
  { x: "82%", y: "18%", size: "0.2rem" },
  { x: "89%", y: "32%", size: "0.18rem" },
];

const BASE_SVG_SIZE = 100;

function scalePathX(path, scale) {
  const tokens = path.match(/[a-zA-Z]|-?\d*\.?\d+/g) || [];
  let nextIsX = true;

  return tokens
    .map((token) => {
      if (/^[a-zA-Z]$/.test(token)) {
        nextIsX = true;
        return token;
      }

      const value = Number(token);

      if (Number.isNaN(value)) {
        return token;
      }

      const scaled = nextIsX ? value * scale : value;
      nextIsX = !nextIsX;

      return Number.isInteger(scaled)
        ? String(scaled)
        : scaled.toFixed(2).replace(/\.00$/, "");
    })
    .join(" ");
}

function BubbleLabel({ bubble, className = "" }) {
  return (
    <span className={className} style={{ whiteSpace: "pre-line" }}>
      {bubble.labelLines.join("\n")}
    </span>
  );
}

function MovingDot({ path, duration, color, radius, glowRadius }) {
  return (
    <g>
      <circle r={glowRadius} fill={color} opacity="0.22">
        <animateMotion dur={duration} repeatCount="indefinite" path={path} />
      </circle>
      <circle r={radius} fill={color} opacity="0.95">
        <animateMotion dur={duration} repeatCount="indefinite" path={path} />
      </circle>
    </g>
  );
}

function BubbleNode({ bubble }) {
  const clipId = `bubble-clip-${bubble.id}`;

  return (
    <div
      className="absolute"
      style={{
        left: `${bubble.x}%`,
        top: `${bubble.y}%`,
      }}
    >
      <div className="relative -translate-x-1/2 -translate-y-1/2">
        <div
          className="absolute inset-[-16%] rounded-full blur-3xl"
          style={{ background: bubble.glow }}
        />
        <div
          className="relative isolate flex items-center justify-center rounded-full px-5 text-center text-primary-foreground shadow-[0_24px_55px_rgba(0,0,0,0.28)] animate-[bubbleFloat_9s_ease-in-out_infinite]"
          style={{
            width: bubble.size,
            height: bubble.size,
            animationDelay: bubble.delay,
          }}
        >
          <div className="absolute inset-[2%] rounded-full bg-[radial-gradient(circle_at_50%_48%,rgba(10,30,70,0.94)_0%,rgba(8,25,56,0.92)_50%,rgba(7,19,41,0.86)_69%,rgba(6,15,34,0.28)_82%,rgba(6,15,34,0)_100%)]" />
          <div
            className="absolute inset-[1%] rounded-full opacity-95 animate-[orbitalSpin_18s_linear_infinite]"
            style={{
              background:
                "conic-gradient(from 210deg, rgba(130,239,255,0.95), rgba(67,195,255,0.72), rgba(67,195,255,0.22) 30%, rgba(0,0,0,0) 52%, rgba(219,126,255,0.9) 74%, rgba(117,223,255,0.96) 100%)",
              WebkitMask:
                "radial-gradient(farthest-side, transparent calc(100% - 12px), #000 calc(100% - 8px))",
              mask: "radial-gradient(farthest-side, transparent calc(100% - 12px), #000 calc(100% - 8px))",
              filter:
                "drop-shadow(0 0 18px rgba(91, 223, 255, 0.35)) drop-shadow(0 0 22px rgba(206, 117, 255, 0.22))",
            }}
          />
          <div
            className="absolute inset-[6%] rounded-full border border-white/14"
            style={{
              boxShadow:
                "inset 0 0 24px rgba(127, 218, 255, 0.12), 0 0 26px rgba(75, 179, 255, 0.12)",
            }}
          />
          <svg
            className="absolute inset-[7%] h-[86%] w-[86%] opacity-65 mix-blend-screen"
            viewBox="0 0 100 100"
            aria-hidden="true"
          >
            <defs>
              <clipPath id={clipId}>
                <circle cx="50" cy="50" r="46" />
              </clipPath>
            </defs>
            <g clipPath={`url(#${clipId})`}>
              {MESH_LINES.map((line) => (
                <polyline
                  key={line.points}
                  points={line.points}
                  fill="none"
                  stroke="rgba(138, 224, 255, 0.2)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ))}
              {MESH_POINTS.map((point, index) => (
                <circle
                  key={`${bubble.id}-${index}`}
                  cx={point.x}
                  cy={point.y}
                  r={point.size / 2}
                  fill="rgba(149, 234, 255, 0.85)"
                />
              ))}
            </g>
          </svg>
          {RING_SPARKLES.map((sparkle, index) => (
            <span
              key={`${bubble.id}-sparkle-${index}`}
              className="absolute rounded-full bg-white/80 shadow-[0_0_12px_rgba(123,225,255,0.75)] animate-[sparkPulse_3.6s_ease-in-out_infinite]"
              style={{
                left: sparkle.x,
                top: sparkle.y,
                width: sparkle.size,
                height: sparkle.size,
                animationDelay: `${index * 240}ms`,
              }}
            />
          ))}
          <span className="absolute left-[17%] top-[15%] h-[12%] w-[12%] rounded-full bg-white/55 blur-[1px]" />
          <span className="absolute right-[16%] top-[21%] h-[8%] w-[8%] rounded-full bg-cyan-200/45 blur-[2px]" />
          <span className="absolute inset-0 z-10 flex items-center justify-center px-4 pointer-events-none">
            <span className="block max-w-[76%] text-center text-[1.04rem] md:text-[1.12rem] font-semibold leading-[1.05] uppercase font-display tracking-[0.01em]">
              <BubbleLabel bubble={bubble} />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export function BubbleConnectionSlide({ slide }) {
  const networkRef = useRef(null);
  const [svgWidth, setSvgWidth] = useState(BASE_SVG_SIZE);

  const bubbles = slide.bubbles
    .map((label, index) => ({ ...BUBBLE_LAYOUT[index], label, id: index }))
    .filter(Boolean);

  useEffect(() => {
    const updateNetworkScale = () => {
      if (!networkRef.current) return;

      const rect = networkRef.current.getBoundingClientRect();
      if (!rect.height) return;

      setSvgWidth((rect.width / rect.height) * BASE_SVG_SIZE);
    };

    updateNetworkScale();
    window.addEventListener("resize", updateNetworkScale);

    return () => window.removeEventListener("resize", updateNetworkScale);
  }, []);

  const scaledConnections = useMemo(
    () =>
      CONNECTIONS.map((connection) => ({
        ...connection,
        path: scalePathX(connection.path, svgWidth / BASE_SVG_SIZE),
      })),
    [svgWidth],
  );

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#04111f]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(141,186,255,0.18),transparent_26%),radial-gradient(circle_at_74%_28%,rgba(42,140,213,0.28),transparent_33%),radial-gradient(circle_at_83%_72%,rgba(78,175,255,0.24),transparent_30%),radial-gradient(circle_at_56%_50%,rgba(0,0,0,0.08),transparent_48%),linear-gradient(135deg,#04111f_0%,#071d33_43%,#0a3960_74%,#0d4f82_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,17,31,0.2)_0%,rgba(4,17,31,0.08)_32%,rgba(4,17,31,0)_58%,rgba(4,17,31,0.14)_100%)]" />
      <div className="absolute inset-0 opacity-22 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:68px_68px]" />

      <div className="relative z-10 flex h-full items-center">
        <div className="w-full max-w-7xl mx-auto px-6 py-10 md:px-16 lg:mx-[130px] lg:px-8">
          <div className="relative z-20 max-w-[600px]">
            <p className="mb-4 text-md tracking-[0.22em] text-sky-accent font-display md:text-lg">
              {slide.eyebrow}
            </p>
            <h1
              className="mb-6 text-4xl font-black leading-[0.98] tracking-[-0.02em] text-primary-foreground font-display md:text-5xl lg:text-[4rem]"
              style={{ whiteSpace: "pre-line" }}
            >
              {slide.title}
            </h1>
            <p className="mb-9 max-w-[540px] text-md leading-[1.65] text-primary-foreground font-sans md:text-lg">
              {slide.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {slide.buttons.map((btn) =>
                btn.variant === "primary" ? (
                  <a
                    key={btn.label}
                    href={btn.href}
                    className="inline-flex items-center justify-center rounded bg-[#3193d7] px-7 py-[13px] text-md font-semibold text-accent-foreground transition-colors duration-200 hover:bg-[#2586cc] font-display shadow-[0_10px_24px_rgba(49,147,215,0.25)]"
                  >
                    {btn.label}
                  </a>
                ) : (
                  <a
                    key={btn.label}
                    href={btn.href}
                    className="inline-flex items-center justify-center rounded border border-primary-foreground/65 px-7 py-[13px] text-md font-semibold text-primary-foreground transition-all duration-200 hover:border-primary-foreground hover:bg-primary-foreground/15 font-display"
                  >
                    {btn.label}
                  </a>
                ),
              )}
            </div>
          </div>

          <div className="sm:hidden relative z-10 mt-8 grid gap-4">
            {bubbles.map((bubble) => (
              <div
                key={bubble.label}
                className="relative overflow-hidden rounded-[30px] border border-white/10 px-5 py-5 text-center text-primary-foreground shadow-[0_0_30px_rgba(42,140,213,0.12)] backdrop-blur-md"
                style={{
                  background:
                    "radial-gradient(circle_at_15%_18%, rgba(112,224,255,0.22), transparent 18%), radial-gradient(circle_at_86%_86%, rgba(208,124,255,0.18), transparent 24%), linear-gradient(160deg, rgba(8,25,56,0.9), rgba(5,16,34,0.86))",
                }}
              >
                <div
                  className="absolute inset-0 opacity-90"
                  style={{
                    background:
                      "conic-gradient(from 220deg, rgba(121,236,255,0.9), rgba(54,188,255,0.42), rgba(0,0,0,0) 45%, rgba(216,130,255,0.78) 75%, rgba(121,236,255,0.92) 100%)",
                    WebkitMask:
                      "radial-gradient(farthest-side, transparent calc(100% - 8px), #000 calc(100% - 6px))",
                    mask: "radial-gradient(farthest-side, transparent calc(100% - 8px), #000 calc(100% - 6px))",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center px-4 pointer-events-none">
                  <div className="block max-w-[78%] text-center text-md font-semibold leading-[1.06] uppercase font-display whitespace-pre-line md:text-lg">
                    <BubbleLabel bubble={bubble} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        ref={networkRef}
        className="hidden sm:block absolute inset-0 z-0 pointer-events-none overflow-hidden"
      >
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox={`0 0 ${svgWidth} 100`}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <filter
              id="atom-connection-glow"
              x="-60%"
              y="-60%"
              width="220%"
              height="220%"
            >
              <feGaussianBlur stdDeviation="2.6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {scaledConnections.map(({ path, runnerDurations }, index) => {
            return (
              <g key={`${path}-${index}`}>
                <path
                  d={path}
                  fill="none"
                  stroke="rgba(151, 230, 255, 0.16)"
                  strokeWidth="3.4"
                  strokeLinecap="round"
                  filter="url(#atom-connection-glow)"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d={path}
                  fill="none"
                  stroke="rgba(90, 203, 255, 0.62)"
                  strokeWidth="1.05"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d={path}
                  fill="none"
                  stroke="rgba(214, 130, 255, 0.5)"
                  strokeWidth="0.6"
                  strokeLinecap="round"
                  strokeDasharray="1.4 2.8"
                  className="animate-[orbitDash_10s_linear_infinite]"
                  vectorEffect="non-scaling-stroke"
                />
                <MovingDot
                  path={path}
                  duration={`${runnerDurations[0]}s`}
                  color="rgba(169, 240, 255, 0.98)"
                  radius="0.6"
                  glowRadius="1.3"
                />
                <MovingDot
                  path={path}
                  duration={`${runnerDurations[1]}s`}
                  color="rgba(233, 146, 255, 0.98)"
                  radius="0.5"
                  glowRadius="1"
                />
              </g>
            );
          })}
        </svg>

        {bubbles.map((bubble) => (
          <BubbleNode key={bubble.label} bubble={bubble} />
        ))}
      </div>

      <style>{`
        @keyframes bubbleFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-8px) scale(1.02); }
        }

        @keyframes orbitalSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes orbitDash {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -22; }
        }

        @keyframes sparkPulse {
          0%, 100% { opacity: 0.35; transform: scale(0.85); }
          50% { opacity: 1; transform: scale(1.3); }
        }

        @keyframes runnerPulse {
          0%, 100% { opacity: 0.85; transform: scale(0.95); }
          50% { opacity: 1; transform: scale(1.08); }
        }
      `}</style>
    </div>
  );
}
