import { db } from "~/db";
import { badgesTable } from "~/db/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const badge = await db
    .insert(badgesTable)
    .values({
      name: body.name,
      title: body.title,
      location: body.location,
      salary: body.salary,
      borough: body.borough,
      color: body.color,
    })
    .returning();

  return badge[0];
});
