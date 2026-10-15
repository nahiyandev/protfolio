"use client";

import React, { useEffect } from "react";
import { X, Calendar, Clock } from "lucide-react";
import { BlogPost } from "@/data/portfolioData";

interface BlogModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function BlogModal({ post, isOpen, onClose }: BlogModalProps) {
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

  if (!isOpen || !post) return null;

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
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{post.readTime}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto custom-scrollbar">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>Published on {post.date}</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
              {post.title}
            </h1>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-xs sm:text-sm text-slate-300 italic border-l-4 border-l-cyan-400">
            {post.excerpt}
          </div>

          {/* Formatted Markdown Body */}
          <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            {post.content.split("\n\n").map((block, idx) => {
              if (block.startsWith("### ")) {
                return (
                  <h3 key={idx} className="text-base sm:text-lg font-bold text-white pt-3 pb-1 border-b border-slate-800/80">
                    {block.replace("### ", "")}
                  </h3>
                );
              }
              if (block.startsWith("- ")) {
                const items = block.split("\n- ");
                return (
                  <ul key={idx} className="space-y-1.5 pl-4 list-disc marker:text-cyan-400">
                    {items.map((it, i) => (
                      <li key={i}>{it.replace(/^- /, "")}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={idx}>{block}</p>;
            })}
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-1.5">
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/80 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Written by Nahiyan Khan • Senior Architecture Web Engineer
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            Close Article
          </button>
        </div>
      </div>
    </div>
  );
}
