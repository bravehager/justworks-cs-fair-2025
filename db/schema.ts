import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const badgesTable = pgTable("badges", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  title: text("title").notNull(),
  location: text("location").notNull(),
  salary: text("salary").notNull(),
  borough: text("borough").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type Badge = typeof badgesTable.$inferSelect;
