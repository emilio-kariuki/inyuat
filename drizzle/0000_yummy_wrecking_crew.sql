CREATE TABLE IF NOT EXISTS "inyuat_notifications" (
	"id" text PRIMARY KEY NOT NULL,
	"content" text,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "inyuat_orders" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"supplierId" text NOT NULL,
	"orderNumber" text,
	"driverName" text,
	"deliveryDate" text DEFAULT CURRENT_TIMESTAMP,
	"deliveryNoteImages" text[],
	"deliveryNoteId" text,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "inyuat_product_categories" (
	"name" text PRIMARY KEY NOT NULL,
	"cycle" integer DEFAULT 0,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "inyuat_products" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text DEFAULT '',
	"good" integer DEFAULT 0,
	"fair" integer DEFAULT 0,
	"poor" integer DEFAULT 0,
	"orderId" text NOT NULL,
	"status" text DEFAULT 'pending',
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "inyuat_suppliers" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"email" text,
	"phone" text,
	"image" text DEFAULT 'https://picsa.pro/profile.jpg',
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "inyuat_suppliers_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "inyuat_user" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"email" text,
	"phone" text,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "inyuat_user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "inyuat_orders" ADD CONSTRAINT "inyuat_orders_userId_inyuat_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."inyuat_user"("id") ON DELETE cascade ON UPDATE cascade;
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
 ALTER TABLE "inyuat_products" ADD CONSTRAINT "inyuat_products_name_inyuat_product_categories_name_fk" FOREIGN KEY ("name") REFERENCES "public"."inyuat_product_categories"("name") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "inyuat_products" ADD CONSTRAINT "inyuat_products_orderId_inyuat_orders_id_fk" FOREIGN KEY ("orderId") REFERENCES "public"."inyuat_orders"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
