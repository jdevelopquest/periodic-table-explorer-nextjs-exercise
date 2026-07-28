import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Symbols } from "next/font/google";
import "./globals.css";
import Header from "@/lib/ui/header";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const notoSymbols = Noto_Sans_Symbols({
  variable: "--font-noto-symbols",
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
      className={`${notoSans.variable} ${notoSymbols.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
