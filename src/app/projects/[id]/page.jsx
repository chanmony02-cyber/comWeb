import { notFound } from "next/navigation";
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

  return {
    title: project.title,
    description: project.summary,
  };
}

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
