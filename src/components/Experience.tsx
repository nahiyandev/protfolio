import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-slate-800/60 bg-slate-900/40"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-teal-400">
          Experience
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
          Where I&apos;ve worked
        </h2>

        <div className="mt-8 space-y-5">
          {experience.map((job) => (
            <div
              key={`${job.company}-${job.role}`}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-bold text-white">{job.role}</h3>
                <span className="text-sm text-teal-300">{job.period}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-slate-400">
                {job.company} · {job.location}
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-400">
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
