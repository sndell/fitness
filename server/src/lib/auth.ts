import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import type { Database } from "../db/drizzle";
import { expo } from "@better-auth/expo";

export function createAuth(database: Database) {
  return betterAuth({
    trustedOrigins: ["exp://192.168.0.152:8081/", "exp://*", "fitness-app://*"],
    database: drizzleAdapter(database, {
      provider: "sqlite",
    }),
    socialProviders: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      },
    },
    plugins: [expo()],
  });
}

export type Auth = ReturnType<typeof createAuth>;
export const authTypeHelper = {} as Auth;
