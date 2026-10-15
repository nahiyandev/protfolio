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
  metadataBase: new URL("https://nahiyandev.vercel.app"),
  title: "Md Nayem (Nahiyan Dev) | Full Stack Web Developer & Architecture Web Engineer",
  description:
    "Personal branding portfolio of Md Nayem (Nahiyan Dev) — Full Stack Web Developer & Architecture Web Engineer specializing in Next.js, Express.js, MongoDB, distributed systems, and cloud infrastructure.",
  keywords: [
    "Md Nayem",
    "Nahiyan Dev",
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
  authors: [{ name: "Md Nayem (Nahiyan Dev)" }],
  openGraph: {
    title: "Md Nayem (Nahiyan Dev) | Full Stack & Web Architecture Portfolio",
    description:
      "Architecting resilient, distributed web systems & crafting ultra-responsive full-stack platforms from code to cloud.",
    url: "https://nahiyandev.vercel.app/",
    siteName: "Md Nayem (Nahiyan Dev) Portfolio",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 800,
        alt: "Md Nayem (Nahiyan Dev) Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
