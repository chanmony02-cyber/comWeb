import { notFound } from "next/navigation";
import ProjectDetailPage from "@/features/ProjectDetail/ProjectDetailPage";
import { createPageMetadata } from "@/config/seo";
import { allProjects } from "@/data/projects/projects";

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    id: String(project.id),
  }));
}

export async function generateMetadata({ params }) {
  const project = allProjects.find((item) => item.id === Number(params.id));

  if (!project) {
    return createPageMetadata("Project Detail", "Project details page.");
  }

  return createPageMetadata(project.title, project.summary);
}

export default function Page({ params }) {
  const project = allProjects.find((item) => item.id === Number(params.id));

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage params={params} />;
}
