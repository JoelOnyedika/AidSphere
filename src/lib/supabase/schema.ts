import {
  boolean,
  pgTable,
  text,
  timestamp,
  uuid,
  Reference,
  integer,
  pgEnum,
} from "drizzle-orm/pg-core";
import { users } from "../../../migrations/schema";
// import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";
// const supabase = createRouteHandlerClient({ cookies });

// const { data } = await supabase.from("users").select("*").eq("email", email);

export const users = pgTable("users", {
	id: uuid("id").primaryKey().notNull(),
	email: text("email"),
	username: text("username"),
	profileImg: text("profile_img"),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
})

export const setting = pgTable('setting', {
  id: uuid("id").primaryKey().notNull(),
  userId: uuid("user_id").references(() => users.id, {onDelete: 'cascade'}),
  tewntyFourHourTime: boolean('twenty_four_hour_time').default(true),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
})

const pricingType = pgEnum('pricing_types', ['Free', 'Standard', 'Pro', 'Expert'])
const memberStatus = pgEnum('member_status', ['Owner', 'Invited'])

export const member = pgTable('member', {
  id: uuid("id").primaryKey().notNull(),
  userId: uuid("user_id").references(() => users.id, {onDelete: 'cascade'}),
  name: text('name').notNull(),
  status: memberStatus('status'),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
})

export const subscriptionPlan = pgTable('subscription_plan', {
  id: uuid("id").primaryKey().notNull(),
  planName: pricingType('plan_name').default('Free'),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
})

export const apiKey = pgTable('api_keys', {
  id: uuid("id").primaryKey().notNull(),
  userId: uuid("user_id").references(() => users.id, {onDelete: 'cascade'}),
  apiKey: text('api_key'),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
})

export const openaiKey = pgTable('openai_keys', {
  id: uuid("id").primaryKey().notNull(),
  userId: uuid("user_id").references(() => users.id, {onDelete: 'cascade'}),
  openaiKey: text('openai_key'),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
})


export const userSubcription = pgTable("user_subscription", {
  id: uuid("id").primaryKey().notNull(),
  userId: uuid("user_id").references(() => users.id, {onDelete: 'cascade'}),
  planId: uuid("user_id").references(() => subscriptionPlan.id, {onDelete: 'cascade'}),  
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
})

export const websites = pgTable("websites", {
  id: uuid("id").primaryKey().notNull(),
  title: text("title"),
  url: text("url"),
  userId: uuid("user_id").notNull(),
  isTrained: boolean("is_trained"),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
});

export const videos = pgTable("videos", {
  id: uuid("id").primaryKey().notNull(),
  title: text("title"),
  url: text("url"),
  userId: uuid("user_id").notNull(),
  isTrained: boolean("is_trained"),
  ytVideoId: text("yt_video_id"),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
});

export const documents = pgTable("documents", {
  id: uuid("id").primaryKey().notNull(),
  title: text("title").notNull(),
  userId: uuid("user_id").notNull(),
  isTrained: boolean("is_trained").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  file: uuid("file_id")
    .notNull()
    .references(() => files.fileId),
});

export const files = pgTable("files", {
  fileId: uuid("file_id").primaryKey().notNull(),
  documentId: uuid("document_id")
    .notNull()
    .references(() => documents.id, { onDelete: "cascade" }),
  fileName: text("file_name").notNull(),
  filePath: text("file_path").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
});

//////////////////////////////// CHATBOT SCHEMA ////////////////////////////////

export const chatbot = pgTable("chatbot", {
  id: uuid("id").primaryKey().notNull(),
  userId: uuid("user_id").notNull(),
  name: text("name").notNull().default("Untitled"),
  description: text("description"),
  chatbotUniqueId: uuid("chatbot_unique_id").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  // chatbotId: uuid("chatbot_id").references(() => chatbot.id)
});

export const chatbotSetting = pgTable("chatbot_setting", {
  id: uuid("id").primaryKey().notNull(),
  chatbotId: uuid("chatbot_id")
    .notNull()
    .references(() => chatbot.id, { onDelete: "cascade" }),
  chatbotUniqueId: uuid("chatbot_unique_id")
    .notNull()
    .references(() => chatbot.chatbotUniqueId, { onDelete: "cascade" }),
    allowed_domains: text("allowed_domains"),
    rateLimitTimeInSec: integer('rate_time_limit_in_sec').default(90).notNull(),
    rateLimitMessage: text('rate_limit_message'),
  showBrand: boolean("showBrand").default(false).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
});

export const chatbotKnowledge = pgTable("chatbot_knowledge", {
  id: uuid("id").primaryKey().notNull(),
  video: uuid("video").references(() => videos.id, { onDelete: "cascade" }),
  document: uuid("document").references(() => documents.id, {
    onDelete: "cascade",
  }),
  website: uuid("website").references(() => websites.id, {
    onDelete: "cascade",
  }),
  chatbotId: uuid("chatbot_id")
    .notNull()
    .references(() => chatbot.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
});

export const chatbotConnection = pgTable("chatbot_connection", {
  id: uuid("id").primaryKey().notNull(),
  chatbotId: uuid("chatbot_id")
    .notNull()
    .references(() => chatbot.id, { onDelete: "cascade" }),
  ticketId: uuid("ticket_id").notNull().references(() => ticket.id, {onDelete: 'cascade'}),
  //faqId: uuid("faq_id").notNull().references(() => faq.id, {onDelete: 'cascade'}),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
});

export const chatbotBehavior = pgTable("chatbot_behaviour", {
  id: uuid("id").primaryKey().notNull(),
  chatbotId: uuid("chatbot_id")
    .notNull()
    .references(() => chatbot.id, { onDelete: "cascade" }),
  instructions: text("instructions").notNull(),
  ///conversationStyle:
  ///creativity:
});

export const chatCustomization = pgTable("chat_customization", {
  id: uuid("id").primaryKey().notNull(),
  chatbotId: uuid("chatbot_id")
    .notNull()
    .references(() => chatbot.id, { onDelete: "cascade" }),
  name: text("chat_name").notNull(),
  headline: text("chat_headline").notNull().default("Chat with out AI"),
  description: text("chat_description")
    .notNull()
    .default("Ask any question let our AI answer"),
  welcomeMessage: text("chat_welcome_message")
    .notNull()
    .default("Hi there, I am the AI Assistant and how can i help you today"),
  brandColor: text("chat_brand_color").notNull().default("#fff"),
  isThemeDark: boolean("is_chat_theme_dark").default(false).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
});

export const chat = pgTable("chat", {
  id: uuid("id").primaryKey().notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
});

export const chatMessage = pgTable("chat_message", {
  id: uuid("id").primaryKey().notNull(),
  chat_id: uuid("chat_id")
    .notNull()
    .references(() => chat.id, { onDelete: "cascade" }),
  ai_message: text("ai_message").notNull(),
  sender_message: text("sender_message").notNull(),
  timestamp: timestamp("timesstamp").defaultNow().notNull(),
});

//////////////////////////////// TICKET FORM SCHEMA ////////////////////////////////
export const ticket = pgTable("ticket,", {
  id: uuid("id").primaryKey().notNull(),
  userId: uuid("user_id").notNull(),
  name: text("name").notNull().default("Untitled"),
  description: text("description"),
  ticketUniqueId: uuid("ticket_unique_id").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
});

export const ticketCustomization = pgTable("ticket_customization", {
    id: uuid("id").primaryKey().notNull(),
    ticketId: uuid("ticket_id")
      .notNull()
      .references(() => ticket.id, { onDelete: "cascade" }),
    headline: text("ticket_headline").notNull().default("ticket with out AI"),
    description: text("ticket_description")
      .notNull()
      .default("Ask any question let our AI answer"),
    butttonText: text("button_text")
      .notNull()
      .default("Create ticket"),
    brandColor: text("chat_brand_color").notNull().default("#fff"),
    isThemeDark: boolean("is_chat_theme_dark").default(false).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
      .defaultNow()
      .notNull(),
  });

c
  
export const ticketField = pgTable("ticket_field", {
  id: uuid("id").primaryKey().notNull(),
  ticketId: uuid("ticket_id")
      .notNull()
      .references(() => ticket.id, { onDelete: "cascade" }),
  label: text('label'),
  isRequired: boolean('is_required').default(false).notNull(),
  fileUpload: text('file_upload'),
  defaultValue: text('default_value'),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
      .defaultNow()
      .notNull(),
})

export const ticketConnection = pgTable('ticket_connection', {
  id: uuid('id').primaryKey().notNull(),
  //emailInbox: uuid("email_inbox").notNull().references(() => email.id, {onDelete: 'cascade'}),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
      .defaultNow()
      .notNull(),
})


export const ticketSetting = pgTable("ticket_setting", {
  id: uuid("id").primaryKey().notNull(),
  ticketId: uuid("ticket_id")
    .notNull()
    .references(() => chatbot.id, { onDelete: "cascade" }),
  ticketUniqueId: uuid("chatbot_unique_id")
    .notNull()
    .references(() => chatbot.chatbotUniqueId, { onDelete: "cascade" }),
  allowed_domains: text("allowed_domains"),
  rateLimitTimeInSec: integer('rate_time_limit_in_sec').default(90).notNull(),
  rateLimitMessage: text('rate_limit_message'),
  showBrand: boolean("showBrand").default(true).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
});

export const ticketForm = pgTable("ticket_form", {
  id: uuid("id").primaryKey().notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
});

export const ticketMessage = pgTable("ticket_message", {
  id: uuid("id").primaryKey().notNull(),
  field: text('field'),
  comment: text('comment'),
  timestamp: timestamp("timesstamp").defaultNow().notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
})

//////////////////////////////// Email SCHEMA ////////////////////////////////

export const email = pgTable("email,", {
  id: uuid("id").primaryKey().notNull(),
  userId: uuid("user_id").notNull(),
  name: text("name").notNull().default("Untitled"),
  description: text("description"),
  emailUniqueId: uuid("email_unique_id").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
});

export const emailInbox = pgTable('email_inbox', {
  id: uuid("id").primaryKey().notNull(),
  emailId: uuid("email_id").notNull().references(() => email.id, {onDelete: 'cascade'}),
  alias: text('alias').notNull(),
  fromName: text('from_name').notNull(),
  signature: text('signature'),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
})

export const emailKnowledge = pgTable("email_knowledge", {
  id: uuid("id").primaryKey().notNull(),
  emailId: uuid("email_id")
    .notNull()
    .references(() => email.id, { onDelete: "cascade" }),
  video: uuid("video").references(() => videos.id, { onDelete: "cascade" }),
  document: uuid("document").references(() => documents.id, {
    onDelete: "cascade",
  }),
  website: uuid("website").references(() => websites.id, {
    onDelete: "cascade",
  }),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
});

export const emailSetting = pgTable("email_setting", {
  id: uuid("id").primaryKey().notNull(),
  emailId: uuid("email_id")
    .notNull()
    .references(() => chatbot.id, { onDelete: "cascade" }),
  emailUniqueId: uuid("chatbot_unique_id")
    .notNull()
    .references(() => chatbot.chatbotUniqueId, { onDelete: "cascade" }),
  emailFormAlias: boolean('email_form_alias').default(true),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
});
