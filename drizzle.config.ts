import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './drizzle/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://ticky:postgres_pw@localhost:5432/cooler_db",
  },
});

