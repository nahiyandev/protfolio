"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  X,
  Printer,
  Download,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle,
  Code
} from "lucide-react";
import {
  PERSONAL_INFO,
  EXPERIENCE_DATA,
  EDUCATION_DATA,
  CERTIFICATIONS_DATA,
} from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

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

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const resumeText = `
${PERSONAL_INFO.fullName} - ${PERSONAL_INFO.title}
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}

============================================================
EXECUTIVE SUMMARY
============================================================
${PERSONAL_INFO.bio}
Over ${PERSONAL_INFO.yearsExperience} of engineering high-throughput, fault-tolerant web architectures and scalable full-stack applications. Proven track record of delivering 45+ production systems with 99.99% SLA reliability.

============================================================
CORE TECHNICAL SKILLS
============================================================
Frontend: React 19, Next.js (App Router), TypeScript, Tailwind CSS, State Architecture (Zustand/Redux), WebSockets, Web Vitals
Backend: Express.js, MongoDB, Node.js Runtime, PostgreSQL, Redis Caching, Kafka, Microservices
DevOps & Cloud: Docker, Kubernetes (K8s), AWS (ECS, Lambda, S3, CloudFront), CI/CD, Nginx, Prometheus/Grafana

============================================================
PROFESSIONAL EXPERIENCE
============================================================
${EXPERIENCE_DATA.map(
  (exp) => `
${exp.role} | ${exp.company}
${exp.period} | ${exp.location}
${exp.description}
Key Accomplishments:
${exp.achievements.map((a) => `• ${a}`).join("\n")}
Tech Stack: ${exp.stack.join(", ")}
`
).join("\n")}

============================================================
EDUCATION & CERTIFICATIONS
============================================================
${EDUCATION_DATA.map(
  (edu) => `
${edu.degree}
${edu.institution} (${edu.period})
${edu.grade}
`
).join("\n")}

Certifications:
${CERTIFICATIONS_DATA.map((c) => `• ${c.title} - ${c.issuer} (${c.credentialId})`).join("\n")}
    `.trim();

    const blob = new Blob([resumeText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Nahiyan_Khan_Senior_FullStack_Architecture_Engineer_CV.txt`;
    link.click();
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#0b101b] border border-cyan-500/30 rounded-2xl shadow-2xl z-10 overflow-hidden max-h-[92vh] flex flex-col my-auto">
        {/* Sticky Actions Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <h2 className="text-base sm:text-lg font-bold text-white font-mono tracking-tight">
              CURRICULUM VITAE • {PERSONAL_INFO.name.toUpperCase()}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/80 hover:bg-cyan-900/80 text-cyan-300 border border-cyan-500/40 text-xs font-medium transition-all"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              onClick={handleDownloadText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-medium transition-all"
              title="Download text CV"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">
                {downloadSuccess ? "Downloaded!" : "Download Raw"}
              </span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors ml-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div
          id="printable-cv"
          className="p-6 sm:p-10 space-y-8 overflow-y-auto custom-scrollbar bg-[#0d1322] text-slate-200"
        >
          {/* Resume Header */}
          <div className="border-b border-slate-800 pb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-indigo-600 p-0.5 shadow-lg shadow-cyan-500/20 shrink-0">
                  <div className="relative w-full h-full bg-[#080d17] rounded-[14px] overflow-hidden flex items-center justify-center">
                    <Image
                      src="/logo.jpg"
                      alt={`${PERSONAL_INFO.name} Logo`}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {PERSONAL_INFO.fullName}
                  </h1>
                  <p className="text-sm sm:text-base font-semibold text-cyan-400 mt-0.5">
                    {PERSONAL_INFO.title}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5 max-w-xl">
                    Distributed Web Platforms • React 19 & Next.js Core • Express.js & MongoDB • Kubernetes & Cloud
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-1 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h3 className="text-xs uppercase font-mono tracking-widest text-cyan-400 font-bold mb-2">
              01 // Executive Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Senior Full Stack Web Developer and Web Architecture Engineer with over 6 years of hands-on expertise building mission-critical distributed web platforms, high-throughput backend APIs, and blazing-fast user interfaces. Specialized in designing microservice architectures utilizing Next.js, Express.js, MongoDB, Redis, and Kubernetes that reliably process millions of daily requests while maintaining 99.99% uptime.
            </p>
          </div>

          {/* Technical Competencies Matrix */}
          <div>
            <h3 className="text-xs uppercase font-mono tracking-widest text-cyan-400 font-bold mb-3">
              02 // Core Architectural Competencies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <div className="text-xs font-bold text-white mb-1.5 flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5 text-cyan-400" /> Frontend Mastery
                </div>
                <p className="text-[11px] text-slate-300 leading-normal">
                  React 19, Next.js 16 (App Router, Server Actions, RSC), TypeScript, Tailwind CSS, Zustand, Redux Toolkit, WebSockets, Web Workers.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <div className="text-xs font-bold text-white mb-1.5 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-indigo-400" /> Backend & Database
                </div>
                <p className="text-[11px] text-slate-300 leading-normal">
                  Express.js, MongoDB (Aggregation Pipelines, Sharding), Node.js Runtime, Redis (Distributed Lock, Caching), PostgreSQL, Kafka, GraphQL.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <div className="text-xs font-bold text-white mb-1.5 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-emerald-400" /> DevOps & Cloud
                </div>
                <p className="text-[11px] text-slate-300 leading-normal">
                  Docker, Kubernetes (K8s), AWS (ECS, Lambda, S3, CloudFront), GitHub Actions CI/CD, Nginx, Prometheus, Grafana, Terraform.
                </p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xs uppercase font-mono tracking-widest text-cyan-400 font-bold mb-4">
              03 // Professional Experience
            </h3>
            <div className="space-y-6">
              {EXPERIENCE_DATA.map((exp) => (
                <div key={exp.id} className="border-l-2 border-slate-800 pl-4 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-sm font-bold text-white">{exp.role}</h4>
                    <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/20 w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-slate-300">
                    {exp.company} • <span className="text-slate-400 font-normal">{exp.location}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{exp.description}</p>
                  <ul className="space-y-1 pt-1">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3 h-3 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1 pt-1.5">
                    {exp.stack.map((t, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div>
              <h3 className="text-xs uppercase font-mono tracking-widest text-cyan-400 font-bold mb-3 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" /> 04 // Education
              </h3>
              <div className="space-y-3">
                {EDUCATION_DATA.map((edu) => (
                  <div key={edu.id} className="p-3 rounded-lg bg-slate-900/40 border border-slate-800">
                    <div className="text-xs font-bold text-white">{edu.degree}</div>
                    <div className="text-xs text-slate-300">{edu.institution}</div>
                    <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                      {edu.period} • <span className="text-emerald-400">{edu.grade}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase font-mono tracking-widest text-indigo-400 font-bold mb-3 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" /> 05 // Certifications
              </h3>
              <div className="space-y-2">
                {CERTIFICATIONS_DATA.map((cert) => (
                  <div key={cert.id} className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-white">{cert.title}</div>
                      <div className="text-[11px] text-slate-400">{cert.issuer}</div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-500/30">
                      {cert.badgeText}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between">
          <p className="text-xs text-slate-400 hidden sm:block">
            References and full architectural blueprints available upon request.
          </p>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors ml-auto"
          >
            Close Resume
          </button>
        </div>
      </div>
    </div>
  );
}
