import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Nahiyan | Full Stack Web Developer & Architecture Web Engineer",
  description:
    "Personal branding portfolio of Nahiyan — Senior Full Stack Web Developer & Architecture Web Engineer specializing in Next.js, Express.js, MongoDB, distributed systems, and cloud infrastructure.",
  keywords: [
    "Full Stack Web Developer",
    "Architecture Web Engineer",
    "System Architect",
    "Next.js Developer",
    "React 19",
    "Express.js",
    "MongoDB",
    "Cloud Architecture",
    "Kubernetes",
    "DevOps",
    "Portfolio",
  ],
  authors: [{ name: "Nahiyan Khan" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo.jpg", sizes: "192x192", type: "image/jpeg" },
    ],
    apple: [{ url: "/logo.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#06090e] text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950 flex flex-col`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
