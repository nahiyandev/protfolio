"use client";

import React from "react";
import { GraduationCap, FileText, ArrowRight } from "lucide-react";

interface AboutSectionProps {
  onOpenEducation: () => void;
  onOpenResume: () => void;
}

export default function AboutSection({ onOpenEducation, onOpenResume }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header matching screenshot */}
        <div className="space-y-3">
          {/* Top Pill Badge: MY STORY & JOURNEY */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#081220]/90 border border-cyan-500/40 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
            <span className="text-[11px] font-mono tracking-widest text-cyan-300 font-semibold uppercase">
              MY STORY &amp; JOURNEY
            </span>
          </div>

          {/* Title: THE JOURNEY with gradient */}
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase font-sans">
            THE{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-sky-300 to-fuchsia-400">
              JOURNEY
            </span>
          </h2>

          {/* Cyan accent line */}
          <div className="h-1 w-14 bg-cyan-400 rounded-full" />
        </div>

        {/* Main Grid: Left Story Cards + Right Interactive Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: 3 Story Cards + 2 Stats Cards */}
          <div className="lg:col-span-7 space-y-4">
            {/* Story Card 1 */}
            <div className="relative p-6 sm:p-7 rounded-2xl bg-[#080d19]/90 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-md">
              <span className="absolute top-5 right-5 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans pr-4">
                My journey started in the Humanities department. Studying human behavior and society made me curious about how people communicate with each other. I always wondered:{" "}
                <span className="text-cyan-400 font-semibold">
                  How can we make these connections simpler and better using modern technology?
                </span>
              </p>
            </div>

            {/* Story Card 2 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#080d19]/90 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-md">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                That curiosity led me to web development. I soon realized that coding is not just logic or technical rules—it is a creative language. A language that allows me to build real web applications from scratch and share them with people worldwide instantly.
              </p>
            </div>

            {/* Story Card 3 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#080d19]/90 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-md">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                Today, I combine human creativity with solid coding skills. I bring my humanities background into frontend engineering to build simple, fast, and user-friendly websites that solve real-world problems.
              </p>
            </div>

            {/* Bottom 2 Cards: BACKGROUND & CURRENT GOAL */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {/* Background Card */}
              <div className="p-5 rounded-2xl bg-[#080d19]/90 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300">
                <div className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-bold mb-1.5">
                  BACKGROUND
                </div>
                <div className="text-base sm:text-lg font-bold text-white tracking-wide">
                  Humanities Student
                </div>
              </div>

              {/* Current Goal Card */}
              <div className="p-5 rounded-2xl bg-[#080d19]/90 border border-slate-800/90 hover:border-purple-500/40 transition-all duration-300">
                <div className="text-[10px] font-mono tracking-widest text-fuchsia-400 uppercase font-bold mb-1.5">
                  CURRENT GOAL
                </div>
                <div className="text-base sm:text-lg font-bold text-white tracking-wide">
                  Full-Stack Developer
                </div>
              </div>
            </div>

            {/* Career Modal Triggers */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenEducation}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-xs font-mono font-medium text-slate-300 border border-slate-800 hover:border-cyan-500/40 transition-colors cursor-pointer"
              >
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>Education &amp; Credentials</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 text-slate-500" />
              </button>
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-xs font-mono font-medium text-slate-300 border border-slate-800 hover:border-indigo-500/40 transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>Career CV</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 text-slate-500" />
              </button>
            </div>
          </div>

          {/* Right Column: Cyber Graphic Box matching screenshot */}
          <div className="lg:col-span-5 flex justify-center items-center py-6">
            <div className="relative w-full max-w-[420px] aspect-square rounded-[32px] bg-[#070d18] border border-cyan-500/30 p-8 flex items-center justify-center shadow-[0_0_45px_rgba(6,182,212,0.15)] group transition-all duration-500 hover:border-cyan-400/60">
              {/* Corner Badge: CREATIVITY (Top Right) */}
              <div className="absolute -top-3.5 -right-2 sm:-right-3 px-4 py-1.5 rounded-xl bg-[#06111f] border-2 border-cyan-400/90 text-cyan-300 font-mono text-xs font-black tracking-wider uppercase shadow-[0_0_18px_rgba(6,182,212,0.4)] backdrop-blur-md">
                CREATIVITY
              </div>

              {/* Corner Badge: PROBLEM SOLVING (Bottom Left) */}
              <div className="absolute -bottom-3.5 -left-2 sm:-left-3 px-4 py-1.5 rounded-xl bg-[#140b22] border-2 border-fuchsia-500/90 text-fuchsia-300 font-mono text-xs font-black tracking-wider uppercase shadow-[0_0_18px_rgba(217,70,239,0.4)] backdrop-blur-md">
                PROBLEM SOLVING
              </div>

              {/* Matrix Dot Grid Background */}
              <div className="absolute inset-0 rounded-[32px] opacity-30 [background-image:radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none" />

              {/* Concentric Orbital Radar Rings */}
              <div className="absolute w-72 h-72 rounded-full border border-slate-800/80 pointer-events-none group-hover:border-cyan-500/20 transition-colors duration-500" />
              <div className="absolute w-52 h-52 rounded-full border border-indigo-900/50 pointer-events-none animate-spin [animation-duration:35s]" />
              <div className="absolute w-36 h-36 rounded-full border border-cyan-500/20 pointer-events-none" />

              {/* Center Typography Stack: HUMAN - CODE - LOGIC */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center select-none space-y-1">
                {/* HUMAN (faint top) */}
                <span className="text-4xl sm:text-5xl font-black font-mono tracking-widest text-slate-800/80 group-hover:text-slate-700/80 transition-colors">
                  HUMAN
                </span>

                {/* CODE (Center bright with targeting reticle ring) */}
                <div className="relative my-1">
                  {/* Glowing Orbit Reticle */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full border-2 border-cyan-400 bg-cyan-950/60 shadow-[0_0_12px_#22d3ee] flex items-center justify-center animate-pulse">
                    <div className="w-2 h-2 rounded-full bg-cyan-300" />
                  </div>
                  <span className="text-3xl sm:text-4xl font-black font-mono tracking-widest text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]">
                    CODE
                  </span>
                </div>

                {/* LOGIC (faint bottom) */}
                <span className="text-4xl sm:text-5xl font-black font-mono tracking-widest text-slate-800/80 group-hover:text-slate-700/80 transition-colors">
                  LOGIC
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
