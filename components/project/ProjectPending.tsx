// @/components/project/ProjectPending.tsx

/**
 * @file ProjectPending.tsx
 * @description 연도별로 완료된 프로젝트 목록을 필터링하여 렌더링하는 컴포넌트.
 * 
 * @author Serius <tomskang@naver.com>
 * @lastModified 2025-05-14
 * 
 * @component
 * @param {number[]} yearList - 선택 가능한 연도 목록
 * @param {Project[]} projects - 전체 완료된 프로젝트 목록 getProjectsDataSuite.pendingProjects
 *
 * @state {number} selectedYear - 현재 선택된 연도 (버튼 클릭으로 변경됨)
 * @state {Project[]} filteredProjects - 선택된 연도에 해당하는 프로젝트
 *
 * @dependency @/types/project.tsx, React
**/

'use client'

// Components
import ProjectCard from './ProjectCard'
// React
import { useEffect, useState } from 'react'
// Styles
import "./project.css";
// Types
import { Project } from '@/types/project'

type ProjectPendingProps = {
  yearList: number[]
  projects: Project[]
}

export default function ProjectPending({ yearList, projects }: ProjectPendingProps) {
  const [selectedYear, setSelectedYear] = useState<number>(yearList[0])
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])

  useEffect(() => {
    const filtered = projects.filter(
      (p) => new Date(p.finish_date).getFullYear() === selectedYear
    )
    setFilteredProjects(filtered)
  }, [selectedYear, projects])

  return (
    <div id="pending_projects">
      <div id="pending_projects_label">
        <h3>완료된 프로젝트</h3>
      </div>

      {/* 연도 선택 */}
      <div id="pending_project_year_list" className="article light">
        {yearList.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`text-sm px-2 py-1 rounded ${
              year === selectedYear ? 'bg-blue-600 text-white' : 'text-blue-600 hover:underline'
            }`}
          >
            {year}년
          </button>
        ))}
      </div>

      {/* 프로젝트 목록 */}
      {filteredProjects.length > 0 ? (
        <div id="pending_projects_detail" className="container">
          {filteredProjects.map((p) => (
            <ProjectCard key={p.no} project={p} />
          ))}
        </div>
      ) : (
        <p className="projects__notice-empty">해당 연도에 완료된 프로젝트가 없습니다.</p>
      )}
    </div>
  )
}