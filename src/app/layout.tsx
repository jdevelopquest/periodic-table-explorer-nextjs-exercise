import type { Metadata } from "next";
import { Suspense } from "react";
import { Noto_Sans, Noto_Sans_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/lib/ui/header";
import Loading from "@/lib/ui/loading";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const notoMono = Noto_Sans_Mono({
  variable: "--font-noto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Periodic Table Explorer",
  description: "Explore the periodic table of elements",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSans.variable} ${notoMono.variable} h-full antialiased`}
    >
      <body className="w-full mx-auto min-h-full container flex flex-col items-center cursor-default">
        <Header />
        <Suspense fallback={<Loading />}>
          <main className="w-full mx-auto py-8 px-4">{children}</main>
        </Suspense>
      </body>
    </html>
  );
}
