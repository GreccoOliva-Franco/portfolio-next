import { Api } from "@/lib/api";
import { ProjectCardList } from "./project-card-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function ProjectTabs() {
  let projects = [];

  try {
    const response = await Api.getProjects();
    projects = response.data;
  } catch {}

  const SIDE_PROJECTS_ID = "side-projects";
  const TRAINING_PROJECTS_ID = "training";

  return (
    <Tabs defaultValue={SIDE_PROJECTS_ID}>
      <TabsList className="mb-6 self-center">
        <TabsTrigger value={SIDE_PROJECTS_ID}>Side projects</TabsTrigger>
        <TabsTrigger value={TRAINING_PROJECTS_ID}>Training</TabsTrigger>
      </TabsList>
      <TabsContent value={SIDE_PROJECTS_ID} className="w-full">
        <ProjectCardList
          id={SIDE_PROJECTS_ID}
          projects={projects.sideProjects}
        />
      </TabsContent>
      <TabsContent value="training" className="w-full">
        <ProjectCardList
          id={TRAINING_PROJECTS_ID}
          projects={projects.training}
        />
      </TabsContent>
    </Tabs>
  );
}
