import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Md Nayem (Nahiyan Dev) | Full Stack Developer",
  description:
    "Portfolio of Md Nayem (Nahiyan Dev) — Full Stack Developer working with Next.js, React, TypeScript and the MERN stack. Based in Mymensingh, Bangladesh, open to remote work worldwide.",
  keywords: [
    "Md Nayem",
    "Nahiyan Dev",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "MERN",
    "Bangladesh",
  ],
  authors: [{ name: "Md Nayem" }],
  openGraph: {
    title: "Md Nayem (Nahiyan Dev) | Full Stack Developer",
    description:
      "Full Stack Developer — Next.js, React, TypeScript & MERN. Open to remote work worldwide.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-950 text-slate-200">
        {children}
      </body>
    </html>
  );
}
