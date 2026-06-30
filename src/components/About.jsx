import { Briefcase, Sparkles, GraduationCap, Award } from "lucide-react";
import { profile, stats } from "../data/content";
import { SectionLabel } from "./ui";

const icons = { Briefcase, Sparkles, GraduationCap, Award };
const statIcons = ["Briefcase", "Sparkles", "GraduationCap", "Award"];

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20">
      <SectionLabel n="01">About</SectionLabel>
      <div className="grid md:grid-cols-[1fr_1fr] gap-12">
        <p className="text-white/65 leading-relaxed text-lg">{profile.about}</p>
        <div className="grid grid-cols-2 gap-5">
          {stats.map((s, i) => {
            const Icon = icons[statIcons[i]];
            return (
              <div key={s.label} className="border border-white/10 rounded-lg p-4 bg-white/[0.02]">
                <Icon size={18} className="text-[var(--accent)]" />
                <p className="font-display text-xl font-bold mt-2">{s.label}</p>
                <p className="text-white/45 text-xs mt-1">{s.sub}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
