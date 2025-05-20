// @/app/(login)/projects/page.tsx

// Components
import { Container, SideBar, Main } from '@/components/internalTemplates'
import TagCloud from '@/components/project/TagCloud'
import ProjectSide from '@/components/project/ProjectSidebar'
import CreateProjectForm from '@/components/project/CreateProjectForm'
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
        <CreateProjectForm></CreateProjectForm>
      </Main>
    </Container>
  )
}
