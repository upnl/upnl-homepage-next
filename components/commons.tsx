// @/components/commons.tsx

/**
 * @file commons.tsx
 * @description
 * 이 파일은 Layout은 아니지만 공통적으로 재사용되는 UI 레이아웃 컴포넌트 모음입니다.
 * 각 컴포넌트는 HTML 태그처럼 직관적으로 사용할 수 있도록 설계되었으며,
 * 중복을 줄이고 유지보수를 용이하게 하기 위해 컴포넌트화되었습니다.
 * 
 * 컴포넌트화의 기준은 
 *  1) 한 페이지 내에서 2회 이상 사용
 *  2) 해당 컴포넌트를 사용 가능한 페이지가 2면 이상
 *  3) 해당 컴포넌트를 사용하는 요소의 구조 설계가 달라질 일이 기대되지 않음.
 * 입니다.
 * 
 * - `SideBox` 계열 컴포넌트는 좌측 사이드바 레이아웃을 구성할 때 사용됩니다.
 *   `/projects` 페이지에 두 개가 반복되며, 동일한 레이아웃이 `/studies`, `/workshops` 등에서도 사용되므로 컴포넌트화합니다.
 *
 * - `ContentBox` 계열 컴포넌트는 프로젝트, 스터디 카드 등 목록 형태의 콘텐츠를 시각적으로 나열할 때 사용됩니다.
 *   `/projects` 페이지에서 마찬가지로 두 개가 반복되며, 동일한 UI를 `/studies` 페이지에도 적용할 수 있어 재사용성을 고려해 컴포넌트화하였습니다.
 * 
 * @author Serius <tomskang@naver.com>
 * @lastModified 2025-05-17
 * 
 * @dependency
 * - @/styles/components/commons.css
 * - React, Next
**/

// Next
import Link from "next/link";
// React
import React from "react";
// Styles
import "@/styles/components/commons.css";

/**
 * @component SideBox
 * @description 사이드바에 위치하는 고정 박스입니다. 주로 페이지 왼편에 배치되며,
 * 내부에 <SideBoxTitle />과 <SideBoxContent />를 포함하여 사용합니다.
 * 
 * @usage
 * ```tsx
 * <SideBox>
 *   <SideBoxTitle content="제목" />
 *   <SideBoxContent>내용</SideBoxContent>
 * </SideBox>
 * ```
**/

type SideBoxProps = { children: React.ReactNode; id?: string; styles?: React.CSSProperties; };
export function SideBox({ children, id, styles }: SideBoxProps) {
  return (
    <div className="sidebox" id={id} style={styles}> {children} </div> );
}

type SideBoxTitleProps = { content: string; id?: string; };
export function SideBoxTitle({ content, id }: SideBoxTitleProps) {
  return (
    <div className="sidebox__title" id={id}> <h3 className="sidebox__titletext">{content}</h3> </div> );
}

type SideBoxContentProps = { children: React.ReactNode; id?: string; styles?: React.CSSProperties; };
export function SideBoxContent({ children, id, styles }: SideBoxContentProps) {
  return (
    <div className="sidebox__content" id={id} style={styles}> {children} </div> );
}

/**
 * @component ContentBox
 * @description 프로젝트 또는 스터디 카드들을 감싸는 그리드 레이아웃 컨테이너입니다.
 * 일반적으로 내부에 <ContentBoxTitle />과 <ContentBoxContent />를 함께 사용하여
 * 제목과 콘텐츠 영역을 나누어 구성합니다.
 * 
 * @usage
 * ```tsx
 * <ContentBox id="project_grid">
 *   <ContentBoxTitle content="프로젝트 목록" />
 *   <ContentBoxContent>
 *     <ProjectCard />
 *     <ProjectCard />
 *     <StudyCard />
 *   </ContentBoxContent>
 * </ContentBox>
 * ```
**/

type ContentBoxProps = { children: React.ReactNode; id?: string; styles?: React.CSSProperties; };
export function ContentBox({ children, id, styles }: ContentBoxProps) {
  return (
    <section className="contentbox" id={id} style={styles}> {children} </section> );
}

type ContentBoxTitleProps = {
  content: string;
  id?: string;
  button?: { href: string; text: string; id?: string; };
};
export function ContentBoxTitle({ content, id, button }: ContentBoxTitleProps) {
  return (
    <div className="contentbox__title" id={id}>
      <h3 className="contentbox__titletext">{content}</h3>
      {button && (
        <Link href={button.href} id={button.id} className="contentbox__titlebutton">{button.text}</Link>)}
    </div>
  );
}

type ContentBoxGridContentProps = { children: React.ReactNode; cardWidth: number; id?: string; styles?: React.CSSProperties; };
export function ContentBoxGridContent({ children, cardWidth, id, styles }: ContentBoxGridContentProps) {
  const totalStyle: React.CSSProperties = { ...styles, ...{ gridTemplateColumns: `repeat(auto-fit, ${cardWidth}px)`} };
  return (
    <div className="contentbox__grid-content" id={id} style={totalStyle}> {children} </div> );
}