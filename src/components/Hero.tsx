import { ArrowDown, Sparkles, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-28 pb-16 sm:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] opacity-60" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-24 h-72 w-72 rounded-full bg-gold/10 blur-[100px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-8">
        <div className="order-2 lg:order-1 flex flex-col items-start gap-6">
          <span className="animate-fade-in chip">
            <Sparkles size={14} className="text-gold" />
            Creative Developer &amp; Artist
          </span>

          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{' '}
            <span className="text-gradient">Ahmed Ali Amer</span>
          </h1>

          <p className="max-w-xl text-base sm:text-lg text-slate-400 leading-relaxed">
            <span className="text-slate-200">Web Developer</span>
            <span className="mx-2 text-accent">|</span>
            <span className="text-slate-200">AI Learner</span>
            <span className="mx-2 text-accent">|</span>
            <span className="text-slate-200">Digital Artist</span>
            <span className="mx-2 text-accent">|</span>
            <span className="text-slate-200">Sketch Artist</span>
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href="#projects" className="btn-primary">
              View My Work
              <ArrowDown size={16} />
            </a>
            <a href="#contact" className="btn-ghost">
              <Mail size={16} />
              Contact Me
            </a>
          </div>

          <div className="mt-4 flex items-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
              Available for work
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="font-mono text-accent">{'</>'}</span>
              Building on the web
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 -m-4 rounded-full bg-gradient-to-tr from-accent/20 via-transparent to-gold/20 blur-2xl" />
            <div className="absolute inset-0 rounded-full animate-pulse-ring border border-accent/40" />
            <div className="absolute -inset-3 rounded-full border border-dashed border-white/10 animate-spin-slow" />

            <div className="relative h-60 w-60 sm:h-80 sm:w-80 lg:h-96 lg:w-96 overflow-hidden rounded-full border border-white/10 shadow-glow">
              <img
                src="/profile.jpg"
                alt="Ahmed Ali Amer"
                className="h-full w-full object-cover animate-float"
                style={{ animationDuration: '8s' }}
              />
              <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
            </div>

            <div className="absolute -bottom-2 -left-2 sm:-left-6 glass rounded-2xl px-4 py-3 animate-float" style={{ animationDuration: '7s', animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-accent">{'{ }'}</span>
                <span className="text-xs font-medium text-slate-300">Clean Code</span>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 sm:-right-6 glass rounded-2xl px-4 py-3 animate-float" style={{ animationDuration: '9s', animationDelay: '1s' }}>
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-gold" />
                <span className="text-xs font-medium text-slate-300">Creative</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition-colors hover:text-accent sm:flex"
      >
        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/15 p-1">
          <span className="h-2 w-1 rounded-full bg-accent animate-bounce" />
        </span>
      </a>
    </section>
  );
}
