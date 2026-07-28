import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";
import { relations } from "./relations";

export const connection = drizzle(process.env.DB_FILE_NAME!, { relations });
