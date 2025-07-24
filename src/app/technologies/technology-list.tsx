import React from "react";
import { Api } from "@/lib/api";
import TechnologyListClient from "./technology-list-client";

export default async function TechnologyList() {
  const response = await Api.getTechnologies();
  const technologies = response.data;

  return <TechnologyListClient technologies={technologies} />;
}
