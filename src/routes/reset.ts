import { Hono } from "hono";
import { users } from "@/index";

const app = new Hono();

app.post("/", (c) => {
  users.clear();

  return c.text("OK", 200);
});

export default app;