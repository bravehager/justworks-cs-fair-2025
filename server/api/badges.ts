import { db } from "~/db";
import { badgesTable } from "~/db/schema";

export default defineEventHandler(async (event) => {
  return await db.select().from(badgesTable);
});
