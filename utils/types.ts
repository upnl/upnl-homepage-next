// @/utils/types.ts

export type Admin = {
  id: number;
  name: string;
  period: Date | null;
  year: number | null;
  semester: string | null;
};

export type Article = {
  no: number;
  title: string;
  content: string;
  date: Date;
  writer_id: number;
  writer_name: string;
  board_no: string;
  board_name: string;
  images_on_top: boolean;
  is_notice: boolean;
  render_type: string;
};

export type Board = {
  no: number;
  name: string;
  position: number;
};

export type Comment = {
  no: number;
  content: string;
  date: Date;
  writer_id: number;
  writer_name: string;
  article_id: number;
};

export type File = {
  no: number;
  s_name: string;
  filename: string;
  target_category: number;
  article_id: number | null;
  project_id: number | null;
};

export type Index = {
  id: number;
  content: string;
};

export type Panorama = {
  id: number;
  date: Date;
  actor_id: number;
  article_id: number;
  action: number;
};

export type Project = {
  no: number;
  name: string;
  genre: string;
  is_public: boolean;
  introduction: string;
  thumbnail: string;
  status: string;
  board_no: number;
  orderer_id: number;
  start_date: Date;
  finish_date: Date | null;
  detail: string | null;
  executable: string | null;
  is_show_page: boolean | null;
};

export type Promote = {
  no: number;
  requester_id: number;
  requester_name: string;
  board_no: number;
  start_year: number;
  start_semester: string;
};

export type Purchase = {
  no: number;
  product_name: string;
  about: string;
  url: string;
  article_id: number;
  start_year: number;
  start_semester: string;
  is_complete: boolean;
  requester: string;
};

export type Sessions = {
  no: number;
  title: string | null;
  introduction: string | null;
  public_level: number | null;
  s_filename: string | null;
  filename: string | null;
  workshop_id: number;
  presenter_id: number | null;
  presenter_name: string;
  present_order: number;
};

export type Study = {
  no: number;
  name: string;
  introduction: string;
  status: string;
  board_no: number;
  start_date: Date;
  finish_date: Date | null;
  orderer_id: number;
};

export type Tag = {
  no: number;
  content: string;
  tagger_id: number;
  tagger_name: string;
  target_category: number;
  target_id: number;
  is_public: boolean;
  base_id: number;
};

export type TagCount = {
  no: number;
  content: string;
  count: number;
};

export type Term = {
  id: number;
  content: string;
};

export type User = {
  no: number;
  id: string;
  passwd: string;
  name: string;
  email: string;
  email_public: boolean;
  phone: string;
  phone_public: boolean;
  year: number | null;
  dept: string;
  level: string;
  theme: string;
  want_to_do: string;
  profile: string | null;
};

export type Workshop = {
  no: number;
  nth: number;
  place: string;
  start_date: Date;
};
