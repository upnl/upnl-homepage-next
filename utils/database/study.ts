// utils/database/study.ts

// Type
import { StudySuite } from "../typeSuite";

export function getStudiesDataSuite(): {
  workingStudies: StudySuite[];
  pendingStudies: StudySuite[];
} {
  const allStudies: StudySuite[] = [
    {
      no: 35,
      name: "TRPG 스터디?",
      introduction:
        "여러 참여자가 정해진 시간에 모여 의견을 나누면 스터디가 아닐까?",
      status: "working",
      board_no: 197,
      start_date: "2023-08-10",
      finish_date: null,
      orderer_id: 33,
      participant_list: [{ name: "홍길동" }, { name: "김철수" }],
      tag_list: ["TRPG", "참여형"],
    },
    {
      no: 43,
      name: "어려운책스터디",
      introduction: "어려운 책 같이 읽읍시다",
      status: "working",
      board_no: 224,
      start_date: "2024-09-23",
      finish_date: null,
      orderer_id: 258,
      participant_list: [{ name: "이영희" }],
      tag_list: ["독서", "심화"],
    },
    {
      no: 45,
      name: "동기 부여 스터디",
      introduction: "으쌰으쌰",
      status: "working",
      board_no: 228,
      start_date: "2025-01-06",
      finish_date: null,
      orderer_id: 33,
      participant_list: [{ name: "박지성" }],
      tag_list: ["자기계발"],
    },
    {
      no: 29,
      name: "FastAPI 스터디",
      introduction:
        "Python 기반의 강력한 백엔드 서버 개발 프레임워크인 FastAPI를 공부합니다.",
      status: "pending",
      board_no: 161,
      start_date: "2022-12-30",
      finish_date: "2023-04-01",
      orderer_id: 56,
      participant_list: [{ name: "강명석" }, { name: "김개발" }],
      tag_list: ["Python", "백엔드"],
    },
    {
      no: 40,
      name: "2024 Rust Study",
      introduction: "Rust를 배워보자!",
      status: "pending",
      board_no: 216,
      start_date: "2024-04-05",
      finish_date: "2024-09-09",
      orderer_id: 274,
      participant_list: [{ name: "서준호" }],
      tag_list: ["Rust"],
    },
  ];

  return {
    workingStudies: allStudies.filter((s) => s.status === "working"),
    pendingStudies: allStudies.filter((s) => s.status === "pending"),
  };
}
