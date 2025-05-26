// @/app/(login)/projects/page.tsx

// Components
import { Container, SideBar, Main } from "@/components/internalTemplates";
import TagCloud from "@/components/project/TagCloud";
import ProjectSide from "@/components/project/ProjectSidebar";
import ProjectWorking from "@/components/project/ProjectWorking";
import ProjectPending from "@/components/project/ProjectPending";
// Utils
import { getProjectsDataSuite } from "@/utils/database/project";
import { getTagData } from "@/utils/database/tag";

export default async function ProjectPage() {
  const { workingProjects, pendingProjects, yearList } =
    await getProjectsDataSuite();
  const { tagList } = await getTagData();

  return (
    <Container>
      {/* Sidebar at left */}
      <SideBar>
        <ProjectSide projects={workingProjects} />
        <TagCloud tags={tagList} />
      </SideBar>

      {/* Center-Right Section */}
      <Main>
        <ProjectWorking projects={workingProjects} cardWidth={355} />
        <ProjectPending
          projects={pendingProjects}
          yearList={yearList}
          cardWidth={355}
        />
      </Main>
    </Container>
  );
}
