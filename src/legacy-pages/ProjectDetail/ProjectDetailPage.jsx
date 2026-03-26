import { notFound } from "next/navigation";
import MainLayout from "@/layouts/MainLayout";
import { allProjects } from "@/data/projects/projects";
import { ProjectDetailContentSection } from "./components/ProjectDetailContentSection";

export default function ProjectDetailPage({ params }) {
  const { id } = params;
  const project = allProjects.find((p) => p.id === Number(id));

  const related = project
    ? allProjects
        .filter((item) => item.category === project.category && item.id !== project.id)
        .slice(0, 4)
    : [];

  if (!project) {
    notFound();
  }

  return (
    <MainLayout>
      <ProjectDetailContentSection project={project} related={related} />
    </MainLayout>
  );
}
