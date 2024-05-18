ALTER TABLE "inyuat_products" DROP CONSTRAINT "inyuat_products_orderId_inyuat_orders_orderNumber_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "inyuat_products" ADD CONSTRAINT "inyuat_products_orderId_inyuat_orders_id_fk" FOREIGN KEY ("orderId") REFERENCES "public"."inyuat_orders"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
