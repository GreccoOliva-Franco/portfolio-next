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

function ProjectPreview({ url }: { url: string }) {
  return (
    <Image
      src={url}
      alt=""
      width={380}
      height={380}
      className="aspect-video rounded-xl"
    />
  );
}
function ProjectCardTitle({ text }: { text: Project["title"] }) {
  return <h3 className="text-2xl">{text}</h3>;
}

function ProjectDescription({ text }: { text: Project["description"] }) {
  return <p className="text-justify">{text}</p>;
}

function ProjectTechnologies({ technologies }: Pick<Project, "technologies">) {
  return <p>{technologies.join("  -  ")}</p>;
}

function ProjectDificulty({ difficulty }: Pick<Project, "difficulty">) {
  return (
    <Badge className="text-md bg-emerald-600">
      {`${difficulty.level} - ${firstUpperCase(difficulty.label)}`}
    </Badge>
  );
}

export default function ProjectCard({ project }: Props) {
  return (
    <Card>
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
            Web
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
