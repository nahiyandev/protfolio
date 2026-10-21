import { aboutParagraphs, profile } from "@/data/portfolio";
import { MapPinIcon } from "./icons";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-slate-800/60">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-teal-400">
          About
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
          A developer who learns by building
        </h2>

        <div className="mt-6 max-w-3xl space-y-4 text-slate-400">
          {aboutParagraphs.map((p, i) => (
            <p key={i} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300">
            <MapPinIcon className="h-4 w-4 text-teal-400" />
            {profile.location}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-sm text-teal-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
            </span>
            {profile.availability}
          </span>
        </div>
      </div>
    </section>
  );
}
