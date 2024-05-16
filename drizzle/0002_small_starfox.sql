ALTER TABLE "inyuat_orders" ALTER COLUMN "products" SET DATA TYPE jsonb;--> statement-breakpoint
ALTER TABLE "inyuat_orders" ALTER COLUMN "products" SET DEFAULT '[]'::jsonb;