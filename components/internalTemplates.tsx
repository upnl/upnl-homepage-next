/*
  in page.tsx, return like this:
  return (
    <Container>
      <SideBar>
        ...add_sidebar
        <TagCloud/>
      </SideBar>
      <Main>
        ...contents
      </Main>
      <Panorama/>
    </Container>
  );

  or, if no sidebar:
  return (
    <Container>
      <MainAlone>
        ...contents
      </MainAlone>
      <Panorama/>
    </Container>
  );
*/

import Link from "next/link";

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div id="middle" className="container backboard">
      {children}
    </div>
  );
}

export function Main({ children }: { children: React.ReactNode }) {
  return <div id="main_contents">{children}</div>;
}

export function MainAlone({ children }: { children: React.ReactNode }) {
  return (
    <div id="main_contents" style={{ width: 940, marginLeft: 15 }}>
      {children}
    </div>
  );
}

export function SideBar({ children }: { children: React.ReactNode }) {
  return <div id="sidebar">{children}</div>;
}

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

export async function Panorama() {
  // TODO: fetch panoramaList from database
  const panoramaList = [
    {
      action: { value: "new-article" },
      article: {
        no: 1,
        title: "Test Article",
        bbs_name: "자유게시판",
        bbs_url: "2",
        user: { no: 1, name: "Admin" },
      },
      actor: { no: 1, name: "Admin", email: "admin@example.com" },
      date: new Date(),
    },
    {
      action: { value: "new-comment" },
      article: {
        no: 1,
        title: "Test Article",
        bbs_name: "자유게시판",
        bbs_url: "2",
        user: { no: 1, name: "Admin" },
      },
      actor: { no: 1, name: "Admin", email: "admin@example.com" },
      date: new Date(),
    },
  ];
  const makeGravatarUrl = (_email: string, _size: number) =>
    "https://example.com";
  const prettyDate = (date: Date) => formatDate(date);
  return (
    <>
      <button id="panorama-wake-button">파노라마</button>
      <div id="panorama">
        <div className="title_horizontal">
          <h3>파노라마</h3>
        </div>
        <div id="panorama_content" className="content_horizontal">
          <div id="panorama_nano" className="nano">
            <div id="panorama_nano_content" className="nano-content">
              {panoramaList.map((panorama, index) =>
                panorama.article === null ? (
                  <div className="panorama_row article" key={index}>
                    <span>삭제된 게시글입니다.</span>
                  </div>
                ) : (
                  <div className="panorama_row article" key={index}>
                    <img
                      src={makeGravatarUrl(panorama.actor.email, 32)}
                      height="32px"
                    />
                    <div className="panorama-row-content">
                      <Link href={`/${panorama.article.no}`}>
                        {panorama.action.value === "new-article"
                          ? `${panorama.actor.name} 님의 글 [${panorama.article.title}]이(가) 등록되었습니다.`
                          : panorama.action.value === "new-comment"
                            ? `${panorama.actor.name} 님이 글 [${panorama.article.title}]에 댓글을 다셨습니다.`
                            : null}
                      </Link>
                      /
                      {panorama.article.bbs_name === "지름게시판" ? (
                        <>
                          <Link href="/purchases" className="panorama_board">
                            {panorama.article.bbs_name}
                          </Link>
                          <br />
                        </>
                      ) : (
                        <Link
                          href={`/board/${panorama.article.bbs_url}`}
                          className="panorama_board"
                        >
                          {panorama.article.bbs_name}
                        </Link>
                      )}
                      <span
                        title={formatDate(panorama.date)}
                        className="datatime"
                      >
                        ({prettyDate(panorama.date)})
                      </span>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
