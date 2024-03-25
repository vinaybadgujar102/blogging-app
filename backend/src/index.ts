import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const app = new Hono();

app.post("/api/v1/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: env.DATABASE_URL,
  }).$extends(withAccelerate());
  return c.text("Hello, World!");
});

app.post("/api/v1/signin", async (c) => {
  return c.text("Hello, World!");
});

app.post("/api/v1/blog", async (c) => {
  return c.text("Hello, World!");
});

app.put("/api/v1/blog", async (c) => {
  return c.text("Hello, World!");
});

app.get("/api/v1/blog/:id", async (c) => {
  return c.text("Hello, World!");
});

export default app;
