import { z } from "zod";

export const FormSchema = z.object({
  username: z.string().describe("Username").min(4, {message: "Username must have at least five characters"}).max(20, {message: "Username must have at most 20 characters"}),
  email: z.string().describe("Email").email({ message: "Invalid email" }),
  password: z
    .string()
    .describe("Password")
    .min(5, { message: "Password must be at least 5 characters" }),
});


export const LoginFormSchema = z.object({
  email: z.string().describe("Email").email({ message: "Invalid email" }),
  password: z
    .string()
    .describe("Password")
    .min(5, { message: "Password must be at least 5 characters" }),
});

export const DialogFormSchema = z.object({
  url: z.string().describe("url")
})

export type websiteTable = 'websites' | 'documents' | 'videos'