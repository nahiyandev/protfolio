"use client";

import React, { useState } from "react";
import {
  Layers,
  Globe,
  Server,
  Database,
  Cpu,
  ArrowDown,
  ShieldCheck,
  Zap
} from "lucide-react";

interface ArchLayer {
  id: string;
  step: string;
  name: string;
  technologies: string;
  role: string;
  sla: string;
  details: string;
  failover: string;
  icon: string;
}

const ARCH_LAYERS: ArchLayer[] = [
  {
    id: "edge",
    step: "TIER 01",
    name: "Global Edge & CDN Network",
    technologies: "AWS CloudFront • Route 53 • Edge Middleware",
    role: "Static asset caching, geo-DNS routing, TLS 1.3 termination, and DDoS mitigation.",
    sla: "< 15ms Edge Latency",
    details: "Terminates user requests at the nearest Point of Presence (PoP) across 300+ edge locations worldwide. Handles edge redirect rules, Brotli compression, and bot challenge filtering before hitting compute nodes.",
    failover: "Multi-CDN automated failover with health-check origin routing.",
    icon: "Globe"
  },
  {
    id: "frontend",
    step: "TIER 02",
    name: "Application & Streaming SSR",
    technologies: "Next.js 16 • React 19 • Turbopack • Server Components",
    role: "Streaming Server-Side Rendering (SSR), Incremental Static Regeneration (ISR), and Core Web Vitals optimization.",
    sla: "100/100 Core Web Vitals",
    details: "Renders server components on-demand while streaming UI chunks via React Suspense. Hydrates only interactive client leaves, reducing JavaScript bundle weight shipped over the wire by over 60%.",
    failover: "Stale-While-Revalidate (SWR) cache serving if origin compute experiences temporary disruption.",
    icon: "Cpu"
  },
  {
    id: "gateway",
    step: "TIER 03",
    name: "Ingress API Gateway & Auth Service",
    technologies: "Express.js • Nginx • JWT Asymmetric Signing • Rate Limiter",
    role: "Reverse proxy, token bucket rate-limiting, CORS enforcement, and request authentication.",
    sla: "< 2.5ms Auth Verification",
    details: "Centrally authenticates requests using cryptographically signed asymmetric RSA/ECDSA JWTs. Enforces RBAC permissions, request payload sanitization, and distributed Redis rate-limiting (100 req/sec per IP burst).",
    failover: "Redundant Nginx worker nodes with automatic upstream round-robin health checking.",
    icon: "ShieldCheck"
  },
  {
    id: "services",
    step: "TIER 04",
    name: "Containerized Microservices Fleet",
    technologies: "Docker • Kubernetes (EKS) • BullMQ • Kafka",
    role: "Domain-Driven business logic, asynchronous background queues, and event streams.",
    sla: "Auto-scale in < 30s",
    details: "Isolated containerized pods running specialized business microservices. Workloads communicate asynchronously via Apache Kafka topics, decoupling synchronous user requests from heavy background jobs.",
    failover: "Horizontal Pod Autoscaler (HPA) with automatic pod rescheduling across multiple availability zones.",
    icon: "Server"
  },
  {
    id: "data",
    step: "TIER 05",
    name: "Distributed Persistence & Cache Tier",
    technologies: "MongoDB Replicas • Redis Cluster • PostgreSQL",
    role: "Multi-document ACID transactions, in-memory caching, distributed locks, and durable storage.",
    sla: "99.999% Data Durability",
    details: "Multi-region MongoDB replica sets with automated primary election in under 12 seconds. Paired with a distributed Redis memory cluster delivering sub-millisecond query responses for read-heavy operations.",
    failover: "Continuous multi-AZ data replication with automatic secondary node promotion and point-in-time recovery.",
    icon: "Database"
  }
];

export default function ArchitectureSection() {
  const [selectedLayerId, setSelectedLayerId] = useState<string>("frontend");

  const selectedLayer = ARCH_LAYERS.find((l) => l.id === selectedLayerId) || ARCH_LAYERS[0];

  const getLayerIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return <Globe className="w-5 h-5 text-sky-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-indigo-400" />;
      case "Server":
        return <Server className="w-5 h-5 text-emerald-400" />;
      case "Database":
        return <Database className="w-5 h-5 text-amber-400" />;
      default:
        return <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="architecture" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold tracking-widest uppercase">
            <span>{"// 04. SYSTEM DESIGN & TOPOLOGY"}</span>
            <span className="w-12 h-px bg-cyan-500/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production Web Architecture Blueprint
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            An interactive inspection of how high-scale user requests traverse through my multi-tier architecture—from the global edge down to distributed persistence.
          </p>
        </div>

        {/* Interactive Architecture Flow View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Topology Stack */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2 flex items-center justify-between">
              <span>Select Architecture Tier To Inspect:</span>
              <span className="text-cyan-400 text-[11px]">Click layer</span>
            </div>

            {ARCH_LAYERS.map((layer, index) => {
              const isSelected = selectedLayerId === layer.id;
              return (
                <div key={layer.id} className="relative">
                  <button
                    onClick={() => setSelectedLayerId(layer.id)}
                    className={`w-full p-4 rounded-xl border text-left transition-all duration-300 flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? "bg-cyan-950/40 border-cyan-500/60 shadow-lg shadow-cyan-950/40 translate-x-1"
                        : "bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`p-2.5 rounded-lg ${
                          isSelected ? "bg-cyan-500/20 text-cyan-300" : "bg-slate-800 text-slate-400"
                        }`}
                      >
                        {getLayerIcon(layer.icon)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono text-cyan-400 font-semibold">
                            {layer.step}
                          </span>
                          <h4 className="text-sm font-bold text-white">{layer.name}</h4>
                        </div>
                        <p className="text-xs text-slate-400 font-mono mt-0.5">
                          {layer.technologies}
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-[11px] font-mono font-medium text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20">
                        {layer.sla}
                      </span>
                    </div>
                  </button>

                  {/* Connecting Flow Arrow between tiers */}
                  {index < ARCH_LAYERS.length - 1 && (
                    <div className="flex justify-center my-1 text-slate-700">
                      <ArrowDown className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Blueprint Inspector */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0b101c] border border-cyan-500/30 shadow-2xl space-y-6">
              {/* Header */}
              <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-5">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                    <span>{selectedLayer.step}</span>
                    <span>•</span>
                    <span className="text-emerald-400 font-semibold">{selectedLayer.sla}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {selectedLayer.name}
                  </h3>
                  <div className="text-xs font-mono text-slate-400 mt-1">
                    {selectedLayer.technologies}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  {getLayerIcon(selectedLayer.icon)}
                </div>
              </div>

              {/* Functional Purpose */}
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
                  Primary Functional Role
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {selectedLayer.role}
                </p>
              </div>

              {/* Engineering Implementation */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <h4 className="text-xs font-mono uppercase text-cyan-400 tracking-wider flex items-center gap-1.5 font-bold">
                  <Zap className="w-3.5 h-3.5" /> Implementation Specifics
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedLayer.details}
                </p>
              </div>

              {/* Resiliency & Failover Strategy */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <h4 className="text-xs font-mono uppercase text-indigo-400 tracking-wider flex items-center gap-1.5 font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" /> Failover &amp; Resiliency SLA
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedLayer.failover}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
