import { getSearchResults } from "@/db/queries";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { query = undefined } = await searchParams;

  if (!query) return <div>Missing query parameter</div>;

  const normalizedQuery = typeof query === "string" ? query : query.join(" ");

  const results = await getSearchResults(normalizedQuery);

  return (
    <div>
      <h2>Search Results for "{normalizedQuery}"</h2>
      {results && results.length > 0 ? (
        <ul>
          {results.map((result) => (
            <li key={result.atomicNumber}>{result.name}</li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}
