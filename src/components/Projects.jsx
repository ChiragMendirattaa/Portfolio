import { Github, ExternalLink, CheckCircle2, Terminal } from "lucide-react";
import { projects } from "../data/content";
import { SectionLabel, Pill } from "./ui";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <SectionLabel n="05">Projects</SectionLabel>
      <div className="space-y-8">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project: p }) {
  return (
    <div className="border border-white/10 rounded-lg bg-white/[0.02] overflow-hidden">
      <div className="grid md:grid-cols-[1fr_1fr]">
        <div className="aspect-video md:aspect-auto bg-gradient-to-br from-white/[0.04] to-white/[0.01] border-b md:border-b-0 md:border-r border-white/10 flex items-center justify-center">
          {p.screenshot ? (
            <img src={p.screenshot} alt={`${p.name} screenshot`} className="w-full h-full object-cover" />
          ) : (
            <div className="text-center text-white/25">
              <Terminal size={28} className="mx-auto mb-2" />
              <p className="font-mono text-xs">screenshot coming soon</p>
            </div>
          )}
        </div>

        <div className="p-6">
          <p className="font-display text-xl font-bold">{p.name}</p>
          <p className="text-sm mt-1 text-[var(--accent)]">{p.tagline}</p>

          <p className="text-white/55 text-sm mt-4 leading-relaxed">
            <span className="text-white/35 font-mono text-xs uppercase tracking-wider block mb-1">
              Problem solved
            </span>
            {p.problem}
          </p>

          <div className="mt-4">
            <span className="text-white/35 font-mono text-xs uppercase tracking-wider block mb-2">
              Features
            </span>
            <ul className="space-y-1.5">
              {p.features.map((f, i) => (
                <li key={i} className="text-white/55 text-sm flex gap-2">
                  <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-[var(--cyan)]" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>

          <div className="mt-5 flex gap-3">
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm font-mono px-3 py-1.5 rounded border border-white/20 hover:border-white/40 transition-colors"
            >
              <Github size={14} /> Code
            </a>
            {p.demo ? (
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-sm font-mono px-3 py-1.5 rounded bg-[var(--accent)] text-[#0E1116]"
              >
                <ExternalLink size={14} /> Live demo
              </a>
            ) : (
              <span className="flex items-center gap-1.5 text-sm font-mono px-3 py-1.5 rounded border border-white/10 text-white/30">
                <ExternalLink size={14} /> Demo coming soon
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
