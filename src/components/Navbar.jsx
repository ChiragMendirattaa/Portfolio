const links = ["About", "Skills", "Experience", "Services", "Projects", "Contact"];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0E1116]/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-display font-bold text-lg tracking-tight">
          CM<span className="text-[var(--accent)]">.</span>dev
        </span>
        <div className="hidden md:flex gap-7 font-mono text-sm text-white/60">
          {links.map((s) => (
            <a key={s} href={`#${s.toLowerCase()}`} className="hover:text-white transition-colors">
              {s}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="text-xs font-mono px-3 py-1.5 rounded border border-[var(--accent)] text-[var(--accent)]"
        >
          Hire me
        </a>
      </div>
    </nav>
  );
}
