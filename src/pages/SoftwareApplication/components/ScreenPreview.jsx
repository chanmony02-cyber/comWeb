import VHTLogo from "@/assets/images/VHT_Logo.png";
import sampleMap from "@/assets/images/sampleMap.png";
import { cn } from "@/lib/utils";
import { BottomNavigation } from "./BottomNavigation";

const PANEL_CLASS =
  "rounded-[24px] bg-white/90 border border-white/80 p-4 text-navy shadow-sm flex flex-col min-h-[500px]";

export default function ScreenPreview({ type, className = "" }) {
  if (type === "login") {
    return (
      <div
        className={cn(
          PANEL_CLASS,
          "flex flex-col items-center justify-center",
          className,
        )}
      >
        <div className="flex items-center justify-center">
          <div className="h-14 w-14 rounded-full bg-sky-accent/70 flex items-center justify-center shadow-inner">
            <img
              src={VHTLogo}
              alt="VHT logo"
              className="h-8 w-8 object-contain"
            />
          </div>
        </div>
        <div className="mt-12 space-y-3 w-full max-w-xs">
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
      <div
        className={cn(PANEL_CLASS, "flex flex-col min-h-[505px]", className)}
      >
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

        <BottomNavigation activeTab="dashboard" />
      </div>
    );
  }

  if (type === "application") {
    const applications = [
      { name: "Zone 1", devices: 11 },
      { name: "Zone 2", devices: 13 },
      { name: "Zone 3", devices: 14 },
    ];

    return (
      // Height of the phone (Application list)
      <div
        className={cn(PANEL_CLASS, "flex flex-col min-h-[500px]", className)}
      >
        {/* Header */}
        <div className="h-6 rounded-lg bg-sky-accent/70 flex items-center justify-center text-[10px] font-semibold">
          Application
        </div>

        {/* Search Bar */}
        <div className="mt-3 mb-3">
          <div className="h-8 rounded-full bg-white border border-muted flex items-center px-3 text-[10px] text-muted-foreground gap-2">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="flex-1 bg-transparent outline-none placeholder-muted-foreground text-[10px]"
            />
          </div>
        </div>

        {/* Applications List */}
        <div className="space-y-2 flex-1 overflow-y-auto pb-2">
          {applications.map((app, index) => (
            <div
              key={index}
              className="h-10 rounded-lg bg-sky-accent/40 border border-sky-accent/50 flex items-center justify-between px-3 text-[10px]"
            >
              <span className="font-semibold text-navy">
                {index + 1}. Name: {app.name}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">
                  {app.devices} Device
                </span>
                <svg
                  className="w-3 h-3 text-muted-foreground"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <BottomNavigation activeTab="application" />
      </div>
    );
  }

  if (type === "gateway") {
    return (
      <div
        className={cn(PANEL_CLASS, "flex flex-col min-h-[505px]", className)}
      >
        <div className="h-6 rounded-lg bg-sky-accent/70 flex items-center justify-center text-[10px] font-semibold">
          Gateway
        </div>
        <div className="mt-3 space-y-2 flex-1 overflow-y-auto">
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

        <BottomNavigation activeTab="gateway" />
      </div>
    );
  }

  return (
    <div className={cn(PANEL_CLASS, "flex flex-col min-h-[505px]", className)}>
      <div className="h-6 rounded-lg bg-sky-accent/70 flex items-center justify-center text-[10px] font-semibold">
        More
      </div>
      <div className="mt-3 space-y-2 flex-1 overflow-y-auto pb-2">
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

      <BottomNavigation activeTab="more" />
    </div>
  );
}
