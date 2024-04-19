import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create your Chatbots and train them here",
  description: "Create your Chatbots and train them here",
};

export default function ChatbotsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0e1425]`}>
        <div className="">{children}</div>
      </body>
    </html>
  );
}
