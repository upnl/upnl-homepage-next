// @/components/study/StudyGrid

// Component
import StudyCard from '@/components/study/StudyCard';
// Type
import { StudySuite } from '@/utils/typeSuite';

export default function StudyGrid({
  studies,
  cardWidth = 355,
}: {
  studies: StudySuite[];
  cardWidth?: number;
}) {
  return (
    <div
      className="contentbox__grid-content"
      style={{ gridTemplateColumns: `repeat(auto-fit, ${cardWidth}px)` }}
    >
      {studies.map((study) => (
        <StudyCard key={study.no} study={study} />
      ))}
    </div>
  );
}
