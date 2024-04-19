This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font. The project also uses ShadCn UI and Tailwindcss for styling, it uses drizzle-orm for the ORM, it uses Supabase postgresql service for handling the SQL database

## THE ENV FILE
Fill the .env file with ithe nneeded credentials
```.env
DATABASE_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SERVICE_ROLE_KEY=
PW=
NEXT_PUBLIC_SITE_URL=
```

## AUTH
I used supabase authentication for the auth, both for signing in and login and also google auth and github auth, although not impliminted yet

I use cookie auth to store the user data

## ORM - DRIZZLE ORM
I use drizzle orm to write pattern recognition and then i run the command specified in the package.json file to convert the pattern to SQL like code and then the SQL code is migrated to supabase. The configuration of drizzle is found in the `./` dir and the filename is `drizzle.config.ts`. And the file location where the pattern recognition is written is in `./src/supabase/schema.ts`, and then the migrated schema is found in `./migrations`

## QUERIES
As for queries i use supabase queries to write my queries. The location of this file is in `./src/lib/supabase/queries.ts`. There every single queries i have ever performed on supabase is found in that file. Not to be mistaken with auth queries, the auth queris are found in `./src/lib/server-actions/auth-actions.ts`.

## MIDDLEWARE
The middleware file found in the `./` dir always check if the user is authenticated or not. Although path of the code is commented for now. That is because the code is still in development and i still need to work some things out.

## ORM MIGRTIONS
For migrating, first create a migration schema file named schema in the supabase folder located in the lib folder📂 and then run `npm run generate` to create a migrations script in SQL. Then run `npm run push` to make changes and then after that run the db in the lib folder by importing it in the root layout page to migrate the changes.
