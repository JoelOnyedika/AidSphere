import { jsonb, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
    id: uuid('id').primaryKey().notNull(),
    fullName: text('full_name'),
    avatarUrl: text('avatar_url'),
    email: text('email'),
    paymentMethod: jsonb('payment_method'),
    updatedAt: timestamp('updated_at', {withTimezone: true, mode: 'string'})
})