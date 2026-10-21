import Image from "next/image";
import { profile } from "@/data/portfolio";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export default function Hero() {
  return (
    <section id="home" className="hero-grid relative overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-teal-500/10 to-transparent" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 md:flex-row md:gap-14">
        <div className="relative flex-none self-center">
{/* colorful ambient glow behind photo */}
<div
  aria-hidden
  className="absolute -inset-8 animate-pulse rounded-[3rem] bg-gradient-to-br from-teal-500/25 via-cyan-500/15 to-fuchsia-500/20 blur-2xl"
/>
{/* rotating rainbow light beam */}
<div
  aria-hidden
  className="absolute -inset-1.5 overflow-hidden rounded-[1.7rem]"
>
  <div
    className="absolute inset-[-120%] animate-spin bg-[conic-gradient(from_0deg,#2dd4bf_0deg,#22d3ee_60deg,#818cf8_130deg,#e879f9_200deg,transparent_260deg,transparent_360deg)]"
    style={{ animationDuration: "5s" }}
  />
</div>
{/* counter-rotating warm accent arc */}
<div
  aria-hidden
  className="absolute -inset-1.5 overflow-hidden rounded-[1.7rem]"
>
  <div
    className="absolute inset-[-120%] animate-spin bg-[conic-gradient(from_180deg,transparent_0deg,transparent_200deg,#fbbf24_260deg,#fb7183_320deg,transparent_360deg)]"
    style={{ animationDuration: "9s", animationDirection: "reverse" }}
  />
</div>

          {/* rotating light beam ring around photo */}
          <div
            aria-hidden
            className="absolute -inset-1.5 overflow-hidden rounded-[1.7rem]"
          >
            <div
              className="absolute inset-[-120%] animate-spin bg-[conic-gradient(from_0deg,#2dd4bf_0deg,#2dd4bf_80deg,transparent_140deg,transparent_360deg)]"
              style={{ animationDuration: "6s" }}
            />
          </div>
          {/* photo */}

          {/* photo - natural height */}
          <div className="relative w-52 overflow-hidden rounded-3xl border border-teal-300/30 shadow-2xl shadow-teal-500/10 sm:w-64">
            <Image
              src="/profile.jpg"
              alt="Md Nayem (Nahiyan Dev)"
              width={512}
              height={640}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>

        <div className="text-center md:text-left">
          <p className="text-sm font-medium uppercase tracking-widest text-teal-400">
            Hello, I&apos;m
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {profile.name}
            <span className="text-teal-400">.</span>
          </h1>
          <p className="mt-3 text-lg font-medium text-slate-300 sm:text-xl">
            {profile.headline}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-slate-400 md:mx-0">
            I build real, working full-stack web applications with Next.js,
            React and TypeScript — from database-backed apps with auth to
            interactive front-ends. {profile.availability}.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="#projects"
              className="rounded-lg bg-teal-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-teal-400"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-teal-400 hover:text-teal-300"
            >
              Contact Me
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-teal-400 hover:text-teal-300"
            >
              <DownloadIcon />
              CV
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4 md:justify-start">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-400 transition-colors hover:text-teal-300"
            >
              <GitHubIcon />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 transition-colors hover:text-teal-300"
            >
              <LinkedInIcon />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-slate-400 transition-colors hover:text-teal-300"
            >
              <MailIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
