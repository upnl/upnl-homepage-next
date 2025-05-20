// @/app/(login)/projects/page.tsx

// Components
import { Container } from '@/components/externalTemplates';
import ProjectWorking from '@/components/project/ProjectWorking'
import ProjectPending from '@/components/project/ProjectPending'
// Utils
import { getProjectsDataSuite } from '@/utils/database/project'

export default async function ProjectPage() {
  const {
    workingProjects,
    pendingProjects,
    yearList,
  } = await getProjectsDataSuite();

  return (
    <Container>
      <ProjectWorking projects={workingProjects} isPublic cardWidth={305} />
      <ProjectPending projects={pendingProjects} yearList={yearList} cardWidth={305} />
    </Container>
  )
}
