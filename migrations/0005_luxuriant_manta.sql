ALTER TABLE "chat_customization" ADD COLUMN "chat_id" uuid NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "chat_customization" ADD CONSTRAINT "chat_customization_chat_id_chatbot_id_fk" FOREIGN KEY ("chat_id") REFERENCES "chatbot"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
