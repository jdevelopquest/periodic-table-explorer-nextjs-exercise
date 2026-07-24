import "dotenv/config";
import { relations } from "./relations";
import { drizzle } from "drizzle-orm/libsql";
import { Element } from "@/lib/types";

const db = drizzle(process.env.DB_FILE_NAME!, { relations });

export const getPeriodicTable = async (): Promise<Element[] | undefined> => {
  try {
    return await db.query.periodicTable.findMany();
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const getElementBySymbol = async (
  symbol: string,
): Promise<Element | undefined> => {
  try {
    return await db.query.periodicTable.findFirst({
      where: { symbol: symbol },
    });
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const getSearchResults = async (
  query: string | string[] | undefined,
  standardState?: string | string[] | undefined,
  bondingType?: string | string[] | undefined,
): Promise<Element[] | undefined> => {
  function normalizeParam(
    param: string | string[] | undefined,
    defaultValue: string[],
  ): string[] {
    if (param === undefined) return defaultValue;
    if (typeof param === "string") return [param];
    return param;
  }
  const normalizedQuery = normalizeParam(query, []);
  const normalizedStandardState = normalizeParam(standardState, [
    "gas",
    "solid",
    "liquid",
  ]);
  const normalizedBondingType = normalizeParam(bondingType, [
    "diatomic",
    "atomic",
    "metallic",
    "covalent network",
  ]);

  const prepared = db.query.periodicTable
    .findMany({
      where: {
        OR: [
          { name: { like: `%${normalizedQuery}%` } },
          { symbol: { like: `%${normalizedQuery}%` } },
          { atomicNumber: { like: `%${normalizedQuery}%` } },
          { atomicMass: { like: `%${normalizedQuery}%` } },
          { density: { like: `%${normalizedQuery}%` } },
          { meltingPoint: { like: `%${normalizedQuery}%` } },
          { boilingPoint: { like: `%${normalizedQuery}%` } },
          { standardState: { like: `%${normalizedStandardState}%` } },
          { bondingType: { like: `%${normalizedBondingType}%` } },
          { groupBlock: { like: `%${normalizedQuery}%` } },
        ],
        AND: [
          { standardState: { in: normalizedStandardState } },
          { bondingType: { in: normalizedBondingType } },
        ],
      },
    })
    .prepare();

  try {
    return await prepared.execute();
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
