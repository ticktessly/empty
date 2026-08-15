import { drizzle } from "drizzle-orm/node-postgres";
import { customers } from "../drizzle/schema";
import { eq } from "drizzle-orm";
const url = process.env.DATABASE_URL!
const db = drizzle(url);
const new_user: typeof customers.$inferInsert = {
  firstName: "Simpson",
  lastName: "Guy",
  email: "simpson@guy.com",
  country: "America",
}

async function main() {
  await db.insert(customers).values(new_user).onConflictDoNothing({ target: customers.email })
  await db.update(customers).set({ country: "USA" }).where(eq(customers.country, "America"))
  console.log(await db.select().from(customers))
}


main()
