import { Code2, Palette, Brain, Pencil } from 'lucide-react';
import { Section } from '@/components/Section';
import { Reveal } from '@/components/Reveal';

const HIGHLIGHTS = [
  { icon: Code2, label: 'Web Development', value: 'HTML · CSS · JS' },
  { icon: Brain, label: 'AI Tools', value: 'v0 · Bolt · LLMs' },
  { icon: Palette, label: 'Digital Art', value: 'Creative Projects' },
  { icon: Pencil, label: 'Sketching', value: 'Hand-drawn Work' },
];

export function About() {
  return (
    <Section id="about">
      <div className="grid items-center gap-12 lg:grid-cols-5">
        <Reveal className="lg:col-span-3 flex flex-col gap-5">
          <span className="chip w-fit">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            About Me
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            A blend of <span className="text-gradient">logic &amp; art</span>
          </h2>
          <div className="space-y-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            <p>
              I&apos;m <span className="text-slate-200 font-medium">Ahmed Ali Amer</span>, a
              creative developer and artist who loves building things that live on the web — and
              things that live on paper. I&apos;m currently learning web development, AI tools,
              HTML, CSS, and JavaScript, and I create creative digital projects that combine clean
              code with thoughtful design.
            </p>
            <p>
              Beyond the screen, I create hand-drawn sketches and artwork. Whether it&apos;s a
              responsive interface or a detailed portrait, I care about the craft — the small
              details that make a piece feel intentional and alive.
            </p>
          </div>

          <div className="mt-2 grid grid-cols-2 gap-3 sm:max-w-md">
            {HIGHLIGHTS.map((h) => (
              <div key={h.label} className="glass rounded-xl p-3 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/10 text-accent">
                  <h.icon size={18} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500">{h.label}</p>
                  <p className="truncate text-sm font-medium text-slate-200">{h.value}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-2">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-accent/15 to-gold/10 blur-2xl" />
            <div className="relative glass rounded-3xl p-6">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-error/80" />
                  <span className="h-3 w-3 rounded-full bg-warning/80" />
                  <span className="h-3 w-3 rounded-full bg-success/80" />
                </div>
                <span className="font-mono text-xs text-slate-500">ahmed.profile</span>
              </div>
              <pre className="mt-4 overflow-x-auto font-mono text-xs sm:text-sm leading-relaxed text-slate-300">
{`const ahmed = {
  name: 'Ahmed Ali Amer',
  role: 'Creative Developer',
  focus: ['Web', 'AI', 'Art'],
  learning: 'JavaScript + AI tools',
  sketching: true,
  available: true,
};`}
              </pre>
              <div className="mt-4 flex flex-wrap gap-2 border-t border-white/[0.06] pt-4">
                <span className="chip">Problem Solver</span>
                <span className="chip">Detail-Oriented</span>
                <span className="chip">Always Learning</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
