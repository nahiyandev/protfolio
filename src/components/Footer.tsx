"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { NAVIGATION_LINKS, PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#04070c] py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Title */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-linear-to-br from-cyan-500 to-indigo-600 p-0.5 shadow-md shadow-cyan-500/20 shrink-0">
              <div className="relative w-full h-full bg-[#080d17] rounded-[10px] overflow-hidden flex items-center justify-center">
                <Image
                  src="/logo.jpg"
                  alt={`${PERSONAL_INFO.name} Logo`}
                  width={36}
                  height={36}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div>
              <div className="text-sm font-bold text-white font-mono flex items-center gap-1.5">
                <span>Nahiyan</span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-red-950/50 border border-red-500/40 text-transparent bg-clip-text bg-linear-to-r from-red-400 to-amber-300">
                  DEV
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-xs text-slate-400 font-normal">
                  Web Architecture &amp; Full Stack Systems
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Built with React 19, Next.js 16 (App Router), Express, MongoDB &amp; Tailwind CSS
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-cyan-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-mono text-slate-300 border border-slate-800 hover:border-cyan-500/40 transition-colors cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

        {/* System telemetry bar */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              STATUS: OPERATIONAL
            </span>
            <span>UPTIME: 99.99%</span>
            <span className="hidden sm:inline">P99 LATENCY: 14ms</span>
          </div>

          <div>
            &copy; 2026 {PERSONAL_INFO.fullName}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
