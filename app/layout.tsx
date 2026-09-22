import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IELTSLingo — Gamified Cambridge IELTS Micro-Practice",
  description:
    "Bite-sized, addictive IELTS preparation platform engineered around authentic Cambridge IELTS 1–21 exam patterns.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F7F9FA] text-[#3C3C3C]">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}

