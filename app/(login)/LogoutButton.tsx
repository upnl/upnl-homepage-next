"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  return (
    <a
      href="/logout"
      onClick={async (e) => {
        e.preventDefault();
        await signOut();
        router.push("/");
      }}
    >
      로그아웃
    </a>
  );
}
