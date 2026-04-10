export function BottomNavigation({ activeTab = "dashboard" }) {
  return (
    <div className="flex items-center justify-around pt-2 border-t border-white/50 text-[8px]">
      {/* Dashboard */}
      <div className="flex flex-col items-center gap-1">
        <svg
          className={`w-5 h-5 ${
            activeTab === "dashboard" ? "text-navy" : "text-gray-400"
          }`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <rect x="3" y="3" width="8" height="8" />
          <rect x="13" y="3" width="8" height="8" />
          <rect x="3" y="13" width="8" height="8" />
          <rect x="13" y="13" width="8" height="8" />
        </svg>
        <span
          className={
            activeTab === "dashboard"
              ? "font-semibold text-navy"
              : "text-gray-400"
          }
        >
          Dashboard
        </span>
      </div>

      {/* Application */}
      <div className="flex flex-col items-center gap-1">
        <svg
          className={`w-5 h-5 ${
            activeTab === "application" ? "text-navy" : "text-gray-400"
          }`}
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
        <span
          className={
            activeTab === "application"
              ? "font-semibold text-navy"
              : "text-gray-400"
          }
        >
          Application
        </span>
      </div>

      {/* Gateway */}
      <div className="flex flex-col items-center gap-1">
        <svg
          className={`w-5 h-5 ${
            activeTab === "gateway" ? "text-navy" : "text-gray-400"
          }`}
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
        <span
          className={
            activeTab === "gateway"
              ? "font-semibold text-navy"
              : "text-gray-400"
          }
        >
          Gateway
        </span>
      </div>

      {/* More */}
      <div className="flex flex-col items-center gap-1">
        <svg
          className={`w-5 h-5 ${activeTab === "more" ? "text-navy" : "text-gray-400"}`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <circle cx="6" cy="12" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="18" cy="12" r="2" />
        </svg>
        <span
          className={
            activeTab === "more" ? "font-semibold text-navy" : "text-gray-400"
          }
        >
          More
        </span>
      </div>
    </div>
  );
}
