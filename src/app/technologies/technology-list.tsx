import React from "react";
import { Api } from "@/lib/api";
import TechnologyListClient from "./technology-list-client";

export default async function TechnologyList() {
  let technologies = [];

  try {
    const response = await Api.getTechnologies();
    technologies = response.data;
  } catch {}

  return <TechnologyListClient technologies={technologies} />;
}
