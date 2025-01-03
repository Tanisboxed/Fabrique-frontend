import "./globals.css";
import React from "react";
import type { Metadata } from "next";

import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import { Geist, Geist_Mono } from "next/font/google";
import PromotionCta from "@/components/layouts/promotion-cta";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FABRIQUE | Home",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PromotionCta />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
