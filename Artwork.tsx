import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Pencil } from 'lucide-react';
import { Section, SectionHeading } from '@/components/Section';
import { Reveal } from '@/components/Reveal';

type Artwork = {
  src: string;
  title: string;
  category: string;
};

const ARTWORK: Artwork[] = [
  {
    src: 'https://images.pexels.com/photos/1762858/pexels-photo-1762858.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Portrait Study',
    category: 'Sketch',
  },
  {
    src: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Character Concept',
    category: 'Digital',
  },
  {
    src: 'https://images.pexels.com/photos/207962/pexels-photo-207962.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Line Work',
    category: 'Sketch',
  },
  {
    src: 'https://images.pexels.com/photos/1655061/pexels-photo-1655061.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Abstract Forms',
    category: 'Digital',
  },
  {
    src: 'https://images.pexels.com/photos/3781338/pexels-photo-3781338.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Detail Study',
    category: 'Sketch',
  },
  {
    src: 'https://images.pexels.com/photos/2104463/pexels-photo-2104463.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Color Experiment',
    category: 'Digital',
  },
];

export function Artwork() {
  const [active, setActive] = useState<number | null>(null);

  const close = () => setActive(null);
  const next = () => setActive((i) => (i === null ? i : (i + 1) % ARTWORK.length));
  const prev = () =>
    setActive((i) => (i === null ? i : (i - 1 + ARTWORK.length) % ARTWORK.length));

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <Section id="artwork">
      <SectionHeading
        eyebrow="Artwork Gallery"
        title="Sketches & creative pieces"
        description="A growing collection of hand-drawn sketches and digital artwork. Click any piece to view it up close."
      />

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {ARTWORK.map((item, i) => (
          <Reveal
            key={item.title}
            delay={i * 70}
            className={i % 5 === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}
          >
            <button
              onClick={() => setActive(i)}
              className="group relative block h-full w-full overflow-hidden rounded-2xl glass"
            >
              <div className="aspect-square w-full overflow-hidden sm:h-full">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-3 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="flex items-center gap-2">
                  <Pencil size={14} className="text-gold" />
                  <span className="text-xs font-medium text-slate-300">{item.category}</span>
                </div>
                <h3 className="mt-1 font-display text-base font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/90 p-4 backdrop-blur-md animate-fade-in"
          onClick={close}
        >
          <button
            aria-label="Close"
            onClick={close}
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full glass text-white transition-colors hover:text-accent"
          >
            <X size={22} />
          </button>
          <button
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 sm:left-6 grid h-11 w-11 place-items-center rounded-full glass text-white transition-colors hover:text-accent"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 sm:right-6 grid h-11 w-11 place-items-center rounded-full glass text-white transition-colors hover:text-accent"
          >
            <ChevronRight size={22} />
          </button>
          <figure
            className="max-h-[85vh] max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={ARTWORK[active].src.replace('w=800', 'w=1200')}
              alt={ARTWORK[active].title}
              className="max-h-[78vh] w-auto rounded-2xl object-contain shadow-glow"
            />
            <figcaption className="mt-4 text-center">
              <h3 className="font-display text-lg font-semibold text-white">
                {ARTWORK[active].title}
              </h3>
              <p className="text-sm text-slate-400">{ARTWORK[active].category}</p>
            </figcaption>
          </figure>
        </div>
      )}
    </Section>
  );
}
