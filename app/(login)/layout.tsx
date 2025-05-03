import Link from "next/link";
import Image from "next/image";
import "./layout.css";
import logo from "@/public/images/upnl.png";
/*
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css">
    <link rel="stylesheet" href="{{ url_for('static', filename='css/chosen.min.css') }}">
<script type="text/javascript" src="{{ url_for('static', filename='js/bootstrap.min.js') }}"></script>
<script type="text/javascript" src="{{ url_for('static', filename='ckeditor/ckeditor.js') }}"></script>
<script type="text/javascript" src="{{ url_for('static', filename='js/Autolinker.min.js') }}"></script>
<script type="text/javascript" src="{{ url_for('static', filename='js/chosen.jquery.min.js') }}"></script>
<script type="text/javascript" src="{{ url_for('static', filename='js/common.js') }}"></script>
<script type="text/javascript" src="{{ url_for('static', filename='js/typeahead.bundle.js') }}"></script>
<script type="text/javascript" src="{{ url_for('static', filename='js/sisyphus.min.js') }}"></script>
<script type="text/javascript" src="{{ url_for('static', filename='js/jquery.nanoscroller.min.js') }}"></script>
<script type="text/javascript" src="{{ url_for('static', filename='js/login/layout.js') }}"></script>
    */
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

// from date.strftime('%Y/%m/%d %H:%M')
// TODO: use dayjs
function formatDate(date: Date) {
  return (
    date.getFullYear() +
      "/" +
      String(date.getMonth() + 1).padStart(2, "0") +
      "/" +
      String(date.getDate()).padStart(2, "0") +
      " " +
      String(date.getHours()).padStart(2, "0") +
      ":" +
      String(date.getMinutes()).padStart(2, "0")
  );
}

export default async function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  if (!session)
    redirect("/");

  /* TODO: data fetching */
  const user = {
    id: "admin",
    no: 1,
    name: session.user?.name ?? "username",
  };
  const gravatarUrl = "https://example.com";
  const boardList = [
    { bbs_url: "1", bbs_name: "공지사항" },
    { bbs_url: "2", bbs_name: "자유게시판" },
  ];
  const allTagList = [
    { no: 1, content: "tag1", count: 5 },
    { no: 2, content: "tag2", count: 10 },
  ];
  const panoramaList = [
    {
      action: { value: "new-article" },
      article: {
        no: 1, title: "Test Article", bbs_name: "자유게시판", bbs_url: "2",
        user: { no: 1, name: "Admin" },
      },
      actor: { no: 1, name: "Admin", email: "admin@example.com" },
      date: new Date(),
    },
    {
      action: { value: "new-comment" },
      article: {
        no: 1, title: "Test Article", bbs_name: "자유게시판", bbs_url: "2",
        user: { no: 1, name: "Admin" },
      },
      actor: { no: 1, name: "Admin", email: "admin@example.com" },
      date: new Date(),
    },
  ];
  const lastCommit = "abcdef";
  const lastCommitDate = new Date();

  // TODO: utilties
  const tagLevel = (_count: number) => "";
  const makeGravatarUrl = (_email: string, _size: number) => "https://example.com";
  const prettyDate = (date: Date) => formatDate(date);

  // TODO: jinja blocks
  const blockAddSidebar = null;
  const blockSidebar = (
    <div id="sidebar">
      {blockAddSidebar}
      <div id="tagcloud">
        <div className="title_horizontal">
          <h3>태그</h3>
        </div>
        <div className="content_horizontal">
          <div id="tag_contents" className="nano">
            <div className="nano-content">
              {allTagList.map((tag) => (
                <span className="bar_separated" key={tag.no}>
                  <a className={tagLevel(tag.count)} href={`/tag/${tag.no}`}>
                    {tag.content}
                  </a>
                </span>
              ))}
            </div>
          </div>
          <div id="tag_search" className="search">
            <input id="tag_search_content" type="text"/>
            <button id="tag_search_button">검색</button>
          </div>
          <div style={{clear: "both"}}></div>
        </div>
      </div>
    </div>
  );
  const blockContents = children;
  const blockPanorama = (
    <>
      <button id="panorama-wake-button">파노라마</button>
      <div id="panorama">
        <div className="title_horizontal">
          <h3>파노라마</h3>
        </div>
        <div id="panorama_content" className="content_horizontal">
          <div id="panorama_nano" className="nano">
            <div id="panorama_nano_content" className="nano-content">
              {panoramaList.map((panorama, index) => (
                panorama.article === null ?
                  <div className="panorama_row article" key={index}>
                    <span>삭제된 게시글입니다.</span>
                  </div>
                  :
                  <div className="panorama_row article" key={index}>
                    <img src={makeGravatarUrl(panorama.actor.email, 32)} height="32px" />
                    <div className="panorama-row-content">
                      <Link href={`/${panorama.article.no}`}>
                        {panorama.action.value === "new-article" ?
                          `${panorama.actor.name} 님의 글 [${panorama.article.title}]이(가) 등록되었습니다.` :
                          panorama.action.value === "new-comment" ?
                          `${panorama.actor.name} 님이 글 [${panorama.article.title}]에 댓글을 다셨습니다.` :
                          null
                        }
                      </Link>
                      /
                      {panorama.article.bbs_name === "지름게시판" ?
                        (<>
                          <Link href="/purchases" className="panorama_board">
                            {panorama.article.bbs_name}
                          </Link>
                          <br />
                        </>) :
                          (<Link href={`/board/${panorama.article.bbs_url}`} className="panorama_board">
                            {panorama.article.bbs_name}
                          </Link>)
                      }
                      <span title={formatDate(panorama.date)} className="datatime">
                        ({prettyDate(panorama.date)})
                      </span>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div id="body">
      <h1 id="club_title">UPnL Homepage</h1>
      {/* TODO: show '회원 정보가 변경되었습니다.' message on info changed */}
      <div id="header" className="default">
        <div id="top_menu" className="dark">
          <div id="menu_menu">
            {user.id == 'admin' && (<>
              <span>
                <Link href="/admin">관리자 페이지</Link>
              </span>
              <span className="bar">|</span>
            </>)}
            <span>
              <Link href="/logout">로그아웃</Link>
            </span>
            <span className="bar">|</span>
            <span>
              <Link href={`/modify_user/${user.no}`}>정보 변경</Link>
            </span>
          </div>
          <div id="menu_user_info">
            <span id="menu_user_gravatar">
              <img src={gravatarUrl}/>
            </span>
            <span id="menu_username">
              <Link href={`/user_info/${user.no}`}>{user.name}</Link>
            </span>
          </div>
        </div>
        <div id="logo">
          <Link href="/main">
            <Image src={logo} width={158} height={49} alt="images/upnl.png" />
          </Link>
          <div className="hide">
            <h2>
              <Link href="/main">UPnL</Link>
            </h2>
          </div>
        </div>
        <ul id="category">
          <li id="category_various" className="category_content">
            <Link href="/board/2">게시판</Link>
          </li>
          <li id="category_study" className="category_content">
            <Link href="/study">스터디</Link>
          </li>
          <li id="category_project" className="category_content">
            <Link href="/projects">프로젝트</Link>
          </li>
          <li id="category_workshop" className="category_content">
            <Link href="/workshops/0">워크샵</Link>
          </li>
          <li id="category_calendar" className="category_content">
            <Link href="/calendar">일정</Link>
          </li>
        </ul>
        <div id="content_line">
          <div id="nav_button_left">◁</div>
          <div id="line_various">
            {boardList.map((board) => (
              <span className="bar_separated" key={board.bbs_url}>
                <Link href={`/board/${board.bbs_url}`}>{board.bbs_name}</Link>
              </span>
            ))}
            <span className="bar_separated"><Link href="/purchases">지름게시판</Link></span>
            <span className="bar_separated"><Link href="/promotes">정회원 승격 신청</Link></span>
          </div>
          <div id="nav_button_right">▷</div>
        </div>
      </div>
      {/*헤더끝*/}
      <div id="middle" className="container backboard">
        {blockSidebar}
        <div id="main_contents">
          {blockContents}
        </div>
        {blockPanorama}
      </div>
      {/*푸터시작*/}
      <div id="bottom_menu" className="default dark">
        <span><a href="https://github.com/upnl/upnl-homepage-next/issues">오류 신고 / 기능 제안</a></span>
        <span className="bar">|</span>
        <span>
          <Link href="/users">회원 정보</Link>
        </span>
        <span className="bar">|</span>
        <span>
          <Link href="http://wiki.sodrak.upnl.org">위키</Link>
        </span>
        <span className="bar">|</span>
        <span>
          <Link href="/panorama">파노라마</Link>
        </span>
        <span className="bar">|</span>
        <span>
          {/* TODO: what is this? */}
          <Link href="/andromeda">안드로메다</Link>
        </span>
        <span className="bar">|</span>
        <span><Link href="/public/bylaw">UPnL 회칙</Link></span>
        <span className="bar">|</span>
        <Link href="/recent.atom">Atom</Link>
        <div className="about-commit">
          {lastCommit.length > 0 && (
            <span>
              마지막 커밋: <Link href={`https://github.com/upnl/upnl-homepage-next/commit/${lastCommit}`}>{lastCommit.slice(0, 5)}</Link>
              (최근 수정: {prettyDate(lastCommitDate)})
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
