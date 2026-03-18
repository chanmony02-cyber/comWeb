// src/pages/Industries/components/RecentProjectsList.jsx

import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function RecentProjectsList({ label, title, items }) {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <SectionHeader
          label={label}
          title={title}
          align="center"
        />

        <div className="mt-12 flex flex-col gap-8">
          {items.map((project) => (
            <div
              key={project.id}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-start"
            >
              {/* Image */}
              <div className="rounded-xl overflow-hidden shadow-sm">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text */}
              <div className="sm:col-span-2 flex flex-col justify-center gap-3">
                <h3 className="text-lg font-bold text-navy font-display">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                  {project.description}
                </p>
                <Link
                  to={project.href}
                  className="inline-flex items-center gap-1 px-5 py-2 bg-navy text-white text-sm font-semibold rounded-md hover:bg-navy/90 transition-colors w-fit font-sans"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
