ALTER TABLE "inyuat_orders" ALTER COLUMN "products" SET DATA TYPE json;--> statement-breakpoint
ALTER TABLE "inyuat_orders" ALTER COLUMN "products" SET DEFAULT '[]'::json;