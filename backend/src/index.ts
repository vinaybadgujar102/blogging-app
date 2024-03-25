import { Hono } from "hono";

const app = new Hono();

app.post("/api/v1/signup", async (c) => {
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
