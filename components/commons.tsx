// @/components/commons.tsx

/**
 * @file commons.tsx
 * @description 공통적으로 사용하는 컴포넌트 리스트입니다. html 태그 처럼 사용하는 것이 주 목적입니다.
 * 
 * @author Serius <tomskang@naver.com>
 * @lastModified 2025-05-16
 *
 * @dependency @/styles/components/commons.css, Next, React
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
 * @component GridBox
 * @description 프로젝트 또는 스터디 카드들을 감싸는 그리드 레이아웃 컨테이너입니다.
 * 일반적으로 내부에 <GridBoxTitle />과 <GridBoxContent />를 함께 사용하여
 * 제목과 콘텐츠 영역을 나누어 구성합니다.
 * 
 * @usage
 * ```tsx
 * <GridBox id="project_grid">
 *   <GridBoxTitle content="프로젝트 목록" />
 *   <GridBoxContent>
 *     <ProjectCard />
 *     <ProjectCard />
 *     <StudyCard />
 *   </GridBoxContent>
 * </GridBox>
 * ```
**/

type GridBoxProps = { children: React.ReactNode; id?: string; styles?: React.CSSProperties; };
export function GridBox({ children, id, styles }: GridBoxProps) {
  return (
    <section className="gridbox" id={id} style={styles}> {children} </section> );
}

type GridBoxTitleProps = {
  content: string;
  id?: string;
  button?: { href: string; text: string; id?: string; };
};
export function GridBoxTitle({ content, id, button }: GridBoxTitleProps) {
  return (
    <div className="gridbox__title" id={id}>
      <h3 className="gridbox__titletext">{content}</h3>
      {button && (
        <Link href={button.href} id={button.id} className="gridbox__titlebutton">{button.text}</Link>)}
    </div>
  );
}

type GridBoxContentProps = { children: React.ReactNode; id?: string; styles?: React.CSSProperties; };
export function GridBoxContent({ children, id, styles }: GridBoxContentProps) {
  return (
    <div className="gridbox__content" id={id} style={styles}> {children} </div> );
}