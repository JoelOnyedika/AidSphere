CREATE TABLE IF NOT EXISTS "chatbotInstance" (
	"id" uuid PRIMARY KEY NOT NULL,
	"instance_name" text DEFAULT 'Untitled' NOT NULL
);
--> statement-breakpoint
ALTER TABLE "chatbot" ADD COLUMN "chatbot_instance_id" uuid;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "chatbot" ADD CONSTRAINT "chatbot_chatbot_instance_id_chatbotInstance_id_fk" FOREIGN KEY ("chatbot_instance_id") REFERENCES "chatbotInstance"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
