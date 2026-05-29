import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useEffect, useRef, useState } from "react";
import {
  Calendar, MapPin, Users, Music, Flame, ArrowRight, Play, Clock, Mic, Star, Zap
} from "lucide-react";
import heroCrowd from "@/assets/hero-crowd.jpg";
import eventMarch from "@/assets/event-march.jpg";
import eventStage from "@/assets/event-stage.jpg";
import logo from "@/assets/logo-marcha.png";
import {
  statsData, eventsData, highlightsData,
  fakeSponsorsList, siteConfig, lineupData,
} from "@/data/mockData";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marcha Para Jesus Campinas — Fest Gospel 2026" },
      { name: "description", content: "O maior movimento gospel de Campinas. Adoração, fé e celebração nas ruas. Confira a programação, patrocinadores e a loja oficial." },
      { property: "og:title", content: "Marcha Para Jesus Campinas" },
      { property: "og:description", content: "O maior movimento gospel de Campinas — Fest Gospel." },
    ],
  }),
  component: Index,
});

/* ── Countdown hook ──────────────────────────────────────── */
function useCountdown(target: string) {
  const calc = () => {
    const diff = new Date(target).getTime() - Date.now();
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff % 86400000) / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, [target]);
  return t;
}

/* ── Parallax hook ───────────────────────────────────────── */
function useParallax(speed = 0.4) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed;
      const img = el.querySelector<HTMLElement>(".parallax-img");
      if (img) img.style.transform = `translateY(${offset}px) scale(1.15)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);
  return ref;
}

/* ── Page ────────────────────────────────────────────────── */
function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <Stats />
      <SponsorStrip />
      <About />
      <Lineup />
      <CalendarPreview />
      <Highlights />
      <CTA />
      <SiteFooter />
    </div>
  );
}

/* ── Hero ────────────────────────────────────────────────── */
function Hero() {
  const countdown = useCountdown("2026-06-06T10:00:00");
  const parallaxRef = useParallax(0.35);

  return (
    <section ref={parallaxRef} className="relative overflow-hidden bg-brand-ox-deep min-h-screen flex items-center">
      {/* Parallax background */}
      <div className="absolute inset-0">
        <img
          src={heroCrowd}
          alt="Multidão em adoração"
          className="parallax-img w-full h-full object-cover opacity-45 scale-[1.15] transition-transform duration-75"
          width={1920} height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-ox-deep/85 via-brand-ox-deep/55 to-brand-ox-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ox-deep via-transparent to-transparent" />
        {/* radial glow */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 60% at 70% 50%, oklch(0.68 0.21 42 / 0.12) 0%, transparent 70%)" }} />
      </div>

      {/* Floating blobs */}
      <div className="absolute top-20 right-[8%] w-72 h-72 bg-brand-orange/10 animate-blob blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-32 left-[5%] w-56 h-56 bg-red-900/20 animate-blob-delay blur-2xl rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 text-brand-cream">
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full glass-fire text-brand-orange text-xs uppercase tracking-[0.25em] mb-6">
            <Flame size={14} className="animate-pulse" /> Fest Gospel · Edição 2026
          </div>
          <h1 className="animate-fade-in-up-d1 font-display text-6xl sm:text-7xl lg:text-8xl leading-[0.9] uppercase">
            Marcha <span className="text-gradient-flame">Para</span><br />
            Jesus<br />
            <span className="text-3xl sm:text-4xl lg:text-5xl text-brand-cream/60">Campinas</span>
          </h1>
          <p className="animate-fade-in-up-d2 mt-8 max-w-xl text-lg text-brand-cream/80 leading-relaxed">
            Milhares de vozes. Uma só voz. Junte-se ao maior movimento de adoração da
            cidade e viva uma experiência inesquecível de fé, música e união.
          </p>
          <div className="animate-fade-in-up-d3 mt-10 flex flex-wrap gap-4">
            <Link
              to="/calendario"
              className="inline-flex items-center gap-2 px-7 py-4 bg-gradient-flame text-brand-ox-deep font-bold uppercase tracking-wider rounded-md shadow-glow hover:scale-105 hover:shadow-glow-strong transition-all duration-200"
            >
              Ver Programação <ArrowRight size={18} />
            </Link>
            <a
              href="#video"
              className="group inline-flex items-center gap-2 px-7 py-4 glass-dark text-brand-cream font-bold uppercase tracking-wider rounded-md hover:bg-brand-cream/10 transition"
            >
              <span className="relative flex h-4 w-4">
                <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75" />
                <Play size={16} className="relative" fill="currentColor" />
              </span>
              Assistir vídeo
            </a>
          </div>
          <div className="animate-fade-in-up-d4 mt-8 flex flex-wrap gap-6 text-sm text-brand-cream/65">
            <div className="flex items-center gap-2"><Calendar size={16} className="text-brand-orange" /> {siteConfig.eventDate}</div>
            <div className="flex items-center gap-2"><MapPin size={16} className="text-brand-orange" /> {siteConfig.location}</div>
          </div>

          {/* Countdown */}
          <div className="animate-fade-in-up-d4 mt-10 grid grid-cols-4 gap-3 max-w-xs">
            {[
              { v: countdown.d, l: "Dias" },
              { v: countdown.h, l: "Horas" },
              { v: countdown.m, l: "Min" },
              { v: countdown.s, l: "Seg" },
            ].map(({ v, l }) => (
              <div key={l} className="glass-dark rounded-lg p-3 text-center">
                <div className="font-display text-3xl text-brand-orange leading-none">{String(v).padStart(2, "0")}</div>
                <div className="text-[9px] uppercase tracking-widest text-brand-cream/60 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 hidden lg:block">
          <div className="relative aspect-square animate-float">
            <div className="absolute inset-0 bg-gradient-flame opacity-25 blur-3xl rounded-full animate-pulse" />
            <img
              src={logo}
              alt="Logo Marcha"
              className="relative w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(249,85,1,0.5)]"
            />
          </div>
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-flame py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(2).fill(null).map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4 text-brand-ox-deep font-display text-xl uppercase tracking-widest">
              {Array(10).fill("Marcha Para Jesus · Campinas · Fest Gospel · 2026 ·").map((t, j) => (
                <span key={j} className="flex items-center gap-8">{t}<Flame size={18} /></span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Stats ───────────────────────────────────────────────── */
function Stats() {
  return (
    <section className="bg-brand-ox text-brand-cream py-16 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 100% at 50% 50%, oklch(0.68 0.21 42 / 0.08) 0%, transparent 70%)" }} />
      <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {statsData.map((s, i) => (
          <div key={s.l} className={`text-center group animate-fade-in-up-d${i + 1}`}>
            <div className="font-display text-5xl sm:text-7xl text-brand-orange group-hover:scale-110 transition-transform duration-300">
              {s.n}
            </div>
            <div className="text-xs uppercase tracking-[0.3em] mt-2 text-brand-cream/60">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── About + Video ───────────────────────────────────────── */
function About() {
  const parallaxRef = useParallax(0.25);
  return (
    <section id="video" ref={parallaxRef} className="py-28 bg-brand-ox-deep text-brand-cream relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5 parallax-img" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f95501' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      {/* Corner glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/8 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-700/10 blur-2xl rounded-full" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-brand-orange text-xs uppercase tracking-[0.3em] font-bold">
            <Zap size={12} /> Sobre o movimento
          </span>
          <h2 className="font-display text-5xl sm:text-6xl mt-4 uppercase leading-none">
            Uma cidade<br /><span className="text-gradient-flame">em adoração</span>
          </h2>
          <div className="mt-6 w-20 h-1 bg-gradient-flame rounded-full" />
          <p className="mt-6 text-lg text-brand-cream/80 leading-relaxed">
            A Marcha Para Jesus de Campinas é mais que um evento — é um movimento que une
            igrejas, famílias e gerações em torno de uma só mensagem: o amor de Cristo.
            Nas ruas da nossa cidade, levantamos uma bandeira de fé, esperança e transformação.
          </p>
          <p className="mt-4 text-brand-cream/70 leading-relaxed">
            Com programação musical, ministrações e a tradicional marcha pelas avenidas
            centrais, o Fest Gospel é a celebração que aquece o coração de Campinas todos os anos.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { icon: Calendar, t: "06 de Junho", l: "Data do evento" },
              { icon: MapPin, t: "Taquaral", l: "Local do evento" },
            ].map(({ icon: Icon, t, l }) => (
              <div key={l} className="glass-fire rounded-xl p-4">
                <Icon size={18} className="text-brand-orange mb-2" />
                <div className="font-bold text-brand-cream">{t}</div>
                <div className="text-xs text-brand-cream/60">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-deep group">
          <img
            src={eventStage}
            alt="Vídeo institucional"
            className="parallax-img w-full h-full object-cover scale-[1.15]"
            loading="lazy" width={1600} height={1000}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ox-deep/90 via-brand-ox-deep/20 to-transparent" />
          {/* Glow border */}
          <div className="absolute inset-0 rounded-2xl ring-1 ring-brand-orange/30 group-hover:ring-brand-orange/70 transition" />
          <button
            aria-label="Reproduzir vídeo institucional"
            className="absolute inset-0 grid place-items-center"
          >
            <span className="relative h-24 w-24 grid place-items-center">
              <span className="absolute inset-0 rounded-full bg-brand-orange animate-pulse-glow" />
              <span className="relative h-24 w-24 rounded-full bg-gradient-flame grid place-items-center shadow-glow-strong group-hover:scale-110 transition">
                <Play size={32} className="text-brand-ox-deep ml-1" fill="currentColor" />
              </span>
            </span>
          </button>
          <div className="absolute bottom-5 left-5 text-brand-cream font-display text-2xl uppercase">Vídeo institucional</div>
        </div>
      </div>
    </section>
  );
}

/* ── Lineup Strip ────────────────────────────────────────── */
function Lineup() {
  return (
    <section className="py-28 bg-background relative overflow-hidden">
      {/* Top diagonal gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-orange-50/30" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-brand-orange text-xs uppercase tracking-[0.3em] font-bold flex items-center gap-2">
              <Music size={12} /> Line-up confirmado
            </span>
            <h2 className="font-display text-5xl sm:text-6xl mt-3 text-brand-ox uppercase leading-none">
              Atrações <span className="text-gradient-flame">2026</span>
            </h2>
          </div>
          <Link to="/calendario" className="text-brand-orange uppercase tracking-wider text-sm font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
            Ver programação <ArrowRight size={16} />
          </Link>
        </div>

        {/* Headliners */}
        <div className="grid md:grid-cols-2 gap-6 mb-8" >
          {lineupData.filter(a => a.headliner).map((a) => (
            <div key={a.name} className="relative group rounded-2xl overflow-hidden bg-gradient-to-br from-brand-ox-deep via-brand-ox to-brand-ox-deep p-8 border border-brand-orange/25 hover:border-brand-orange/70 transition shadow-deep hover:shadow-glow">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-orange/10 blur-2xl rounded-full" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-900/15 blur-xl rounded-full" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-brand-orange/20 text-brand-orange text-[10px] uppercase tracking-widest rounded-full border border-brand-orange/30">
                    <Star size={10} fill="currentColor" /> {a.tag}
                  </span>
                </div>
                <h3 className="font-display text-4xl sm:text-5xl text-brand-orange uppercase">{a.name}</h3>
                <div className="mt-4 flex gap-6 text-sm text-brand-cream/60">
                  <span className="flex items-center gap-1.5"><Clock size={14} className="text-brand-orange" />{a.time}</span>
                  <span className="flex items-center gap-1.5"><Mic size={14} className="text-brand-orange" />{a.stage}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rest of lineup */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {lineupData.filter(a => !a.headliner).map((a) => (
            <div key={a.name} className="group p-4 rounded-xl glass-fire border border-brand-orange/15 hover:border-brand-orange/60 transition hover:shadow-glow text-center">
              <div className="font-display text-lg text-brand-ox uppercase leading-tight">{a.name}</div>
              <div className="text-[10px] text-brand-orange mt-1 uppercase tracking-widest">{a.time}</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">{a.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Sponsor Strip ───────────────────────────────────────── */
function SponsorStrip() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, oklch(0.94 0.025 85) 0%, oklch(0.97 0.018 85) 50%, oklch(0.92 0.03 75) 100%)" }}>
      {/* Decorative diagonal stripe */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(45deg, oklch(0.18 0.09 25) 0px, oklch(0.18 0.09 25) 1px, transparent 1px, transparent 20px)" }} />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <span className="inline-flex items-center gap-2 text-brand-orange text-xs uppercase tracking-[0.3em] font-bold">
          <Star size={12} fill="currentColor" /> Quem apoia
        </span>
        <h2 className="font-display text-4xl sm:text-5xl mt-3 text-brand-ox uppercase">
          Patrocinadores oficiais
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Marcas que acreditam e investem em transformação.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fakeSponsorsList.map((s, i) => (
            <div key={s.name} className={`group relative flex flex-col items-center p-8 bg-card rounded-2xl border border-brand-ox/10 hover:border-brand-orange shadow-sm hover:shadow-glow transition-all duration-300 animate-fade-in-up-d${Math.min(i + 1, 4)}`}>
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-orange/0 to-brand-orange/0 group-hover:from-brand-orange/5 group-hover:to-transparent transition-all duration-500" />
              <div className="relative h-16 w-16 bg-gradient-flame rounded-2xl flex items-center justify-center mb-5 shadow-glow group-hover:scale-110 transition-transform duration-300">
                <s.icon size={28} className="text-brand-ox-deep" />
              </div>
              <h3 className="relative font-display text-2xl text-brand-ox tracking-wider uppercase text-center">{s.name}</h3>
              <p className="relative text-muted-foreground text-sm text-center mt-2 leading-relaxed">{s.desc}</p>
              <div className="relative mt-4 w-8 h-0.5 bg-gradient-flame rounded-full group-hover:w-16 transition-all duration-300" />
            </div>
          ))}
        </div>

        <Link
          to="/patrocinadores"
          className="mt-12 inline-flex items-center gap-2 px-7 py-3.5 bg-brand-ox text-brand-cream uppercase tracking-wider font-bold rounded-md hover:bg-gradient-flame hover:text-brand-ox-deep transition-all duration-300"
        >
          Conheça todos <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

/* ── Calendar Preview ────────────────────────────────────── */
function CalendarPreview() {
  return (
    <section className="py-24 bg-brand-ox-deep relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 70% at 80% 50%, oklch(0.68 0.21 42 / 0.07) 0%, transparent 70%)" }} />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-brand-orange text-xs uppercase tracking-[0.3em] font-bold">Não perca nada</span>
            <h2 className="font-display text-5xl sm:text-6xl mt-3 text-brand-cream uppercase leading-none">
              Próximos <span className="text-gradient-flame">eventos</span>
            </h2>
          </div>
          <Link to="/calendario" className="text-brand-orange uppercase tracking-wider text-sm font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
            Ver agenda completa <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {eventsData.map((e, i) => (
            <div key={i} className="group relative glass-dark rounded-2xl p-6 border border-brand-cream/10 hover:border-brand-orange/60 transition hover:shadow-glow overflow-hidden flex flex-col">
              <div className="absolute -top-8 -right-8 h-28 w-28 bg-brand-orange/8 rounded-full blur-2xl group-hover:bg-brand-orange/20 transition" />
              <div className="flex items-center justify-between mb-5">
                <div className="text-center bg-gradient-flame rounded-xl px-4 py-3 shadow-glow">
                  <div className="font-display text-2xl text-brand-ox-deep leading-none">{e.date}</div>
                  <div className="text-[9px] uppercase tracking-widest mt-1 text-brand-ox-deep/70">{e.year}</div>
                </div>
                <e.icon className="text-brand-orange opacity-50 group-hover:opacity-100 group-hover:scale-110 transition" size={28} />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-brand-orange font-bold">{e.tag}</span>
              <h3 className="font-display text-xl text-brand-cream uppercase mt-1 leading-tight">{e.title}</h3>
              <div className="mt-auto pt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-brand-cream/50">
                <span className="flex items-center gap-1.5"><Clock size={12} className="text-brand-orange" /> {e.time}</span>
                <span className="flex items-center gap-1.5"><MapPin size={12} className="text-brand-orange" /> {e.loc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Highlights ──────────────────────────────────────────── */
function Highlights() {
  const parallaxRef = useParallax(0.2);
  return (
    <section className="py-28 bg-background relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-brand-orange text-xs uppercase tracking-[0.3em] font-bold">O que esperar</span>
            <h2 className="font-display text-5xl sm:text-6xl mt-3 text-brand-ox uppercase">
              Destaques <span className="text-gradient-flame">do evento</span>
            </h2>
          </div>
          <Link to="/calendario" className="text-brand-orange uppercase tracking-wider text-sm font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
            Ver agenda completa <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlightsData.map((it, i) => (
            <div key={it.t} className={`group relative p-8 border border-brand-orange/15 rounded-2xl bg-gradient-to-br from-card to-orange-50/20 hover:border-brand-orange/50 transition hover:shadow-glow overflow-hidden animate-fade-in-up-d${i + 1}`}>
              <div className="absolute -top-12 -right-12 h-36 w-36 bg-brand-orange/8 rounded-full blur-2xl group-hover:bg-brand-orange/25 transition duration-500" />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-flame scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
              <div className="relative h-14 w-14 bg-gradient-flame rounded-xl flex items-center justify-center shadow-glow mb-6 group-hover:scale-110 transition">
                <it.icon size={26} className="text-brand-ox-deep" />
              </div>
              <h3 className="font-display text-2xl text-brand-ox uppercase mt-2 relative">{it.t}</h3>
              <p className="text-muted-foreground mt-3 relative leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>

        {/* Wide image banner */}
        <div ref={parallaxRef} className="rounded-3xl overflow-hidden relative aspect-[21/8] shadow-deep">
          <img
            src={eventMarch}
            alt="Marcha pelas ruas"
            className="parallax-img w-full h-full object-cover scale-[1.15]"
            loading="lazy" width={1600} height={1000}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-ox-deep via-brand-ox-deep/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ox-deep/40 to-transparent" />
          <div className="absolute inset-0 flex items-center p-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-0.5 w-12 bg-gradient-flame" />
                <span className="text-brand-orange text-xs uppercase tracking-widest">Campinas • 2026</span>
              </div>
              <h3 className="font-display text-5xl sm:text-6xl text-brand-cream uppercase max-w-lg leading-none">
                Uma multidão.<br /><span className="text-gradient-flame">Uma direção.</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── CTA ─────────────────────────────────────────────────── */
function CTA() {
  return (
    <section className="py-32 bg-brand-ox-deep text-brand-cream relative overflow-hidden">
      {/* Background image with heavy overlay */}
      <div className="absolute inset-0">
        <img src={heroCrowd} alt="" className="w-full h-full object-cover opacity-12" loading="lazy" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-ox-deep via-brand-ox-deep/95 to-brand-ox" />
      </div>
      {/* Glows */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 60% at 50% 50%, oklch(0.68 0.21 42 / 0.12) 0%, transparent 70%)" }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-brand-orange/50 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-flame shadow-glow-strong mb-6 animate-pulse-glow">
          <Flame className="text-brand-ox-deep" size={32} />
        </div>
        <h2 className="font-display text-5xl sm:text-7xl uppercase mt-2 leading-none">
          Seja parte<br /><span className="text-gradient-flame">dessa história</span>
        </h2>
        <p className="mt-6 text-lg text-brand-cream/75 max-w-2xl mx-auto">
          Patrocine, participe ou compartilhe. Junte-se ao movimento que está mudando Campinas.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link
            to="/patrocinadores"
            className="px-9 py-4 bg-gradient-flame text-brand-ox-deep font-bold uppercase tracking-wider rounded-md shadow-glow hover:scale-105 hover:shadow-glow-strong transition-all duration-200"
          >
            Quero patrocinar
          </Link>
          <Link
            to="/contato"
            className="px-9 py-4 glass-dark font-bold uppercase tracking-wider rounded-md hover:bg-brand-cream/10 transition"
          >
            Fale conosco
          </Link>
        </div>
      </div>
    </section>
  );
}
