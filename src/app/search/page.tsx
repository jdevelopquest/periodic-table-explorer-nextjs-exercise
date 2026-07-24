import { getSearchResults } from "@/db/queries";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { query, standardState, bondingType } = await searchParams;
  const results = await getSearchResults(query, standardState, bondingType);

  return (
    <div>
      <h2>Search Results</h2>
      <p>
        {results && results.length > 0
          ? results.map((result) => result.name).join(", ")
          : "No results found."}
      </p>
    </div>
  );
}
