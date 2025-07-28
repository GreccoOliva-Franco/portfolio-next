import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { firstUpperCase } from "@/lib/string";
import { TrainingProject } from "./project-tabs";

export default function ProjectCard({ project }: { project: TrainingProject }) {
  return (
    <Card className="hover:shadow-xl transition-shadow">
      <CardHeader className="justify-center">
        <ProjectPreview url={project.urls.preview} />
      </CardHeader>
      <CardContent className="flex-grow flex flex-col gap-4">
        <ProjectCardTitle text={project.title} />
        <ProjectDescription text={project.description} />

        <div className="flex justify-between items-start">
          <ProjectTechnologies technologies={project.technologies} />
          {project?.difficulty && (
            <ProjectDificulty difficulty={project.difficulty} />
          )}
        </div>
      </CardContent>
      <CardFooter className="justify-end gap-4">
        {project.urls?.repository && (
          <Button variant={"secondary"} asChild>
            <Link href={project.urls.repository} target="_blank">
              Github
            </Link>
          </Button>
        )}
        <Button variant={"default"} asChild>
          <Link href={project.urls.deploy} target="_blank">
            Live Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

function ProjectPreview({ url }: { url: string }) {
  return (
    <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
      <Image
        src={url}
        alt=""
        width={380}
        height={380}
        className="size-full object-cover"
      />
    </div>
  );
}

function ProjectCardTitle({ text }: { text: string }) {
  return <h3 className="text-lg font-semibold">{text}</h3>;
}

function ProjectDescription({ text }: { text: string }) {
  return <p className="text-sm text-muted-foreground">{text}</p>;
}

function ProjectTechnologies({
  technologies,
}: Pick<TrainingProject, "technologies">) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <span key={tech} className="text-xs bg-muted px-2 py-1 rounded">
          {tech}
        </span>
      ))}
    </div>
  );
}

function ProjectDificulty({ difficulty }: Pick<TrainingProject, "difficulty">) {
  return (
    <Badge
      // className="text-md bg-emerald-600"
      className="text-xs font-medium px-2 py-1 rounded-full bg-emerald-600"
    >
      {`${difficulty.level} - ${firstUpperCase(difficulty.label)}`}
    </Badge>
  );
}
