export const bubbleLayout = [
  {
    x: 41.5,
    y: 34,
    size: "clamp(11.3rem, 14vw, 13.7rem)",
    labelLines: ["Enhancing", "System", "Reliability"],
    delay: "0ms",
    glow: "radial-gradient(circle at 50% 50%, rgba(92, 199, 255, 0.34), rgba(92, 199, 255, 0.12) 42%, transparent 72%)",
  },
  {
    x: 56,
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
    y: 76,
    size: "clamp(14.7rem, 18vw, 17.1rem)",
    labelLines: ["Elevating\u00A0Customer", "Engagement And", "Service Quality"],
    delay: "720ms",
    glow: "radial-gradient(circle at 50% 50%, rgba(121, 211, 255, 0.28), rgba(121, 211, 255, 0.1) 42%, transparent 72%)",
  },
];

export const bubbleConnections = [
  {
    path: "M 42 34 C 46 34, 49 28, 55 23",
    runnerDurations: [5.5, 6.8],
  },
  {
    path: "M 55 23 C 61 26, 58 29, 73 31",
    runnerDurations: [5.95, 7.15],
  },
  {
    path: "M 42 34 C 39 45, 39 61, 43 75",
    runnerDurations: [6.4, 7.6],
  },
  {
    path: "M 55 23 C 49 38, 56 46, 43 75",
    runnerDurations: [6.85, 7.95],
  },
  {
    path: "M 55 23 C 61 37, 66 58, 69 79",
    runnerDurations: [7.3, 8.25],
  },
  {
    path: "M 73 31 C 74 43, 74 60, 69 79",
    runnerDurations: [7.75, 8.6],
  },
  {
    path: "M 43 75 C 50 72, 60 72, 69 79",
    runnerDurations: [8.2, 8.95],
  },
];

export const bubbleMeshLines = [
  { points: "14,35 34,18 58,26 76,16" },
  { points: "16,60 35,44 52,56 76,46" },
  { points: "20,72 38,68 56,80 72,70" },
  { points: "28,20 34,44 48,28 60,52 78,34" },
];

export const bubbleMeshPoints = [
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

export const bubbleRingSparkles = [
  { x: "10%", y: "66%", size: "0.28rem" },
  { x: "17%", y: "78%", size: "0.22rem" },
  { x: "28%", y: "87%", size: "0.18rem" },
  { x: "72%", y: "8%", size: "0.24rem" },
  { x: "82%", y: "18%", size: "0.2rem" },
  { x: "89%", y: "32%", size: "0.18rem" },
];

export const bubbleConnectionBaseSvgSize = 100;
