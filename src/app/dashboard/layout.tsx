import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
// import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
const inter = Inter({ subsets: ['latin'] })
import { createClient } from "@/lib/supabase"
import {redirect} from 'next/navigation'


export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'This is your workspace',
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createClient()

  const { data: {user} } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }
  return (
      <div className={`${inter.className} bg-[#0e1425]`}>
      {children}
      </div>
  )
}
