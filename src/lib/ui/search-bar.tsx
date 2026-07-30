import Form from "next/form";
import SearchButton from "./search-button";
import SearchInput from "./search-input";

export default function SearchBar() {
  return (
    <Form
      action="/search"
      className="flex items-center gap-2 w-full max-w-2xl mx-auto p-3 border border-gray-200 rounded-xl"
    >
      <SearchButton />
      <SearchInput />
    </Form>
  );
}
