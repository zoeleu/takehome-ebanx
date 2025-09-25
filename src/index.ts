import { Hono } from 'hono'
import { User } from './lib/user'

const app = new Hono()

const users = new Map<string, User>()

app.get('/balance', async (c) => {
  const userId = c.req.query('account_id')

  if (!userId) {
    return c.json(0, 404);
  }

  const user = users.get(userId);

  if (!user) {
    return c.json(0, 404);
  }

  return c.json(user.getBalance());
});

export default app
