import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight, Flame, Mail, Star, TrendingUp, Users, Zap } from "lucide-react";
import { sponsorsData } from "@/data/mockData";

export const Route = createFileRoute("/patrocinadores")({
  head: () => ({
    meta: [
      { title: "Patrocinadores — Marcha Para Jesus Campinas" },
      { name: "description", content: "Conheça as marcas que apoiam o maior movimento gospel de Campinas e descubra como se tornar um patrocinador." },
      { property: "og:title", content: "Patrocinadores — Marcha Para Jesus Campinas" },
    ],
  }),
  component: Page,
});

const tierMeta: Record<string, { gradient: string; badge: string; size: string }> = {
  Diamante: {
    gradient: "from-sky-400 via-blue-500 to-indigo-600",
    badge: "bg-blue-500/20 text-blue-300 border-blue-400/30",
    size: "lg:grid-cols-2",
  },
  Ouro: {
    gradient: "from-yellow-400 via-amber-500 to-orange-500",
    badge: "bg-amber-500/20 text-amber-300 border-amber-400/30",
    size: "lg:grid-cols-3",
  },
  Prata: {
    gradient: "from-slate-300 via-gray-400 to-slate-500",
    badge: "bg-slate-400/20 text-slate-300 border-slate-400/30",
    size: "lg:grid-cols-3",
  },
};

const stats = [
  { icon: Users, n: "150K+", l: "Pessoas impactadas" },
  { icon: TrendingUp, n: "20+", l: "Anos de história" },
  { icon: Star, n: "100%", l: "Evento gratuito" },
  { icon: Zap, n: "50+", l: "Atrações por edição" },
];

function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* ── Hero ── */}
      <section className="bg-brand-ox-deep text-brand-cream py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        {/* Animated blobs */}
        <div className="absolute top-10 right-[10%] w-80 h-80 bg-brand-orange/8 animate-blob blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-[5%] w-60 h-60 bg-red-900/15 animate-blob-delay blur-2xl rounded-full pointer-events-none" />
        {/* Radial glow */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 55% 70% at 50% 40%, oklch(0.68 0.21 42 / 0.1) 0%, transparent 70%)" }} />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-fire text-brand-orange text-xs uppercase tracking-[0.25em] mb-6 animate-fade-in-up">
            <Flame size={12} className="animate-pulse" /> Patrocínio Oficial
          </div>
          <h1 className="animate-fade-in-up-d1 font-display text-7xl sm:text-9xl uppercase leading-none">
            Marcas que<br /><span className="text-gradient-flame">transformam</span>
          </h1>
          <p className="animate-fade-in-up-d2 mt-6 text-xl text-brand-cream/75 max-w-2xl mx-auto leading-relaxed">
            Conecte sua marca a mais de 150 mil pessoas em um dos maiores eventos gospel do Brasil.
          </p>
        </div>

        {/* Stats bar */}
        <div className="relative mt-16 border-t border-brand-orange/20">
          <div className="mx-auto max-w-5xl px-6 pt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, n, l }) => (
              <div key={l} className="text-center group">
                <Icon size={20} className="mx-auto text-brand-orange mb-2 group-hover:scale-110 transition" />
                <div className="font-display text-4xl text-brand-orange">{n}</div>
                <div className="text-xs uppercase tracking-widest text-brand-cream/55 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sponsors grid ── */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, oklch(0.68 0.21 42 / 0.04) 0%, transparent 50%)" }} />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="text-brand-orange text-xs uppercase tracking-[0.3em] font-bold flex items-center justify-center gap-2">
              <Star size={12} fill="currentColor" /> Nossa família
            </span>
            <h2 className="font-display text-5xl sm:text-6xl mt-3 text-brand-ox uppercase">
              Quem está <span className="text-gradient-flame">com a gente</span>
            </h2>
          </div>

          {Object.entries(sponsorsData).map(([tier, list]) => {
            const meta = tierMeta[tier] ?? { gradient: "from-gray-400 to-gray-600", badge: "bg-gray-400/20 text-gray-300 border-gray-400/30", size: "lg:grid-cols-3" };
            return (
              <div key={tier} className="mb-20 last:mb-0">
                {/* Tier header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${meta.gradient} flex items-center justify-center shadow-glow`}>
                    <Star size={18} className="text-white fill-white" />
                  </div>
                  <h3 className="font-display text-3xl uppercase text-brand-ox">{tier}</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-brand-orange/40 to-transparent" />
                  <span className={`px-3 py-1 rounded-full text-xs uppercase tracking-widest border ${meta.badge}`}>
                    {list.length} {list.length === 1 ? "parceiro" : "parceiros"}
                  </span>
                </div>

                <div className={`grid grid-cols-1 md:grid-cols-2 ${meta.size} gap-6`}>
                  {list.map((s) => (
                    <div
                      key={s.name}
                      className="group relative bg-card rounded-2xl border border-border hover:border-brand-orange transition-all duration-300 hover:shadow-glow overflow-hidden p-8 flex items-center gap-6"
                    >
                      {/* Hover glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/0 to-brand-orange/0 group-hover:from-brand-orange/5 group-hover:to-transparent transition-all duration-500 rounded-2xl" />
                      {/* Bottom bar */}
                      <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-br ${meta.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

                      {/* Logo placeholder */}
                      <div className={`relative shrink-0 h-16 w-16 rounded-xl bg-gradient-to-br ${meta.gradient} flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300`}>
                        <s.icon size={28} className="text-white" />
                      </div>

                      <div className="relative min-w-0">
                        <h4 className="font-display text-2xl text-brand-ox uppercase leading-tight truncate">{s.name}</h4>
                        <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CTA become sponsor ── */}
      <section className="py-32 bg-brand-ox-deep text-brand-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-60" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 80% at 50% 50%, oklch(0.68 0.21 42 / 0.15) 0%, transparent 70%)" }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-brand-orange/60 to-transparent" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-flame shadow-glow-strong mb-6 animate-pulse-glow">
            <Mail size={28} className="text-brand-ox-deep" />
          </div>
          <h2 className="font-display text-5xl sm:text-7xl uppercase leading-none">
            Quer ser<br /><span className="text-gradient-flame">patrocinador?</span>
          </h2>
          <p className="mt-6 text-xl text-brand-cream/75 max-w-2xl mx-auto leading-relaxed">
            Receba o nosso media kit completo com todas as oportunidades de ativação e impacto.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 px-9 py-4 bg-gradient-flame text-brand-ox-deep font-bold uppercase tracking-wider rounded-md shadow-glow hover:scale-105 hover:shadow-glow-strong transition-all duration-200"
            >
              Solicitar media kit <ArrowRight size={18} />
            </Link>
            <a
              href="mailto:contato@marchaparajesuscampinas.com.br"
              className="inline-flex items-center gap-2 px-9 py-4 glass-dark font-bold uppercase tracking-wider rounded-md hover:bg-brand-cream/10 transition"
            >
              <Mail size={18} /> Enviar e-mail
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
