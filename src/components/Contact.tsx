"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "./icons";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const inputClasses =
    "w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 outline-none transition-colors focus:border-teal-400";

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-slate-800/60 bg-slate-900/40"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-teal-400">
          Contact
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
          Let&apos;s talk
        </h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          Looking for a junior full-stack developer, or just want to say hello?
          My inbox is open.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-5 transition-colors hover:border-teal-500/40"
            >
              <span className="rounded-lg bg-teal-500/15 p-3 text-teal-300">
                <MailIcon />
              </span>
              <span>
                <span className="block text-sm text-slate-400">Email</span>
                <span className="block font-medium text-white">
                  {profile.email}
                </span>
              </span>
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-5 transition-colors hover:border-teal-500/40"
            >
              <span className="rounded-lg bg-teal-500/15 p-3 text-teal-300">
                <PhoneIcon />
              </span>
              <span>
                <span className="block text-sm text-slate-400">Phone</span>
                <span className="block font-medium text-white">
                  {profile.phone}
                </span>
              </span>
            </a>
            <div className="flex gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-950 p-4 text-sm font-medium text-slate-300 transition-colors hover:border-teal-500/40 hover:text-teal-300"
              >
                <GitHubIcon />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-950 p-4 text-sm font-medium text-slate-300 transition-colors hover:border-teal-500/40 hover:text-teal-300"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
          >
            <h3 className="font-bold text-white">Send a message</h3>
            <p className="mt-1 text-sm text-slate-500">
              This opens your email app with the message ready to send.
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-sm text-slate-400">
                  Your name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-sm text-slate-400">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi Nayem, I'd like to talk about..."
                  rows={4}
                  required
                  className={`${inputClasses} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-teal-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-teal-400"
              >
                Send via Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
