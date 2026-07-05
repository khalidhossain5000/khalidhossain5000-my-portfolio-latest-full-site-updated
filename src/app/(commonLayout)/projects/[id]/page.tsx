import { notFound } from 'next/navigation';
import { getProjectById } from '@/app/components/HomePage/Projects/projects-data';
import ProjectDetailView from '@/app/components/ProjectDetails/ProjectDetailsContent';

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailView project={project} />;
}