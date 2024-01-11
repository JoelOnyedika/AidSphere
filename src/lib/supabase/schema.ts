import { boolean, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "../../../migrations/schema";


export const websites = pgTable("websites", {
    id: uuid("id").primaryKey().notNull(),
    title: text("title"),
    url: text("url"),
    userId: uuid('user_id').notNull().references(() => users.id, {onDelete: 'set_null'}),
    isTrained: boolean('is_trained'),
    createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' })
    .defaultNow()
    .notNull(),

})

export const videos = pgTable("videos", {
    id: uuid("id").primaryKey().notNull(),
    title: text("title"),
    url: text("url"),
    userId: uuid('user_id').notNull().references(() => users.id, {onDelete: 'set_null'}),
    isTrained: boolean('is_trained'),
    createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' })
    .defaultNow()
    .notNull(),

})

export const documents = pgTable("documents", {
    id: uuid("id").primaryKey().notNull(),
    title: text("title").notNull(),
    userId: uuid('user_id').notNull().references(() => users.id, {onDelete: 'set_null'}),
    isTrained: boolean('is_trained').notNull(),
    createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' })
    .defaultNow()
    .notNull(),
    file: uuid('file_id').notNull().references(() => files.fileId)
})

export const files = pgTable("files", {
    fileId: uuid("file_id").primaryKey().notNull(),
    documentId: uuid('document_id').notNull().references(() => users.id, {onDelete: 'set_null'}),
    fileName: text("file_name").notNull(),
    filePath: text("file_path").notNull(),
    createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' })
    .defaultNow()
    .notNull(),
})