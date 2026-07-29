import { Github, Linkedin, Instagram, Mail, ArrowUp } from 'lucide-react';
import { Logo } from '@/components/Logo';

const SOCIALS = [
  { href: 'https://github.com/', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://instagram.com/', icon: Instagram, label: 'Instagram' },
  { href: 'mailto:ahmed.ali.amer@example.com', icon: Mail, label: 'Email' },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:px-8 md:flex-row">
        <div className="flex items-center gap-3">
          <Logo className="h-8 w-8" />
          <div>
            <p className="font-display text-sm font-bold text-white">
              Ahmed<span className="text-accent">.</span>Ali
            </p>
            <p className="text-xs text-slate-500">Creative Developer &amp; Artist</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="grid h-10 w-10 place-items-center rounded-xl glass text-slate-400 transition-all duration-300 hover:text-accent hover:-translate-y-0.5"
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>

        <a
          href="#home"
          className="group flex items-center gap-2 text-xs font-medium text-slate-400 transition-colors hover:text-accent"
        >
          Back to top
          <span className="grid h-8 w-8 place-items-center rounded-full glass transition-transform duration-300 group-hover:-translate-y-0.5">
            <ArrowUp size={14} />
          </span>
        </a>
      </div>
      <p className="mt-8 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} Ahmed Ali Amer. Crafted with code &amp; creativity.
      </p>
    </footer>
  );
}
