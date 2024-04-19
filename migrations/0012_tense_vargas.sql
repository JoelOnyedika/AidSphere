ALTER TABLE "chatbot_instance" ADD COLUMN "name" text DEFAULT 'Untitled' NOT NULL;--> statement-breakpoint
ALTER TABLE "chatbot_instance" ADD COLUMN "created_at" timestamp with time zone DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "chatbot_instance" DROP COLUMN IF EXISTS "instance_name";