"use client";
import Link from "next/link";
import { useRef, useState } from "react";

type Board = {
  bbs_url: string;
  bbs_name: string;
};

export default function CategoryMenu({ boardList }: { boardList: Board[] }) {
  const [showContentLine, setShowContentLine] = useState(false);
  const lineVariousRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <ul id="category">
        <li
          id="category_various"
          className="category_content"
          onMouseOver={() => setShowContentLine(true)}
        >
          <Link href="/board/2">게시판</Link>
        </li>
        <li
          id="category_study"
          className="category_content"
          onMouseOver={() => setShowContentLine(false)}
        >
          <Link href="/study">스터디</Link>
        </li>
        <li
          id="category_project"
          className="category_content"
          onMouseOver={() => setShowContentLine(false)}
        >
          <Link href="/projects">프로젝트</Link>
        </li>
        {/* TODO: why workshop and calendar do not hide content line */}
        <li id="category_workshop" className="category_content">
          <Link href="/workshops/0">워크샵</Link>
        </li>
        <li id="category_calendar" className="category_content">
          <Link href="/calendar">일정</Link>
        </li>
      </ul>
      <div id="content_line">
        {showContentLine && (
          <>
            <div
              id="nav_button_left"
              onClick={() => {
                if (lineVariousRef.current) {
                  lineVariousRef.current.scrollLeft -= 200;
                }
              }}
            >
              ◁
            </div>
            <div id="line_various" ref={lineVariousRef}>
              {boardList.map((board) => (
                <span className="bar_separated" key={board.bbs_url}>
                  <Link href={`/board/${board.bbs_url}`}>{board.bbs_name}</Link>
                </span>
              ))}
              <span className="bar_separated">
                <Link href="/purchases">지름게시판</Link>
              </span>
              <span className="bar_separated">
                <Link href="/promotes">정회원 승격 신청</Link>
              </span>
            </div>
            <div
              id="nav_button_right"
              onClick={() => {
                if (lineVariousRef.current) {
                  lineVariousRef.current.scrollLeft += 200;
                }
              }}
            >
              ▷
            </div>
          </>
        )}
      </div>
    </>
  );
}
