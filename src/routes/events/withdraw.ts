import { Context } from "hono";
import { WithdrawEvent } from "./types";
import { users } from "@/index";

export function withdrawHandler(c: Context, body: WithdrawEvent): Response {
  const { origin, amount } = body;

  const user = users.get(origin);

  if (!user) {
    return c.json(0, 404);
  }

  try {
    user.withdraw(amount);

    return c.json({ origin: user.serialize() }, 201);
  } catch (error) {
    // Insufficient funds
    return c.json({ origin: user.serialize() }, 400);
  }
}