import Form from "next/form";
import SearchButton from "./search-button";
import SearchOptions from "./search-options";

export default function Search() {
  return (
    <Form action="/search">
      <input name="query" />
      <SearchButton />
      <details>
        <summary>Options</summary>
        <SearchOptions
          options={{
            standardState: ["gas", "liquid", "solid"],
            bondingType: ["diatomic", "atomic", "metallic", "covalent network"],
          }}
        />
      </details>
    </Form>
  );
}
