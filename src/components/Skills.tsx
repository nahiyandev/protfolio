import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-slate-800/60 bg-slate-900/40">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-teal-400">
          Skills
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
          What I work with
        </h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          The technologies I actually use in my projects — nothing listed that
          I haven&apos;t built with.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-5"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-teal-300">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-slate-800/80 px-3 py-1.5 text-sm text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
