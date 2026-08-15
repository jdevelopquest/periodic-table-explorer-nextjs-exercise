import Link from "next/link";
import SearchBar from "./search-bar";
import LinkHome from "./link-home";
import ButtonTheme from "./button-theme";
import LinkParams from "./link-params";

export default function Header() {
  return (
    <header className="flex flex-col gap-4 w-full mx-auto my-4 p-4">
      <div className="flex flex-col gap-4 p-3">
        <Link href="/">
          <h1 className="text-xl sm:text-2xl font-bold">
            Periodic Table Explorer
          </h1>
        </Link>
        <div className="flex gap-4">
          <nav className="flex gap-4">
            <LinkHome />
            <LinkParams />
          </nav>
          <div className="flex gap-4 ml-auto">
            <ButtonTheme />
          </div>
        </div>
      </div>
      <SearchBar />
    </header>
  );
}
