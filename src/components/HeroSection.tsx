"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Sparkles,
  FileText,
  ArrowRight,
  Code2,
  Database,
  ChevronDown,
  Zap
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface HeroSectionProps {
  onOpenHireMe: () => void;
  onOpenResume: () => void;
}

export default function HeroSection({ onOpenHireMe, onOpenResume }: HeroSectionProps) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Glow highlight in background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-6">
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span className="text-[11px] font-mono tracking-wider font-semibold text-cyan-300 uppercase">
              Open to Roles & Architecture Consulting
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-3">
            <h2 className="text-sm sm:text-base font-mono text-cyan-400 font-semibold tracking-wider uppercase">
              Hello, I am {PERSONAL_INFO.fullName}
            </h2>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Full Stack Web Developer &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                Architecture Web Engineer
              </span>
            </h1>
          </div>

          {/* Dynamic Role Ticker */}
          <div className="flex items-center justify-center lg:justify-start gap-2 text-sm sm:text-lg font-mono text-slate-300">
            <span className="text-cyan-400 font-bold">&gt;</span>
            <span className="text-slate-400">Specializing in</span>
            <span className="text-white font-semibold underline decoration-cyan-400 decoration-2 underline-offset-4 transition-all duration-300">
              {PERSONAL_INFO.roles[roleIndex]}
            </span>
          </div>

          {/* Bio Description */}
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
            Designing resilient distributed web systems and engineering high-throughput full-stack platforms. Bridging the gap between ultra-snappy React 19 &amp; Next.js frontend experiences and fault-tolerant Express.js, MongoDB &amp; Kubernetes cloud infrastructure.
          </p>

          {/* Hero Action Buttons: 'Hire Me' and 'View Resume' */}
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            {/* 'Hire Me' button */}
            <button
              onClick={onOpenHireMe}
              className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] cursor-pointer"
            >
              <Sparkles className="w-4 h-4 fill-slate-950 transition-transform group-hover:rotate-12" />
              <span>Hire Me</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* 'View Resume' button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700/80 hover:border-cyan-500/40 transition-all duration-300 shadow-md hover:shadow-cyan-500/10 hover:scale-[1.02] cursor-pointer"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>View Resume</span>
            </button>

            {/* Secondary Link to Projects */}
            <a
              href="#projects"
              className="text-xs font-mono text-slate-400 hover:text-cyan-300 px-3 py-2 transition-colors flex items-center gap-1.5"
            >
              <span>Explore Projects</span>
              <span className="text-cyan-400">↓</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto lg:mx-0">
            <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm text-center lg:text-left">
              <div className="text-xl sm:text-2xl font-extrabold text-cyan-400 font-mono">
                {PERSONAL_INFO.yearsExperience}
              </div>
              <div className="text-[11px] text-slate-400 uppercase font-mono tracking-wider mt-0.5">
                Years Experience
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm text-center lg:text-left">
              <div className="text-xl sm:text-2xl font-extrabold text-indigo-400 font-mono">
                {PERSONAL_INFO.completedProjects}
              </div>
              <div className="text-[11px] text-slate-400 uppercase font-mono tracking-wider mt-0.5">
                Systems Delivered
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm text-center lg:text-left">
              <div className="text-xl sm:text-2xl font-extrabold text-emerald-400 font-mono">
                {PERSONAL_INFO.systemUptime}
              </div>
              <div className="text-[11px] text-slate-400 uppercase font-mono tracking-wider mt-0.5">
                Architecture SLA
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm text-center lg:text-left">
              <div className="text-xl sm:text-2xl font-extrabold text-sky-400 font-mono">
                {PERSONAL_INFO.activeUsersHandled}
              </div>
              <div className="text-[11px] text-slate-400 uppercase font-mono tracking-wider mt-0.5">
                Active Users Served
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Profile Image & Floating Architecture Badges */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <div className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96">
            {/* Ambient Backlight Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-sky-400/20 blur-2xl animate-pulse" />

            {/* Architectural Border & Frame */}
            <div className="relative w-full h-full rounded-3xl p-2 bg-gradient-to-b from-cyan-500/30 via-slate-800 to-indigo-500/30 shadow-2xl overflow-hidden border border-cyan-500/20 group">
              <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-slate-950">
                <Image
                  src="/hero-image.jpg"
                  alt={`${PERSONAL_INFO.fullName} - Full Stack Web Developer & Architecture Web Engineer`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                />

                {/* Subtle cyber scanline & gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06090e] via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Live System Indicator inside frame */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 backdrop-blur-md flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-mono text-slate-300">
                      SYS_STATUS: ONLINE
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/30">
                    V3.8_TURBO
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Architectural Badge 1 - Top Left */}
            <div className="absolute -top-3 -left-4 sm:-left-6 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-cyan-500/40 backdrop-blur-md shadow-lg shadow-cyan-950/50 flex items-center gap-2 animate-float">
              <div className="p-1 rounded-md bg-cyan-500/20 text-cyan-300">
                <Code2 className="w-3.5 h-3.5" />
              </div>
              <div className="text-[11px] font-mono text-slate-200 font-semibold">
                React 19 &amp; Next.js 16
              </div>
            </div>

            {/* Floating Architectural Badge 2 - Bottom Right */}
            <div className="absolute -bottom-3 -right-4 sm:-right-6 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-indigo-500/40 backdrop-blur-md shadow-lg shadow-indigo-950/50 flex items-center gap-2 animate-float [animation-delay:1.5s]">
              <div className="p-1 rounded-md bg-indigo-500/20 text-indigo-300">
                <Database className="w-3.5 h-3.5" />
              </div>
              <div className="text-[11px] font-mono text-slate-200 font-semibold">
                Express &amp; MongoDB
              </div>
            </div>

            {/* Floating Architectural Badge 3 - Top Right */}
            <div className="hidden sm:flex absolute top-10 -right-6 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-emerald-500/40 backdrop-blur-md shadow-lg shadow-emerald-950/50 items-center gap-2 animate-float [animation-delay:2.5s]">
              <div className="p-1 rounded-md bg-emerald-500/20 text-emerald-300">
                <Zap className="w-3.5 h-3.5" />
              </div>
              <div className="text-[11px] font-mono text-emerald-300 font-semibold">
                Cloud &amp; K8s
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Down Arrow Indicator */}
      <div className="mt-12 text-center">
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-1 text-slate-500 hover:text-cyan-400 transition-colors"
          aria-label="Scroll down to About Me"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
