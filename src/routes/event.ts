import { Hono } from "hono";
import { users } from "..";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Not implemented");
});

export default app;