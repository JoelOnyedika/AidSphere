import type {Config } from 'drizzle-kit'
import * as dotenv from 'dotenv'

dotenv.config({path: '.env'})

if(!process.env.DATABASE_URL) {
    console.log("Database url not found")
}

export default {
   schema: "./src/lib/supabase/schema.ts" ,
   out: './migrations',
   dbCredentials: {
        connectionString: process.env.DATABASE_URL || ''
   }
} satisfies Config