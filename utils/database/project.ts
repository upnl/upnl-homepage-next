// @/utils/database.ts
import { Project, Tag } from '@/types/project'

export async function getProjectsDataSuite(): Promise<{
  workingProjects: Project[]
  pendingProjects: Project[]
  yearList: number[]
}> {
  const pendingProjects: Project[] = [
    {
      no: 5,
      name: 'UPnL 포켓몬 DB',
      genre: '웹서비스',
      is_public: true,
      introduction: '기존 포켓몬 DB 사이트의 문제점을 개선하고 강력한 검색 기능을 지원하는 거의 다 만들어가는 프로젝트',
      detail: '',
      start_date: '2014-04-22',
      finish_date: '2015-07-07',
      thumbnail: 'exampleA.jpg',
      status: 'pending',
      bbs_url: 7,
      orderer_id: 2,
      executable: '',
      is_show_page: false,
      participant_list: [{ name: '홍길동' }],
      tag_list: ['포켓몬', 'DB'],
    },
    {
      no: 73,
      name: 'We R the Ducks?!(미완)',
      genre: '퍼즐게임',
      is_public: false,
      introduction: '프로젝트 구성원 대부분이 기획을 까먹은 프로젝트입니다 :)',
      detail: '',
      start_date: '2013-12-29',
      finish_date: '2017-02-08',
      thumbnail: 'exampleB.jpg',
      status: 'pending',
      bbs_url: 12,
      orderer_id: 33,
      executable: '',
      is_show_page: false,
      participant_list: [{ name: '유재석' }],
      tag_list: ['기획실종'],
    },
    {
      no: 14,
      name: 'Vision of Horus',
      genre: '아케이드',
      is_public: false,
      introduction: '잃어버린 시력을 되찾기 위해 괴물이 득실대는 미궁 속을 영원히 탐험하는 게임',
      detail: '',
      start_date: '2015-06-16',
      finish_date: '2015-09-21',
      thumbnail: 'exampleA.jpg',
      status: 'pending',
      bbs_url: 35,
      orderer_id: 2,
      executable: '',
      is_show_page: false,
      participant_list: [{ name: '김도현' }],
      tag_list: ['시력', '미궁', '게임'],
    },
    // ... 생략 가능, 추가로 작성 가능
  ]

  const yearList = [
    ...new Set(pendingProjects.filter(p => p.finish_date).map(p => new Date(p.finish_date!).getFullYear()))
  ].sort((a, b) => b - a)

  const workingProjects: Project[] = [
    {
      no: 5,
      name: 'UPnL 포켓몬 DB',
      genre: '웹서비스',
      is_public: true,
      introduction: '기존 포켓몬 DB 사이트의 문제점을 개선하고 강력한 검색 기능을 지원하는 거의 다 만들어가는 프로젝트',
      detail: '',
      start_date: '2014-04-22',
      finish_date: '2015-07-07',
      thumbnail: 'exampleA.jpg',
      status: 'pending',
      bbs_url: 7,
      orderer_id: 2,
      executable: '',
      is_show_page: false,
      participant_list: [{ name: '홍길동' }],
      tag_list: ['포켓몬', 'DB'],
    },
    {
      no: 54,
      name: 'UPnL 포켓몬 DB',
      genre: '웹서비스',
      is_public: true,
      introduction: '기존 포켓몬 DB 사이트의 문제점을 개선하고 강력한 ',
      detail: '',
      start_date: '2014-04-22',
      finish_date: '2015-07-07',
      thumbnail: 'exampleA.jpg',
      status: 'pending',
      bbs_url: 23,
      orderer_id: 2,
      executable: '',
      is_show_page: false,
      participant_list: [{ name: '홍길동' }],
      tag_list: ['포켓몬', 'DB'],
    },
    {
      no: 75,
      name: 'We R the Ducks?!(미완)',
      genre: '퍼즐게임',
      is_public: false,
      introduction: '프로젝트 구성원 대부분이 기획을 까먹은 프로젝트입니다 :)',
      detail: '',
      start_date: '2013-12-29',
      finish_date: '2017-02-08',
      thumbnail: 'exampleB.jpg',
      status: 'pending',
      bbs_url: 129,
      orderer_id: 33,
      executable: '',
      is_show_page: false,
      participant_list: [{ name: '유재석' }],
      tag_list: ['기획실종'],
    },
    {
      no: 239,
      name: '새로운 프로젝트',
      genre: '웹서비스',
      is_public: true,
      introduction: '기존 포켓몬 DB 사이트의 문제점을 개선하고 강력한 검색 기능을 지원하는 거의 다 만들어가는 프로젝트',
      detail: '',
      start_date: '2014-04-22',
      finish_date: '2015-07-07',
      thumbnail: 'exampleA.jpg',
      status: 'pending',
      bbs_url: 7,
      orderer_id: 2,
      executable: '',
      is_show_page: false,
      participant_list: [{ name: '홍길동' }],
      tag_list: ['포켓몬', 'DB'],
    },
  ]

  return {
    workingProjects,
    pendingProjects,
    yearList
  }
}

export async function getTagData(): Promise<{
  tagList: Tag[]
}> {
  const tagList: Tag[] = [
    { no: 1, content: 'DB', count: 3 },
    { no: 2, content: '게임', count: 2 },
    { no: 3, content: '퍼즐', count: 1 },
  ]

  return { tagList };
}
