import { eq } from "drizzle-orm";
import { db } from "~/db";
import { badgesTable } from "~/db/schema";

export default defineEventHandler(async (event) => {
  const params = getQuery(event);

  if (params.borough) {
    const badges = await db
      .select()
      .from(badgesTable)
      .where(eq(badgesTable.borough, String(params.borough)));
    return badges;
  } else {
    const badges = await db.select().from(badgesTable);
    return badges;
  }
});
