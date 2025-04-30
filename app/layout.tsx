import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import SessionProvider from "./SessionProvider";
import "./globals.css";
import "@/public/css/nanoscroller.css";

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
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/bootstrap.min.css"
          media="screen"
          title="homepage"
          charSet="UTF-8"
        />
      </head>
      <body>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
