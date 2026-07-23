import Form from "next/form";
import SearchButton from "./search-button";

export default function Search() {
  return (
    <Form action="/search">
      <input name="query" />
      <SearchButton />
    </Form>
  );
}
