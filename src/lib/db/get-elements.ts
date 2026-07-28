import { connection } from "@/db/connection";
import { Element } from "@/lib/types/element";

export async function getElements(): Promise<Element[] | undefined> {
  try {
    return await connection.query.periodicTable.findMany();
  } catch (error) {
    return undefined;
  }
}
