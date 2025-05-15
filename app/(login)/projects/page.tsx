// @/app/(login)/projects/page.tsx

// Components
import TagCloud from './TagCloud'
import ProjectSide from '@/components/project/ProjectSidebar'
import ProjectWorkin from '@/components/project/ProjectWorkin'
import ProjectPending from '@/components/project/ProjectPending'
// Utils
import { getProjectsDataSuite, getTagData } from '@/utils/database/project'
// Styles (temp)
import "./layout.css";

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
    <div id="middle" className="container backboard">
      {/* Sidebar at left */}
      <div id="sidebar">
        <ProjectSide projects={workingProjects} />
        <TagCloud tags={tagList} />
      </div>

      {/* Center-Right Section */}
      <div id="main_contents">
        <ProjectWorkin
          projects={workingProjects}
        />
        <ProjectPending 
          projects={pendingProjects}
          yearList={yearList}
        />
      </div>
    </div>
  )
}