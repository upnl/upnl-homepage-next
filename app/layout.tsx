import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import SessionProvider from "./SessionProvider";
import "./bootstrap.css";
import "./nanoscroller.css";
import "./default.css";

export const metadata: Metadata = {
  title: "UPnL Homepage",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html>
      <body>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
