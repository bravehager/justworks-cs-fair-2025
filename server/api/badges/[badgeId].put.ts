import { eq } from "drizzle-orm";
import { db } from "~/db";
import { badgesTable } from "~/db/schema";

export default defineEventHandler(async (event) => {
  const badgeId = getRouterParam(event, "badgeId");
  const body = await readBody(event);

  const badge = await db
    .update(badgesTable)
    .set({
      name: body.name,
      title: body.title,
      location: body.location,
      salary: body.salary,
      borough: body.borough,
      description: body.description,
    })
    .where(eq(badgesTable.id, Number(badgeId)))
    .returning();

  return badge[0];
});
