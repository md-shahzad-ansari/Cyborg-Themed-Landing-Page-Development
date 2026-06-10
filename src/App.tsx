import { motion, useReducedMotion } from "framer-motion";

const systems = [
  {
    number: "01",
    title: "Signal-first hierarchy",
    copy:
      "Brand, headline, and call to action sit in a clean visual stack so the interface reads instantly on any screen size.",
  },
  {
    number: "02",
    title: "Cyborg atmosphere",
    copy:
      "Layered grids, metallic gradients, and luminous accents create a futuristic tone without overwhelming the layout.",
  },
  {
    number: "03",
    title: "Intentional motion",
    copy:
      "A few slow transitions add presence and rhythm, making the page feel alive while staying easy to use.",
  },
];

const protocol = [
  {
    title: "Sense",
    copy:
      "The hero establishes the brand immediately with a dominant wordmark, a concise promise, and a strong visual anchor.",
  },
  {
    title: "Focus",
    copy:
      "Supporting sections keep to one purpose each, using open spacing and thin dividers instead of heavy cards.",
  },
  {
    title: "Act",
    copy:
      "Clear button hierarchy closes the page with a direct next step for demos, access requests, or launch prep.",
  },
];

function CyborgIllustration() {
  return (
    <svg
      viewBox="0 0 960 1180"
      className="h-full w-full drop-shadow-[0_0_35px_rgba(34,211,238,0.15)]"
      role="img"
      aria-label="Stylized cyborg portrait with glowing circuits"
    >
      <defs>
        <linearGradient id="metal-shell" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#243041" />
          <stop offset="45%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>
        <linearGradient id="neon-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#67e8f9" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="magenta-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f472b6" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
        </linearGradient>
        <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="14" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
          />
        </filter>
      </defs>

      <g opacity="0.95">
        <ellipse cx="520" cy="1040" rx="250" ry="58" fill="#22d3ee" fillOpacity="0.12" filter="url(#soft-glow)" />
        <ellipse cx="540" cy="310" rx="180" ry="220" fill="#f472b6" fillOpacity="0.06" filter="url(#soft-glow)" />

        <path
          d="M335 250c34-88 110-141 180-141s144 53 178 141l15 45v168l-13 31-29 20-39 128-6 73 26 70-37 80-95 73H400l-95-73-37-80 26-70-6-73-39-128-29-20-13-31V295l15-45z"
          fill="url(#metal-shell)"
          stroke="rgba(148,163,184,0.28)"
          strokeWidth="4"
        />

        <path
          d="M409 204h145c28 0 52 12 68 32l22 28c10 13 15 29 15 46v92c0 18-6 35-18 48l-27 30c-10 11-15 25-15 40v64c0 12 5 24 14 32l27 25c13 12 20 29 20 46v49c0 18-7 35-20 47l-62 55c-17 15-39 23-61 23H430c-22 0-44-8-61-23l-62-55c-13-12-20-29-20-47v-49c0-17 7-34 20-46l27-25c9-8 14-20 14-32v-64c0-15-5-29-15-40l-27-30c-12-13-18-30-18-48v-92c0-17 5-33 15-46l22-28c16-20 40-32 68-32z"
          fill="none"
          stroke="url(#neon-cyan)"
          strokeWidth="3.5"
        />

        <path
          d="M416 326c38-16 90-24 163-24 46 0 82 7 109 19"
          fill="none"
          stroke="rgba(103,232,249,0.55)"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M402 344h171l35 34v72c0 17-7 33-20 44l-53 45H412l-53-45c-13-11-20-27-20-44v-72l35-34z"
          fill="rgba(15,23,42,0.94)"
          stroke="rgba(148,163,184,0.24)"
          strokeWidth="3"
        />

        <path d="M388 430h184" stroke="url(#magenta-glow)" strokeWidth="5" strokeLinecap="round" />
        <path d="M384 458h192" stroke="rgba(103,232,249,0.45)" strokeWidth="2" strokeLinecap="round" />

        <circle cx="478" cy="405" r="44" fill="rgba(34,211,238,0.08)" stroke="rgba(103,232,249,0.78)" strokeWidth="4" />
        <circle cx="478" cy="405" r="14" fill="#67e8f9" />
        <circle cx="478" cy="405" r="90" fill="none" stroke="rgba(103,232,249,0.18)" strokeWidth="2" strokeDasharray="10 14" />

        <path
          d="M418 512c18 14 38 21 61 21s43-7 61-21"
          fill="none"
          stroke="rgba(203,213,225,0.32)"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M383 610c32 39 70 58 112 58 45 0 83-19 114-58"
          fill="none"
          stroke="rgba(103,232,249,0.45)"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <g opacity="0.7">
          <path d="M326 285h-76" stroke="rgba(248,113,113,0.32)" strokeWidth="4" strokeLinecap="round" />
          <path d="M710 285h76" stroke="rgba(248,113,113,0.32)" strokeWidth="4" strokeLinecap="round" />
          <path d="M312 395h-58" stroke="rgba(103,232,249,0.34)" strokeWidth="3" strokeLinecap="round" />
          <path d="M706 395h58" stroke="rgba(103,232,249,0.34)" strokeWidth="3" strokeLinecap="round" />
          <path d="M332 740h-88" stroke="rgba(103,232,249,0.25)" strokeWidth="3" strokeLinecap="round" />
          <path d="M716 740h88" stroke="rgba(103,232,249,0.25)" strokeWidth="3" strokeLinecap="round" />
        </g>

        <g opacity="0.85">
          <path d="M482 128v70" stroke="rgba(103,232,249,0.4)" strokeWidth="4" strokeLinecap="round" />
          <circle cx="482" cy="118" r="10" fill="rgba(103,232,249,0.9)" />
          <path d="M482 908v76" stroke="rgba(103,232,249,0.4)" strokeWidth="4" strokeLinecap="round" />
          <circle cx="482" cy="1000" r="10" fill="rgba(244,114,182,0.9)" />
        </g>

        <path
          d="M390 790h176l48 50-30 96-96 58h-70l-96-58-30-96z"
          fill="rgba(15,23,42,0.9)"
          stroke="rgba(148,163,184,0.24)"
          strokeWidth="3"
        />
        <path d="M406 834h144" stroke="rgba(103,232,249,0.34)" strokeWidth="3" strokeLinecap="round" />
        <path d="M392 872h172" stroke="url(#neon-cyan)" strokeWidth="4" strokeLinecap="round" />
        <path d="M430 910h100" stroke="rgba(244,114,182,0.55)" strokeWidth="4" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export default function App() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#05070c] text-slate-100 selection:bg-cyan-300/30 selection:text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_32%),radial-gradient(circle_at_80%_20%,_rgba(244,114,182,0.12),_transparent_28%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.4),_transparent_44%)]" />
      <div className="cyber-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="noise pointer-events-none absolute inset-0" />

      <header className="sticky top-0 z-30 border-b border-white/5 bg-[#05070c]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 shadow-[0_0_28px_rgba(34,211,238,0.15)]">
              <span className="h-4 w-4 rounded-full border border-cyan-200/90 bg-cyan-300/80" />
            </span>
            <span className="flex flex-col">
              <span className="text-[0.72rem] uppercase tracking-[0.45em] text-cyan-200/80">Cybrion</span>
              <span className="text-[0.65rem] uppercase tracking-[0.35em] text-slate-400">cyborg interface system</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-300/85 md:flex">
            <a className="transition-colors hover:text-white" href="#systems">
              Systems
            </a>
            <a className="transition-colors hover:text-white" href="#flow">
              Flow
            </a>
            <a className="transition-colors hover:text-white" href="#access">
              Access
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="relative z-10">
        <section className="relative min-h-[calc(100vh-73px)]">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 lg:min-h-[calc(100vh-73px)] lg:grid-cols-[1fr_0.95fr] lg:py-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-20 max-w-2xl"
            >
              <p className="text-xs uppercase tracking-[0.55em] text-cyan-300/70">Cyborg landing experience</p>
              <h1 className="mt-5 text-[clamp(3.75rem,11vw,7.8rem)] font-black uppercase leading-[0.84] tracking-[0.22em] text-transparent bg-gradient-to-r from-white via-cyan-100 to-fuchsia-200 bg-clip-text sm:tracking-[0.34em]">
                Cybrion
              </h1>
              <h2 className="mt-7 max-w-xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                Human intuition, machine reflex.
              </h2>
              <p className="mt-6 max-w-xl text-pretty text-base leading-8 text-slate-300/82 sm:text-lg">
                A responsive cyborg-themed concept with cinematic glow, engineered contrast, and motion that feels precise rather than noisy.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <motion.a
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                  href="#access"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_40px_rgba(34,211,238,0.25)] transition-colors hover:bg-cyan-200"
                >
                  Request demo
                </motion.a>
                <a
                  href="#systems"
                  className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-cyan-300/40 hover:bg-white/[0.08]"
                >
                  Explore systems
                </a>
              </div>

              <p className="mt-8 max-w-lg border-l border-cyan-300/35 pl-4 text-sm leading-7 text-slate-400">
                Designed to look sharp on mobile, dramatic on desktop, and polished enough to pitch a future-facing product, studio, or research brand.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative min-h-[560px] lg:min-h-[760px]"
            >
              <div className="absolute inset-0 overflow-hidden lg:-right-10 lg:inset-y-0 lg:left-auto lg:w-[58vw]">
                <motion.div
                  animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <CyborgIllustration />
                </motion.div>

                <motion.div
                  animate={reduceMotion ? undefined : { rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute left-[12%] top-[8%] h-72 w-72 rounded-full border border-cyan-300/15"
                  style={{ boxShadow: "0 0 90px rgba(34,211,238,0.12) inset" }}
                />
                <motion.div
                  animate={reduceMotion ? undefined : { rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute left-[24%] top-[18%] h-52 w-52 rounded-full border border-fuchsia-300/15"
                />
                <div className="scanline pulse-glow absolute left-[52%] top-8 h-[82%] w-[1px] opacity-60" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#05070c] to-transparent" />
              </div>
            </motion.div>
          </div>
        </section>

        <section id="systems" className="mx-auto max-w-7xl px-6 py-10 sm:py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <p className="text-xs uppercase tracking-[0.55em] text-fuchsia-300/70">Systems</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Every surface works like part of the machine.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300/80 sm:text-base">
              The layout stays open and readable, while color, motion, and structure carry the cyborg identity all the way down the page.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-0 border-y border-white/10 md:grid-cols-3 md:divide-x md:divide-white/10">
            {systems.map((system, index) => (
              <motion.div
                key={system.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.65, delay: index * 0.08, ease: "easeOut" }}
                className="group py-8 md:px-8"
              >
                <p className="text-sm uppercase tracking-[0.45em] text-cyan-300/55">{system.number}</p>
                <h3 className="mt-5 text-xl font-semibold text-white transition-colors group-hover:text-cyan-200">
                  {system.title}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300/78">{system.copy}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="flow" className="mx-auto max-w-7xl px-6 py-10 sm:py-16 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <p className="text-xs uppercase tracking-[0.55em] text-cyan-300/70">Architecture</p>
              <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Motion that feels engineered, not decorative.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300/80 sm:text-base">
                Three deliberate transitions build presence: a floating hero visual, a subtle scan through the viewport, and reveals that activate as you scroll.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyan-300/0 via-cyan-300/45 to-cyan-300/0" />
              <div className="space-y-8">
                {protocol.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                    className="relative pl-16"
                  >
                    <div className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-xs font-semibold text-cyan-100 shadow-[0_0_25px_rgba(34,211,238,0.12)]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-lg font-medium text-white">{item.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-300/78">{item.copy}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="access" className="mx-auto max-w-7xl px-6 pb-16 pt-10 sm:pb-24 sm:pt-16 lg:pt-24">
          <div className="border-t border-white/10 pt-10 sm:pt-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <p className="text-xs uppercase tracking-[0.55em] text-fuchsia-300/70">Access</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Ready for launch, pitch, or prototype.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300/80 sm:text-base">
                  This landing page is structured to feel premium on desktop and clean on mobile, with enough visual drama to stand out in a cyberpunk-inspired portfolio.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
                className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row"
              >
                <a
                  href="mailto:demo@cybrion.studio"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
                >
                  Book a walkthrough
                </a>
                <a
                  href="#top"
                  className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-cyan-300/40 hover:bg-white/10"
                >
                  Back to top
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}