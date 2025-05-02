import { Fragment } from "react";
import Link from "next/link";
import "./index.css";

// from date.strftime('%Y.%m.%d')
// TODO: use dayjs
function formatDate(date: Date) {
  return (
    date.getFullYear() +
    "." +
    String(date.getMonth() + 1).padStart(2, "0") +
    "." +
    String(date.getDate()).padStart(2, "0")
  );
}

export default async function Index() {
  // TODO: get data from database
  const mainContent = null;
  const tags = [
    { no: 1, content: "tag1" },
    { no: 2, content: "tag2" },
  ];
  const workshop_list = [
    {
      no: 0,
      nth: 21,
      start_date: new Date("2025-01-01T00:00:00"),
      sessions: [
        { no: 45, public_level: true, title: "sample session title1" },
        { no: 46, public_level: true, title: "sample session title2" },
        { no: 47, public_level: true, title: "sample session title3" },
        { no: 48, public_level: true, title: "sample session title4" },
        { no: 49, public_level: true, title: "sample session title5" },
        { no: 50, public_level: true, title: "sample session title6" },
        { no: 51, public_level: true, title: "sample session title7" },
        { no: 52, public_level: true, title: "sample session title8" },
        { no: 53, public_level: true, title: "sample session title9" },
        { no: 54, public_level: true, title: "sample session title10" },
        { no: 55, public_level: true, title: "sample session title11" },
        { no: 56, public_level: true, title: "sample session title12" },
      ],
    },
  ];

  return (
    <div id="index_html" className="default backboard">
      <div id="represent_project" className="article">
        <h3 className="none_thing">프로젝트 소개</h3>
        <div id="button_left"> </div>
        <div id="thumbnail_wrapper">
          <div id="thumbnail_content"></div>
        </div>
        <div id="project_info">
          <h4 id="project_title"></h4>
          <h5 id="project_genre"></h5>
          <p id="project_intro"></p>
        </div>
        <div id="button_right"> </div>
      </div>
      <div id="aboutupnl">
        <div className="title_horizontal">
          <h3>About UPnL</h3>
        </div>
        <div className="content_horizontal">{mainContent}</div>
      </div>
      <div id="tagcloud">
        <div className="title_horizontal">
          <h3>태그</h3>
        </div>
        <div className="content_horizontal">
          <div id="tag_content" className="nano">
            <div className="nano-content">
              {tags.map((tag, index) => (
                <Fragment key={tag.no}>
                  <Link href={`/public/tag/${tag.no}`}>{tag.content}</Link>
                  {index < tags.length - 1 && " | "}
                </Fragment>
              ))}
            </div>
          </div>
          {/* TODO: extract to client component */}
          <div id="tag_search" className="search">
            <input id="tag_search_content" type="text" />
            <button id="tag_search_button">검색</button>
          </div>
        </div>
      </div>
      <div id="workshop">
        <div className="title_vertical">
          <h3>워크샵</h3>
        </div>
        {workshop_list.map((workshop) => (
          <div key={workshop.no} className="content_vertical">
            <div className="workshop_title">
              <h4>
                <Link href={`/public/workshop/${workshop.no}`}>
                  {workshop.nth}차 워크샵
                </Link>
              </h4>
            </div>
            <div className="workshop_datatime">
              {formatDate(workshop.start_date)}
            </div>
            <div className="workshop_about nano">
              <div className="nano-content">
                {workshop.sessions
                  .filter((session) => session.public_level)
                  .map((session) => (
                    <div key={session.no} className="session_title">
                      {session.title}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
