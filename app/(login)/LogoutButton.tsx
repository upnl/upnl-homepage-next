"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <a
      href="/logout"
      onClick={async (e) => {
        e.preventDefault();
        await signOut({ callbackUrl: "/" });
      }}
    >
      로그아웃
    </a>
  );
}
