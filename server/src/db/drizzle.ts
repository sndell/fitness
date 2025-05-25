import { drizzle, DrizzleD1Database } from "drizzle-orm/d1";
import * as schema from "./schema";

export interface Env {
  DB: DrizzleD1Database;
}

export function createDatabase(d1: DrizzleD1Database) {
  return drizzle(d1, { schema });
}

export type Database = ReturnType<typeof createDatabase>;
