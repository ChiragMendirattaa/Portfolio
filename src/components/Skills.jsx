import { skills } from "../data/content";
import { SectionLabel, Pill } from "./ui";

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
      <SectionLabel n="02">Skills</SectionLabel>
      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((s) => (
          <div key={s.group} className="border border-white/10 rounded-lg p-5 bg-white/[0.02]">
            <p className="font-mono text-xs uppercase tracking-wider text-white/40 mb-3">{s.group}</p>
            <div className="flex flex-wrap gap-2">
              {s.items.map((i) => (
                <Pill key={i}>{i}</Pill>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
