import dayjs from "dayjs";
import { Container, MainAlone, Panorama } from "@/components/internalTemplates";
import Link from "next/link";
import "@/public/css/border_text.css";
import "./page.css";

function formatDate(date: Date) {
  return dayjs(date).format("MM/DD");
}

function isNew(date: Date) {
  const now = dayjs();
  const diffHours = now.diff(date, "hour");
  return diffHours < 24;
}

export default async function LoginIndex() {
  // TODO: fetch data from database
  const articles_notice = [
    {
      no: 1,
      date: new Date(),
      title: "공지사항 제목",
      comment: [],
    },
    {
      no: 2,
      date: new Date(),
      title: "공지사항 제목2",
      comment: [],
    },
  ];
  const articles_free = [
    {
      no: 3,
      date: new Date(),
      title: "자유게시판 제목",
      comment: [],
    },
    {
      no: 4,
      date: new Date(),
      title: "자유게시판 제목2",
      comment: [],
    },
  ];
  const purchase_list = [
    {
      no: 5,
      article: {
        no: 5,
        date: new Date(),
        title: "지름게시판 제목",
      },
      product_name: "제품명",
      assenter: [],
    },
    {
      no: 6,
      article: {
        no: 6,
        date: new Date(),
        title: "지름게시판 제목2",
      },
      product_name: "제품명2",
      assenter: [],
    },
  ];
  const promote_list = [
    {
      requester_name: "요청자 이름",
      assenter: [],
      bbs_url: 7,
    },
    {
      requester_name: "요청자 이름2",
      assenter: [],
      bbs_url: 8,
    },
  ];
  const articles_project = [
    {
      no: 9,
      bbs_name: "프로젝트 이름",
      date: new Date(),
      comment: [],
      title: "제목",
    },
  ];
  const workshop_portion = [
    {
      nth: 1,
      start_date: new Date(),
      sessions: [
        {
          no: 1,
          title: "세션 제목",
        },
        {
          no: 2,
          title: "세션 제목2",
        },
      ],
    },
  ];
  const allTagList = [
    { no: 1, content: "tag1", count: 5 },
    { no: 2, content: "tag2", count: 10 },
  ];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const tagLevel = (_count: number) => "";
  const required = 5;
  return (
    <Container>
      <MainAlone>
        <div id="main_new_articles" className="container nonedeco">
          <div className="title_horizontal">
            <h3>최신 글</h3>
          </div>
          <div id="main_notice" className="content_horizontal">
            <h4 id="main_notice_title">
              <Link href="/board/1">공지사항</Link>
            </h4>
            <div id="main_notice_contents" className="nano">
              <div id="main_notice_nano_content" className="nano-content">
                {articles_notice.map((article) => (
                  <div className="article_row" key={article.no}>
                    <span className="date">{formatDate(article.date)}</span>
                    <div className="article_row_content">
                      <span className="article_title">
                        <Link href={`/${article.no}`}>{article.title}</Link>
                      </span>
                      {article.comment.length !== 0 && (
                        <span className="comment">
                          [{article.comment.length}]
                        </span>
                      )}
                      <span className="is_new">
                        {isNew(article.date) && "★"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div id="main_freeboard" className="content_horizontal">
            <h4 id="main_freeboard_title">
              <Link href="/board/2">자유게시판</Link>
            </h4>
            <div id="main_freeboard_contents" className="nano">
              <div id="main_freeboard_nano_content" className="nano-content">
                {articles_free.map((article) => (
                  <div className="article_row" key={article.no}>
                    <span className="date">{formatDate(article.date)}</span>
                    <div className="article_row_content">
                      <span className="article_title">
                        <Link href={`/${article.no}`}>{article.title}</Link>
                      </span>
                      {article.comment.length !== 0 && (
                        <span className="comment">
                          [{article.comment.length}]
                        </span>
                      )}
                      <span className="is_new">
                        {isNew(article.date) && "★"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div id="main_purchase" className="content_horizontal">
            <h4 className="main_purchase_title">
              <Link href="/purchases" className="main_purchase_title">
                지름게시판
              </Link>
            </h4>
            <div id="main_purchase_contents" className="nano">
              <div id="main_purchase_nano_content" className="nano-content">
                {purchase_list.map((purchase) => (
                  <div className="purchase_row article" key={purchase.no}>
                    <span className="date">
                      {formatDate(purchase.article.date)}
                    </span>
                    <span className="purchase_row_title">
                      <Link href={`/${purchase.article.no}`}>
                        {purchase.article.title}
                      </Link>
                    </span>
                    <span className="num_agree">
                      {" "}
                      - 동의 수 : {purchase.assenter.length} / {required}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div id="main_promote" className="content_horizontal">
            <h4 id="main_promote_title">
              <Link href="/promotes">승격게시판</Link>
            </h4>
            <div id="main_promote_contents" className="nano">
              <div id="main_promote_nano_content" className="nano-content">
                {promote_list.map((promote) => (
                  <div className="promote_row article" key={promote.bbs_url}>
                    <span className="promote_row_title">
                      <Link href={`/board/${promote.bbs_url}`}>
                        {promote.requester_name}
                      </Link>
                    </span>
                    <span className="num_agree">
                      {" "}
                      - 동의 수 : {promote.assenter.length} / {required}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div id="main_users_activities" className="nonedeco">
          <div className="title_horizontal">
            <h3 id="main_user_activities_title">참여 중인 프로젝트 & 스터디</h3>
          </div>
          <div className="content_horizontal">
            <div id="main_user_activities_contents" className="nano">
              <div
                id="main_user_activities_nano_content"
                className="nano-content"
              >
                {articles_project.map((article) => (
                  <div
                    className="project_article container article"
                    key={article.no}
                  >
                    <h4>{article.bbs_name}</h4>
                    <span className="date">{formatDate(article.date)}</span>
                    <div className="project_row_content">
                      <span className="project_title">
                        <Link href={`/${article.no}`}>{article.title}</Link>
                      </span>
                      {article.comment.length !== 0 && (
                        <span className="comment">
                          [{article.comment.length}]
                        </span>
                      )}
                      <span className="is_new">
                        {isNew(article.date) && "★"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div id="tagcloud">
          <div className="title_horizontal">
            <h3>태그</h3>
          </div>
          <div className="content_horizontal">
            <div id="tag_contents" className="nano">
              <div className="nano-content">
                {allTagList.map((tag) => (
                  <span className="bar_separated" key={tag.no}>
                    <Link
                      className={tagLevel(tag.count)}
                      href={`/tag/${tag.no}`}
                    >
                      {tag.content}
                    </Link>
                  </span>
                ))}
              </div>
            </div>
            <div id="tag_search" className="search">
              <input id="tag_search_content" type="text" />
              <button id="tag_search_button">검색</button>
            </div>
            <div style={{ clear: "both" }}></div>
          </div>
        </div>
        <div id="workshop">
          <div className="title_vertical">
            <h3>워크샵</h3>
          </div>
          {workshop_portion.map((workshop) => (
            <div className="content_vertical" key={workshop.nth}>
              <div className="workshop_title">
                <h4>
                  <Link href={`/workshops/${workshop.nth}`}>
                    {workshop.nth}차 워크샵
                  </Link>
                </h4>
              </div>
              <div className="workshop_datatime">
                {dayjs(workshop.start_date).format("YYYY.MM.DD")}
              </div>
              <div className="workshop_about nano">
                <div className="nano-content">
                  {workshop.sessions
                    .filter((session) => session.title !== "")
                    .map((session) => (
                      <div className="session_title" key={session.no}>
                        {session.title}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </MainAlone>
      <Panorama />
    </Container>
  );
}
