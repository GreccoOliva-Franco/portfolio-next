import ProjectCard from "./project-card";
import { TrainingProject } from "./project-tabs";

export function ProjectCardList({
  id,
  projects,
}: Pick<React.ComponentProps<"section">, "id"> & {
  projects: TrainingProject[];
}) {
  return (
    <section
      id={id}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {projects.map((project) => (
        <ProjectCard key={project.urls.repository} project={project} />
      ))}
    </section>
  );
}
