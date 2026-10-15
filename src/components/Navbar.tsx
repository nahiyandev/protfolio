"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  FileText,
  GraduationCap,
  Sparkles,
  ChevronRight
} from "lucide-react";
import { NAVIGATION_LINKS } from "@/data/portfolioData";

interface NavbarProps {
  onOpenEducation: () => void;
  onOpenResume: () => void;
  onOpenHireMe: () => void;
}

export default function Navbar({
  onOpenEducation,
  onOpenResume,
  onOpenHireMe,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = NAVIGATION_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-3 sm:px-6 ${
        isScrolled ? "py-2 sm:py-2.5" : "py-3 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="rounded-full bg-[#070b14]/90 border border-slate-800/80 backdrop-blur-xl px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between shadow-2xl shadow-black/60">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative w-10 h-10 rounded-full bg-linear-to-tr from-cyan-500 via-indigo-500 to-rose-500 p-0.5 shadow-md shadow-cyan-500/25 group-hover:shadow-cyan-400/40 group-hover:scale-105 transition-all duration-300 shrink-0">
              <div className="relative w-full h-full bg-[#080d17] rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src="/logo.jpg"
                  alt="Nahiyan Dev Logo"
                  width={40}
                  height={40}
                  priority
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="text-sm sm:text-base font-extrabold tracking-tight text-white font-sans group-hover:text-cyan-200 transition-colors">
                  Nahiyan
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-black font-mono tracking-wider bg-red-950/50 border border-red-500/40 shadow-[0_0_12px_rgba(239,68,68,0.35)] group-hover:border-red-400 group-hover:shadow-[0_0_16px_rgba(239,68,68,0.6)] transition-all">
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 via-rose-400 to-amber-300">
                    DEV
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-400"></span>
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.18em] uppercase font-mono text-slate-400 font-semibold flex items-center gap-1">
                  FULL STACK <span className="text-cyan-400 font-bold">DEVELOPER</span>
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold font-mono tracking-wider text-slate-300">
            <button
              onClick={() => handleNavClick("#about")}
              className="hover:text-cyan-300 transition-colors uppercase cursor-pointer"
            >
              ABOUT
            </button>
            <button
              onClick={() => handleNavClick("#skills")}
              className="hover:text-cyan-300 transition-colors uppercase cursor-pointer"
            >
              STACK
            </button>
            <button
              onClick={onOpenEducation}
              className="hover:text-cyan-300 transition-colors uppercase cursor-pointer"
            >
              EDUCATION
            </button>
            <button
              onClick={() => handleNavClick("#projects")}
              className="hover:text-cyan-300 transition-colors uppercase cursor-pointer"
            >
              PROJECTS
            </button>
            <button
              onClick={() => handleNavClick("#contact")}
              className="px-5 py-1.5 rounded-full border border-cyan-500/70 text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 hover:border-cyan-400 transition-all uppercase cursor-pointer shadow-[0_0_12px_rgba(6,182,212,0.25)]"
            >
              CONTACT
            </button>
          </nav>

          {/* Desktop Action Buttons: RESUME, HIRE ME */}
          <div className="hidden md:flex items-center gap-3">
            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="px-5 py-2 rounded-full bg-[#0a1220] hover:bg-slate-800 border border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-200 hover:text-white transition-all cursor-pointer"
            >
              RESUME
            </button>

            {/* 'Hire Me' Button */}
            <button
              onClick={onOpenHireMe}
              className="px-6 py-2 rounded-full bg-[#00e5ff] hover:bg-[#38bdf8] text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_28px_rgba(0,229,255,0.65)] hover:scale-105 cursor-pointer"
            >
              HIRE ME
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenHireMe}
              className="px-3 py-1 rounded-md bg-cyan-500 text-slate-950 text-xs font-bold uppercase tracking-wider"
            >
              Hire Me
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#080d16]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-4">
          <nav className="flex flex-col space-y-1">
            {NAVIGATION_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-cyan-500/10 text-cyan-300 font-semibold border-l-2 border-cyan-400"
                      : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </button>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEducation();
              }}
              className="flex items-center gap-2 w-full px-3 py-2.5 rounded-lg bg-slate-900 text-slate-200 border border-slate-800 text-xs font-medium"
            >
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>Education & Credentials</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center gap-2 w-full px-3 py-2.5 rounded-lg bg-slate-900 text-slate-200 border border-slate-800 text-xs font-medium"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
              <span>View & Print Resume</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenHireMe();
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-linear-to-r from-cyan-500 to-indigo-600 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-lg shadow-cyan-500/20"
            >
              <Sparkles className="w-4 h-4 fill-slate-950" />
              <span>Hire Me (Get In Touch)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

