// @/components/commons.tsx

/**
 * @file commons.tsx
 * @description 공통적으로 사용하는 컴포넌트 리스트입니다. html 태그 처럼 사용하는 것이 주 목적입니다.
 * 
 * @author Serius <tomskang@naver.com>
 * @lastModified 2025-05-16
 *
 * @dependency @/styles/components/commons.css
**/

// React
import React from "react";
// Styles
import "@/styles/components/commons.css";


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
