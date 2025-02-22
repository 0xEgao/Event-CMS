import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "A Next.js application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
