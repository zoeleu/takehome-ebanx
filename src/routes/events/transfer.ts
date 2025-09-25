import { Context } from "hono";
import { TransferEvent } from "./types";
import { users } from "@/index";
import { User } from "@/lib/user";

export function transferHandler(c: Context, body: TransferEvent): Response {
  const { origin, destination, amount } = body;

  const originUser = users.get(origin);

  if (!originUser) {
    return c.json(0, 404);
  }

  let destinationUser = users.get(destination);

  if (!destinationUser) {
    destinationUser = new User(destination)
    users.set(destination, destinationUser);
  }

  try {
    originUser.transfer(amount, destinationUser);

    return c.json({ origin: originUser.serialize(), destination: destinationUser.serialize() }, 201);
  } catch (error) {
    // Insufficient funds
    return c.json({ origin: originUser.serialize(), destination: destinationUser.serialize() }, 400);
  }
}