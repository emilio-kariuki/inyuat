CREATE TABLE IF NOT EXISTS "inyuat_images" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"url" varchar(1024) NOT NULL,
	"userId" varchar(256) NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp
);
--> statement-breakpoint
ALTER TABLE "inyuat_products" DROP CONSTRAINT "inyuat_products_orderId_inyuat_orders_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "inyuat_products" ADD CONSTRAINT "inyuat_products_orderId_inyuat_orders_orderNumber_fk" FOREIGN KEY ("orderId") REFERENCES "public"."inyuat_orders"("orderNumber") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
