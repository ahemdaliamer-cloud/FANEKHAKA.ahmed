import type { ReactNode } from 'react';
import { Reveal } from '@/components/Reveal';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';
  return (
    <Reveal className={`flex flex-col ${alignment} gap-3 mb-12`}>
      <span className="chip">
        <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-slate-400 text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </Reveal>
  );
}

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}
