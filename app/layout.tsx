import type { Metadata } from "next";
import "./globals.css";
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
      <body>{children}</body>
    </html>
  );
}
