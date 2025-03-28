import { db } from "~/db";
import { desc } from "drizzle-orm";
import { badgesTable } from "~/db/schema";

export default defineEventHandler(async (event) => {
  return await db.select().from(badgesTable).orderBy(desc(badgesTable.id));
});
