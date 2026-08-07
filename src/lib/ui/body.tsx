"use client";
import Header from "./header";
import { notoSans, notoMono } from "@/lib/ui/fonts";

export default function Body({ children }: { children: React.ReactNode }) {
  const noto = `${notoSans.variable} ${notoMono.variable}`;

  return (
    <body
      className={`h-full antialiased cursor-default w-full mx-auto min-h-full container flex flex-col items-center ${noto} dark:bg-gray-900 dark:text-white`}
    >
      <Header />
      <main className="w-full mx-auto py-8 px-4">{children}</main>
    </body>
  );
}
