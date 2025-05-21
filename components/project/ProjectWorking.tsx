// @/components/project/ProjectWorkin.tsx

// Components
import ProjectCard from './ProjectCard'
import { ContentBox, ContentBoxTitle, ContentBoxGridContent } from '@/components/commons'
// Types
import { Project } from '@/types/project'

type ProjectWorkingProps = {
  projects: Project[]
  isPublic?: boolean
  cardWidth: number
}

export default function ProjectWorking({ projects, isPublic = false, cardWidth }: ProjectWorkingProps) {
  const filteredProjects = isPublic ? projects.filter(project => project.is_public) : projects
  return (
    <ContentBox id="working-project">
      <ContentBoxTitle content="진행중인 프로젝트" button={isPublic ? undefined : { href: "/projects/create", text: "새 프로젝트" }} />
      <ContentBoxGridContent cardWidth={cardWidth}>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.no} project={project} width={cardWidth} />
        ))}
      </ContentBoxGridContent>
    </ContentBox>
  )
}
