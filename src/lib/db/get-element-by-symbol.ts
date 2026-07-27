import { connection } from "@/db/connection";
import { Element } from "@/lib/types/element";
import { sql } from "drizzle-orm";

export async function getElementBySymbol(
  symbol: string,
): Promise<Element | undefined> {
  const prepared = connection.query.periodicTable.findFirst({
    where: { symbol: sql.placeholder("symbol") },
  });
  try {
    return await prepared.execute({ symbol: symbol });
  } catch (error) {
    return undefined;
  }
}
