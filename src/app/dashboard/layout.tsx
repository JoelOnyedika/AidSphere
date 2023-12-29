import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'This is your workspace',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className={`${inter.className} bg-[#0e1425]`}>
      {children}
      </div>
  )
}
