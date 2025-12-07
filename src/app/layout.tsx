import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grecco.Dev | Full Stack solutions",
  description: `Grecco.Dev achieves client results in every project.
    Software focused on readability, maintainability and performance
    Specializing in JavaScript, React, Node.js, and PHP.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased`,
          "w-full"
        )}
      >
        <div className="flex flex-col max-w-7xl min-h-screen mx-auto">
          <Header />

          <main className="grow w-full">{children}</main>

          <Footer />
          <Analytics />
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
