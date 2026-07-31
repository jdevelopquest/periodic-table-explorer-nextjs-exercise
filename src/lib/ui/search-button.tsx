import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchButton() {
  return (
    <button
      type="submit"
      aria-label="Search for elements"
      className="cursor-pointer"
    >
      <MagnifyingGlassIcon className="w-8 h-8" />
    </button>
  );
}
