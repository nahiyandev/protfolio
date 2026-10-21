import { projects } from "@/data/portfolio";
import { ExternalLinkIcon, GitHubIcon } from "./icons";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-slate-800/60">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-teal-400">
          Projects
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
          Things I&apos;ve built
        </h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          Real projects with live deployments and public source code — every
          one of them built and shipped by me.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className={`flex flex-col rounded-2xl border bg-slate-900/60 p-6 transition-colors ${
                project.featured
                  ? "border-teal-500/40 shadow-lg shadow-teal-500/5"
                  : "border-slate-800 hover:border-slate-700"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-teal-300">
                    {project.tagline}
                  </p>
                </div>
                {project.featured && (
                  <span className="shrink-0 rounded-full bg-teal-500/15 px-3 py-1 text-xs font-semibold text-teal-300">
                    Featured
                  </span>
                )}
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-slate-800 px-2.5 py-1 text-xs text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-4 border-t border-slate-800 pt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-teal-300"
                >
                  <GitHubIcon className="h-4 w-4" />
                  Source Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-teal-300 transition-colors hover:text-teal-200"
                  >
                    <ExternalLinkIcon />
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
