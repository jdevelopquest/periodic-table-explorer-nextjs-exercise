import ClearButton from "./clear-button";

export default function SearchInput() {
  return (
    <div className="flex items-center gap-2 w-full">
      <input
        name="q"
        placeholder="Type to search..."
        className="h-8 w-full rounded px-2"
      />
      <ClearButton />
    </div>
  );
}
