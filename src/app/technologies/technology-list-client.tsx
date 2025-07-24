"use client";

import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import React from "react";
import TechnologyCard from "./technology-card";
import { Technology } from "../api/technologies/route";

function Search(props: React.ComponentProps<"input">) {
  return (
    <div
      className={cn(
        "flex p-2 items-center max-w-lg min-w-sm border shadow rounded-md",
        "focus-within:outline-2 focus-within:outline-green-600"
      )}
    >
      <input
        name="search"
        className="flex-grow border-none shadow-none outline-0"
        placeholder="Search ..."
        {...props}
      />
      <SearchIcon className="text-gray-400" />
    </div>
  );
}

export default function TecnologyListClient({
  technologies,
}: {
  technologies: Technology[];
}) {
  const [value, setValue] = React.useState<string>("");
  const filteredTechnologies = !value
    ? technologies
    : (() => {
        const regex = new RegExp(value, "i");
        return technologies.filter((tech) => regex.test(tech.text));
      })();
  return (
    <>
      <Search value={value} onChange={(e) => setValue(e.target.value)} />
      <section
        id="technologies"
        // className="flex flex-wrap justify-center gap-6"
        className="grid grid-cols-9 gap-6"
      >
        {filteredTechnologies.map((tech) => (
          <TechnologyCard key={tech.text} {...tech} />
        ))}
      </section>
    </>
  );
}
