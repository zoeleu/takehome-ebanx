import { Hono } from 'hono';
import { User } from './lib/user';
import event from './routes/event';
import balance from './routes/balance';
import reset from './routes/reset';

const app = new Hono();

export const users = new Map<string, User>();

app.route('/balance', balance);
app.route('/reset', reset);
app.route('/event', event);

export default app
