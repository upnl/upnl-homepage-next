// @/components/project/ProjectPending.tsx

/**
 * @file ProjectPending.tsx
 * @description 연도별로 완료된 프로젝트 목록을 필터링하여 렌더링하는 컴포넌트.
 *
 * @author Serius <tomskang@naver.com>
 * @lastModified 2025-05-17
 *
 * @component
 * @param {number[]} yearList - 선택 가능한 연도 목록
 * @param {ProjectSuite[]} projects - 전체 완료된 프로젝트 목록 getProjectsDataSuite.pendingProjects
 * @param {number} cardWidth - 카드 너비 (단위=px).
 *
 * @state {number} selectedYear - 현재 선택된 연도 (버튼 클릭으로 변경됨)
 * @state {Project[]} filteredProjects - 선택된 연도에 해당하는 프로젝트
 *
 * @dependency @/types/project.tsx, React
 **/

"use client";

// Components
import ProjectCard from "./ProjectCard";
import {
  ContentBox,
  ContentBoxTitle,
  ContentBoxGridContent,
} from "@/components/commons";
// React
import { useEffect, useState, Fragment } from "react";
// Styles
import "@/styles/components/project/project-pending.css";
// Types
import { ProjectSuite } from "@/utils/typeSuite";

type ProjectPendingProps = {
  yearList: number[];
  projects: ProjectSuite[];
  cardWidth: number;
};

export default function ProjectPending({
  yearList,
  projects,
  cardWidth,
}: ProjectPendingProps) {
  const [selectedYear, setSelectedYear] = useState<number>(yearList[0]);
  const [filteredProjects, setFilteredProjects] = useState<ProjectSuite[]>([]);

  useEffect(() => {
    const filtered = projects.filter(
      (p) =>
        p.finish_date && new Date(p.finish_date).getFullYear() === selectedYear,
    );
    setFilteredProjects(filtered);
  }, [selectedYear, projects]);

  return (
    <ContentBox id="pending-project">
      <ContentBoxTitle content="완료된 프로젝트" />

      {/* 연도 선택 */}
      <div className="project-year-list article">
        <h3 className="project-year-list__title">완료 프로젝트 목록</h3>
        {yearList.map((year, idx) => (
          <Fragment key={year}>
            {idx > 0 && (
              <span className="project-year-list__seperator"> | </span>
            )}
            <a
              onClick={() => setSelectedYear(year)}
              className="project-year-list__year"
            >
              {year}년
            </a>
          </Fragment>
        ))}
      </div>

      {/* 프로젝트 목록 */}
      {filteredProjects.length > 0 ? (
        <ContentBoxGridContent cardWidth={cardWidth}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.no} project={project} width={cardWidth} />
          ))}
        </ContentBoxGridContent>
      ) : (
        <p className="projects__notice-empty">
          해당 연도에 완료된 프로젝트가 없습니다.
        </p>
      )}
    </ContentBox>
  );
}
