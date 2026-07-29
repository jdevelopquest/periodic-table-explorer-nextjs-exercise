import { periodicTable } from "@/db/schema";

export type Element = typeof periodicTable.$inferSelect;

export type ElementResume = Pick<Element, "atomicNumber" | "symbol" | "name">;
