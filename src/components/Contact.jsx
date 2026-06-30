import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { profile } from "../data/content";
import { SectionLabel } from "./ui";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  // To receive real submissions, wire this up to a service like Formspree
  // or EmailJS (no backend needed): replace handleSubmit's body with a
  // fetch() call to your endpoint. See README.md for instructions.
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
      <SectionLabel n="07">Contact</SectionLabel>
      <div className="grid md:grid-cols-[1fr_1.2fr] gap-12">
        <div>
          <p className="font-display text-2xl font-bold leading-snug">
            Let's build something worth shipping.
          </p>
          <p className="text-white/50 mt-3 text-sm leading-relaxed">
            Open to Java / Full Stack Developer roles in Noida, Gurugram, or remote. Reach out
            directly or send a message.
          </p>
          <div className="mt-6 space-y-3 font-mono text-sm">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-white/65 hover:text-white">
              <Mail size={15} /> {profile.email}
            </a>
            <a href={`tel:${profile.phone}`} className="flex items-center gap-2 text-white/65 hover:text-white">
              <Phone size={15} /> {profile.phone}
            </a>
            <p className="flex items-center gap-2 text-white/65">
              <MapPin size={15} /> {profile.location}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {sent ? (
            <div className="border border-white/10 rounded-lg p-8 text-center bg-white/[0.02]">
              <CheckCircle2 size={24} className="mx-auto mb-2 text-[var(--cyan)]" />
              <p className="font-mono text-sm text-white/60">
                Message captured. Connect this form to Formspree/EmailJS to receive it by email
                — see README.md.
              </p>
            </div>
          ) : (
            <>
              <input
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white/[0.03] border border-white/15 rounded px-4 py-3 text-sm focus:outline-none focus:border-white/40"
              />
              <input
                required
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white/[0.03] border border-white/15 rounded px-4 py-3 text-sm focus:outline-none focus:border-white/40"
              />
              <textarea
                required
                rows={4}
                placeholder="What are you building?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white/[0.03] border border-white/15 rounded px-4 py-3 text-sm focus:outline-none focus:border-white/40 resize-none"
              />
              <button
                type="submit"
                className="flex items-center gap-2 px-5 py-2.5 rounded font-mono text-sm bg-[var(--accent)] text-[#0E1116]"
              >
                <Send size={14} /> Send message
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
