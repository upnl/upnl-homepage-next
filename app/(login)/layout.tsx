import Link from "next/link";
import Image from "next/image";
import "./layout.css";
import logo from "@/public/images/upnl.png";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import CategoryMenu from "./CategoryMenu";
import LogoutButton from "./LogoutButton";

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
  if (!session) redirect("/");

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
  const lastCommit = "abcdef";
  const lastCommitDate = new Date();

  // TODO: utilties
  const prettyDate = (date: Date) => formatDate(date);

  return (
    <div id="body">
      <h1 id="club_title">UPnL Homepage</h1>
      {/* TODO: show '회원 정보가 변경되었습니다.' message on info changed */}
      <div id="header" className="default">
        <div id="top_menu" className="dark">
          <div id="menu_menu">
            {user.id == "admin" && (
              <span className="bar_separated">
                <Link href="/admin">관리자 페이지</Link>
              </span>
            )}
            <span className="bar_separated">
              <LogoutButton />
            </span>
            <span className="bar_separated">
              <Link href={`/modify_user/${user.no}`}>정보 변경</Link>
            </span>
          </div>
          <div id="menu_user_info">
            <span id="menu_user_gravatar">
              <img src={gravatarUrl} />
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
        <CategoryMenu boardList={boardList} />
      </div>
      {/*헤더끝*/}
      {children}
      {/*푸터시작*/}
      <div id="bottom_menu" className="default dark">
        <span className="bar_separated">
          <a href="https://github.com/upnl/upnl-homepage-next/issues">
            오류 신고 / 기능 제안
          </a>
        </span>
        <span className="bar_separated">
          <Link href="/users">회원 정보</Link>
        </span>
        <span className="bar_separated">
          <Link href="http://wiki.sodrak.upnl.org">위키</Link>
        </span>
        <span className="bar_separated">
          <Link href="/panorama">파노라마</Link>
        </span>
        <span className="bar_separated">
          {/* TODO: what is this? */}
          <Link href="/andromeda">안드로메다</Link>
        </span>
        <span className="bar_separated">
          <Link href="/public/bylaw">UPnL 회칙</Link>
        </span>
        <span className="bar_separated">
          <Link href="/recent.atom">Atom</Link>
        </span>
        <div className="about-commit">
          {lastCommit.length > 0 && (
            <span>
              마지막 커밋:{" "}
              <Link
                href={`https://github.com/upnl/upnl-homepage-next/commit/${lastCommit}`}
              >
                {lastCommit.slice(0, 5)}
              </Link>
              (최근 수정: {prettyDate(lastCommitDate)})
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
