ALTER TABLE "inyuat_products" DROP CONSTRAINT "inyuat_products_orderId_inyuat_orders_id_fk";
--> statement-breakpoint
ALTER TABLE "inyuat_products" DROP COLUMN IF EXISTS "orderId";