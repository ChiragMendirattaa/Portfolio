export function SectionLabel({ n, children }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="font-mono text-sm tracking-widest text-[var(--accent)]">{n}</span>
      <span className="h-px flex-1 bg-white/10" />
      <span className="font-mono text-sm tracking-widest text-white/40 uppercase">{children}</span>
    </div>
  );
}

export function Pill({ children }) {
  return (
    <span className="text-xs font-mono px-2.5 py-1 rounded-full border border-white/15 text-white/70 bg-white/5">
      {children}
    </span>
  );
}
