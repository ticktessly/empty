import { pgTable, integer, varchar, primaryKey, smallserial } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const customers = pgTable("customers", {
  customerId: smallserial("customer_id").primaryKey().unique().notNull(),
  firstName: varchar("first_name", { length: 50 }).notNull(),
  lastName: varchar("last_name", { length: 50 }).notNull(),
  email: varchar({ length: 100 }).unique().notNull(),
  country: varchar({ length: 50 }).notNull(),
});
