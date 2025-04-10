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
      description: body.description,
      idempotencyKey: body.idempotencyKey,
    })
    .onConflictDoNothing({
      target: [badgesTable.idempotencyKey],
    })
    .returning();

  return badge[0];
});
