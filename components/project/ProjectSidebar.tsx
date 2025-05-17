// @/components/project/ProjectSidebar.tsx

// Components
import { SideBox, SideBoxTitle, SideBoxContent } from '@/components/commons'
// Styles
import "@/styles/components/project/project-sidebar.css";
// Types
import { Project } from '@/types/project'

type ProjectSidebarProps = { projects: Project[] }
export default function ProjectSide({ projects }: ProjectSidebarProps) {
  return (
    <SideBox>
      <SideBoxTitle content="프로젝트" />
      <SideBoxContent id="board_list_content">
        <ul className="project-sidebar__list">
          {projects.map((project) => {
            const isNew = project.status === 'working' || 
              (project.start_date && new Date(project.start_date).getFullYear() === new Date().getFullYear())
            return (
              <li key={project.bbs_url} className="project-sidebar__item">
                <a className="project-sidebar__link" href={`/board/${project.bbs_url}`}> {project.name} </a>
                {isNew && <span className="project-sidebar__badge">★</span>}
              </li>
            )
          })}
        </ul>
      </SideBoxContent>
    </SideBox>
  )
}