ALTER TABLE "badges" ADD COLUMN "idempotency_key" uuid DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "badges" ADD CONSTRAINT "badges_idempotency_key_unique" UNIQUE("idempotency_key");