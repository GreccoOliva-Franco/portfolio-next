"use client";

import Title from "@/components/texts/title";
import React from "react";
import Technology from "./technology";
import { SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const technologies: React.ComponentProps<typeof Technology>[] = [
  // Frontend
  {
    text: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    text: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    text: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    text: "NextJs",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    text: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },

  // Backend
  {
    text: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    text: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    text: "NodeJs",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    text: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    text: "NestJs",
    icon: "https://nestjs.com/logo-small-gradient.d792062c.svg",
  },
  {
    text: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    text: "Laravel",
    icon: "https://www.logo.wine/a/logo/Laravel/Laravel-Logo.wine.svg",
  },

  // Databases
  {
    text: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    text: "MariaDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg",
  },
  {
    text: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    text: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    text: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
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
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },

  // Tests
  {
    text: "Jest",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  },
  {
    text: "PHPUnit",
    icon: "https://phpunit.de/img/phpunit.svg",
  },
];

function Search(props: React.ComponentProps<"input">) {
  return (
    <div
      className={cn(
        "flex p-2 items-center max-w-lg min-w-sm border shadow rounded-md"
      )}
    >
      <input
        name="search"
        className="flex-grow border-none shadow-none outline-0"
        {...props}
      />
      <SearchIcon />
    </div>
  );
}

export default function Technologies() {
  const [value, setValue] = React.useState<string>("");
  const filteredTechnologies = !value
    ? technologies
    : (() => {
        const regex = new RegExp(value, "i");
        return technologies.filter((tech) => regex.test(tech.text));
      })();

  return (
    <div className="py-6 flex flex-col items-center justify-around gap-8">
      <Title text="Technologies" />
      <Search value={value} onChange={(e) => setValue(e.target.value)} />
      <section
        id="technologies"
        className="flex flex-wrap justify-center gap-6"
      >
        {filteredTechnologies.map((tech) => (
          <Technology key={tech.text} {...tech} />
        ))}
      </section>
    </div>
  );
}
