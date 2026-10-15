"use client";

import React from "react";
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";
import { BLOG_POSTS, BlogPost } from "@/data/portfolioData";

interface BlogSectionProps {
  onSelectPost: (post: BlogPost) => void;
}

export default function BlogSection({ onSelectPost }: BlogSectionProps) {
  return (
    <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold tracking-widest uppercase">
            <span>{"// 05. TECHNICAL PUBLICATIONS"}</span>
            <span className="w-12 h-px bg-cyan-500/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Architecture Notes &amp; Engineering Articles
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            In-depth write-ups covering system design, full-stack microservices, Next.js optimization, and cloud-native scaling patterns.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                {/* Meta */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-[11px] px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3
                  onClick={() => onSelectPost(post)}
                  className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer leading-snug"
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => onSelectPost(post)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read Technical Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <span className="text-[11px] font-mono text-slate-500">
                  Architecture Review
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
