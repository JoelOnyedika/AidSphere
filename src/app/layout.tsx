import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import db from "@/lib/supabase/db";
import RecoilContextProvider from "@/lib/recoil/recoilContextProvider";
const inter = Inter({ subsets: ["latin"] });

//console.log(db)

export const metadata: Metadata = {
  title: "Aidsphere - AI support for your Saas startups",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange>
        {<div className="max-w-[2440px] ml-auto mr-auto"><RecoilContextProvider>{children}</RecoilContextProvider></div>}
        </ThemeProvider>
      </body>
    </html>
  );
}
