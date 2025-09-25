import { Context } from "hono";
import { DepositEvent } from "./types";
import { users } from "@/index";

export function depositHandler(c: Context, body: DepositEvent): Response {
  return c.text("Not implemented");
}