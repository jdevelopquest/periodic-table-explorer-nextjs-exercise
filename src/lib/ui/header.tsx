import SearchBar from "./search-bar";
import LinkHome from "./link-home";

export default function Header() {
  return (
    <header className="flex flex-col items-center gap-4 w-full mx-auto my-4 p-4">
      <div className="w-full flex justify-between items-center gap-2 p-3">
        <LinkHome />
        <h1 className="text-2xl">Periodic Table Explorer</h1>
      </div>
      <SearchBar />
    </header>
  );
}
