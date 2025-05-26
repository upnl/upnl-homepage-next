'use client';

import { StudySuite } from '@/utils/typeSuite';
import { SideBox, SideBoxTitle, SideBoxContent } from '@/components/commons';
import Link from 'next/link';

type StudySidebarProps = {
  workingStudies: StudySuite[];
  pendingStudies: StudySuite[];
};

export default function StudySidebar({ workingStudies, pendingStudies }: StudySidebarProps) {
  return (
    <SideBox id="board_list">
      <SideBoxTitle content="스터디" />
      <SideBoxContent id="board_list_content">
        <h4>진행중인 스터디</h4>
        <ul>
          {workingStudies.map(study => (
            <li key={study.no}>
              └ <Link href={`/board/${study.board_no}`}>{study.name}</Link>
            </li>
          ))}
        </ul>
        <h4>완료된 스터디</h4>
        <ul>
          {pendingStudies.map(study => (
            <li key={study.no}>
              └ <Link href={`/board/${study.board_no}`}>{study.name}</Link>
            </li>
          ))}
        </ul>
      </SideBoxContent>
    </SideBox>
  );
}
