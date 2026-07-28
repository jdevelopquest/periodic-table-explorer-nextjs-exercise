import Form from "next/form";
import SearchButton from "./search-button";
import ClearButton from "./clear-button";
import SearchInput from "./search-input";

export default function SearchBar() {
  return (
    <Form action="/search" className="flex items-center gap-2 mx-auto my-4 px-4">
      <SearchButton />
      <SearchInput />
      <ClearButton />
    </Form>
  );
}
