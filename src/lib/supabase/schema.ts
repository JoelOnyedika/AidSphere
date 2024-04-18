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
    file: uuid('file').notNull().references(() => files.fileId, {onDelete: 'cascade'}),
    video: uuid('video').notNull().references(() => videos.id, {onDelete: 'cascade'}),
    document: uuid('document').notNull().references(() => documents.id, {onDelete: 'cascade'}),
    chatName: text("chat_name").notNull(),
    chatHeadline: text("chat_headline").notNull().default("Chat with out AI"),
    chatDescription: text("chat_description").notNull().default("Ask any question let our AI answer"),
    chatWelcomeMessage: text("chat_welcome_message").notNull().default("Hi there, I am the AI Assistant and how can i help you today"),
    chatBrandColor: text("chat_brand_color").notNull().default("#fff"),
    isChatThemeDark: boolean('is_chat_theme_dark').default(false).notNull(),
    createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' }).defaultNow().notNull(),

})

