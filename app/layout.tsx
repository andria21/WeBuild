import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import ChatBot from "@/components/chatbot/chatbot";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "WeBuild | We Build Any Website You Can Imagine",
  description:
    "Premium web development agency specializing in landing pages, e-commerce, SaaS, dashboards, and custom web solutions. Fast delivery, modern tech, pixel-perfect design.",
  keywords:
    "web development, website builder, landing page, e-commerce, SaaS, custom website, web design agency",
};

export const viewport: Viewport = {
  themeColor: "#0F1020",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
        <ChatBot />
      </body>
    </html>
  );
}
