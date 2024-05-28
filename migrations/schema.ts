import { pgTable, type AnyPgColumn, foreignKey, pgEnum, uuid, timestamp, text, boolean, integer } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"

export const keyStatus = pgEnum("key_status", ['default', 'valid', 'invalid', 'expired'])
export const keyType = pgEnum("key_type", ['aead-ietf', 'aead-det', 'hmacsha512', 'hmacsha256', 'auth', 'shorthash', 'generichash', 'kdf', 'secretbox', 'secretstream', 'stream_xchacha20'])
export const factorType = pgEnum("factor_type", ['totp', 'webauthn'])
export const factorStatus = pgEnum("factor_status", ['unverified', 'verified'])
export const aalLevel = pgEnum("aal_level", ['aal1', 'aal2', 'aal3'])
export const codeChallengeMethod = pgEnum("code_challenge_method", ['s256', 'plain'])
export const equalityOp = pgEnum("equality_op", ['eq', 'neq', 'lt', 'lte', 'gt', 'gte', 'in'])
export const action = pgEnum("action", ['INSERT', 'UPDATE', 'DELETE', 'TRUNCATE', 'ERROR'])
export const oneTimeTokenType = pgEnum("one_time_token_type", ['confirmation_token', 'reauthentication_token', 'recovery_token', 'email_change_token_new', 'email_change_token_current', 'phone_change_token'])


export const chatbot = pgTable("chatbot", {
	id: uuid("id").primaryKey().notNull(),
	video: uuid("video").notNull().references(() => videos.id, { onDelete: "cascade" } ),
	document: uuid("document").notNull().references(() => documents.id, { onDelete: "cascade" } ),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	chatCustomization: uuid("chat_customization").references((): AnyPgColumn => chatCustomization.id),
	chatbotInstanceId: uuid("chatbot_instance_id").references(() => chatbotInstance.id),
	website: uuid("website").notNull().references(() => websites.id, { onDelete: "cascade" } ),
});

export const chatCustomization = pgTable("chat_customization", {
	id: uuid("id").primaryKey().notNull(),
	chatName: text("chat_name").notNull(),
	chatHeadline: text("chat_headline").default('Chat with out AI').notNull(),
	chatDescription: text("chat_description").default('Ask any question let our AI answer').notNull(),
	chatWelcomeMessage: text("chat_welcome_message").default('Hi there, I am the AI Assistant and how can i help you today').notNull(),
	chatBrandColor: text("chat_brand_color").default('#fff').notNull(),
	isChatThemeDark: boolean("is_chat_theme_dark").default(false).notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	chatId: uuid("chat_id").notNull().references((): AnyPgColumn => chatbot.id, { onDelete: "cascade" } ),
});

export const chatbotInstance = pgTable("chatbot_instance", {
	id: uuid("id").primaryKey().notNull(),
	userId: uuid("user_id").notNull(),
	name: text("name").default('Untitled').notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
});

export const documents = pgTable("documents", {
	id: uuid("id").primaryKey().notNull(),
	title: text("title").notNull(),
	userId: uuid("user_id").notNull(),
	isTrained: boolean("is_trained").notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	fileId: uuid("file_id").notNull().references((): AnyPgColumn => files.fileId),
});

export const files = pgTable("files", {
	fileId: uuid("file_id").primaryKey().notNull(),
	documentId: uuid("document_id").notNull().references((): AnyPgColumn => documents.id, { onDelete: "cascade" } ),
	fileName: text("file_name").notNull(),
	filePath: text("file_path").notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
});

export const videos = pgTable("videos", {
	id: uuid("id").primaryKey().notNull(),
	title: text("title"),
	url: text("url"),
	userId: uuid("user_id").notNull(),
	isTrained: boolean("is_trained"),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	ytVideoId: text("yt_video_id"),
});

export const websites = pgTable("websites", {
	id: uuid("id").primaryKey().notNull(),
	title: text("title"),
	url: text("url"),
	userId: uuid("user_id").notNull(),
	isTrained: boolean("is_trained"),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
});

export const apiKeys = pgTable("api_keys", {
	id: uuid("id").primaryKey().notNull(),
	userId: uuid("user_id"),
	apiKey: text("api_key"),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
});

export const chat = pgTable("chat", {
	id: uuid("id").primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
});

export const chatMessage = pgTable("chat_message", {
	id: uuid("id").primaryKey().notNull(),
	chatId: uuid("chat_id").notNull(),
	aiMessage: text("ai_message").notNull(),
	senderMessage: text("sender_message").notNull(),
	timesstamp: timestamp("timesstamp", { mode: 'string' }).defaultNow().notNull(),
});

export const chatbotBehaviour = pgTable("chatbot_behaviour", {
	id: uuid("id").primaryKey().notNull(),
	chatbotId: uuid("chatbot_id").notNull(),
	instructions: text("instructions").notNull(),
});

export const chatbotConnection = pgTable("chatbot_connection", {
	id: uuid("id").primaryKey().notNull(),
	chatbotId: uuid("chatbot_id").notNull(),
	ticketId: uuid("ticket_id").notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
});

export const chatbotKnowledge = pgTable("chatbot_knowledge", {
	id: uuid("id").primaryKey().notNull(),
	video: uuid("video"),
	document: uuid("document"),
	website: uuid("website"),
	chatbotId: uuid("chatbot_id").notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
});

export const chatbotSetting = pgTable("chatbot_setting", {
	id: uuid("id").primaryKey().notNull(),
	chatbotId: uuid("chatbot_id").notNull(),
	chatbotUniqueId: uuid("chatbot_unique_id").notNull(),
	allowedDomains: text("allowed_domains"),
	rateTimeLimitInSec: integer("rate_time_limit_in_sec").default(90).notNull(),
	rateLimitMessage: text("rate_limit_message"),
	showBrand: boolean("showBrand").default(false).notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
});

export const email, = pgTable("email,", {
	id: uuid("id").primaryKey().notNull(),
	userId: uuid("user_id").notNull(),
	name: text("name").default('Untitled').notNull(),
	description: text("description"),
	emailUniqueId: uuid("email_unique_id").notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
});

export const emailInbox = pgTable("email_inbox", {
	id: uuid("id").primaryKey().notNull(),
	emailId: uuid("email_id").notNull(),
	alias: text("alias").notNull(),
	fromName: text("from_name").notNull(),
	signature: text("signature"),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
});

export const emailKnowledge = pgTable("email_knowledge", {
	id: uuid("id").primaryKey().notNull(),
	emailId: uuid("email_id").notNull(),
	video: uuid("video"),
	document: uuid("document"),
	website: uuid("website"),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
});

export const emailSetting = pgTable("email_setting", {
	id: uuid("id").primaryKey().notNull(),
	emailId: uuid("email_id").notNull(),
	chatbotUniqueId: uuid("chatbot_unique_id").notNull(),
	emailFormAlias: boolean("email_form_alias").default(true),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
});