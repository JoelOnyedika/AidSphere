import { boolean, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "../../../migrations/schema";

export const chat = pgTable('website', {
    id: uuid('id').defaultRandom().primaryKey().notNull(),
    userId: uuid('user_id').notNull().references(() => users.id, {onDelete: 'cascade'}),
    link: text('link').notNull(),
    isTrained: boolean('is_trained').notNull(),
    createdAt: timestamp('created_at', {
        withTimezone: true,
        mode: 'string'
    }).defaultNow().notNull()
    
})