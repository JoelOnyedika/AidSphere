CREATE TABLE IF NOT EXISTS "chatbot" (
	"id" uuid PRIMARY KEY NOT NULL,
	"file" uuid NOT NULL,
	"video" uuid NOT NULL,
	"document" uuid NOT NULL,
	"chat_name" text NOT NULL,
	"chat_headline" text DEFAULT 'Chat with out AI' NOT NULL,
	"chat_description" text DEFAULT 'Ask any question let our AI answer' NOT NULL,
	"chat_welcome_message" text DEFAULT 'Hi there, I am the AI Assistant and how can i help you today' NOT NULL,
	"chat_brand_color" text DEFAULT '#fff' NOT NULL,
	"is_chat_theme_dark" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "chatbot" ADD CONSTRAINT "chatbot_file_files_file_id_fk" FOREIGN KEY ("file") REFERENCES "files"("file_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "chatbot" ADD CONSTRAINT "chatbot_video_videos_id_fk" FOREIGN KEY ("video") REFERENCES "videos"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "chatbot" ADD CONSTRAINT "chatbot_document_documents_id_fk" FOREIGN KEY ("document") REFERENCES "documents"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
