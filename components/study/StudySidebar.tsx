// @/components/study/StudySidebar.tsx

"use client";

// Component
import { SideBox, SideBoxTitle, SideBoxContent } from "@/components/commons";
// Next
import Link from "next/link";
// React
import { useState } from "react";
// Style
import "@/styles/login/study/study-sidebar.css";
// Type
import { StudySuite } from "@/utils/typeSuite";

type StudySidebarProps = {
  workingStudies: StudySuite[];
  pendingStudies: StudySuite[];
};

export default function StudySidebar({
  workingStudies,
  pendingStudies,
}: StudySidebarProps) {
  const [showWorking, setShowWorking] = useState(false);
  const [showPending, setShowPending] = useState(false);

  return (
    <SideBox id="board_list">
      <SideBoxTitle content="스터디" />
      <SideBoxContent id="board_list_content">
        <div
          className="study_toggle_section"
          onClick={() => setShowWorking((prev) => !prev)}
        >
          <h4 className="study_toggle_title"> 진행중인 스터디 </h4>
          <span className="list_switch"> {showWorking ? "−" : "+"}</span>
        </div>
        {showWorking && (
          <ul id="working_study_list" className="study_list">
            {workingStudies.map((study) => (
              <li key={study.no}>
                └ <Link href={`/board/${study.board_no}`}>{study.name}</Link>
              </li>
            ))}
          </ul>
        )}

        <div
          className="study_toggle_section"
          onClick={() => setShowPending((prev) => !prev)}
        >
          <h4 className="study_toggle_title">완료된 스터디</h4>
          <span className="list_switch">{showPending ? "−" : "+"}</span>
        </div>
        {showPending && (
          <ul id="pending_study_list" className="study_list">
            {pendingStudies.map((study) => (
              <li key={study.no}>
                └ <Link href={`/board/${study.board_no}`}>{study.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </SideBoxContent>
    </SideBox>
  );
}
