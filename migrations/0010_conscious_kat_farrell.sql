ALTER TABLE "documents" DROP CONSTRAINT "documents_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "videos" DROP CONSTRAINT "videos_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "websites" DROP CONSTRAINT "websites_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "chatbot_instance" ADD COLUMN "user_id" uuid NOT NULL;