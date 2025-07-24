import Title from "@/components/texts/title";
import PageContent from "@/components/page-content";
import TechnologyList from "./technology-list";
import { Suspense } from "react";
import { Spinner } from "@/components/ui/spinner";

export default async function Technologies() {
  return (
    <PageContent>
      <Title text="Technologies" />
      <Suspense fallback={<Spinner />}>
        <TechnologyList />
      </Suspense>
    </PageContent>
  );
}
