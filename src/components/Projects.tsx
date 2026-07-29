import { Gamepad2, Globe, Bot, Pencil, ArrowUpRight, type LucideIcon } from 'lucide-react';
import { Section, SectionHeading } from '@/components/Section';
import { Reveal } from '@/components/Reveal';

type Project = {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  accent: string;
};

const PROJECTS: Project[] = [
  {
    title: 'My Games Projects',
    description:
      'Interactive browser games built with JavaScript — from arcade classics to small creative experiments with smooth, playful mechanics.',
    icon: Gamepad2,
    tags: ['JavaScript', 'Canvas', 'Game Logic'],
    accent: 'from-fuchsia-500/20 to-accent/10',
  },
  {
    title: 'Portfolio Website',
    description:
      'This very site — a responsive, animated developer portfolio with glassmorphism, smooth scroll, and a clean dark aesthetic.',
    icon: Globe,
    tags: ['React', 'Tailwind', 'Design'],
    accent: 'from-accent/20 to-emerald-500/10',
  },
  {
    title: 'AI Experiments',
    description:
      'Hands-on explorations with AI tools like v0.dev and Bolt.new — prototyping interfaces, generating assets, and learning workflows.',
    icon: Bot,
    tags: ['AI Tools', 'v0.dev', 'Bolt.new'],
    accent: 'from-violet-500/20 to-sky-500/10',
  },
  {
    title: 'Artwork & Sketch Collection',
    description:
      'A curated gallery of hand-drawn sketches and digital artwork — portraits, studies, and creative pieces showcasing a traditional art foundation.',
    icon: Pencil,
    tags: ['Sketching', 'Digital Art', 'Creative'],
    accent: 'from-gold/20 to-rose-500/10',
  },
];

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="A mix of code and creativity — each project is a chance to learn something new and ship something real."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.title} delay={i * 90} as="article">
            <a
              href="#contact"
              className="group relative block h-full overflow-hidden rounded-2xl glass glass-hover p-6"
            >
              <div
                className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${project.accent} blur-2xl opacity-70 transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div className="relative flex items-start justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/[0.04] border border-white/[0.06] text-white transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <project.icon size={26} />
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-slate-500 transition-all duration-300 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
              <h3 className="relative mt-5 font-display text-xl font-bold text-white">
                {project.title}
              </h3>
              <p className="relative mt-2 text-sm text-slate-400 leading-relaxed">
                {project.description}
              </p>
              <div className="relative mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
