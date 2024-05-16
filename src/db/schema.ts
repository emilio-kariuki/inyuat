import { relations, sql } from "drizzle-orm";
import {
  doublePrecision,
  pgTable,
  serial,
  text,
  varchar,
  timestamp,
  integer,
  jsonb,
  json,
} from "drizzle-orm/pg-core";
import { v1 as uuidv1 } from "uuid";

// define enum
export enum QUALITY {
  GOOD = "GOOD",
  FAIR = "FAIR",
  REJECT = "REJECT",
}

export const users = pgTable("inyuat_users", {
  id: text("id")
    .primaryKey()
    .default("USR_" + uuidv1()),
  email: text("email").unique(),
  phone: varchar("phone", { length: 256 }),
  name: varchar("name", { length: 256 }),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").default(sql`CURRENT_TIMESTAMP`),
});

export const userRelations = relations(users, ({ many }) => ({
  orders: many(orders),
}));

export const orders = pgTable("inyuat_orders", {
  id: text("id").primaryKey().default(uuidv1()),
  orderNumber: text("orderNumber").unique(),
  total: doublePrecision("total"),
  quality: text("quality").notNull().default(QUALITY.GOOD),
  products: jsonb("products").default([]),
  userId: text("userId")
    .references(() => users.id, { onDelete: "cascade", onUpdate: "cascade" })
    .notNull(),
  supplierId: text("supplierId")
    .references(() => suppliers.id, {
      onDelete: "cascade",
      onUpdate: "cascade",
    })
    .notNull(),
  quantity: integer("quantity"),
  deliveryNote: text("deliveryNote"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").default(sql`CURRENT_TIMESTAMP`),
});

export const orderRelations = relations(orders, ({ one, many }) => ({
  user: one(users, {
    fields: [orders.userId],
    references: [users.id],
  }),
  // product: many(products),
  supplier: one(suppliers, {
    fields: [orders.supplierId],
    references: [suppliers.id],
  }),
}));

export const products = pgTable("inyuat_products", {
  id: text("id")
    .primaryKey()
    .default("PRD_" + uuidv1()),
  name: text("name").notNull(),
  description: text("description"),
  image: text("image").default("https://picsa.pro/profile.jpg"),
  price: doublePrecision("price").default(0),
  quantity: integer("quantity").default(0),
  good: integer("good").default(0),
  fair: integer("fair").default(0),
  reject: integer("reject").default(0),
  orderId: text("orderId")
    .references(() => orders.id, { onDelete: "cascade", onUpdate: "cascade" })
    .notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").default(sql`CURRENT_TIMESTAMP`),
});

export const productRelations = relations(products, ({ one }) => ({
  order: one(orders, {
    fields: [products.orderId],
    references: [orders.id],
  }),
}));

export const suppliers = pgTable("inyuat_suppliers", {
  id: text("id").primaryKey().default(`SUPP_${uuidv1()}`),
  name: text("name"),
  email: text("email"),
  phone: text("phone"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").default(sql`CURRENT_TIMESTAMP`),
});

export const supplierRelations = relations(suppliers, ({ many }) => ({
  order: many(orders, { relationName: "orders" }),
}));

export type User = typeof users.$inferSelect;
export type Order = typeof orders.$inferSelect;
export type Product = typeof products.$inferSelect;
export type Supplier = typeof suppliers.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type NewOrder = typeof orders.$inferInsert;
export type NewProduct = typeof products.$inferInsert;
export type NewSupplier = typeof suppliers.$inferInsert;
