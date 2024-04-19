ALTER TABLE "chatbot" ADD COLUMN "website" uuid NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "chatbot" ADD CONSTRAINT "chatbot_website_websites_id_fk" FOREIGN KEY ("website") REFERENCES "websites"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
