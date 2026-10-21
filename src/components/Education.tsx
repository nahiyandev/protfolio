import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 border-t border-slate-800/60">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-teal-400">
          Education
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
          Learning background
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
            >
              <span className="inline-block rounded-full bg-teal-500/15 px-3 py-1 text-xs font-semibold text-teal-300">
                {edu.year}
              </span>
              <h3 className="mt-3 font-bold text-white">{edu.degree}</h3>
              <p className="mt-1 text-sm text-slate-400">{edu.school}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
