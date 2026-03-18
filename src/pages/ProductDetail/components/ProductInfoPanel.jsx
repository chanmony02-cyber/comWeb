import { Link } from "react-router-dom";

import { ROUTES } from "@/config/routes";

export function ProductInfoPanel({ name = "", description = "" }) {
  return (
    <div className="flex flex-col gap-6 pt-2">
      <h2 className="text-2xl font-bold text-navy font-display">{name}</h2>

      <p className="text-muted-foreground text-sm leading-relaxed font-sans">
        {description} {description} {description}
      </p>

      <div className="flex flex-wrap gap-3 mt-2">
        <a
          href="#"
          className="inline-flex items-center justify-center px-5 py-2 rounded border border-navy text-navy text-sm font-semibold hover:bg-navy hover:text-white transition-colors font-display"
        >
          PDF Download
        </a>
        <Link
          to={ROUTES.CONTACT ?? "#"}
          className="inline-flex items-center justify-center px-5 py-2 rounded border border-navy text-navy text-sm font-semibold hover:bg-navy hover:text-white transition-colors font-display"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
