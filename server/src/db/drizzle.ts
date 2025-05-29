import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";
import { D1Database } from "@cloudflare/workers-types";

export interface Env {
  DB: D1Database;
}

export function createDatabase(d1: D1Database) {
  return drizzle(d1, { schema });
}

export type Database = ReturnType<typeof createDatabase>;
