export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center font-mono text-xs text-white/30">
      © {new Date().getFullYear()} Chirag Mendiratta — built with React &amp; Tailwind CSS
    </footer>
  );
}
