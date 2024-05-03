import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hallo 👋 | Besta Alfidi",
  description: "Website Besta",
  keywords: "besta alfidi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" type="image" href="/favicon/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
