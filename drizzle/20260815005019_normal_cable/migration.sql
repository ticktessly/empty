CREATE SEQUENCE "customers_customer_id_seq";--> statement-breakpoint
ALTER TABLE "customers" ALTER COLUMN "customer_id" SET DEFAULT nextval('customers_customer_id_seq')--> statement-breakpoint
ALTER SEQUENCE "customers_customer_id_seq" OWNED BY "public"."customers"."customer_id";--> statement-breakpoint
ALTER TABLE "customers" ALTER COLUMN "customer_id" SET DATA TYPE smallint USING "customer_id"::smallint;--> statement-breakpoint
ALTER TABLE "customers" ALTER COLUMN "first_name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "customers" ALTER COLUMN "last_name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "customers" ALTER COLUMN "email" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "customers" ALTER COLUMN "country" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "customers" ADD CONSTRAINT "customers_customer_id_key" UNIQUE("customer_id");