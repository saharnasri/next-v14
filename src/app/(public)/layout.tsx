import type { Metadata } from "next";
// import localFont from "next/font/local";

import "../globals.css";
import Header from "@/app/(public)/Header";
import Footer from "@/app/(public)/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Next App",
  description: "Code Challenge Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="px-8 py-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
