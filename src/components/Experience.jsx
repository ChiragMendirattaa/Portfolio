import { experience } from "../data/content";
import { SectionLabel } from "./ui";

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
      <SectionLabel n="03">Experience</SectionLabel>
      <div>
        {experience.map((e, idx) => (
          <div
            key={idx}
            className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-8 py-7 border-t border-white/10"
          >
            <div>
              <p className="font-mono text-xs text-white/40">{e.time}</p>
            </div>
            <div>
              <p className="font-display text-lg font-semibold">{e.role}</p>
              <p className="text-sm mb-3 text-[var(--accent)]">{e.org}</p>
              <ul className="space-y-1.5">
                {e.points.map((p, i) => (
                  <li key={i} className="text-white/55 text-sm leading-relaxed flex gap-2">
                    <span className="text-white/25 mt-1.5">—</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
