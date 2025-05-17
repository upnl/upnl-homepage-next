// @/app/(login)/projects/page.tsx

// Components
import { Container } from '@/components/externalTemplates';
import ProjectWorkin from '@/components/project/ProjectWorkin'
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
      <ProjectWorkin projects={workingProjects} isPublic cardWidth={305} />
      <ProjectPending projects={pendingProjects} yearList={yearList} cardWidth={305} />
    </Container>
  )
}