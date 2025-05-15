// @/components/project/ProjectSidebar.tsx

// Styles
import "./project.css";
// Types
import { Project } from '@/types/project'

type ProjectSidebarProps = {
  projects: Project[]
}

export default function ProjectSide({ projects }: ProjectSidebarProps) {
  return (
    <div id="board_list">
      <div id="board_list_title" className="title_horizontal">
        <h3>프로젝트</h3>
      </div>
      <div id="board_list_content" className="content_horizontal">
        <ul>
          {projects.map((project) => {
            const isNew = project.status === 'working' || new Date(project.start_date).getFullYear() === new Date().getFullYear()

            return (
              <li key={project.bbs_url}>
                <a href={`/board/${project.bbs_url}`}>{project.name}</a>
                {isNew && <span className="is_new">★</span>}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}