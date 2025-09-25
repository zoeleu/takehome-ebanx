import { Context } from "hono";
import { TransferEvent } from "./types";

export function transferHandler(c: Context, body: TransferEvent): Response {
  return c.text("Not implemented");
}