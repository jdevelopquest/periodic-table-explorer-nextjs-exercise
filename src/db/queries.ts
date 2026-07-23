import "dotenv/config";
import { relations } from "./relations";
import { drizzle } from "drizzle-orm/libsql";
import { Element } from "@/lib/types";

const db = drizzle(process.env.DB_FILE_NAME!, { relations });

export const getPeriodicTable = async (): Promise<Element[] | undefined> => {
  return await db.query.periodicTable.findMany();
};

export const getElementBySymbol = async (
  symbol: string,
): Promise<Element | undefined> => {
  return await db.query.periodicTable.findFirst({ where: { symbol: symbol } });
};

export const getSearchResults = async (
  query: string,
): Promise<Element[] | undefined> => {
  return await db.query.periodicTable.findMany({
    where: {
      name: { like: `%${query}%` },
    },
  });
};
