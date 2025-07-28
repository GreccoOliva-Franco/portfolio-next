"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import TechnologyCard from "./technology-card";

const technologies = [
  // Frontend
  {
    text: "HTML",
    icon: "/icons/html5.svg",
  },
  {
    text: "CSS",
    icon: "/icons/css3.svg",
  },
  {
    text: "React",
    icon: "/icons/react.svg",
  },
  {
    text: "NextJs",
    icon: "/icons/nextjs.svg",
  },
  {
    text: "Tailwind",
    icon: "/icons/tailwindcss.svg",
  },

  // Backend
  {
    text: "JavaScript",
    icon: "/icons/javascript.svg",
  },
  {
    text: "TypeScript",
    icon: "/icons/typescript.svg",
  },
  {
    text: "NodeJs",
    icon: "/icons/nodejs.svg",
  },
  {
    text: "Express",
    icon: "/icons/express.svg",
  },
  {
    text: "NestJs",
    icon: "/icons/nestjs.svg",
  },
  {
    text: "PHP",
    icon: "/icons/php.svg",
  },
  {
    text: "Laravel",
    icon: "/icons/laravel.svg",
  },

  // Databases
  {
    text: "MySQL",
    icon: "/icons/mysql.svg",
  },
  {
    text: "MariaDB",
    icon: "/icons/mariadb.svg",
  },
  {
    text: "PostgreSQL",
    icon: "/icons/postgresql.svg",
  },
  {
    text: "MongoDB",
    icon: "/icons/mongodb.svg",
  },
  {
    text: "Redis",
    icon: "/icons/redis.svg",
  },

  // Infrastructure
  { text: "AWS", icon: "/icons/amazon.png" },
  {
    text: "Vercel",
    icon: "/icons/vercel.svg",
    className: "bg-black",
  },
  {
    text: "Docker",
    icon: "/icons/docker.svg",
  },

  // Tests
  {
    text: "Jest",
    icon: "/icons/jest.svg",
  },
  {
    text: "PHPUnit",
    icon: "/icons/phpunit.svg",
  },
];

export type Technology = typeof technologies extends Array<infer T>
  ? T
  : unknown;

export default function TechnologyListClient() {
  const [value, setValue] = React.useState<string>("");

  const filteredTechnologies = !value
    ? technologies
    : technologies.filter((tech) =>
        tech.text.toLowerCase().includes(value.toLowerCase())
      );

  return (
    <div className="container px-4 py-8">
      <Search value={value} onChange={(e) => setValue(e.target.value)} />

      <section
        id="technologies"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-4"
      >
        {filteredTechnologies.map((tech) => (
          <TechnologyCard key={tech.text} {...tech} />
        ))}
      </section>
    </div>
  );
}

function Search({ className, ...props }: React.ComponentProps<typeof Input>) {
  return (
    <div className={cn("relative w-full max-w-lg mx-auto mb-8", className)}>
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search technologies..."
        className="pl-10"
        {...props}
      />
    </div>
  );
}
