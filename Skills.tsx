import {
  Code2,
  Palette,
  Github,
  Brain,
  Sparkles,
  Boxes,
  Pencil,
  Puzzle,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { Section, SectionHeading } from '@/components/Section';
import { Reveal } from '@/components/Reveal';

type Skill = {
  name: string;
  icon: LucideIcon;
  level: number;
  tint: string;
};

const SKILLS: Skill[] = [
  { name: 'HTML', icon: Code2, level: 85, tint: 'text-orange-400' },
  { name: 'CSS', icon: Palette, level: 80, tint: 'text-sky-400' },
  { name: 'JavaScript', icon: Zap, level: 70, tint: 'text-yellow-400' },
  { name: 'AI Tools', icon: Brain, level: 78, tint: 'text-accent' },
  { name: 'v0.dev', icon: Sparkles, level: 75, tint: 'text-violet-400' },
  { name: 'Bolt.new', icon: Boxes, level: 80, tint: 'text-emerald-400' },
  { name: 'GitHub', icon: Github, level: 72, tint: 'text-slate-300' },
  { name: 'Web Design', icon: Palette, level: 76, tint: 'text-pink-400' },
  { name: 'Sketching & Digital Art', icon: Pencil, level: 88, tint: 'text-gold' },
  { name: 'Problem Solving', icon: Puzzle, level: 82, tint: 'text-accent-soft' },
];

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="What I work with"
        description="A growing toolkit across code, AI, and art — each one I use to turn ideas into finished pieces."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((skill, i) => (
          <Reveal key={skill.name} delay={i * 60} as="article">
            <div className="group glass glass-hover rounded-2xl p-5 h-full">
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/[0.04] border border-white/[0.06] transition-colors group-hover:border-accent/30">
                  <skill.icon className={skill.tint} size={22} />
                </span>
                <span className="font-mono text-xs text-slate-500">
                  {skill.level}%
                </span>
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-white">
                {skill.name}
              </h3>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent to-gold transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
