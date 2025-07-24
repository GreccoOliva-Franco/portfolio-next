import PageContent from "@/components/page-content";
import Title from "@/components/texts/title";
import ProjectList from "./project-list";
import { Suspense } from "react";
import { Spinner } from "@/components/ui/spinner";

export default async function Projects() {
  return (
    <PageContent>
      <Title text="Projects" />
      <Suspense fallback={<Spinner />}>
        <ProjectList />
      </Suspense>
    </PageContent>
  );
}
