// @/components/study/StudyCard

// Next
import Link from "next/link";
// Type
import { StudySuite } from "@/utils/typeSuite";

export default function StudyCard({ study }: { study: StudySuite }) {
  return (
    <div className="study-card">
      <div className="study_info">
        <h4 className="study_title">
          <Link href={`/board/${study.board_no}`}>{study.name}</Link>
        </h4>
        <div className="study_date">
          <span className="date">
            {study.start_date.slice(0, 7).replace("-", ".")}
          </span>{" "}
          ~{" "}
          <span className="date">
            {study.finish_date
              ? study.finish_date.slice(0, 7).replace("-", ".")
              : ""}
          </span>
        </div>
        <div className="study_about">
          <span>{study.introduction}</span>
        </div>
      </div>
      <div className="study_member_all">
        <span>멤버 : </span>
        {study.participant_list.map((u, idx) => (
          <span key={idx}>{u.name}</span>
        ))}
      </div>
      <div className="study_tag">
        <span>TAG </span>
        {study.tag_list.map((tag, idx) => (
          <span key={idx} className="tags_link">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
