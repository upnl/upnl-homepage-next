// @/utils/database/tag.ts

// Type
import { TagCount } from "@/utils/types";

export async function getTagData(): Promise<{
  tagList: TagCount[];
}> {
  const tagList: TagCount[] = [
    { no: 1, content: "DB", count: 3 },
    { no: 2, content: "게임", count: 2 },
    { no: 3, content: "퍼즐", count: 1 },
  ];

  return { tagList };
}
