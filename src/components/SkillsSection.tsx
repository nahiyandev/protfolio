"use client";

import React, { useState } from "react";
import { SKILLS_DATA, SkillItem } from "@/data/portfolioData";
import {
  Html5Logo,
  Css3Logo,
  JavaScriptLogo,
  TypeScriptLogo,
  ReactLogo,
  NextjsLogo,
  ReactRouterLogo,
  TailwindLogo,
  ExpressLogo,
  MongoDbLogo,
  NodejsLogo,
  PostgresLogo,
  RedisLogo,
  KafkaLogo,
  DockerLogo,
  KubernetesLogo,
  AwsLogo,
  GitLogo,
  NginxLogo,
  PrometheusLogo,
} from "@/components/TechIcons";

type CategoryTab = "ALL" | "FRONTEND" | "BACKEND & SERVICES" | "DEVOPS & TOOLS";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<CategoryTab>("ALL");
  const [activeSkillName, setActiveSkillName] = useState<string>("CSS3");

  const tabs: CategoryTab[] = [
    "ALL",
    "FRONTEND",
    "BACKEND & SERVICES",
    "DEVOPS & TOOLS",
  ];

  const filteredSkills =
    activeTab === "ALL"
      ? SKILLS_DATA
      : SKILLS_DATA.filter((skill) => skill.category.toUpperCase() === activeTab);

  const renderSkillLogo = (iconType: string) => {
    switch (iconType) {
      case "html5":
        return <Html5Logo className="w-8 h-8" />;
      case "css3":
        return <Css3Logo className="w-8 h-8" />;
      case "javascript":
        return <JavaScriptLogo className="w-8 h-8" />;
      case "typescript":
        return <TypeScriptLogo className="w-8 h-8" />;
      case "react":
        return <ReactLogo className="w-8 h-8" />;
      case "nextjs":
        return <NextjsLogo className="w-8 h-8" />;
      case "react-router":
        return <ReactRouterLogo className="w-8 h-8" />;
      case "tailwind":
        return <TailwindLogo className="w-8 h-8" />;
      case "express":
        return <ExpressLogo className="w-8 h-8" />;
      case "mongodb":
        return <MongoDbLogo className="w-8 h-8" />;
      case "nodejs":
        return <NodejsLogo className="w-8 h-8" />;
      case "postgres":
        return <PostgresLogo className="w-8 h-8" />;
      case "redis":
        return <RedisLogo className="w-8 h-8" />;
      case "kafka":
        return <KafkaLogo className="w-8 h-8" />;
      case "docker":
        return <DockerLogo className="w-8 h-8" />;
      case "kubernetes":
        return <KubernetesLogo className="w-8 h-8" />;
      case "aws":
        return <AwsLogo className="w-8 h-8" />;
      case "git":
        return <GitLogo className="w-8 h-8" />;
      case "nginx":
        return <NginxLogo className="w-8 h-8" />;
      case "prometheus":
        return <PrometheusLogo className="w-8 h-8" />;
      default:
        return <ReactLogo className="w-8 h-8" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#06090e]">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="space-y-3">
          {/* Capsule Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a101d] border border-cyan-500/30 text-[10px] sm:text-[11px] font-mono tracking-widest text-cyan-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            <span>CORE CAPABILITIES</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-sans">
            TECHNICAL{" "}
            <span className="bg-linear-to-r from-cyan-400 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">
              MATRIX
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
            Architecting high-performance digital solutions with modern stacks, resilient backends, and precision engineering.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center gap-2.5">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#0c182b] text-cyan-300 border border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.35)]"
                    : "bg-[#0b101d] text-slate-400 border border-slate-800/80 hover:text-white hover:border-slate-700"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid - 4 Columns matching screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredSkills.map((skill: SkillItem) => {
            const isHighlighted = activeSkillName === skill.name;

            return (
              <div
                key={skill.name}
                onClick={() => setActiveSkillName(skill.name)}
                className={`relative p-6 sm:p-7 rounded-[22px] transition-all duration-300 group flex flex-col items-center justify-between min-h-56.25 overflow-hidden cursor-pointer ${
                  isHighlighted
                    ? "bg-[#090e1a]/95 border border-cyan-400/90 shadow-[0_0_30px_-5px_rgba(6,182,212,0.35)]"
                    : "bg-[#090e1a]/90 border border-slate-800/80 hover:border-cyan-400/80 hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.3)]"
                }`}
              >
                {/* Corner Reticle Bracket in Top Right */}
                <div
                  className={`absolute top-3.5 right-3.5 w-3 h-3 border-t-2 border-r-2 transition-colors pointer-events-none ${
                    isHighlighted
                      ? "border-cyan-400"
                      : "border-slate-700/60 group-hover:border-cyan-400"
                  }`}
                />

                {/* Top accent highlight bar on active or hover */}
                <div
                  className={`absolute top-0 left-8 right-8 h-0.5 bg-linear-to-r from-transparent via-cyan-400 to-transparent transition-opacity duration-300 pointer-events-none ${
                    isHighlighted ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                />

                {/* Center Content */}
                <div className="w-full flex flex-col items-center text-center">
                  {/* Centered Squircle Icon Box */}
                  <div className="w-16 h-16 rounded-2xl bg-[#0f172a]/90 border border-slate-800/90 flex items-center justify-center mx-auto mb-4 group-hover:border-cyan-500/30 group-hover:scale-105 transition-all shadow-inner">
                    {renderSkillLogo(skill.iconType)}
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-base sm:text-lg font-black tracking-wider uppercase transition-colors font-mono ${
                      isHighlighted
                        ? "text-cyan-400"
                        : "text-white group-hover:text-cyan-400"
                    }`}
                  >
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-400 text-center leading-relaxed mt-2.5 max-w-52.5 mx-auto font-sans">
                    {skill.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
