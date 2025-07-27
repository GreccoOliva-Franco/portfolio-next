import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Project } from "../api/projects/route";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { firstUpperCase } from "@/lib/string";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <Card className="hover:shadow-xl transition-shadow">
      <CardHeader className="justify-center">
        <ProjectPreview url={project.urls.preview} />
      </CardHeader>
      <CardContent className="flex-grow flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <ProjectTechnologies technologies={project.technologies} />
          <ProjectDificulty difficulty={project.difficulty} />
        </div>

        <ProjectCardTitle text={project.title} />
        <ProjectDescription text={project.description} />
      </CardContent>
      <CardFooter className="justify-end gap-4">
        <Button variant={"secondary"} asChild>
          <Link href={project.urls.repository} target="_blank">
            Github
          </Link>
        </Button>
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

function ProjectTechnologies({ technologies }: Pick<Project, "technologies">) {
  return (
    <div className="flex gap-2">
      {technologies.map((tech) => (
        <span key={tech} className="text-xs bg-muted px-2 py-1 rounded">
          {tech}
        </span>
      ))}
    </div>
  );
}

function ProjectDificulty({ difficulty }: Pick<Project, "difficulty">) {
  return (
    <Badge
      // className="text-md bg-emerald-600"
      className="text-xs font-medium px-2 py-1 rounded-full bg-emerald-600"
    >
      {`${difficulty.level} - ${firstUpperCase(difficulty.label)}`}
    </Badge>
  );
}
