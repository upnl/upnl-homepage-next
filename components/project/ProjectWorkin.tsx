// @/components/project/ProjectWorkin.tsx

// Components
import ProjectCard from './ProjectCard'
// Next
import Link from 'next/link'
// Styles
import "./project.css";
// Types
import { Project } from '@/types/project'

type ProjectWorkinProps = {
  projects: Project[]
}

export default function ProjectWorkin({ projects: workingProjects }: ProjectWorkinProps) {
  return (
    <section className="projects">
      <Link id="new_project" className="button" href="/new_project"> 새 프로젝트 </Link>
      <div id="working_projects_label">
        <h3>진행중인 프로젝트</h3>
      </div>
      <div id="projects-grid">
        {workingProjects.map((project) => (
          <ProjectCard key={project.no} project={project} />
        ))}
      </div>
    </section>
  )
}