import { Github, Linkedin, Instagram, Mail, ArrowUpRight, Send } from 'lucide-react';
import { Section, SectionHeading } from '@/components/Section';
import { Reveal } from '@/components/Reveal';

const SOCIALS = [
  {
    label: 'GitHub',
    handle: '@ahmedaliamer',
    href: 'https://github.com/',
    icon: Github,
    tint: 'text-slate-300',
  },
  {
    label: 'LinkedIn',
    handle: 'Ahmed Ali Amer',
    href: 'https://linkedin.com/',
    icon: Linkedin,
    tint: 'text-sky-400',
  },
  {
    label: 'Instagram',
    handle: '@ahmed924875',
    href: 'https://fanekhaka2937instagram.com/',
    icon: Instagram,
    tint: 'text-pink-400',
  },
  {
    label: 'Email',
    handle: 'ahmedaliamer@gmail.com',
    href: 'mailto:ahmedaliamer@gmail.com',
    icon: Mail,
    tint: 'text-accent',
  },
];

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's create something"
        description="Have a project in mind, a collaboration idea, or just want to say hello? My inbox is always open."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal className="flex flex-col gap-4">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass glass-hover rounded-2xl p-5 flex items-center gap-4"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/[0.04] border border-white/[0.06]">
                <social.icon className={social.tint} size={22} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-white">{social.label}</p>
                <p className="truncate text-sm text-slate-400">{social.handle}</p>
              </div>
              <ArrowUpRight
                size={18}
                className="text-slate-500 transition-all duration-300 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          ))}
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const name = String(data.get('name') || '');
              const email = String(data.get('email') || '');
              const message = String(data.get('message') || '');
              window.location.href = `mailto:ahmedaliamer@gmail.com?subject=Portfolio message from ${encodeURIComponent(
                name,
              )}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
            }}
            className="glass rounded-2xl p-6 flex flex-col gap-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Your name" name="name" placeholder="AHMED ALI" />
              <Field label="Email" name="email" type="email" placeholder="jane@email.com" />
            </div>
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-slate-300">Message</span>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project or idea..."
                className="resize-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 outline-none transition-colors focus:border-accent/50 focus:bg-white/[0.05]"
              />
            </label>
            <button type="submit" className="btn-primary w-full">
              <Send size={16} />
              Send Message
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-slate-300">{label}</span>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 outline-none transition-colors focus:border-accent/50 focus:bg-white/[0.05]"
      />
    </label>
  );
}
