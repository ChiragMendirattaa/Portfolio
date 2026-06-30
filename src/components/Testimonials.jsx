import { testimonials } from "../data/content";
import { SectionLabel } from "./ui";

export default function Testimonials() {
  return (
    <section id="testimonials" className="max-w-6xl mx-auto px-6 py-20">
      <SectionLabel n="06">Testimonials</SectionLabel>
      {testimonials.length === 0 ? (
        <div className="border border-dashed border-white/15 rounded-lg p-12 text-center">
          <p className="font-mono text-white/30 text-sm">No testimonials yet — check back soon.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-white/10 rounded-lg p-6 bg-white/[0.02]">
              <p className="text-white/65 text-sm leading-relaxed">"{t.quote}"</p>
              <p className="mt-4 font-display font-semibold text-sm">{t.name}</p>
              <p className="text-white/40 text-xs">{t.role}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
