import { Context } from "hono";
import { DepositEvent } from "./types";
import { users } from "@/index";
import { User } from "@/lib/user";

export function depositHandler(c: Context, body: DepositEvent): Response {
  const { destination, amount } = body;

  let user = users.get(destination);

  if (!user) {
    user = new User(destination);
    users.set(destination, user);
  }

  user.deposit(amount);

  return c.json({ destination: user.serialize() }, 201);
}