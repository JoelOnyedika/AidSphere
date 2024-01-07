import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Login into your account",
  description: "Login into your account",
};

export default function LoginLayout({
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
