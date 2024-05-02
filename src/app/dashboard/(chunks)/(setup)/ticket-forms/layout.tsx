import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create your ticket forms here",
  description: "Create your ticket forms here",
};

export default function TicketFormsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className={`${inter.className} bg-[#0e1425]`}>
        <div className="">{children}</div>
      </div>
  );
}
