// /types/project.ts

export type ProjectSuite = {
  no: number;
  name: string;
  genre: string;
  is_public: boolean;
  introduction: string;
  detail: string;
  start_date: string;
  finish_date: string | null;
  thumbnail?: string;
  status: string;
  bbs_url: number;
  orderer_id: number;
  executable: string;
  is_show_page: boolean;
  participant_list: { name: string }[];
  tag_list: string[];
};
