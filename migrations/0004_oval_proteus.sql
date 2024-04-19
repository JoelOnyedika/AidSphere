CREATE TABLE IF NOT EXISTS "chat_customization" (
	"id" uuid PRIMARY KEY NOT NULL,
	"chat_name" text NOT NULL,
	"chat_headline" text DEFAULT 'Chat with out AI' NOT NULL,
	"chat_description" text DEFAULT 'Ask any question let our AI answer' NOT NULL,
	"chat_welcome_message" text DEFAULT 'Hi there, I am the AI Assistant and how can i help you today' NOT NULL,
	"chat_brand_color" text DEFAULT '#fff' NOT NULL,
	"is_chat_theme_dark" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "chatbot" DROP CONSTRAINT "chatbot_file_files_file_id_fk";
--> statement-breakpoint
ALTER TABLE "chatbot" ADD COLUMN "chat_customization" uuid;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "chatbot" ADD CONSTRAINT "chatbot_chat_customization_chat_customization_id_fk" FOREIGN KEY ("chat_customization") REFERENCES "chat_customization"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "chatbot" DROP COLUMN IF EXISTS "file";--> statement-breakpoint
ALTER TABLE "chatbot" DROP COLUMN IF EXISTS "chat_name";--> statement-breakpoint
ALTER TABLE "chatbot" DROP COLUMN IF EXISTS "chat_headline";--> statement-breakpoint
ALTER TABLE "chatbot" DROP COLUMN IF EXISTS "chat_description";--> statement-breakpoint
ALTER TABLE "chatbot" DROP COLUMN IF EXISTS "chat_welcome_message";--> statement-breakpoint
ALTER TABLE "chatbot" DROP COLUMN IF EXISTS "chat_brand_color";--> statement-breakpoint
ALTER TABLE "chatbot" DROP COLUMN IF EXISTS "is_chat_theme_dark";