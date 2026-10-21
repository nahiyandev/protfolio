import Image from "next/image";
import { projects, type Project } from "@/data/portfolio";
import { ExternalLinkIcon, GitHubIcon } from "./icons";

function ProjectImage({ project, featured }: { project: Project; featured?: boolean }) {
  if (!project.image) return null;
  const img = (
    <div
      className={`relative overflow-hidden bg-slate-800 ${
        featured ? "aspect-video md:aspect-auto md:h-full" : "aspect-video"
      }`}
    >
      <Image
        src={project.image}
        alt={`${project.name} — website screenshot`}
        width={1280}
        height={853}
        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
  return project.live ? (
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.name} live demo`}
      className={`block ${featured ? "md:h-full" : ""}`}
    >
      {img}
    </a>
  ) : (
    img
  );
}

function ProjectCard({ project }: { project: Project }) {
  const featured = project.featured;
  return (
    <article
      className={`group overflow-hidden rounded-2xl border bg-slate-900/60 transition-all duration-300 hover:-translate-y-1 ${
        featured
          ? "border-teal-500/40 shadow-lg shadow-teal-500/5 hover:shadow-teal-500/15 md:col-span-2 md:grid md:grid-cols-2"
          : "flex flex-col border-slate-800 hover:border-slate-700 hover:shadow-xl hover:shadow-black/20"
      }`}
    >
      <ProjectImage project={project} featured={featured} />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold text-white">{project.name}</h3>
            <p className="mt-1 text-sm font-medium text-teal-300">
              {project.tagline}
            </p>
          </div>
          {featured && (
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
      </div>
    </article>
  );
}

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
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
