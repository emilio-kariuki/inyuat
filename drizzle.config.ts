import { type Config } from 'drizzle-kit'
export default ({
  schema: "./src/middlewares/schema.ts",
  dialect: 'postgresql',
  out: "./drizzle",
  dbCredentials: {
    user: "postgres",
    password: "ecoville",
    host: "84.247.174.84",
    port: 5800,
    database: "inyuatdb",
    ssl: false,
  },
  verbose: true,
  strict: true,
  tablesFilter: ["inyuat_*"]
}) satisfies Config