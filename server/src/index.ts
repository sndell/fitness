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

// Middleware to initialize database and auth
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
  "/api/auth/*", // or replace with "*" to enable cors for all routes
  cors({
    origin: "http://localhost:8081", // replace with your origin
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  })
);

// Routes
app.get("/", async (c) => {
  return c.json({
    message: "Hello Hono!",
    timestamp: new Date().toISOString(),
  });
});

// Auth routes - handle all better-auth endpoints
app.on(["POST", "GET"], "/api/auth/*", async (c) => {
  const auth = c.get("auth");
  return auth.handler(c.req.raw);
});

export default app;
