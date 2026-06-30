import { Server, Code2, Sparkles, Database } from "lucide-react";
import { services } from "../data/content";
import { SectionLabel } from "./ui";

const icons = { Server, Code2, Sparkles, Database };

export default function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-20">
      <SectionLabel n="04">Services</SectionLabel>
      <div className="grid md:grid-cols-2 gap-5">
        {services.map(({ icon, title, desc }) => {
          const Icon = icons[icon];
          return (
            <div
              key={title}
              className="border border-white/10 rounded-lg p-6 bg-white/[0.02] hover:border-white/25 transition-colors"
            >
              <Icon size={20} className="text-[var(--cyan)]" />
              <p className="font-display font-semibold text-lg mt-3">{title}</p>
              <p className="text-white/50 text-sm mt-2 leading-relaxed">{desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
