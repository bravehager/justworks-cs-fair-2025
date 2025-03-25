import { db } from "~/db";
import { badgesTable } from "~/db/schema";

export default defineEventHandler(async (event) => {
  const badges = await db.select().from(badgesTable);
  return badges;
});
