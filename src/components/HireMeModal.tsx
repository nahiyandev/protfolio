"use client";

import React, { useState, useEffect } from "react";
import { X, Send, CheckCircle2, Sparkles, Clock, ShieldCheck, Mail, ArrowRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HireMeModal({ isOpen, onClose }: HireMeModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "Full-Time Senior/Staff Role",
    timeline: "Immediate / Within 1 Month",
    budget: "$15,000 - $35,000+",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      serviceType: "Full-Time Senior/Staff Role",
      timeline: "Immediate / Within 1 Month",
      budget: "$15,000 - $35,000+",
      message: "",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#0c121e] border border-cyan-500/30 rounded-2xl shadow-2xl z-10 overflow-hidden max-h-[92vh] flex flex-col my-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-900/80 sticky top-0 z-20 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                Hire Nahiyan
                <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                  Available Now
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Full-Time Engineering Roles • System Architecture Audits • Full-Stack Development
              </p>
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
        <div className="p-6 overflow-y-auto custom-scrollbar">
          {isSubmitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Inquiry Received Successfully!</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-cyan-400 font-semibold">{formData.name}</span>. I have received your request regarding{" "}
                <span className="text-cyan-300 font-mono text-xs">{formData.serviceType}</span>. I will review your requirements and respond within{" "}
                <span className="text-emerald-400 font-medium">12-24 hours</span>.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors"
                >
                  Done
                </button>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" /> Direct Email
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700/80 focus:border-cyan-500 focus:outline-none text-white text-xs placeholder:text-slate-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Your Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. sarah@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700/80 focus:border-cyan-500 focus:outline-none text-white text-xs placeholder:text-slate-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                  Opportunity or Project Type *
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700/80 focus:border-cyan-500 focus:outline-none text-white text-xs transition-colors cursor-pointer"
                >
                  <option value="Full-Time Senior/Staff Role">Full-Time Senior / Staff Web Engineer</option>
                  <option value="Architecture Consultation & Audit">System Architecture Consultation & Scalability Audit</option>
                  <option value="Full Stack Web Application MVP">Full-Stack Web MVP (Next.js, Express, MongoDB)</option>
                  <option value="Cloud Migration & Kubernetes Setup">Cloud Native Migration & Kubernetes Infrastructure</option>
                  <option value="Performance & Core Web Vitals Optimization">Performance & Core Web Vitals Optimization</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Expected Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700/80 focus:border-cyan-500 focus:outline-none text-white text-xs transition-colors cursor-pointer"
                  >
                    <option value="Immediate / Within 1 Month">Immediate / Within 1 Month</option>
                    <option value="Next Quarter (1-3 Months)">Next Quarter (1-3 Months)</option>
                    <option value="Exploratory / Future Pipeline">Exploratory / Flexible</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Budget / Compensation Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700/80 focus:border-cyan-500 focus:outline-none text-white text-xs transition-colors cursor-pointer"
                  >
                    <option value="$15,000 - $35,000+">$15,000 - $35,000+</option>
                    <option value="$35,000 - $75,000+">$35,000 - $75,000+</option>
                    <option value="$75,000+ / Enterprise">$75,000+ / Enterprise Project</option>
                    <option value="Full-Time Market Comp ($160k-$220k+)">Full-Time Market Compensation ($160k - $220k+)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                  Project Brief or Role Objectives *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your product, tech stack, scalability bottlenecks, or role expectations..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700/80 focus:border-cyan-500 focus:outline-none text-white text-xs placeholder:text-slate-500 transition-colors resize-none"
                />
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <div className="p-2.5 rounded-lg bg-slate-900/50 border border-slate-800 flex items-center gap-2 text-[11px] text-slate-300">
                  <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>&lt; 24h Response Time Guaranteed</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/50 border border-slate-800 flex items-center gap-2 text-[11px] text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Strict NDA & Code Confidentiality</span>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Collaboration Inquiry</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
