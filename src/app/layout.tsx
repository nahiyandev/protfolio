import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
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
        className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} min-h-screen bg-[#06090e] text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950 flex flex-col font-sans`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
