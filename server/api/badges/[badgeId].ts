import { eq } from "drizzle-orm";
import { db } from "~/db";
import { badgesTable } from "~/db/schema";

export default defineEventHandler(async (event) => {
  const badgeId = getRouterParam(event, "badgeId");

  const badges = await db
    .select()
    .from(badgesTable)
    .where(eq(badgesTable.id, Number(badgeId)))
    .limit(1);

  if (badges.length === 0) {
    throw createError({
      statusCode: 404,
      statusMessage: `Badge not found: ${badgeId}`,
    });
  }

  return badges[0];
});
