// @/components/project/ProjectWorkin.tsx

// Components
import ProjectCard from './ProjectCard'
import { GridBox, GridBoxTitle, GridBoxContent } from '@/components/commons'
// Types
import { Project } from '@/types/project'

type ProjectWorkinProps = {
  projects: Project[]
  isPublic?: boolean
}

export default function ProjectWorkin({ projects, isPublic = false }: ProjectWorkinProps) {
  const filteredProjects = isPublic ? projects.filter(project => project.is_public) : projects
  return (
    <GridBox id="working-project">
      <GridBoxTitle content="진행중인 프로젝트" button={isPublic ? undefined : { href: "/new_project", text: "새 프로젝트" }} />
      <GridBoxContent>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.no} project={project} />
        ))}
      </GridBoxContent>
    </GridBox>
  )
}