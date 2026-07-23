import { sqliteTable, integer, text, real } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const periodicTable = sqliteTable("periodic_table", {
  atomicNumber: integer(),
  symbol: text(),
  name: text(),
  atomicMass: text(),
  cpkHexColor: text(),
  electronicConfiguration: text(),
  electronegativity: text(),
  atomicRadius: integer(),
  ionRadius: text(),
  vanDelWaalsRadius: text(),
  ionizationEnergy: integer(),
  electronAffinity: integer(),
  oxidationStates: text(),
  standardState: text(),
  bondingType: text(),
  meltingPoint: text(),
  boilingPoint: integer(),
  density: real(),
  groupBlock: text(),
  yearDiscovered: text(),
});
