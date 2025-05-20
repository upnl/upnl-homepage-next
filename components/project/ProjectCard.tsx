// @/components/project/ProjectCard.tsx

/**
 * @file ProjectCard.tsx
 * @description 개별 프로젝트 정보를 카드 형태로 렌더링하는 컴포넌트.  
 * 추후 `user_login`, `tag_render` 등의 props를 받아 사용자 기반 제어 및  
 * 커스텀 태그 렌더링 등 재사용성을 강화할 수 있도록 확장 예정.
 *
 * @author Serius <tomskang@naver.com>
 * @lastModified 2025-05-14
 *
 * @component
 * @param {Project} project - 표시할 프로젝트 객체
 * @param {boolean} [user_login] - 로그인 여부 (TODO)
 * @param {number?} width - 카드 너비 (px). 값이 주어지지 않으면 355px로 설정됨.
 *
 * @dependency next/image, @/types/project.ts, ./project.css
**/

// Next
import Image from 'next/image'
// Styles
import "@/styles/components/project/project-card.css"
// Types
import { Project } from '@/types/project'

type ProjectCardProps = {
  project: Project
  width?: number
}

export default function ProjectCard({ project, width }: ProjectCardProps) {
  return (
    <div className="project-card" style={width ? { width: `${width}px` } : undefined}>
      <div className="project-card__information">
        <div className="project-card__thumbnail-box">
          <a href={`/board/${project.bbs_url}`}>
            <Image
              src={`/download/thumbnail/${project.thumbnail || 'default_thumb_upnl.png'}`}
              alt={`${project.name} thumbnail`}
              width={128}
              height={128}
              className="project-card__thumbnail-image"
              unoptimized
            />
          </a>
        </div>

        
        <h4 className="project-card__title">
          <a href={`/board/${project.bbs_url}`}>{project.name}</a>
        </h4>
        <h5 className="project-card__genre">{project.genre}</h5>
        <div className="project-card__date">
          {project.start_date.slice(0, 7).replace('-', '.')} ~
          {project.finish_date ? ' ' + project.finish_date.slice(0, 7).replace('-', '.') : ''}
        </div>

        <div className="project-card__member-box">
          <span>Members: </span>
          {project.participant_list.map((u) => (
            <span key={u.name} className=".project-card__member">
              {u.name}
            </span>
          ))}
        </div>

        <div className="project-card__intro">{project.introduction}</div>
      </div>

      <div className="project-card__tag-box">
        {project.tag_list.map((tag) => (
          <a
            key={tag}
            href={`/tag/${encodeURIComponent(tag)}`}
            className="project-card__tag"
          >
            #{tag}
          </a>
        ))}

        {/* 삭제 버튼 */}
        {/* 태그 추가 버튼 */}
      </div>
    </div>
  )
}
