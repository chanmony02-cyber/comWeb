import { notFound } from "next/navigation";
<<<<<<< Updated upstream
import MainLayout from "@/layouts/MainLayout";
import { allProjects } from "@/data/projects/projects";
import { ProjectDetailContentSection } from "@/pages/ProjectDetail/components/ProjectDetailContentSection";

export async function generateStaticParams() {
  return allProjects.map((project) => ({ id: String(project.id) }));
}

export async function generateMetadata({ params }) {
  const project = allProjects.find((item) => item.id === Number(params.id));

  if (!project) {
    return {};
  }

=======

import { ProjectDetailContentSection } from "@/screens/ProjectDetail/components/ProjectDetailContentSection";
import {
  getProjectById,
  getProjects,
  getRelatedProjects,
} from "@/services/projects";

export function generateStaticParams() {
  return getProjects().map((project) => ({ id: String(project.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return { title: "Project" };
>>>>>>> Stashed changes
  return {
    title: project.title,
    description: project.summary,
  };
}

<<<<<<< Updated upstream
export default function Page({ params }) {
  const project = allProjects.find((item) => item.id === Number(params.id));

  if (!project) {
    notFound();
  }

  const related = allProjects
    .filter((item) => item.category === project.category && item.id !== project.id)
    .slice(0, 4);

  return (
    <MainLayout>
      <ProjectDetailContentSection project={project} related={related} />
    </MainLayout>
  );
}
=======
export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  const related = getRelatedProjects(project.category, project.id);

  return <ProjectDetailContentSection project={project} related={related} />;
}

>>>>>>> Stashed changes
