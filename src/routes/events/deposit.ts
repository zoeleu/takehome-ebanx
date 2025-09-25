import { Context } from "hono";
import { DepositEvent } from "./types";

export function depositHandler(c: Context, body: DepositEvent): Response {
  return c.text("Not implemented");
}