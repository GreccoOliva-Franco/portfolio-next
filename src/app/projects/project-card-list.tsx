import { Project } from "../api/projects/route";
import ProjectCard from "./project-card";

export function ProjectCardList({
  id,
  projects,
}: React.ComponentProps<"section"> & { projects: Project[] }) {
  return (
    <section id={id} className="grid grid-cols-3 gap-6">
      {projects.map((project: Project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
