import { relations, sql } from "drizzle-orm";
import {
  doublePrecision,
  pgTable,
  serial,
  text,
  varchar,
  timestamp,
  integer,
} from "drizzle-orm/pg-core";

export const users = pgTable("inyuat_users", {
  id: text("id").primaryKey().default("cuid()"),
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
  id: text("id").primaryKey().default("cuid()"),
  orderNumber: text("orderNumber").unique(),
  total: doublePrecision("total"),
  userId: text("userId")
    .references(() => users.id, { onDelete: "cascade", onUpdate: "cascade" })
    .notNull(),
  supplierId: text("supplierId")
    .references(() => suppliers.id, { onDelete: "cascade", onUpdate: "cascade" })
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
  product: many(products, { relationName: "product" }),
  supplier: one(suppliers, {
    fields: [orders.supplierId],
    references: [suppliers.id],
  }),
}));

export const products = pgTable("inyuat_products", {
  id: text("id").primaryKey().default("cuid()"),
  name: text("name"),
  email: text("email"),
  phone: text("phone"),
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
  id: text("id").primaryKey().default("cuid()"),
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


