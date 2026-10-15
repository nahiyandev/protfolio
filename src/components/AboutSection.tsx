"use client";

import React from "react";
import {
  ShieldAlert,
  Zap,
  Maximize2,
  Lock,
  CheckCircle2,
  Cpu,
  Layers,
  GraduationCap,
  FileText,
  Workflow
} from "lucide-react";
import { PERSONAL_INFO, ARCHITECTURE_PILLARS } from "@/data/portfolioData";

interface AboutSectionProps {
  onOpenEducation: () => void;
  onOpenResume: () => void;
}

export default function AboutSection({ onOpenEducation, onOpenResume }: AboutSectionProps) {
  const getPillarIcon = (icon: string) => {
    switch (icon) {
      case "ShieldAlert":
        return <ShieldAlert className="w-5 h-5 text-cyan-400" />;
      case "Zap":
        return <Zap className="w-5 h-5 text-amber-400" />;
      case "Maximize2":
        return <Maximize2 className="w-5 h-5 text-indigo-400" />;
      case "Lock":
        return <Lock className="w-5 h-5 text-emerald-400" />;
      default:
        return <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold tracking-widest uppercase">
            <span>{"// 01. ABOUT ME"}</span>
            <span className="w-12 h-px bg-cyan-500/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering High-Throughput Digital Ecosystems
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            A comprehensive summary of technical expertise, architecture philosophy, and full-stack engineering standards.
          </p>
        </div>

        {/* Main Expertise Summary Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: In-depth Summary of Expertise */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <Cpu className="w-5 h-5 text-cyan-400" />
                The Full-Stack &amp; Architecture Synthesis
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                I am a <strong className="text-white">Full Stack Web Developer and Architecture Web Engineer</strong> with over {PERSONAL_INFO.yearsExperience} of industry experience architecting distributed web platforms, high-throughput backend APIs, and modern frontend applications.
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                Most web applications suffer from a structural disconnect: frontends that render slowly due to heavy client bundles, or backends that crumble when traffic surges during marketing campaigns or peak usage hours. My core mission is to bridge this divide through <strong className="text-cyan-300">architectural synergy</strong>.
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                On the frontend, I specialize in <strong className="text-white">Next.js 16 and React 19</strong>, leveraging Server Components (RSC), Incremental Static Regeneration (ISR), and Edge Middleware to deliver 100/100 Core Web Vitals. On the backend, I design decoupled microservices and API gateways using <strong className="text-white">Express.js, Node.js, and MongoDB</strong>, supercharged by Redis caching, Kafka event streaming, and automated Kubernetes orchestration.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Domain-Driven Design (DDD) &amp; Clean Architecture</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sub-20ms P99 Distributed API Latency</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero-Downtime Blue/Green Rolling Deployments</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>End-to-End TypeScript Type Invariant Safety</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3 border-t border-slate-800/80">
                <button
                  onClick={onOpenEducation}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors"
                >
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  <span>View Education &amp; Certifications</span>
                </button>
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors"
                >
                  <FileText className="w-4 h-4 text-indigo-400" />
                  <span>Inspect Full Career CV</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Engineering Lifecycle & Architecture Blueprinting */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800/80 backdrop-blur-md space-y-4">
              <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
                <Workflow className="w-4 h-4" /> The 4-Stage Architectural Workflow
              </h4>

              <div className="space-y-3.5">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-xs font-mono text-cyan-400 font-bold mb-1">
                    01 // DOMAIN &amp; CONTRACT SPECIFICATION
                  </div>
                  <p className="text-xs text-slate-300">
                    Establishing strict TypeScript schemas, API contracts, domain boundaries, and data access patterns before writing production code.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-xs font-mono text-indigo-400 font-bold mb-1">
                    02 // REACT 19 &amp; NEXT.JS FRONTEND ARCHITECTURE
                  </div>
                  <p className="text-xs text-slate-300">
                    Constructing component hierarchies, optimizing streaming SSR, offloading heavy computations to Web Workers, and minimizing hydration cost.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-xs font-mono text-emerald-400 font-bold mb-1">
                    03 // EXPRESS.JS &amp; MONGODB BACKEND CORE
                  </div>
                  <p className="text-xs text-slate-300">
                    Developing high-throughput RESTful endpoints, aggregation pipelines, multi-layer Redis caching, and resilient error recovery mechanisms.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-xs font-mono text-sky-400 font-bold mb-1">
                    04 // DOCKER, K8S &amp; DEVOPS AUTOMATION
                  </div>
                  <p className="text-xs text-slate-300">
                    Multi-stage container builds, automated CI/CD GitHub Actions pipelines, Kubernetes ingress routing, and Prometheus APM monitoring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Architecture Pillars */}
        <div>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white">The Four Pillars of System Architecture</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Guiding design principles applied to every production software platform I build
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ARCHITECTURE_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/30 transition-all hover:-translate-y-1 group"
              >
                <div className="p-2.5 rounded-lg bg-slate-800/80 w-fit mb-3 group-hover:scale-110 transition-transform">
                  {getPillarIcon(pillar.icon)}
                </div>
                <h4 className="text-base font-bold text-white mb-2">{pillar.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
