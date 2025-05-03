"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [autoLogin, setAutoLogin] = useState(true);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = await signIn("upnl-credential", {
      user_id: userId,
      password: password,
      callbackUrl: "/main",
    });

    if (result?.error) {
      alert(result.error);
    }
  }

  return (
    <form
      id="login_form"
      className="form-horizontal"
      name="Loginform"
      onSubmit={handleSubmit}
    >
      <div id="login_left">
        <div className="control-group">
          <div className="controls">
            <input
              type="text"
              name="id"
              id="id"
              autoFocus
              placeholder="아이디"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
        </div>
        <div className="control-group">
          <div className="controls">
            <input
              type="password"
              name="passwd"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div id="login_right">
        <button name="submit">로그인</button>
      </div>
      <div id="login_bottom">
        <div id="login_bottom_left">
          <div id="autologin_wrapper">
            <label>
              <input
                type="checkbox"
                name="autologin"
                checked={autoLogin}
                disabled
                onChange={(e) => setAutoLogin(e.target.checked)}
              />{" "}
              자동 로그인
            </label>
          </div>
        </div>
        <div id="login_bottom_right">
          <div id="is_lost_wrapper" className="light">
            <Link href="/public/find_account">
              <span id="is_lost">아이디/비밀번호 찾기</span>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
