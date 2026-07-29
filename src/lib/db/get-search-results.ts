import { connection } from "@/db/connection";
import { periodicTable } from "@/db/schema";
import { or, like, sql } from "drizzle-orm";
import { ElementResume } from "@/lib/types/element";

export async function getSearchResults(
  q: string,
): Promise<ElementResume[] | undefined> {
  const prepared = connection
    .select()
    .from(periodicTable)
    .where(
      or(
        like(periodicTable.symbol, sql.placeholder("q")),
        like(periodicTable.name, sql.placeholder("q")),
        like(periodicTable.atomicMass, sql.placeholder("q")),
        like(periodicTable.electronicConfiguration, sql.placeholder("q")),
        like(periodicTable.electronegativity, sql.placeholder("q")),
        like(periodicTable.ionRadius, sql.placeholder("q")),
        like(periodicTable.vanDelWaalsRadius, sql.placeholder("q")),
        like(periodicTable.oxidationStates, sql.placeholder("q")),
        like(periodicTable.meltingPoint, sql.placeholder("q")),
        like(periodicTable.standardState, sql.placeholder("q")),
        like(periodicTable.boilingPoint, sql.placeholder("q")),
        like(periodicTable.groupBlock, sql.placeholder("q")),
        like(periodicTable.yearDiscovered, sql.placeholder("q")),
      ),
    )
    .prepare();

  try {
    return await prepared.execute({
      q: `%${q}%`,
    });
  } catch (error) {
    return undefined;
  }
}
