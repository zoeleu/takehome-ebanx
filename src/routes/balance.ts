import { Hono } from "hono";
import { users } from "..";

const app = new Hono();

app.get("/", (c) => {
  const userId = c.req.query('account_id');

  if (!userId) {
    return c.json(0, 404);
  }

  const user = users.get(userId);

  if (!user) {
    return c.json(0, 404);
  }

  return c.json(user.getBalance());
});

export default app;