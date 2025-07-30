import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Project } from "./project-tabs";
import { ImageOffIcon } from "lucide-react";

export const PRIVATE_REPOSITORY = "private";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="hover:shadow-xl transition-shadow">
      <CardHeader>
        <ProjectPreview url={project.urls.preview} />
      </CardHeader>
      <CardContent className="flex-grow flex flex-col gap-4">
        <ProjectCardTitle text={project.title} />
        <ProjectDescription text={project.description} />

        <div className="flex justify-between items-start">
          <ProjectTechnologies technologies={project.technologies} />
        </div>
      </CardContent>
      <CardFooter className="justify-end items-center gap-4">
        <RepositoryButton url={project.urls?.repository} />
        <DeployButton url={project.urls.deploy} />
      </CardFooter>
    </Card>
  );
}

function ProjectPreview({ url }: { url: string | null }) {
  return (
    <div className="relative aspect-video bg-muted rounded-t-lg">
      {url ? (
        <Image
          src={url}
          alt=""
          width={380}
          height={380}
          className="size-full object-cover"
        />
      ) : (
        <div className="size-full flex flex-col justify-center items-center">
          <ImageOffIcon className="size-10 text-muted-foreground" />
          <p className="text-muted-foreground">No preview available</p>
        </div>
      )}
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
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <span key={tech} className="text-xs bg-muted px-2 py-1 rounded">
          {tech}
        </span>
      ))}
    </div>
  );
}

function RepositoryButton({ url }: { url: string | undefined | null }) {
  if (!url || url === PRIVATE_REPOSITORY) {
    return null;
  }

  return (
    <Button variant={"secondary"} asChild>
      <Link href={url} target="_blank">
        Github
      </Link>
    </Button>
  );
}

function DeployButton({ url }: { url: string | null }) {
  if (!url) {
    return null;
  }

  return (
    <Button variant={"default"} asChild>
      <Link href={url} target="_blank">
        Live Demo
      </Link>
    </Button>
  );
}
