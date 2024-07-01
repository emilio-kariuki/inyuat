import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

const pool = new Pool({
  host: "84.247.174.84",
  port: 5800,
  user: "postgres",
  password: "ecoville",
  database: "inyuatdb",
  keepAlive: true,
});

export const db = drizzle(pool, {schema});
