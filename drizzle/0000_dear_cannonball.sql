CREATE TABLE IF NOT EXISTS "inyuat_orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"orderNumber" text,
	"total" double precision,
	"userId" text NOT NULL,
	"supplierId" text NOT NULL,
	"quantity" integer,
	"deliveryNote" text,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "inyuat_orders_orderNumber_unique" UNIQUE("orderNumber")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "inyuat_products" (
	"id" text PRIMARY KEY DEFAULT 'cuid()' NOT NULL,
	"name" text,
	"email" text,
	"phone" text,
	"inventoryId" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "inyuat_suppliers" (
	"id" text PRIMARY KEY DEFAULT 'cuid()' NOT NULL,
	"name" text,
	"email" text,
	"phone" text,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "inyuat_users" (
	"id" text PRIMARY KEY DEFAULT 'cuid()' NOT NULL,
	"email" text,
	"phone" varchar(256),
	"name" varchar(256),
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "inyuat_users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "inyuat_orders" ADD CONSTRAINT "inyuat_orders_userId_inyuat_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."inyuat_users"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "inyuat_orders" ADD CONSTRAINT "inyuat_orders_supplierId_inyuat_suppliers_id_fk" FOREIGN KEY ("supplierId") REFERENCES "public"."inyuat_suppliers"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "inyuat_products" ADD CONSTRAINT "inyuat_products_inventoryId_inyuat_orders_id_fk" FOREIGN KEY ("inventoryId") REFERENCES "public"."inyuat_orders"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
