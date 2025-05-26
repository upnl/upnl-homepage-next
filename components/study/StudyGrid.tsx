// @/components/study/StudyGrid.tsx

// Component
import StudyCard from "@/components/study/StudyCard";
// Common Layout
import {
  ContentBox,
  ContentBoxTitle,
  ContentBoxGridContent,
} from "@/components/commons";
// Type
import { StudySuite } from "@/utils/typeSuite";

export default function StudyGrid({
  studies,
  cardWidth = 355,
}: {
  studies: StudySuite[];
  cardWidth?: number;
}) {
  return (
    <ContentBox id="study_grid" styles={{}}>
      <ContentBoxTitle
        content="스터디"
        button={{ href: "/create/study", text: "새 스터디" }}
      />
      <div id="study_detail" className="subbackboard">
        <ContentBoxGridContent
          cardWidth={cardWidth}
          id="study_grid_content"
          styles={{}}
        >
          {studies.map((study) => (
            <StudyCard key={study.no} study={study} />
          ))}
        </ContentBoxGridContent>
      </div>
    </ContentBox>
  );
}
