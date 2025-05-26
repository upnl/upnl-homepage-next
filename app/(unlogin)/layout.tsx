import Link from "next/link";
import Image from "next/image";
import "./layout.css";
import logo from "@/public/images/upnl.png";

export default async function UnloginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const can_register = true; // TODO: get data from database

  return (
    <div id="body">
      <h1 id="club_title">UPnL Homepage</h1>
      <div id="header" className="default">
        <div id="top_menu" className="dark">
          <span>
            <Link href="/public/login">로그인</Link>
          </span>
          {" | "}
          {can_register ? (
            <span>
              <Link href="/public/join">회원가입</Link>
            </span>
          ) : (
            <span>
              <Link href="/public/join_existing">기존회원가입</Link>
            </span>
          )}
        </div>
        <div id="logo" className="img">
          <Link href="/">
            <Image src={logo} width={158} height={49} alt="images/upnl.png" />
          </Link>
        </div>
        <ul id="category">
          <li id="category_project" className="category_content">
            <Link href="/public/projects">프로젝트</Link>
          </li>
          <li id="category_workshop" className="category_content">
            <Link href="/public/workshop/0">워크샵</Link>
          </li>
        </ul>
        <div id="content_line">
          <div id="line_various">
            <span>
              <Link href="/public/board/1">공지사항</Link>
            </span>
            {" | "}
            <span>
              <Link href="/public/board/2">자유게시판</Link>
            </span>
          </div>
          <span id="line_project"></span>
          <span id="line_study"></span>
        </div>
      </div>
      {children}
      <div className="default">
        <div id="bottom_menu" className="dark">
          <span>
            <Link href="mailto:upnl.chairman@gmail.com">Contact</Link>
          </span>
          <span className="bar">|</span>
          <span>
            <Link href="/public/bylaw">UPnL 회칙</Link>
          </span>
          <span className="bar">|</span>
          <span>
            <Link href="https://github.com/upnl/upnl-homepage-next/issues">
              버그 및 오류 신고
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
