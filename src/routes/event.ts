import { Hono } from "hono";
import { depositHandler } from "./events/deposit";
import { withdrawHandler } from "./events/withdraw";
import { transferHandler } from "./events/transfer";
import { Event } from "./events/types";

const app = new Hono();

app.post("/", async (c) => {
  const body = await c.req.json<Event>();

  switch (body.type) {
    case "deposit":
      return depositHandler(c, body);
    case "withdraw":
      return withdrawHandler(c, body);
    case "transfer":
      return transferHandler(c, body);
    default:
      return c.text("Not implemented", 400);
  }
});

export default app;