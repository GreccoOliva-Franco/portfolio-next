"use client";

import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import React from "react";
import TechnologyCard from "./technology-card";
import { Technology } from "../api/technologies/route";
import { Input } from "@/components/ui/input";

export default function TechnologyListClient({
  technologies,
}: {
  technologies: Technology[];
}) {
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
