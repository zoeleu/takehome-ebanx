import { Context } from "hono";
import { WithdrawEvent } from "./types";

export function withdrawHandler(c: Context, body: WithdrawEvent): Response {
  return c.text("Not implemented");
}