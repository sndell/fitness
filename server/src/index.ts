import "dotenv/config";
import { Hono } from "hono";
import { createDatabase, Env, type Database } from "./db/drizzle";
import { authTypeHelper, createAuth, type Auth } from "./lib/auth";
import { cors } from "hono/cors";

type Variables = {
  db: Database;
  auth: Auth;
  user: typeof authTypeHelper.$Infer.Session.user | null;
  session: typeof authTypeHelper.$Infer.Session.session | null;
};

const app = new Hono<{ Bindings: Env; Variables: Variables }>();

app.use("*", async (c, next) => {
  const db = createDatabase(c.env.DB);
  c.set("db", db);

  const auth = createAuth(db);
  c.set("auth", auth);

  return next();
});

app.use("*", async (c, next) => {
  const sessionData = await c.get("auth").api.getSession({
    headers: c.req.raw.headers,
  });
  c.set("session", sessionData?.session || null);
  c.set("user", sessionData?.user || null);
  return next();
});

app.use(
  "*",
  cors({
    origin: ["fitness-app://*"],
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  })
);

app.get("/", async (c) => {
  console.log("Hello Hono!");
  return c.json({
    message: "Hello Hono!",
    timestamp: new Date().toISOString(),
  });
});

app.on(["POST", "GET"], "/api/auth/*", async (c) => {
  const auth = c.get("auth");
  return auth.handler(c.req.raw);
});

export default app;
