// src/pages/Industries/components/RecentProjectsList.jsx

import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function RecentProjectsList({ label, title, items }) {
  return (
    <section className="py-16 md:py-14 bg-background">
      <div className="container mb-14">
        <SectionHeader
          label={label}
          title={title}
          align="center"
          labelClassName="text-xl tracking-widest"
          titleClassName="text-3xl md:text-4xl text-navy"
        />

        <div className="mt-12 flex flex-col gap-14">
          {items.map((project) => (
            <div
              key={project.id}
              className="grid grid-cols-1 sm:grid-cols-5 rounded-2xl overflow-hidden shadow-sm"
            >
              {/* Left — image, spans 2 of 5 columns */}
              <div className="sm:col-span-2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 lg:h-[400px] object-cover"
                />
              </div>

              {/* Right — text on section-alt bg, spans 3 of 5 columns */}
              <div className="sm:col-span-3 bg-section-alt flex flex-col justify-center gap-4 p-8 md:p-10">
                <h3 className="text-lg md:text-xl font-bold text-navy font-display">
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
