import { useState } from "react";
import { projectFilters, allProjects } from "@/data/projects/projects";
import { AllProjectsHeroSection } from "./components/AllProjectsHeroSection";
import { ProjectsListingSection } from "./components/ProjectsListingSection";

const PAGE_SIZE = 6;

export default function AllProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === activeFilter);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const handlePage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <AllProjectsHeroSection title="All Projects" />
      <ProjectsListingSection
        filters={projectFilters}
        activeFilter={activeFilter}
        onFilter={handleFilter}
        visibleProjects={visible}
        currentPage={currentPage}
        totalPages={totalPages}
        onPage={handlePage}
      />
    </>
  );
}
