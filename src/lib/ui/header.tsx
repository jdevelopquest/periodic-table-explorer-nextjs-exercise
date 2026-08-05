import React from "react";
import SearchBar from "./search-bar";
import LinkHome from "./link-home";
import LinkParams from "./link-params";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col gap-4 w-full mx-auto my-4 p-4">
      <div className="flex flex-col gap-4 p-3">
        <Link href="/">
          <h1 className="text-xl sm:text-2xl font-bold">
            Periodic Table Explorer
          </h1>
        </Link>
        <nav className="flex gap-4 self-end">
          <LinkHome />
          <LinkParams />
        </nav>
      </div>
      <SearchBar />
    </header>
  );
}
