ALTER TABLE "inyuat_products" RENAME COLUMN "quality" TO "good";--> statement-breakpoint
ALTER TABLE "inyuat_products" ALTER COLUMN "good" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "inyuat_products" ALTER COLUMN "good" SET DEFAULT 0;--> statement-breakpoint
ALTER TABLE "inyuat_products" ALTER COLUMN "good" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "inyuat_products" ADD COLUMN "fair" integer DEFAULT 0;--> statement-breakpoint
ALTER TABLE "inyuat_products" ADD COLUMN "reject" integer DEFAULT 0;