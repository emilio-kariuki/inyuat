import { relations, sql } from "drizzle-orm";
import {
  boolean,
  doublePrecision,
  integer,
  json,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";


export const user = pgTable("inyuat_user", {
  id: text("id")
    .primaryKey(),
  name: text("name"),
  email: text("email").unique(),
  phone: text("phone"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").default(sql`CURRENT_TIMESTAMP`),
});

export const userRelation = relations(user, ({ many }) => ({
  orders: many(orders),
}));

export const orders = pgTable("inyuat_orders", {
  id: text("id")
    .primaryKey(),
  userId: text("userId").references(() => user.id, {
    onDelete: "cascade",
    onUpdate: "cascade",
  }).notNull(),
  supplierId: text("supplierId").references(() => suppliers.id, {
    onDelete: "cascade",
    onUpdate: "cascade",
  }).notNull(),
  orderNumber: text("orderNumber"), // should be unique and generated
  driverName: text("driverName"),
  deliveryDate: text("deliveryDate").default(sql`CURRENT_TIMESTAMP`),
  deliveryNoteImage: text("deliveryNoteImages").array(),
  deliveryNoteId: text("deliveryNoteId"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").default(sql`CURRENT_TIMESTAMP`),
});

export const orderRelation = relations(orders, ({ one, many }) => ({
  user: one(user, {
    fields: [orders.userId],
    references: [user.id],
  }),
  products: many(products),
  supplier: one(suppliers, {
    fields: [orders.supplierId],
    references: [suppliers.id],
  }),
}));

export const products = pgTable("inyuat_products", {
  id: text("id")
    .primaryKey(),
  name: text("name").references(() => productCategories.name, {
    onDelete: "cascade",
    onUpdate: "cascade",
  }).notNull(),
  description: text("description").default(""), //(optional)
  good: integer("good").default(0),
  fair: integer("fair").default(0),
  poor: integer("poor").default(0),
  orderId: text("orderId").references(() => orders.id, {
    onDelete: "cascade",
    onUpdate: "cascade",
  }).notNull(),
  status: text("status").default("pending"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").default(sql`CURRENT_TIMESTAMP`),
});

export const productRelation = relations(products, ({ one }) => ({
  order: one(orders, {
    fields: [products.orderId],
    references: [orders.id],
  }),
  productCategories: one(productCategories, {
    fields: [products.name],
    references: [productCategories.name],
  }),
}));

export const productCategories = pgTable("inyuat_product_categories", {
  name: text("name").primaryKey(),
  cycle: integer("cycle").default(0),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").default(sql`CURRENT_TIMESTAMP`),
});

export const productCategoryRelation = relations(
  productCategories,
  ({ many }) => ({
    products: many(products),
  }),
);

export const suppliers = pgTable("inyuat_suppliers", {
  id: text("id")
    .primaryKey(),
  name: text("name"),
  email: text("email").unique(),
  phone: text("phone"),
  image: text("image").default("https://picsa.pro/profile.jpg"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").default(sql`CURRENT_TIMESTAMP`),
});

export const supplierRelation = relations(suppliers, ({ many }) => ({
  orders: many(orders),
}));

export const notifications = pgTable("inyuat_notifications", {
  id: text("id")
    .primaryKey(),
  content: text("content"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").default(sql`CURRENT_TIMESTAMP`),
});


export type User = typeof user.$inferSelect;
export type order = typeof orders.$inferSelect;
export type Product = typeof products.$inferSelect;
export type ProductCategory = typeof productCategories.$inferSelect;
export type Supplier = typeof suppliers.$inferSelect;
export type Notification = typeof notifications.$inferSelect;

export const schema = [
  user,
  orders,
  products,
  notifications,
];
