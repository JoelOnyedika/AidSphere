import { boolean, pgTable, text, timestamp, uuid, Reference } from "drizzle-orm/pg-core";
import { users } from "../../../migrations/schema";

export const websites = pgTable("websites", {
    id: uuid("id").primaryKey().notNull(),
    title: text("title"),
    url: text("url"),
    userId: uuid('user_id').notNull().references(() => users.id, {onDelete: 'cascade'}),
    isTrained: boolean('is_trained'),
    createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' }).defaultNow().notNull(),

})

export const videos = pgTable("videos", {
    id: uuid("id").primaryKey().notNull(),
    title: text("title"),
    url: text("url"),
    userId: uuid('user_id').notNull().references(() => users.id, {onDelete: 'cascade'}),
    isTrained: boolean('is_trained'),
    ytVideoId: text("yt_video_id").notNull(),
    createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' }).defaultNow().notNull(),

})

export const documents = pgTable("documents", {
    id: uuid("id").primaryKey().notNull(),
    title: text("title").notNull(),
    userId: uuid('user_id').notNull().references(() => users.id, {onDelete: 'cascade'}),
    isTrained: boolean('is_trained').notNull(),
    createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
    file: uuid('file_id').notNull().references(() => files.fileId)
})

export const files = pgTable("files", {
    fileId: uuid("file_id").primaryKey().notNull(),
    documentId: uuid('document_id').notNull().references(() => users.id, {onDelete: 'cascade'}),
    fileName: text("file_name").notNull(),
    filePath: text("file_path").notNull(),
    createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
})

export const chatbot = pgTable("chatbot", {
    id: uuid("id").primaryKey().notNull(),
    //file: uuid('file').notNull().references(() => files.fileId, {onDelete: 'cascade'}),
    video: uuid('video').notNull().references(() => videos.id, {onDelete: 'cascade'}),
    document: uuid('document').notNull().references(() => documents.id, {onDelete: 'cascade'}),
    website: uuid('website').notNull().references(() => websites.id, {onDelete: 'cascade'}), 
    customization: uuid('chat_customization').references(() => chatCustomization.id),
    chatbotInstanceId: uuid("chatbot_instance_id").references(() => chatbotInstance.id),
    createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
})

export const chatCustomization = pgTable('chat_customization', {
    id: uuid("id").primaryKey().notNull(),
    chatId: uuid("chat_id").notNull().references(() => chatbot.id, {onDelete: 'cascade'}),
    name: text("chat_name").notNull(),
    headline: text("chat_headline").notNull().default("Chat with out AI"),
    description: text("chat_description").notNull().default("Ask any question let our AI answer"),
    welcomeMessage: text("chat_welcome_message").notNull().default("Hi there, I am the AI Assistant and how can i help you today"),
    brandColor: text("chat_brand_color").notNull().default("#fff"),
    isThemeDark: boolean('is_chat_theme_dark').default(false).notNull(),
    createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
})

export const chatbotInstance = pgTable("chatbot_instance", {
    id: uuid("id").primaryKey().notNull(),
    name: text("instance_name").notNull().default("Untitled"),
    // chatbotId: uuid("chatbot_id").references(() => chatbot.id)
})
