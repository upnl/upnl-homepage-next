// components/TagCloud.tsx

// Components
import { SideBox, SideBoxTitle, SideBoxContent } from "@/components/commons";
// Styles
import "@/styles/login/projects/tagcloud.css";
// Types
import { TagCount } from "@/utils/types";

function tagLevel(count: number): string {
  if (count > 10) return "tag-contents__tag--xl";
  if (count > 5) return "tag-contents__tag--lg";
  if (count > 2) return "tag-contents__tag--md";
  return "tag-contents__tag--sm";
}

type TagCloudProps = { tags: TagCount[] };
export default function TagCloud({ tags }: TagCloudProps) {
  return (
    <SideBox>
      <SideBoxTitle content="태그" />
      <SideBoxContent>
        <div className="tag-contents">
          <div className="tag-contents__list">
            {tags.map((tag, idx) => (
              <span key={tag.no} className="tag-contents__item">
                <a
                  className={`tag-contents__tag ${tagLevel(tag.count)}`}
                  href={`/tag/${tag.no}`}
                >
                  {tag.content}
                </a>
                {idx !== tags.length - 1 && (
                  <span className="tag-contents__bar">|</span>
                )}
              </span>
            ))}
          </div>
          <div className="tag-contents__search">
            <input className="tag-contents__input" type="text" />
            <button className="tag-contents__button">검색</button>
          </div>
        </div>
      </SideBoxContent>
    </SideBox>
  );
}
