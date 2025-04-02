import { pgTable, serial, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const badgesTable = pgTable("badges", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  title: text("title").notNull(),
  location: text("location").notNull(),
  salary: text("salary").notNull(),
  borough: text("borough").notNull(),
  description: text("description").default(""),
  idempotencyKey: uuid("idempotency_key").unique().defaultRandom(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type Badge = typeof badgesTable.$inferSelect;

export type BadgeForm = Omit<Badge, "id" | "createdAt" | "updatedAt"> & {
  id?: number;
};
