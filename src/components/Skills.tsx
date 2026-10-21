"use client";

/* eslint-disable @next/next/no-img-element */

import { useState, type CSSProperties } from "react";

type Skill = {
  name: string;
  desc: string;
  initials: string;
  color: string;
  icon?: string;
  iconColor?: string;
};

type Category = { title: string; accent: string; skills: Skill[] };

const categories: Category[] = [
  {
    title: "Languages",
    accent: "#3178C6",
    skills: [
      { name: "TypeScript", desc: "Type-safe JavaScript for scalable apps", initials: "TS", color: "#3178C6", icon: "typescript", iconColor: "3178C6" },
      { name: "JavaScript (ES6)", desc: "Modern ES6+ for dynamic web apps", initials: "JS", color: "#F7DF1E", icon: "javascript", iconColor: "F7DF1E" },
      { name: "HTML5", desc: "Semantic markup for accessible pages", initials: "H5", color: "#E34F26", icon: "html5", iconColor: "E34F26" },
      { name: "CSS3", desc: "Responsive styling and animations", initials: "C3", color: "#1572B6", icon: "css", iconColor: "1572B6" },
      { name: "Types", desc: "Strict type definitions for safer code", initials: "Ty", color: "#3178C6" },
      { name: "Interfaces", desc: "Contracts for clean object shapes", initials: "In", color: "#3178C6" },
      { name: "Generics", desc: "Reusable, type-safe components", initials: "Ge", color: "#3178C6" },
      { name: "OOP", desc: "Structured code with classes & objects", initials: "OOP", color: "#8b5cf6" },
    ],
  },
  {
    title: "Frontend",
    accent: "#61DAFB",
    skills: [
      { name: "React", desc: "Interactive UI with components & hooks", initials: "Re", color: "#61DAFB", icon: "react", iconColor: "61DAFB" },
      { name: "Next.js", desc: "Modern, SEO-friendly, production-ready web apps", initials: "N", color: "#e2e8f0", icon: "nextdotjs", iconColor: "white" },
      { name: "Tailwind CSS", desc: "Utility-first styling, fast & responsive", initials: "Tw", color: "#38BDF8", icon: "tailwindcss", iconColor: "38BDF8" },
      { name: "Routing", desc: "Dynamic pages & nested layouts", initials: "Rt", color: "#e2e8f0" },
      { name: "SSR & SSG", desc: "Fast rendering with better SEO", initials: "SSR", color: "#e2e8f0" },
      { name: "API Routes", desc: "Backend endpoints inside Next.js", initials: "API", color: "#e2e8f0" },
    ],
  },
  {
    title: "Backend",
    accent: "#47A248",
    skills: [
      { name: "Node.js", desc: "JavaScript runtime for servers", initials: "No", color: "#339933", icon: "nodedotjs", iconColor: "339933" },
      { name: "Express.js", desc: "Lightweight REST API framework", initials: "Ex", color: "#a3a3a3", icon: "express", iconColor: "white" },
      { name: "MongoDB", desc: "Flexible NoSQL document database", initials: "Mg", color: "#47A248", icon: "mongodb", iconColor: "47A248" },
      { name: "REST API", desc: "Clean JSON APIs for frontends", initials: "REST", color: "#339933" },
      { name: "MongoDB CRUD", desc: "Create, read, update, delete ops", initials: "CRUD", color: "#47A248" },
    ],
  },
  {
    title: "Auth & Security",
    accent: "#fbbf24",
    skills: [
      { name: "Credentials Auth", desc: "Email & password sign-in flows", initials: "CA", color: "#fbbf24" },
      { name: "OAuth", desc: "Google & GitHub social login", initials: "OA", color: "#fbbf24" },
      { name: "JWT Security", desc: "Token-based session security", initials: "JWT", color: "#fbbf24" },
      { name: "Route Protection", desc: "Guarded pages for logged-in users", initials: "RP", color: "#fbbf24" },
      { name: "Email Verification", desc: "Verify users via email links", initials: "EV", color: "#fbbf24" },
    ],
  },
  {
    title: "Dev Tools",
    accent: "#2dd4bf",
    skills: [
      { name: "Git", desc: "Version control for every project", initials: "Gi", color: "#F05032", icon: "git", iconColor: "F05032" },
      { name: "GitHub", desc: "Code hosting & collaboration", initials: "Gh", color: "#e2e8f0", icon: "github", iconColor: "white" },
      { name: "Vercel", desc: "One-click deploys, global CDN", initials: "V", color: "#e2e8f0", icon: "vercel", iconColor: "white" },
      { name: "Deployment", desc: "Ship production builds live", initials: "Dep", color: "#2dd4bf" },
    ],
  },
  {
    title: "AI Tools",
    accent: "#e879f9",
    skills: [
      { name: "Claude Code", desc: "AI pair programming in terminal", initials: "CC", color: "#e879f9" },
      { name: "Cursor AI", desc: "AI-powered code editor", initials: "Cu", color: "#a78bfa" },
      { name: "Muse AI", desc: "AI assistant for coding & writing", initials: "Mu", color: "#e879f9" },
      { name: "Bolt", desc: "Prompt-to-app builder", initials: "Bo", color: "#a78bfa" },
      { name: "V0", desc: "AI-generated UI components", initials: "V0", color: "#e879f9" },
      { name: "AI Code Review", desc: "Catch bugs before merging", initials: "AI", color: "#a78bfa" },
    ],
  },
];

function SkillBadge({ skill }: { skill: Skill }) {
  const [failed, setFailed] = useState(false);
  return (
    <div
      className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-110"
      style={{
        backgroundColor: `${skill.color}14`,
        borderColor: `${skill.color}45`,
      }}
    >
      {skill.icon && !failed ? (
        <img
  src={`https://cdn.simpleicons.org/${skill.icon}/${skill.iconColor ?? "white"}`}
  alt={skill.name}
  loading="lazy"
  className="h-8 w-8"
  onError={() => setFailed(true)}
/>

      ) : (
        <span className="text-sm font-extrabold" style={{ color: skill.color }}>
          {skill.initials}
        </span>
      )}
    </div>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div
      style={{ "--c": skill.color } as CSSProperties}
      className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--c)] hover:shadow-[0_10px_35px_-8px_var(--c)]"
    >
      <SkillBadge skill={skill} />
      <p className="mt-3 text-sm font-semibold text-white">{skill.name}</p>
      <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{skill.desc}</p>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="text-sm font-medium uppercase tracking-widest text-teal-400">
          Skills
        </p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          What I work with
        </h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          The technologies I actually use in my projects — nothing listed that I
          haven&apos;t built with.
        </p>

        {categories.map((cat) => (
          <div key={cat.title} className="mt-12 first:mt-10">
            <div className="flex items-center gap-3">
              <span
                className="h-7 w-1.5 rounded-full"
                style={{ backgroundColor: cat.accent }}
              />
              <h3 className="text-xl font-bold text-white">{cat.title}</h3>
              <span className="rounded-full border border-slate-700 px-2.5 py-0.5 text-xs font-medium text-slate-400">
                {cat.skills.length}
              </span>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {cat.skills.map((s) => (
                <SkillCard key={s.name} skill={s} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
