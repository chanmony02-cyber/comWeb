// src/pages/Home/components/RecentProjectsSection.jsx

import Link from "next/link";
import { recentProjects } from "@/data/projects/projects";
import { ROUTES } from "@/config/routes";

export default function RecentProjectsSection() {
  return (
    <section className="py-20 bg-navy border-b border-gray-500">
      <div className="container">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-primary-blue font-bold text-4xl md:text-[2.5rem] mb-3 font-display whitespace-nowrap">
              RECENT PROJECTS
            </h2>
            <p className="text-sky-accent text-md md:text-md max-w-md leading-relaxed font-sans">
              Discover our latest work and successful implementations across
              various industries.
            </p>
          </div>
          <Link
            href={ROUTES.ALL_PROJECTS}
            className="text-sky-accent hover:text-primary-foreground text-md font-medium transition-colors flex items-center gap-1 font-display whitespace-nowrap shrink-0"
          >
            More &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {recentProjects.map((project) => (
            <Link
              key={project.id}
              href={ROUTES.PROJECT_DETAIL(project.id)}
              className="group relative rounded-xl overflow-hidden aspect-video"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-primary-blue text-md font-semibold font-display">
                  {project.tag}
                </p>
                <p className="text-primary-foreground text-md font-semibold font-display">
                  {project.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
