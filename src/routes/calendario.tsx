import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Calendar, Clock, Flame, MapPin, Mic, Music, Star, Users, Zap } from "lucide-react";
import { lineupData, eventsData, scheduleData, siteConfig } from "@/data/mockData";

export const Route = createFileRoute("/calendario")({
  head: () => ({
    meta: [
      { title: "Calendário — Marcha Para Jesus Campinas" },
      { name: "description", content: "Programação completa da Marcha Para Jesus Campinas. Datas, horários e atrações do Fest Gospel." },
      { property: "og:title", content: "Calendário — Marcha Para Jesus Campinas" },
    ],
  }),
  component: Page,
});

const typeColor: Record<string, string> = {
  Logística: "text-slate-400 bg-slate-400/10 border-slate-400/20",
  Espiritual: "text-sky-400 bg-sky-400/10 border-sky-400/20",
  Marcha: "text-brand-orange bg-brand-orange/10 border-brand-orange/20",
  Música: "text-purple-400 bg-purple-400/10 border-purple-400/20",
  Palavra: "text-amber-400 bg-amber-400/10 border-amber-400/20",
};

function Page() {
  const headliners = lineupData.filter(a => a.headliner);
  const rest = lineupData.filter(a => !a.headliner);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* ── Hero ── */}
      <section className="bg-brand-ox-deep text-brand-cream py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div className="absolute top-10 right-[8%] w-80 h-80 bg-brand-orange/8 animate-blob blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-[4%] w-60 h-60 bg-red-900/12 animate-blob-delay blur-2xl rounded-full pointer-events-none" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 55% 70% at 50% 40%, oklch(0.68 0.21 42 / 0.12) 0%, transparent 70%)" }} />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-fire text-brand-orange text-xs uppercase tracking-[0.25em] mb-6 animate-fade-in-up">
            <Calendar size={12} /> Programação Oficial 2026
          </div>
          <h1 className="animate-fade-in-up-d1 font-display text-7xl sm:text-9xl uppercase leading-none">
            Calen<span className="text-gradient-flame">dário</span>
          </h1>
          <p className="animate-fade-in-up-d2 mt-6 text-xl text-brand-cream/75 max-w-xl mx-auto leading-relaxed">
            Marque na sua agenda. A cidade vai parar.
          </p>

          {/* Info pills */}
          <div className="animate-fade-in-up-d3 mt-10 flex flex-wrap gap-3 justify-center">
            {[
              { icon: Calendar, text: siteConfig.eventDate },
              { icon: MapPin, text: "Praça Arautos da Paz · Taquaral" },
              { icon: Flame, text: "Entrada gratuita" },
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="inline-flex items-center gap-2 px-4 py-2 glass-dark rounded-full text-sm text-brand-cream/80">
                <Icon size={14} className="text-brand-orange" /> {text}
              </span>
            ))}
          </div>

          {/* Stat badges */}
          <div className="animate-fade-in-up-d4 mt-8 flex flex-wrap gap-4 justify-center">
            {[
              { icon: Music, n: "1 palco", l: "Principal" },
              { icon: Mic, n: "11+", l: "Atrações" },
              { icon: Users, n: "150K+", l: "Pessoas" },
            ].map(({ icon: Icon, n, l }) => (
              <div key={l} className="flex items-center gap-2 px-5 py-3 glass-dark rounded-xl">
                <Icon size={16} className="text-brand-orange" />
                <span className="font-display text-xl text-brand-cream">{n}</span>
                <span className="text-xs uppercase tracking-widest text-brand-cream/55">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Line-up: headliners ── */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 80% 30%, oklch(0.68 0.21 42 / 0.04) 0%, transparent 50%)" }} />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <span className="text-brand-orange text-xs uppercase tracking-[0.3em] font-bold flex items-center gap-2">
              <Star size={12} fill="currentColor" /> Atrações principais
            </span>
            <h2 className="font-display text-5xl sm:text-6xl mt-3 text-brand-ox uppercase leading-none">
              Headliners <span className="text-gradient-flame">2026</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {headliners.map((a, i) => (
              <div
                key={a.name}
                className={`relative group rounded-3xl overflow-hidden bg-gradient-to-br from-brand-ox-deep via-brand-ox to-brand-ox-deep p-10 border border-brand-orange/25 hover:border-brand-orange/70 transition-all duration-300 shadow-deep hover:shadow-glow animate-fade-in-up-d${i + 1}`}
              >
                {/* Glows */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/10 blur-3xl rounded-full" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-900/15 blur-2xl rounded-full" />
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-flame scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 glass-fire text-brand-orange text-[10px] uppercase tracking-widest rounded-full border border-brand-orange/30">
                      <Star size={10} fill="currentColor" /> {a.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-5xl sm:text-6xl text-brand-cream uppercase leading-none">{a.name}</h3>
                  <div className="mt-6 flex flex-wrap gap-6 text-sm text-brand-cream/60">
                    <span className="flex items-center gap-2"><Clock size={15} className="text-brand-orange" />{a.time} — {a.day}</span>
                    <span className="flex items-center gap-2"><Mic size={15} className="text-brand-orange" />{a.stage}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Rest of lineup grid */}
          <div>
            <h3 className="font-display text-2xl uppercase text-brand-ox mb-5 flex items-center gap-3">
              <Zap size={20} className="text-brand-orange" /> Todas as atrações
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {rest.map((a, i) => (
                <div
                  key={a.name}
                  className={`group p-5 rounded-2xl glass-fire border border-brand-orange/15 hover:border-brand-orange/60 transition-all duration-300 hover:shadow-glow animate-fade-in-up-d${Math.min(i % 4 + 1, 4)}`}
                >
                  <div className="text-[10px] uppercase tracking-widest text-brand-orange font-bold mb-1">{a.tag}</div>
                  <h4 className="font-display text-xl text-brand-ox uppercase leading-tight">{a.name}</h4>
                  <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock size={12} className="text-brand-orange" />
                    {a.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Events list ── */}
      <section className="py-24 bg-brand-ox-deep text-brand-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 80% at 70% 50%, oklch(0.68 0.21 42 / 0.07) 0%, transparent 70%)" }} />

        <div className="relative mx-auto max-w-5xl px-6">
          <div className="mb-12">
            <span className="text-brand-orange text-xs uppercase tracking-[0.3em] font-bold">Agenda completa</span>
            <h2 className="font-display text-5xl sm:text-6xl mt-3 uppercase leading-none">
              Próximos <span className="text-gradient-flame">eventos</span>
            </h2>
          </div>

          <div className="space-y-4">
            {eventsData.map((e, i) => (
              <div
                key={i}
                className="group flex flex-col md:flex-row gap-5 p-6 glass-dark rounded-2xl border border-brand-cream/10 hover:border-brand-orange/60 transition-all duration-300 hover:shadow-glow"
              >
                {/* Date badge */}
                <div className="md:w-28 shrink-0 text-center bg-gradient-flame rounded-xl p-4 self-start shadow-glow">
                  <div className="font-display text-2xl text-brand-ox-deep leading-none">{e.date}</div>
                  <div className="text-[10px] uppercase tracking-widest mt-1 text-brand-ox-deep/70">{e.year}</div>
                </div>

                <div className="flex-1 min-w-0">
                  <span className="inline-block text-xs uppercase tracking-widest text-brand-orange font-bold">{e.tag}</span>
                  <h3 className="font-display text-2xl uppercase mt-1">{e.title}</h3>
                  <div className="flex flex-wrap gap-x-6 gap-y-1 mt-3 text-sm text-brand-cream/55">
                    <span className="flex items-center gap-2"><Clock size={14} className="text-brand-orange" />{e.time}</span>
                    <span className="flex items-center gap-2"><MapPin size={14} className="text-brand-orange" />{e.loc}</span>
                  </div>
                </div>

                <e.icon className="text-brand-orange hidden md:block self-center shrink-0 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition" size={32} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Schedule timeline ── */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 10% 50%, oklch(0.68 0.21 42 / 0.04) 0%, transparent 40%)" }} />

        <div className="relative mx-auto max-w-3xl px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="text-brand-orange" />
              <span className="text-brand-orange text-xs uppercase tracking-[0.3em] font-bold">{siteConfig.eventDate} · 2026</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl uppercase text-brand-ox leading-none">
              Programação <span className="text-gradient-flame">do dia</span>
            </h2>
          </div>

          <div className="relative pl-10">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-brand-orange via-brand-orange/40 to-transparent" />

            {scheduleData.map((s, i) => {
              const colorClass = typeColor[s.type] ?? "text-brand-orange bg-brand-orange/10 border-brand-orange/20";
              return (
                <div key={i} className="relative pb-8 last:pb-0 group">
                  {/* Dot */}
                  <div className="absolute -left-[26px] h-5 w-5 rounded-full bg-gradient-flame ring-4 ring-background shadow-glow group-hover:scale-125 transition" />

                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 p-5 rounded-2xl bg-card border border-border group-hover:border-brand-orange group-hover:shadow-glow transition-all duration-300">
                    <span className="font-display text-3xl text-brand-orange w-24 shrink-0 leading-none">{s.time}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg text-brand-ox">{s.title}</h3>
                      <span className={`inline-block text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-full border mt-1 ${colorClass}`}>
                        {s.type}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
