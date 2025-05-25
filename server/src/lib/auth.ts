import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import type { Database } from "../db/drizzle";
import * as schema from "../db/schema";

export function createAuth(database: Database) {
  return betterAuth({
    database: drizzleAdapter(database, {
      provider: "sqlite",
      schema: schema,
    }),
  });
}

export type Auth = ReturnType<typeof createAuth>;
export const authTypeHelper = {} as ReturnType<typeof createAuth>;
