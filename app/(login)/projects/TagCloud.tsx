// components/TagCloud.tsx

// Types
import { Tag } from '@/types/project'

type TagCloudProps = {
  tags: Tag[]
}

function tagLevel(count: number): string {
  if (count > 10) return 'tag-xl'
  if (count > 5) return 'tag-lg'
  if (count > 2) return 'tag-md'
  return 'tag-sm'
}

export default function TagCloud({ tags }: TagCloudProps) {
  return (
    <div id="tagcloud">
      <div className="title_horizontal">
        <h3>태그</h3>
      </div>
      <div className="content_horizontal">
        <div id="tag_contents" className="nano has-scrollbar">
          <div id="tag_contents">
            {tags.map((tag, idx) => (
              <span key={tag.no}>
                <a className={tagLevel(tag.count)} href={`/tag/${tag.no}`}>
                  {tag.content}
                </a>
                {idx !== tags.length - 1 && <span className="bar">|</span>}
              </span>
            ))}
          </div>
          <div id="tag_search" className="search">
            <input id="tag_search_content" type="text" />
            <button id="tag_search_button">검색</button>
          </div>
        </div>
      </div>
    </div>
  )
}