// src/pages/Industries/components/IndustryCTA.jsx

import { Link } from "react-router-dom";
import { ROUTES } from "@/config/routes";

export function IndustryCTA({ title, subtitle }) {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy font-display mb-3">
            {title}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed font-sans mb-8">
            {subtitle}
          </p>
          <Link
            to={ROUTES.CONTACT}
            className="inline-flex items-center gap-1 px-6 py-2.5 border border-navy text-navy text-sm font-semibold rounded-md hover:bg-navy hover:text-white transition-colors font-sans"
          >
            Contact Us →
          </Link>
        </div>
      </div>
    </section>
  );
}
