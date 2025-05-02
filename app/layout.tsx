import type { Metadata } from "next";
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
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
