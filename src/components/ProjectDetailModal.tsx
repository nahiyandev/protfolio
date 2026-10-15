"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, CheckCircle2, Cpu, Layers } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { Project } from "@/data/portfolioData";

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
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

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#0c121e] border border-cyan-500/30 rounded-2xl shadow-2xl z-10 overflow-hidden max-h-[92vh] flex flex-col my-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-900/80 sticky top-0 z-20 backdrop-blur-md">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                {project.category}
              </span>
              <span className="text-[10px] font-mono text-emerald-400">
                ● Production Deployed
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 overflow-y-auto custom-scrollbar">
          <p className="text-sm text-cyan-300/90 font-medium leading-snug">
            {project.tagline}
          </p>

          {/* Key Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
            {project.metrics.map((m, i) => (
              <div key={i} className="text-center">
                <div className="text-xs text-slate-400 font-mono mb-0.5">{m.label}</div>
                <div className="text-base sm:text-lg font-bold text-cyan-400 font-mono">{m.value}</div>
              </div>
            ))}
          </div>

          {/* Full Overview */}
          <div>
            <h3 className="text-xs uppercase font-mono tracking-wider font-semibold text-white mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" /> System Architecture & Engineering Scope
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.fullOverview}
            </p>
          </div>

          {/* Architectural Blueprints */}
          <div>
            <h3 className="text-xs uppercase font-mono tracking-wider font-semibold text-white mb-2.5 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-indigo-400" /> Key Architectural Highlights
            </h3>
            <div className="space-y-2">
              {project.architectureDetails.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/80 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs uppercase font-mono tracking-wider font-semibold text-slate-400 mb-2">
              Applied Technologies
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md bg-slate-900 border border-cyan-500/20 text-cyan-300 font-mono text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demonstration</span>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs transition-colors border border-slate-700"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source Repository</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
