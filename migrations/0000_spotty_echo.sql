CREATE TABLE IF NOT EXISTS "api_keys" (
	"id" uuid PRIMARY KEY NOT NULL,
	"user_id" uuid,
	"api_key" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "chat" (
	"id" uuid PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "chat_customization" (
	"id" uuid PRIMARY KEY NOT NULL,
	"chatbot_id" uuid NOT NULL,
	"chat_name" text NOT NULL,
	"chat_headline" text DEFAULT 'Chat with out AI' NOT NULL,
	"chat_description" text DEFAULT 'Ask any question let our AI answer' NOT NULL,
	"chat_welcome_message" text DEFAULT 'Hi there, I am the AI Assistant and how can i help you today' NOT NULL,
	"chat_brand_color" text DEFAULT '#fff' NOT NULL,
	"is_chat_theme_dark" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "chat_message" (
	"id" uuid PRIMARY KEY NOT NULL,
	"chat_id" uuid NOT NULL,
	"ai_message" text NOT NULL,
	"sender_message" text NOT NULL,
	"timesstamp" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "chatbot" (
	"id" uuid PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"name" text DEFAULT 'Untitled' NOT NULL,
	"description" text,
	"chatbot_unique_id" uuid NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "chatbot_behaviour" (
	"id" uuid PRIMARY KEY NOT NULL,
	"chatbot_id" uuid NOT NULL,
	"instructions" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "chatbot_connection" (
	"id" uuid PRIMARY KEY NOT NULL,
	"chatbot_id" uuid NOT NULL,
	"ticket_id" uuid NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "chatbot_knowledge" (
	"id" uuid PRIMARY KEY NOT NULL,
	"video" uuid,
	"document" uuid,
	"website" uuid,
	"chatbot_id" uuid NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "chatbot_setting" (
	"id" uuid PRIMARY KEY NOT NULL,
	"chatbot_id" uuid NOT NULL,
	"chatbot_unique_id" uuid NOT NULL,
	"allowed_domains" text,
	"rate_time_limit_in_sec" integer DEFAULT 90 NOT NULL,
	"rate_limit_message" text,
	"showBrand" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "documents" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"user_id" uuid NOT NULL,
	"is_trained" boolean NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"file_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "email" (
	"id" uuid PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"name" text DEFAULT 'Untitled' NOT NULL,
	"description" text,
	"email_unique_id" uuid NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "email_inbox" (
	"id" uuid PRIMARY KEY NOT NULL,
	"email_id" uuid NOT NULL,
	"alias" text NOT NULL,
	"from_name" text NOT NULL,
	"signature" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "email_knowledge" (
	"id" uuid PRIMARY KEY NOT NULL,
	"email_id" uuid NOT NULL,
	"video" uuid,
	"document" uuid,
	"website" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "email_setting" (
	"id" uuid PRIMARY KEY NOT NULL,
	"email_id" uuid NOT NULL,
	"chatbot_unique_id" uuid NOT NULL,
	"email_form_alias" boolean DEFAULT true,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "files" (
	"file_id" uuid PRIMARY KEY NOT NULL,
	"document_id" uuid NOT NULL,
	"file_name" text NOT NULL,
	"file_path" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "member" (
	"id" uuid PRIMARY KEY NOT NULL,
	"user_id" uuid,
	"name" text NOT NULL,
	"status" "member_status" DEFAULT 'Owner',
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "openai_keys" (
	"id" uuid PRIMARY KEY NOT NULL,
	"user_id" uuid,
	"openai_key" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "profile" (
	"id" uuid PRIMARY KEY NOT NULL,
	"email" text,
	"username" text,
	"profile_img" text,
	"plan_name" "pricing_types" DEFAULT 'Free',
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "setting" (
	"id" uuid PRIMARY KEY NOT NULL,
	"user_id" uuid,
	"twenty_four_hour_time" boolean DEFAULT true,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "subscription_plan" (
	"id" uuid PRIMARY KEY NOT NULL,
	"plan_name" "pricing_types" DEFAULT 'Free',
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ticket" (
	"id" uuid PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"name" text DEFAULT 'Untitled' NOT NULL,
	"description" text,
	"ticket_unique_id" uuid NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ticket_connection" (
	"id" uuid PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ticket_customization" (
	"id" uuid PRIMARY KEY NOT NULL,
	"ticket_id" uuid NOT NULL,
	"ticket_headline" text DEFAULT 'ticket with out AI' NOT NULL,
	"ticket_description" text DEFAULT 'Ask any question let our AI answer' NOT NULL,
	"button_text" text DEFAULT 'Create ticket' NOT NULL,
	"chat_brand_color" text DEFAULT '#fff' NOT NULL,
	"is_chat_theme_dark" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ticket_field" (
	"id" uuid PRIMARY KEY NOT NULL,
	"ticket_id" uuid NOT NULL,
	"label" text,
	"is_required" boolean DEFAULT false NOT NULL,
	"file_upload" text,
	"default_value" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ticket_form" (
	"id" uuid PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ticket_message" (
	"id" uuid PRIMARY KEY NOT NULL,
	"field" text,
	"comment" text,
	"timesstamp" timestamp DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ticket_setting" (
	"id" uuid PRIMARY KEY NOT NULL,
	"ticket_id" uuid NOT NULL,
	"chatbot_unique_id" uuid NOT NULL,
	"allowed_domains" text,
	"rate_time_limit_in_sec" integer DEFAULT 90 NOT NULL,
	"rate_limit_message" text,
	"showBrand" boolean DEFAULT true NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_subscription" (
	"id" uuid PRIMARY KEY NOT NULL,
	"user_id" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "videos" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" text,
	"url" text,
	"user_id" uuid NOT NULL,
	"is_trained" boolean,
	"yt_video_id" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "websites" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" text,
	"url" text,
	"user_id" uuid NOT NULL,
	"is_trained" boolean,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "api_keys" ADD CONSTRAINT "api_keys_user_id_profile_id_fk" FOREIGN KEY ("user_id") REFERENCES "profile"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "chat_customization" ADD CONSTRAINT "chat_customization_chatbot_id_chatbot_id_fk" FOREIGN KEY ("chatbot_id") REFERENCES "chatbot"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "chat_message" ADD CONSTRAINT "chat_message_chat_id_chat_id_fk" FOREIGN KEY ("chat_id") REFERENCES "chat"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "chatbot_behaviour" ADD CONSTRAINT "chatbot_behaviour_chatbot_id_chatbot_id_fk" FOREIGN KEY ("chatbot_id") REFERENCES "chatbot"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "chatbot_connection" ADD CONSTRAINT "chatbot_connection_chatbot_id_chatbot_id_fk" FOREIGN KEY ("chatbot_id") REFERENCES "chatbot"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "chatbot_connection" ADD CONSTRAINT "chatbot_connection_ticket_id_ticket_id_fk" FOREIGN KEY ("ticket_id") REFERENCES "ticket"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "chatbot_knowledge" ADD CONSTRAINT "chatbot_knowledge_video_videos_id_fk" FOREIGN KEY ("video") REFERENCES "videos"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "chatbot_knowledge" ADD CONSTRAINT "chatbot_knowledge_document_documents_id_fk" FOREIGN KEY ("document") REFERENCES "documents"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "chatbot_knowledge" ADD CONSTRAINT "chatbot_knowledge_website_websites_id_fk" FOREIGN KEY ("website") REFERENCES "websites"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "chatbot_knowledge" ADD CONSTRAINT "chatbot_knowledge_chatbot_id_chatbot_id_fk" FOREIGN KEY ("chatbot_id") REFERENCES "chatbot"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "chatbot_setting" ADD CONSTRAINT "chatbot_setting_chatbot_id_chatbot_id_fk" FOREIGN KEY ("chatbot_id") REFERENCES "chatbot"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "chatbot_setting" ADD CONSTRAINT "chatbot_setting_chatbot_unique_id_chatbot_chatbot_unique_id_fk" FOREIGN KEY ("chatbot_unique_id") REFERENCES "chatbot"("chatbot_unique_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "documents" ADD CONSTRAINT "documents_file_id_files_file_id_fk" FOREIGN KEY ("file_id") REFERENCES "files"("file_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "email_inbox" ADD CONSTRAINT "email_inbox_email_id_email_id_fk" FOREIGN KEY ("email_id") REFERENCES "email"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "email_knowledge" ADD CONSTRAINT "email_knowledge_email_id_email_id_fk" FOREIGN KEY ("email_id") REFERENCES "email"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "email_knowledge" ADD CONSTRAINT "email_knowledge_video_videos_id_fk" FOREIGN KEY ("video") REFERENCES "videos"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "email_knowledge" ADD CONSTRAINT "email_knowledge_document_documents_id_fk" FOREIGN KEY ("document") REFERENCES "documents"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "email_knowledge" ADD CONSTRAINT "email_knowledge_website_websites_id_fk" FOREIGN KEY ("website") REFERENCES "websites"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "email_setting" ADD CONSTRAINT "email_setting_email_id_chatbot_id_fk" FOREIGN KEY ("email_id") REFERENCES "chatbot"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "email_setting" ADD CONSTRAINT "email_setting_chatbot_unique_id_chatbot_chatbot_unique_id_fk" FOREIGN KEY ("chatbot_unique_id") REFERENCES "chatbot"("chatbot_unique_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "files" ADD CONSTRAINT "files_document_id_documents_id_fk" FOREIGN KEY ("document_id") REFERENCES "documents"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "member" ADD CONSTRAINT "member_user_id_profile_id_fk" FOREIGN KEY ("user_id") REFERENCES "profile"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "openai_keys" ADD CONSTRAINT "openai_keys_user_id_profile_id_fk" FOREIGN KEY ("user_id") REFERENCES "profile"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "setting" ADD CONSTRAINT "setting_user_id_profile_id_fk" FOREIGN KEY ("user_id") REFERENCES "profile"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ticket_customization" ADD CONSTRAINT "ticket_customization_ticket_id_ticket_id_fk" FOREIGN KEY ("ticket_id") REFERENCES "ticket"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ticket_field" ADD CONSTRAINT "ticket_field_ticket_id_ticket_id_fk" FOREIGN KEY ("ticket_id") REFERENCES "ticket"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ticket_setting" ADD CONSTRAINT "ticket_setting_ticket_id_chatbot_id_fk" FOREIGN KEY ("ticket_id") REFERENCES "chatbot"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ticket_setting" ADD CONSTRAINT "ticket_setting_chatbot_unique_id_chatbot_chatbot_unique_id_fk" FOREIGN KEY ("chatbot_unique_id") REFERENCES "chatbot"("chatbot_unique_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_subscription" ADD CONSTRAINT "user_subscription_user_id_profile_id_fk" FOREIGN KEY ("user_id") REFERENCES "profile"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_subscription" ADD CONSTRAINT "user_subscription_user_id_subscription_plan_id_fk" FOREIGN KEY ("user_id") REFERENCES "subscription_plan"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
