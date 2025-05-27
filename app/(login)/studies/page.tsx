// @/app/(login)/studies/page.tsx

// Component
import { Container, SideBar, Main } from "@/components/internalTemplates";
import StudySidebar from "@/components/study/StudySidebar";
import StudyGrid from "@/components/study/StudyGrid";
import TagCloud from "@/components/study/TagCloud";
// Database
import { getStudiesDataSuite } from "@/utils/database/study";
import { getTagData } from "@/utils/database/tag";
// Style
import "@/app/(login)/studies/study.css";

export default async function StudyPage() {
  const { workingStudies, pendingStudies } = await getStudiesDataSuite();
  const { tagList } = await getTagData();

  return (
    <Container>
      <SideBar>
        <StudySidebar
          workingStudies={workingStudies}
          pendingStudies={pendingStudies}
        />
        <TagCloud tags={tagList} />
      </SideBar>
      <Main>
        <StudyGrid studies={[...workingStudies, ...pendingStudies]} />
      </Main>
    </Container>
  );
}
