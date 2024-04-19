CREATE TABLE IF NOT EXISTS "chatbot_instance" (
	"id" uuid PRIMARY KEY NOT NULL,
	"instance_name" text DEFAULT 'Untitled' NOT NULL
);
--> statement-breakpoint
DROP TABLE "chatbotInstance";--> statement-breakpoint
ALTER TABLE "chatbot" DROP CONSTRAINT "chatbot_chatbot_instance_id_chatbotInstance_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "chatbot" ADD CONSTRAINT "chatbot_chatbot_instance_id_chatbot_instance_id_fk" FOREIGN KEY ("chatbot_instance_id") REFERENCES "chatbot_instance"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
