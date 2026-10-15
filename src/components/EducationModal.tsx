"use client";

import React, { useEffect } from "react";
import { X, GraduationCap, Award, Calendar, CheckCircle2, Building, Sparkles } from "lucide-react";
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from "@/data/portfolioData";

interface EducationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EducationModal({ isOpen, onClose }: EducationModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#0c121e]/95 border border-cyan-500/20 rounded-2xl shadow-2xl shadow-cyan-950/50 z-10 overflow-hidden max-h-[90vh] flex flex-col my-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/60 sticky top-0 z-20 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                Education & Credentials
                <span className="text-xs font-mono font-medium px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                  Verified
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Academic foundation in computer science and professional cloud certifications
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/80 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 space-y-8 overflow-y-auto custom-scrollbar">
          {/* Section: Academic Degrees */}
          <div>
            <h3 className="text-sm uppercase tracking-wider font-semibold text-cyan-400 flex items-center gap-2 mb-4">
              <Building className="w-4 h-4" /> Academic Degrees
            </h3>
            <div className="space-y-4">
              {EDUCATION_DATA.map((edu) => (
                <div
                  key={edu.id}
                  className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/30 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-300 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-500/20 w-fit">
                      <Calendar className="w-3.5 h-3.5" /> {edu.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-300 mb-1">{edu.institution}</p>
                  <p className="text-xs font-mono text-emerald-400 mb-3">{edu.grade}</p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                    {edu.description}
                  </p>

                  <div className="space-y-2">
                    <div className="text-xs font-semibold uppercase text-slate-400 tracking-wider">
                      Key Highlights & Accomplishments:
                    </div>
                    {edu.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Professional Certifications */}
          <div>
            <h3 className="text-sm uppercase tracking-wider font-semibold text-indigo-400 flex items-center gap-2 mb-4">
              <Award className="w-4 h-4" /> Professional Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div
                  key={cert.id}
                  className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-indigo-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="text-base font-semibold text-white leading-snug">
                        {cert.title}
                      </h4>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-950/80 text-indigo-300 border border-indigo-500/30 shrink-0">
                        {cert.badgeText}
                      </span>
                    </div>
                    <p className="text-xs text-indigo-300/90 font-medium mb-1">{cert.issuer}</p>
                    <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400 mb-3">
                      <span>{cert.issueDate}</span>
                      <span>•</span>
                      <span className="text-slate-500">{cert.credentialId}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800/60">
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Engineering Continuous Learning */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/30 to-indigo-950/30 border border-cyan-500/20 flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />
            <p className="text-xs text-slate-300">
              Continuously engaged in advanced research on distributed systems, Linux kernel eBPF observability, and WebAssembly (WASM) microservices runtimes.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/60 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
