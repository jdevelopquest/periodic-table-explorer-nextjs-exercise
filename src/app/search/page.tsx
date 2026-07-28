import type { Metadata } from "next";
import { getSearchResults } from "@/lib/db/get-search-results";

export const metadata: Metadata = {
  title: "Search",
  description: "Search for elements in the periodic table",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  }) {
  // la recherche se fait uniquement avec le premier élément de la chaîne ou le premier élément de un tableau
  const params = await searchParams;
  const q = params.q as string | string[] | undefined;
  const results = q ? await getSearchResults(Array.isArray(q) ? q[0] : q) : [];

  return (
    <div>
      <h2>Search Results</h2>
      <div>
        {results && results.length > 0 ? (
          <div>
            {results.map((el) => (
              <h4 key={el.symbol}>{el.name}</h4>
            ))}
          </div>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}
