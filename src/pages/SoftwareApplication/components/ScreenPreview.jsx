import VHTLogo from "@/assets/images/VHT_Logo.png";
import sampleMap from "@/assets/images/sampleMap.png";
import { cn } from "@/lib/utils";

const PANEL_CLASS =
  "rounded-[24px] bg-white/90 border border-white/80 p-4 text-navy shadow-sm";

export default function ScreenPreview({ type, className = "" }) {
  if (type === "login") {
    return (
      <div className={cn(PANEL_CLASS, className)}>
        <div className="flex items-center justify-center">
          <div className="h-14 w-14 rounded-full bg-sky-accent/70 flex items-center justify-center shadow-inner">
            <img
              src={VHTLogo}
              alt="VHT logo"
              className="h-8 w-8 object-contain"
            />
          </div>
        </div>
        <div className="mt-4 space-y-3">
          <div className="h-9 rounded-full bg-muted/70 border border-border/60 flex items-center px-3 text-[10px] text-muted-foreground">
            Select tenant
          </div>
          <div className="h-9 rounded-full bg-navy text-white text-[10px] font-semibold flex items-center justify-center tracking-wide">
            LOGIN
          </div>
          <div className="text-center text-[10px] text-muted-foreground">
            Version 1.x
          </div>
        </div>
      </div>
    );
  }

  if (type === "dashboard") {
    // Donut chart component with segment labels
    const DonutChart = ({ green, red, orange = 0 }) => {
      const total = green + red + orange;
      const greenPercent = (green / total) * 100;
      const redPercent = (red / total) * 100;
      const orangePercent = (orange / total) * 100;

      // Calculate segment positions (0° is top due to -90deg rotation)
      const greenEnd = greenPercent * 3.6;
      const redEnd = greenEnd + redPercent * 3.6;

      // Text label positions at segment midpoints
      const textRadius = 42;

      // Green segment midpoint angle
      const greenMid = (greenPercent * 3.6) / 2;
      const greenAngleRad = ((greenMid + 90) * Math.PI) / 180;
      const greenX = 50 + textRadius * Math.cos(greenAngleRad);
      const greenY = 50 + textRadius * Math.sin(greenAngleRad);

      // Red segment midpoint angle
      const redMid = greenEnd + (redPercent * 3.6) / 2;
      const redAngleRad = ((redMid + 90) * Math.PI) / 180;
      const redX = 50 + textRadius * Math.cos(redAngleRad);
      const redY = 50 + textRadius * Math.sin(redAngleRad);

      const circumference = 35 * 2 * Math.PI;

      return (
        <svg
          viewBox="0 0 100 100"
          className="w-12 h-12"
          style={{ transform: "rotate(-90deg)" }}
        >
          {/* Green segment */}
          <circle
            cx="50"
            cy="50"
            r="35"
            fill="none"
            stroke="#22c55e"
            strokeWidth="18"
            strokeDasharray={`${(greenPercent / 100) * circumference} ${circumference}`}
          />
          {/* Red segment */}
          <circle
            cx="50"
            cy="50"
            r="35"
            fill="none"
            stroke="#ef4444"
            strokeWidth="18"
            strokeDasharray={`${(redPercent / 100) * circumference} ${circumference}`}
            strokeDashoffset={-((greenPercent / 100) * circumference)}
          />
          {/* Orange segment */}
          {orange > 0 && (
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="#f97316"
              strokeWidth="18"
              strokeDasharray={`${(orangePercent / 100) * circumference} ${circumference}`}
              strokeDashoffset={
                -((greenPercent / 100 + redPercent / 100) * circumference)
              }
            />
          )}
          {/* Center circle (white background) */}
          <circle cx="50" cy="50" r="20" fill="white" />
        </svg>
      );
    };

    return (
      <div className={cn(PANEL_CLASS, className)}>
        {/* Header */}
        <div className="h-6 rounded-lg bg-sky-accent/70 flex items-center justify-center text-[10px] font-semibold">
          Dashboard
        </div>

        {/* Active Devices */}
        <div className="mt-3">
          <h4 className="text-[10px] font-semibold mb-2">Active Devices</h4>
          <div className="rounded-2xl bg-section-alt p-3 border border-white">
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-col gap-2 text-[8px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Active
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  Inactive
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  Never seen
                </span>
              </div>
              <DonutChart green={31} red={7} orange={5} />
            </div>
          </div>
        </div>

        {/* Active Gateways */}
        <div className="mt-3">
          <h4 className="text-[10px] font-semibold mb-2">Active Gateways</h4>
          <div className="rounded-2xl bg-section-alt p-3 border border-white">
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-col gap-2 text-[8px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Online
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  Offline
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  Never seen
                </span>
              </div>
              <DonutChart green={2} red={1} orange={2} />
            </div>
          </div>
        </div>

        {/* Map View */}
        <div className="mt-3">
          <h4 className="text-[10px] font-semibold mb-2">Map View</h4>
          <div className="flex gap-2 mb-2">
            <div className="flex-1 h-5 rounded-lg bg-sky-accent/40 border border-white flex items-center justify-center text-[8px] text-navy font-semibold">
              All
            </div>
            <div className="flex-1 h-5 rounded-lg bg-sky-accent/40 border border-white flex items-center justify-center text-[8px] text-navy font-semibold">
              All
            </div>
          </div>
          <div
            className="rounded-lg border border-white overflow-hidden h-16 relative"
            style={{
              backgroundImage: `url(${sampleMap})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Fallback gradient if image fails */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-green-100 opacity-0 hover:opacity-10 transition-opacity" />

            {/* Location markers */}
            <div className="absolute inset-0">
              {/* Active device */}
              <div
                className="absolute flex items-center justify-center"
                style={{ left: "20%", top: "25%" }}
              >
                <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-white shadow-lg" />
              </div>
              {/* Active device */}
              <div
                className="absolute flex items-center justify-center"
                style={{ left: "70%", top: "20%" }}
              >
                <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-white shadow-lg" />
              </div>
              {/* Inactive device */}
              <div
                className="absolute flex items-center justify-center"
                style={{ left: "45%", top: "50%" }}
              >
                <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-white shadow-lg" />
              </div>
              {/* Active gateway */}
              <div
                className="absolute flex items-center justify-center"
                style={{ left: "65%", top: "68%" }}
              >
                <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-white shadow-lg" />
              </div>
              {/* Offline device */}
              <div
                className="absolute flex items-center justify-center"
                style={{ left: "30%", top: "75%" }}
              >
                <div className="w-4 h-4 rounded-full bg-orange-400 border-2 border-white shadow-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-3 flex items-center justify-around pt-2 border-t border-white/50 text-[8px]">
          {/* Dashboard - Selected */}
          <div className="flex flex-col items-center gap-1">
            <svg
              className="w-5 h-5 text-navy"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <rect x="3" y="3" width="8" height="8" />
              <rect x="13" y="3" width="8" height="8" />
              <rect x="3" y="13" width="8" height="8" />
              <rect x="13" y="13" width="8" height="8" />
            </svg>
            <span className="font-semibold text-navy">Dashboard</span>
          </div>

          {/* Application - Unselected */}
          <div className="flex flex-col items-center gap-1">
            <svg
              className="w-5 h-5 text-gray-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              {/* Top row - 3 squares */}
              <rect x="3" y="3" width="4" height="4" />
              <rect x="10" y="3" width="4" height="4" />
              <rect x="17" y="3" width="4" height="4" />
              {/* Middle row - 3 squares */}
              <rect x="3" y="10" width="4" height="4" />
              <rect x="10" y="10" width="4" height="4" />
              <rect x="17" y="10" width="4" height="4" />
              {/* Bottom row - 3 squares */}
              <rect x="3" y="17" width="4" height="4" />
              <rect x="10" y="17" width="4" height="4" />
              <rect x="17" y="17" width="4" height="4" />
            </svg>
            <span className="text-gray-400">Application</span>
          </div>

          {/* Gateway - Unselected */}
          <div className="flex flex-col items-center gap-1">
            <svg
              className="w-5 h-5 text-gray-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M7 2h10v6H7V2M5 10h14v10H5V10M7 11v8M11 11v8M15 11v8M19 11v8"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <rect x="8" y="20" width="8" height="1" fill="currentColor" />
            </svg>
            <span className="text-gray-400">Gateway</span>
          </div>

          {/* More - Unselected */}
          <div className="flex flex-col items-center gap-1">
            <svg
              className="w-5 h-5 text-gray-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <circle cx="6" cy="12" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="18" cy="12" r="2" />
            </svg>
            <span className="text-gray-400">More</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "application") {
    return (
      <div className={cn(PANEL_CLASS, className)}>
        <div className="h-6 rounded-lg bg-sky-accent/70 flex items-center justify-center text-[10px] font-semibold">
          Application
        </div>
        <div className="mt-3 space-y-2">
          <div className="h-8 rounded-full bg-muted/70 border border-border/60 flex items-center px-3 text-[10px] text-muted-foreground">
            Search
          </div>
          <div className="space-y-2">
            {["Zone 1", "Zone 2", "Zone 3"].map((item) => (
              <div
                key={item}
                className="h-8 rounded-xl bg-sky-accent/40 border border-white flex items-center justify-between px-3 text-[10px]"
              >
                <span className="font-semibold">Name: {item}</span>
                <span className="text-muted-foreground">0 Device</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "gateway") {
    return (
      <div className={cn(PANEL_CLASS, className)}>
        <div className="h-6 rounded-lg bg-sky-accent/70 flex items-center justify-center text-[10px] font-semibold">
          Gateway
        </div>
        <div className="mt-3 space-y-2">
          <div className="h-8 rounded-full bg-muted/70 border border-border/60 flex items-center px-3 text-[10px] text-muted-foreground">
            Search
          </div>
          <div className="space-y-2">
            {["Zone 1", "Zone 2", "Zone 3"].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-sky-accent/40 border border-white px-3 py-2 text-[10px]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{item}</span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-orange-400" />
                    Never seen
                  </span>
                </div>
                <div className="mt-1 text-muted-foreground">ID: **** ****</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(PANEL_CLASS, className)}>
      <div className="h-6 rounded-lg bg-sky-accent/70 flex items-center justify-center text-[10px] font-semibold">
        More
      </div>
      <div className="mt-3 space-y-2">
        <div className="rounded-2xl bg-section-alt border border-white p-3 flex items-center gap-2 text-[10px]">
          <div className="w-8 h-8 rounded-full bg-primary-blue/20" />
          <div className="flex-1">
            <div className="h-2.5 rounded bg-white/80 w-20" />
            <div className="h-2 rounded bg-white/60 w-28 mt-2" />
          </div>
        </div>
        <div className="rounded-2xl bg-section-alt border border-white px-3 py-2 flex items-center justify-between text-[10px]">
          <span>Dark mode</span>
          <span className="w-8 h-4 rounded-full bg-muted/80 border border-border/60" />
        </div>
        <div className="rounded-2xl bg-section-alt border border-white px-3 py-2 text-[10px] text-primary-blue">
          Help & support
        </div>
        <div className="rounded-2xl bg-white border border-border px-3 py-2 text-[10px] text-red-500">
          Log out
        </div>
      </div>
    </div>
  );
}
