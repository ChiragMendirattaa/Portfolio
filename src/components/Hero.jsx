import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/content";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-20 pb-24 grid md:grid-cols-[1.3fr_1fr] gap-10 items-center">
      <div>
        <div className="flex items-center gap-2 mb-5 font-mono text-xs text-white/50">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--cyan)] opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--cyan)]" />
          </span>
          {profile.status}
        </div>

        <h1 className="font-display text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight">
          {profile.name}
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-white/70 font-display">{profile.role}</p>
        <p className="mt-5 text-white/55 max-w-xl leading-relaxed">{profile.summary}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="px-5 py-2.5 rounded font-mono text-sm font-medium bg-[var(--accent)] text-[#0E1116]"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded font-mono text-sm border border-white/20 text-white/80 hover:border-white/40 transition-colors"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-8 flex gap-4 text-white/45">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white">
            <Github size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-white">
            <Mail size={18} />
          </a>
        </div>
      </div>

      <TerminalCard />
    </section>
  );
}

function TerminalCard() {
  return (
    <div className="rounded-lg border border-white/10 bg-[#12151C] overflow-hidden font-mono text-sm shadow-2xl">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        <span className="ml-2 text-white/40 text-xs">~/chirag — log</span>
      </div>
      <div className="p-4 space-y-2.5 text-white/70">
        <p><span className="text-[var(--cyan)]">$</span> git log --oneline --reverse</p>
        <p className="text-white/40">2024 · freelance site for Sanjay Accessories</p>
        <p className="text-white/40">Jul 2025 · backend intern, REST APIs + MySQL</p>
        <p className="text-white/40">Oct 2025 · JWT, Redis cache, push notifications</p>
        <p className="text-white/40">2025 · architected Luna Health AI, solo</p>
        <p className="text-[var(--accent)]">Jan 2026 · Full Stack Developer @ Nexdew</p>
        <p className="pt-2"><span className="text-[var(--cyan)]">$</span> whoami</p>
        <p className="text-white/70">full-stack dev · ships fast · builds AI products</p>
        <p>
          <span className="text-[var(--cyan)]">$</span>{" "}
          <span className="inline-block w-2 h-4 bg-white/60 align-middle animate-pulse" />
        </p>
      </div>
    </div>
  );
}
