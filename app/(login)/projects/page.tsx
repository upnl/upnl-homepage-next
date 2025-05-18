// @/app/(login)/projects/page.tsx

// Components
import { Container, SideBar, Main } from '@/components/internalTemplates'
import TagCloud from '@/components/project/TagCloud'
import ProjectSide from '@/components/project/ProjectSidebar'
import ProjectWorkin from '@/components/project/ProjectWorkin'
import ProjectPending from '@/components/project/ProjectPending'
// Utils
import { getProjectsDataSuite, getTagData } from '@/utils/database/project'

export default async function ProjectPage() {
  const {
    workingProjects,
    pendingProjects,
    yearList,
  } = await getProjectsDataSuite();
  const {
    tagList,
  } = await getTagData();

  return (
    <Container>
      {/* Sidebar at left */}
      <SideBar>
        <ProjectSide projects={workingProjects} />
        <TagCloud tags={tagList} />
      </SideBar>

      {/* Center-Right Section */}
      <Main>
        <ProjectWorkin projects={workingProjects} cardWidth={355} />
        <ProjectPending projects={pendingProjects} yearList={yearList} cardWidth={355} />
      </Main>
    </Container>
  )
}