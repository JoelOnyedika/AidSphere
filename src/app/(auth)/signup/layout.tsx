import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create an account with AidSphere",
  description: "Create an account with AidSphere",
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="max-w-[2440px] ml-auto mr-auto">{children}</div>
      </body>
    </html>
  );
}
