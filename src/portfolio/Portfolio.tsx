import { useEffect, useState } from "react";
import { useReveal } from "./useReveal";
import {
  coreSkills,
  education,
  experience,
  marquee,
  profile,
  projects,
  skillGroups,
  stats,
} from "./data";
import React from "react";

type Props = {
  photo: string;
  resumeUrl: string;
};

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      data-reveal
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    let stored: string | null = null;

    try {
      stored = localStorage.getItem("theme");
    } catch {
      // Ignore localStorage errors
    }

    const prefersDark = stored === "dark" || stored === null;

    setDark(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  const toggle = () => {
    const next = !dark;

    setDark(next);
    document.documentElement.classList.toggle("dark", next);

    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // Ignore localStorage errors
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
      className="
        group relative flex h-10 w-[72px] shrink-0 items-center
        rounded-full border border-border/70
        bg-background/80 p-1
        shadow-sm backdrop-blur-md
        transition-all duration-300
        hover:border-primary/40
        hover:shadow-md hover:shadow-primary/10
        focus:outline-none focus-visible:ring-2
        focus-visible:ring-primary/50 focus-visible:ring-offset-2
        focus-visible:ring-offset-background
      "
    >
      {/* Background icons */}
      <span className="pointer-events-none absolute inset-0 flex items-center justify-between px-2.5">
        {/* Sun */}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={`
            transition-all duration-300
            ${
              dark
                ? "text-muted-foreground/40"
                : "text-amber-500"
            }
          `}
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>

        {/* Moon */}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`
            transition-all duration-300
            ${
              dark
                ? "text-primary"
                : "text-muted-foreground/40"
            }
          `}
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
        </svg>
      </span>

      {/* Sliding thumb */}
      <span
        className={`
          relative z-10 flex h-8 w-8 items-center justify-center
          rounded-full
          bg-primary text-primary-foreground
          shadow-md shadow-primary/25
          ring-1 ring-primary/20
          transition-transform duration-300 ease-out
          ${
            dark
              ? "translate-x-8"
              : "translate-x-0"
          }
        `}
      >
        {dark ? (
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
          </svg>
        ) : (
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        )}
      </span>
    </button>
  );
}

function Spotlight() {
  const [pos, setPos] = useState({ x: -400, y: -400 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden lg:block"
      style={{
        background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, var(--glow), transparent 70%)`,
        transition: "background 120ms linear",
      }}
    />
  );
}

function SectionTitle({ index, title, kicker }: { index: string; title: string; kicker?: string }) {
  return (
    <Reveal>
      <div className="mb-10 flex items-end justify-between gap-6 border-b border-border pb-5">
        <div>
          <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
            {index} / {kicker ?? title}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">{title}</h2>
        </div>
        <span className="hidden h-3 w-3 animate-pulse-ring rounded-full bg-primary sm:block" />
      </div>
    </Reveal>
  );
}

export default function Portfolio({ photo, resumeUrl }: Props) {
  useReveal();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setScrolled(h.scrollTop > 24);
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Spotlight />

      {/* progress bar */}
      <div
        className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-primary"
        style={{ transform: `scaleX(${progress / 100})` }}
        aria-hidden
      />

      {/* nav */}
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled ? "backdrop-blur-xl" : ""
        }`}
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 transition-all duration-500 ${
            scrolled ? "my-2 rounded-full border border-border bg-card/80 py-2 shadow-lg" : "py-5"
          }`}
        >
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary font-mono text-sm font-bold text-primary-foreground">
              DB
            </span>
            <span className="hidden font-mono text-sm tracking-widest uppercase sm:block">
              divakar<span className="text-primary">.dev</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="ink-underline text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={resumeUrl}
              download="Divakar_Barhate_Resume.pdf"
              className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 sm:inline-flex"
            >
              Download CV
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* hero */}
      <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-44">
        <div className="grid-canvas absolute inset-0" aria-hidden />
        <div className="aura -top-24 -left-32 h-96 w-96 animate-float-slow" aria-hidden />
        <div
          className="aura top-24 -right-24 h-80 w-80 animate-float-slow"
          style={{ animationDelay: "-3s" }}
          aria-hidden
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p
              className="animate-rise font-mono text-xs tracking-[0.35em] text-primary uppercase"
              style={{ animationDelay: "60ms" }}
            >
              {profile.location}
            </p>
            <h1
              className="animate-rise mt-5 text-5xl leading-[0.95] font-bold tracking-tight sm:text-7xl"
              style={{ animationDelay: "140ms" }}
            >
              Divakar
              <br />
              <span className="text-primary">Barhate</span>
            </h1>
            <p
              className="animate-rise mt-6 max-w-xl font-mono text-sm text-muted-foreground sm:text-base"
              style={{ animationDelay: "240ms" }}
            >
              &gt; {profile.role} — {profile.tagline}
              <span className="animate-blink ml-1 inline-block h-4 w-2 translate-y-0.5 bg-primary" />
            </p>
            <p
              className="animate-rise mt-6 max-w-xl text-base leading-relaxed text-muted-foreground"
              style={{ animationDelay: "320ms" }}
            >
              {profile.summary}
            </p>

            <div
              className="animate-rise mt-9 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "420ms" }}
            >
              <a
                href={resumeUrl}
                download="Divakar_Barhate_Resume.pdf"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-[0_20px_45px_-20px_var(--glow)]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-y-0.5"
                >
                  <path d="M12 3v12M7 11l5 5 5-5M5 21h14" />
                </svg>
                Download Resume
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                View Work
              </a>
            </div>
          </div>

      <div className="relative mx-auto w-full max-w-sm">
  {/* Ambient glow */}
  <div
    className="absolute -inset-8 -z-10 rounded-[3rem] bg-primary/10 blur-3xl"
    aria-hidden
  />

  {/* Rotating dashed orbit */}
  <div
    className="animate-spin-slow absolute -inset-7 rounded-[3rem] border border-dashed border-primary/30"
    aria-hidden
  />

  {/* Secondary orbit */}
  <div
    className="absolute -inset-3 rounded-[2.5rem] border border-primary/10"
    aria-hidden
  />

  {/* Main card */}
  <div className="group relative overflow-hidden rounded-[2rem] border border-border/60 bg-card/70 p-2 shadow-2xl shadow-black/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-primary/10">
    {/* Image container */}
    <div className="relative overflow-hidden rounded-[1.5rem]">
      <img
        src={photo}
        alt="Portrait of Divakar Barhate, frontend engineer"
        className="
          aspect-[4/5] w-full object-cover
          transition-transform duration-700 ease-out
          group-hover:scale-[1.03]
        "
        loading="eager"
      />

      {/* Image gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70"
        aria-hidden
      />

      {/* Subtle primary glow */}
      <div
        className="absolute -bottom-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
        aria-hidden
      />

      {/* Availability badge */}
      <div className="absolute bottom-5 left-5 right-5">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-3.5 py-2 font-mono text-[11px] font-medium text-white shadow-lg backdrop-blur-xl">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>

          Open to opportunities
        </div>
      </div>
    </div>

    {/* Corner accent */}
    <div
      className="pointer-events-none absolute right-5 top-5 h-8 w-8 rounded-tr-xl border-r border-t border-primary/40"
      aria-hidden
    />

    <div
      className="pointer-events-none absolute bottom-5 left-5 h-8 w-8 rounded-bl-xl border-b border-l border-primary/40"
      aria-hidden
    />
  </div>

  {/* Floating status dot */}
  <div
    className="absolute -right-2 top-10 flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-card shadow-lg"
    aria-hidden
  >
    <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
  </div>
</div>

        </div>

        {/* marquee */}
     <div className="relative mt-20 overflow-hidden border-y border-border/60 bg-card/20 py-5">
  {/* Ambient gradient */}
  <div
    className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background via-background/80 to-transparent"
    aria-hidden
  />

  <div
    className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background via-background/80 to-transparent"
    aria-hidden
  />

  {/* Subtle top highlight */}
  <div
    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
    aria-hidden
  />

  {/* Marquee */}
  <div className="marquee-track flex w-max items-center gap-8">
    {[...marquee, ...marquee].map((m, i) => (
      <React.Fragment key={`${m}-${i}`}>
        <span
          className="
            group inline-flex items-center gap-3
            whitespace-nowrap
            font-mono text-[11px] font-medium
            uppercase tracking-[0.28em]
            text-muted-foreground
            transition-colors duration-300
            hover:text-foreground
          "
        >
          {/* Number */}
          <span className="text-[9px] text-primary/50">
            {String((i % marquee.length) + 1).padStart(2, "0")}
          </span>

          {m}
        </span>

        {/* Separator */}
        <span
          className="
            flex h-6 w-6 shrink-0 items-center justify-center
            rounded-full
            border border-primary/20
            bg-primary/5
            text-[10px] text-primary
            shadow-[0_0_15px_hsl(var(--primary)/0.08)]
            transition-all duration-300
            hover:border-primary/50
            hover:bg-primary/10
            hover:rotate-45
          "
          aria-hidden
        >
          ✦
        </span>
      </React.Fragment>
    ))}
  </div>

  {/* Bottom highlight */}
  <div
    className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
    aria-hidden
  />
</div>

      </section>

      {/* about + stats */}
      <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
        <SectionTitle index="01" title="About" kicker="Who I am" />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                I'm a frontend-focused software engineer in Pune, currently at ZIONIT AI Software,
                where I build production React and TypeScript applications used every day by real
                teams — healthcare dashboards, multi-cloud consoles and marketing automation tools.
              </p>
              <p>
                My work sits where design systems meet data. I care about typed components, honest
                loading states, forms that don't lie to users, and pages that stay fast as they grow.
                Alongside work I build personal products like <strong className="text-foreground">Toura</strong>,
                a tour and travel management platform, to keep pushing on architecture and motion.
              </p>
              <p>
                Currently completing a Master of Computer Application at Symbiosis International
                University while shipping full-time.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <div className="panel tilt-card h-full p-5">
                  <p className="font-mono text-3xl font-bold text-primary">{s.value}</p>
                  <p className="mt-2 text-xs leading-snug text-muted-foreground">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* experience */}
      <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
        <SectionTitle index="02" title="Experience" kicker="Where I've built" />
        <div className="relative border-l border-border pl-6 sm:pl-10">
          {experience.map((job) => (
            <Reveal key={job.company}>
              <div className="relative pb-10">
                <span className="absolute top-2 -left-[31px] h-3 w-3 rounded-full bg-primary sm:-left-[47px]" />
                <div className="panel p-6 sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="text-xl font-bold sm:text-2xl">{job.role}</h3>
                    <span className="font-mono text-xs tracking-widest text-primary uppercase">
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {job.company} · {job.place}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}

          {education.map((e, i) => (
            <Reveal key={e.school} delay={i * 90}>
              <div className="relative pb-10">
                <span className="absolute top-2 -left-[31px] h-3 w-3 rounded-full border border-primary bg-background sm:-left-[47px]" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold">{e.degree}</h3>
                  <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                    {e.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {e.school} · {e.place}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* skills */}
      <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
        <SectionTitle index="03" title="Skills" kicker="What I work with" />
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            {coreSkills.map((s, i) => (
              <Reveal key={s.name} delay={i * 70}>
                <div>
                  <div className="mb-2 flex items-baseline justify-between">
                    <span className="text-sm font-semibold">{s.name}</span>
                    <span className="font-mono text-xs text-primary">{s.level}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-primary transition-[width] duration-1000 ease-out"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((g, i) => (
              <Reveal key={g.title} delay={i * 90}>
                <div className="panel tilt-card h-full p-5">
                  <h3 className="font-mono text-xs tracking-[0.25em] text-primary uppercase">
                    {g.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((it) => (
                      <span
                        key={it}
                        className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium transition-colors hover:border-primary hover:text-primary"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* work */}
      <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
        <SectionTitle index="04" title="Selected Work" kicker="Projects" />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 110}>
              <article className="panel tilt-card group relative h-full overflow-hidden p-6 sm:p-8">
                <span className="absolute top-4 right-6 font-mono text-5xl font-bold text-foreground/5 transition-colors group-hover:text-primary/20">
                  {p.accent}
                </span>
                <p className="font-mono text-[11px] tracking-[0.25em] text-accent uppercase">
                  {p.kind}
                </p>
                <h3 className="mt-3 text-xl font-bold sm:text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.blurb}</p>
                <ul className="mt-5 space-y-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-secondary px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* contact */}
    <section
  id="contact"
  className="relative scroll-mt-24 overflow-hidden py-28 sm:py-36"
>
  {/* Background atmosphere */}
  <div
    className="aura bottom-0 left-1/2 h-[32rem] w-[42rem] -translate-x-1/2 opacity-60"
    aria-hidden
  />

  <div
    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,hsl(var(--primary)/0.08),transparent_55%)]"
    aria-hidden
  />

  <div className="relative mx-auto max-w-5xl px-5">
    <Reveal>
      {/* Section label */}
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 font-mono text-[10px] font-medium tracking-[0.25em] text-primary uppercase shadow-sm shadow-primary/5">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
          05 / Contact
        </div>
      </div>

      {/* Heading */}
      <h2 className="mx-auto mt-7 max-w-4xl text-center text-4xl font-bold tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
        Let's build something
        <span className="relative ml-2 inline-block text-primary">
          great
          <span
            className="absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-primary/0 via-primary to-primary/0"
            aria-hidden
          />
        </span>
        <span className="text-primary">.</span>
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-7 text-muted-foreground sm:text-base">
        Have a product to build, an idea to bring to life, or a frontend
        challenge worth solving? I'm open to frontend engineering roles,
        freelance projects, and interesting collaborations.
      </p>
    </Reveal>

    <Reveal delay={120}>
      {/* Main contact card */}
      <div className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-[2rem] border border-border/60 bg-card/50 p-2 shadow-2xl shadow-black/10 backdrop-blur-xl">
        {/* Card glow */}
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
          aria-hidden
        />

        <div className="relative rounded-[1.5rem] border border-border/40 bg-background/60 p-6 sm:p-8">
          {/* Availability row */}
          <div className="flex flex-col items-center justify-between gap-4 border-b border-border/50 pb-6 sm:flex-row">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
              </span>

              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">
                  Currently available
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Open to new opportunities & collaborations
                </p>
              </div>
            </div>

            <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
              Pune, India · IST
            </span>
          </div>

          {/* Email CTA */}
          <div className="py-8 text-center">
            <p className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
              Drop me a line
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="
                group mt-3 inline-flex max-w-full items-center gap-3
                rounded-2xl border border-primary/20
                bg-primary/5 px-5 py-3
                text-sm font-semibold text-primary
                transition-all duration-300
                hover:border-primary/40
                hover:bg-primary/10
                hover:shadow-lg hover:shadow-primary/10
                sm:text-base
              "
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/20">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>

              <span className="truncate">
                {profile.email}
              </span>

              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Divider */}
          <div className="relative flex items-center">
            <div className="h-px flex-1 bg-border/50" />
            <span className="px-4 font-mono text-[9px] tracking-[0.2em] text-muted-foreground/60 uppercase">
              or connect
            </span>
            <div className="h-px flex-1 bg-border/50" />
          </div>

          {/* Social / contact actions */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-2 rounded-xl border border-border/60 bg-card/40 px-4 py-3 text-xs font-semibold text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.35V8.98h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.3ZM5.34 7.42a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.57V8.98H3.56v11.47ZM22.23 0H1.77C.79 0 0 .78 0 1.75v20.5C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.75V1.75C24 .78 23.21 0 22.23 0Z" />
              </svg>
              LinkedIn
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-2 rounded-xl border border-border/60 bg-card/40 px-4 py-3 text-xs font-semibold text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.33-1.77-1.33-1.77-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.94 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
              </svg>
              GitHub
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="group flex items-center justify-center gap-2 rounded-xl border border-border/60 bg-card/40 px-4 py-3 text-xs font-semibold text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
              </svg>
              Call
            </a>

            <a
              href={resumeUrl}
              download="Divakar_Barhate_Resume.pdf"
              className="group flex items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-4 py-3 text-xs font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/10 hover:shadow-md hover:shadow-primary/10"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              Resume
            </a>
          </div>
        </div>
      </div>
    </Reveal>

    {/* Footer micro-copy */}
    <Reveal delay={220}>
      <div className="mt-8 flex flex-col items-center justify-center gap-2 text-center">
        <p className="font-mono text-[10px] tracking-[0.18em] text-foreground uppercase">
          Have an idea? Let's talk.
        </p>

      </div>
    </Reveal>
  </div>
</section>


    <footer className="relative overflow-hidden border-t border-border/60 bg-card/20">
  {/* Subtle top glow */}
  <div
    className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
    aria-hidden
  />

  <div className="mx-auto max-w-6xl px-5 py-10">
    <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
      {/* Brand */}
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 text-sm font-bold text-primary shadow-sm shadow-primary/10">
          DB
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">
            Divakar Barhate
          </p>

          <div className="mt-0.5 flex items-center gap-2 font-mono text-[10px] tracking-wide text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>

            Available for opportunities
          </div>
        </div>
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] text-muted-foreground">
        <span className="rounded-full border border-border/60 bg-background/50 px-3 py-1.5">
          React
        </span>

        <span className="text-primary/50">✦</span>

        <span className="rounded-full border border-border/60 bg-background/50 px-3 py-1.5">
          TypeScript
        </span>

        <span className="text-primary/50">✦</span>

        <span className="rounded-full border border-border/60 bg-background/50 px-3 py-1.5">
          Tailwind
        </span>
      </div>

      {/* Back to top */}
      <button
        type="button"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        aria-label="Back to top"
        className="
          group flex h-10 w-10 shrink-0 items-center justify-center
          rounded-xl border border-border/60
          bg-background/50
          text-muted-foreground
          transition-all duration-300
          hover:-translate-y-1
          hover:border-primary/40
          hover:bg-primary/5
          hover:text-primary
        "
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-300 group-hover:-translate-y-0.5"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
    </div>

    {/* Bottom row */}
    <div className="mt-8 flex flex-col gap-3 border-t border-border/40 pt-5 sm:flex-row sm:items-center sm:justify-between">
      <p className="font-mono text-[10px] text-muted-foreground">
        © {new Date().getFullYear()} Divakar Barhate. All rights reserved.
      </p>

      <div className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground">
        <span>Designed & built with</span>

        <span
          className="text-primary"
          aria-label="love"
        >
          ♥
        </span>

        <span>in Pune, India</span>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
}
