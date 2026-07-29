import type { Metadata } from "next";
import type { ElementResume } from "@/lib/types/element";
import Link from "next/link";

import { getSearchResults } from "@/lib/db/get-search-results";
import { ElementResumeCard } from "@/lib/ui/element-resume-card";

export const metadata: Metadata = {
  title: "Search",
  description: "Search for elements in the periodic table",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // filtrer les résultats pour exclure ceux qui n'ont pas de symbol, de nom ou de numéro atomique
  function filterResults(results: ElementResume[]): ElementResume[] {
    return results.filter(
      (el) =>
        el.symbol !== null && el.name !== null && el.atomicNumber !== null,
    );
  }

  // la recherche se fait uniquement avec le premier élément de la chaîne ou le premier élément de un tableau
  const params = await searchParams;
  const q = params.q as string | string[] | undefined;
  const results = q ? await getSearchResults(Array.isArray(q) ? q[0] : q) : [];
  const filteredResults =
    results && results.length > 0 ? filterResults(results) : [];

  return (
    <section className="mx-auto">
      <h2 className="text-2xl font-bold mb-8">Search Results</h2>
      {filteredResults && filteredResults.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredResults.map((el) => (
            <Link href={`/elements/${el.symbol}`} key={el.symbol!}>
              <ElementResumeCard
                // utilisation de ! pour indiquer que les champs ne sont pas null
                key={el.symbol!}
                symbol={el.symbol!}
                name={el.name!}
                atomicNumber={el.atomicNumber!}
              />
            </Link>
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </section>
  );
}
