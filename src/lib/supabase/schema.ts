import { boolean, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const chat = pgTable('website', {
    id: uuid('id').defaultRandom().primaryKey().notNull(),
    link: text('link').notNull(),
    isTrained: boolean('is_trained').notNull(),
    createdAt: timestamp('created_at', {
        withTimezone: true,
        mode: 'string'
    }).defaultNow().notNull()
    
})