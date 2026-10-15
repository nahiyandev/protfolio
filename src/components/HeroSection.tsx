"use client";

import React from "react";
import Image from "next/image";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface HeroSectionProps {
  onOpenHireMe: () => void;
  onOpenResume: () => void;
}

export default function HeroSection({ onOpenHireMe, onOpenResume }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Ambient center cyan backlight glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 sm:w-200 h-100 sm:h-125 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center space-y-6 relative z-10">
        {/* Profile Card in Centered Squircle with Glowing Cyan Border matching screenshot */}
        <div className="relative group">
          {/* Ambient outer glow behind card */}
          <div className="absolute -inset-1 rounded-[34px] bg-cyan-400/25 blur-xl group-hover:bg-cyan-400/40 transition-all duration-500 pointer-events-none" />

          {/* Squircle Card Container */}
          <div className="relative w-56 h-64 sm:w-64 sm:h-72 rounded-[30px] p-1 bg-[#070e1b] border-2 border-cyan-400/80 shadow-[0_0_35px_rgba(6,182,212,0.4)] overflow-hidden transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_0_45px_rgba(6,182,212,0.6)]">
            <div className="relative w-full h-full rounded-[26px] overflow-hidden bg-slate-950">
              <Image
                src="/hero-image.jpg"
                alt={`${PERSONAL_INFO.fullName} - Full Stack Developer`}
                fill
                priority
                sizes="(max-width: 640px) 224px, 256px"
                className="object-cover object-top filter brightness-100 contrast-105 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Pill Badge: ARCHITECTING DIGITAL ENVIRONMENTS V1.0 */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#081220]/90 border border-cyan-500/50 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.2)]">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
          <span className="text-[11px] sm:text-xs font-mono tracking-widest text-cyan-300 font-semibold uppercase">
            ARCHITECTING DIGITAL ENVIRONMENTS V1.0
          </span>
        </div>

        {/* Large Name Heading in Chrome/Metallic Gradient matching screenshot */}
        <div className="space-y-2">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight uppercase font-sans text-transparent bg-clip-text bg-linear-to-b from-white via-slate-100 to-slate-400">
            {PERSONAL_INFO.name.toUpperCase()}
          </h1>
          <div className="text-xs sm:text-sm font-mono tracking-widest text-cyan-400/90 font-bold uppercase">
            {"//"} {PERSONAL_INFO.brandName}
          </div>
        </div>

        {/* Bio Subtitle matching screenshot */}
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans px-2">
          A{" "}
          <span className="text-cyan-300 font-semibold underline decoration-cyan-400 decoration-2 underline-offset-4">
            Full Stack Developer
          </span>{" "}
          dedicated to crafting immersive, high-performance interfaces where precision engineering meets minimalist design.
        </p>

        {/* Action Buttons & Status Row */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {/* HIRE ME Button */}
          <button
            onClick={onOpenHireMe}
            className="px-7 py-3 rounded-xl bg-[#00e5ff] hover:bg-[#38bdf8] text-slate-950 font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(0,229,255,0.45)] hover:shadow-[0_0_35px_rgba(0,229,255,0.7)] hover:scale-105 cursor-pointer"
          >
            HIRE ME
          </button>

          {/* VIEW RESUME Button */}
          <button
            onClick={onOpenResume}
            className="px-6 py-3 rounded-xl bg-[#0c1424] hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-md hover:scale-105 cursor-pointer"
          >
            VIEW RESUME
          </button>

          {/* STATUS Badge */}
          <div className="flex flex-col items-start gap-1">
            <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase font-semibold">
              STATUS
            </span>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a1526] border border-cyan-500/30 text-[10px] sm:text-xs font-mono font-semibold text-white shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
              <span>AVAILABLE FOR HIRE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
