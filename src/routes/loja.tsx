import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ExternalLink, Flame, Package, ShieldCheck, ShoppingBag, Truck, Zap } from "lucide-react";

export const Route = createFileRoute("/loja")({
  head: () => ({
    meta: [
      { title: "Loja Oficial — Marcha Para Jesus Campinas" },
      { name: "description", content: "Camisetas, acessórios e produtos oficiais da Marcha Para Jesus Campinas. Vista a fé." },
      { property: "og:title", content: "Loja Oficial — Marcha Para Jesus Campinas" },
    ],
  }),
  component: Page,
});

const STORE_URL = "https://festgospel.lojavirtualnuvem.com.br/";

const products = [
  {
    name: "Camiseta Oversized Oficial — 70x7",
    subtitle: "A Mensagem · Edição 2026",
    price: "R$ 79,90",
    tag: "Mais vendida",
    tagColor: "bg-brand-orange text-brand-ox-deep",
    gradient: "from-brand-ox-deep via-brand-ox to-red-950",
    link: "https://festgospel.lojavirtualnuvem.com.br/produtos/70x7-a-mensagem-camiseta-modelo-oversized-oficial-marcha-para-jesus-rmc-20261/",
  },
  {
    name: "Camiseta Oversized — A Mensagem",
    subtitle: "Marcha para Jesus RMC · 2026",
    price: "R$ 79,90",
    tag: "Lançamento",
    tagColor: "bg-gradient-flame text-brand-ox-deep",
    gradient: "from-orange-900 via-red-900 to-brand-ox-deep",
    link: "https://festgospel.lojavirtualnuvem.com.br/produtos/70x7-a-mensagem-camiseta-modelo-oversized-oficial-marcha-para-jesus-rmc-2026/",
  },
];

const perks = [
  { icon: Truck, title: "Entrega nacional", desc: "Frete calculado para todo o Brasil." },
  { icon: ShieldCheck, title: "Produto oficial", desc: "Lacre de autenticidade garantido." },
  { icon: Package, title: "Embalagem premium", desc: "Cuidado especial em cada envio." },
];

function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* ── Hero ── */}
      <section className="bg-brand-ox-deep text-brand-cream py-32 relative overflow-hidden min-h-[55vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div className="absolute top-0 right-[8%] w-72 h-72 bg-brand-orange/10 animate-blob blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-[4%] w-56 h-56 bg-red-800/12 animate-blob-delay blur-2xl rounded-full pointer-events-none" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 80% at 50% 50%, oklch(0.68 0.21 42 / 0.1) 0%, transparent 70%)" }} />

        <div className="relative mx-auto max-w-5xl px-6 text-center w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-fire text-brand-orange text-xs uppercase tracking-[0.25em] mb-6 animate-fade-in-up">
            <ShoppingBag size={12} /> Loja Oficial · Fest Gospel 2026
          </div>
          <h1 className="animate-fade-in-up-d1 font-display text-7xl sm:text-9xl uppercase leading-none">
            Vista <span className="text-gradient-flame">a fé</span>
          </h1>
          <p className="animate-fade-in-up-d2 mt-6 text-xl text-brand-cream/75 max-w-xl mx-auto leading-relaxed">
            Produtos oficiais para você levar a marca da Marcha por onde for.
          </p>
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-fade-in-up-d3 mt-10 inline-flex items-center gap-2 px-9 py-4 bg-gradient-flame text-brand-ox-deep font-bold uppercase tracking-wider rounded-md shadow-glow hover:scale-105 hover:shadow-glow-strong transition-all duration-200"
          >
            <ShoppingBag size={20} /> Ver loja completa <ExternalLink size={16} />
          </a>
        </div>
      </section>

      {/* ── Products ── */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 20% 80%, oklch(0.68 0.21 42 / 0.04) 0%, transparent 50%)" }} />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <span className="text-brand-orange text-xs uppercase tracking-[0.3em] font-bold flex items-center justify-center gap-2">
              <Zap size={12} /> Produtos em destaque
            </span>
            <h2 className="font-display text-5xl sm:text-6xl mt-3 text-brand-ox uppercase">
              Coleção <span className="text-gradient-flame">2026</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto">
              Peças exclusivas da Marcha Para Jesus. Estoque limitado — garanta a sua.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((p, i) => (
              <a
                key={p.name}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block rounded-3xl overflow-hidden border border-border hover:border-brand-orange hover:shadow-glow transition-all duration-300 animate-fade-in-up-d${i + 1}`}
              >
                {/* Product visual */}
                <div className={`aspect-[4/3] bg-gradient-to-br ${p.gradient} relative flex items-center justify-center overflow-hidden`}>
                  {/* Pattern overlay */}
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, white 0px, white 1px, transparent 1px, transparent 20px)" }} />
                  {/* Glow orb */}
                  <div className="absolute inset-0 bg-brand-orange/5 group-hover:bg-brand-orange/15 transition-colors duration-500" />
                  
                  <ShoppingBag
                    size={80}
                    className="text-white/30 group-hover:text-white/50 group-hover:scale-110 transition-all duration-500"
                  />

                  {/* Tag badge */}
                  {p.tag && (
                    <span className={`absolute top-4 left-4 ${p.tagColor} text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full font-bold shadow-glow`}>
                      {p.tag}
                    </span>
                  )}

                  {/* External link indicator */}
                  <div className="absolute top-4 right-4 h-9 w-9 glass-dark rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={14} className="text-brand-cream" />
                  </div>
                </div>

                {/* Product info */}
                <div className="p-6 bg-card">
                  <div className="text-[10px] uppercase tracking-widest text-brand-orange font-bold mb-1">{p.subtitle}</div>
                  <h3 className="font-display text-2xl text-brand-ox uppercase leading-tight group-hover:text-brand-orange transition-colors">
                    {p.name}
                  </h3>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="font-display text-3xl text-gradient-flame">{p.price}</div>
                    <span className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-brand-orange font-bold group-hover:gap-2.5 transition-all">
                      Comprar <ExternalLink size={12} />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* CTA to full store */}
          <div className="mt-12 text-center">
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-ox text-brand-cream font-bold uppercase tracking-wider rounded-md hover:bg-gradient-flame hover:text-brand-ox-deep transition-all duration-300"
            >
              <ShoppingBag size={18} /> Ver todos os produtos <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── Perks strip ── */}
      <section className="py-20 bg-brand-ox-deep text-brand-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 100% at 50% 50%, oklch(0.68 0.21 42 / 0.08) 0%, transparent 70%)" }} />

        <div className="relative mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <span className="text-brand-orange text-xs uppercase tracking-[0.3em] font-bold flex items-center justify-center gap-2">
              <Flame size={12} /> Por que comprar aqui
            </span>
            <h2 className="font-display text-4xl sm:text-5xl mt-3 uppercase">
              Compra <span className="text-gradient-flame">segura</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {perks.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group glass-dark rounded-2xl p-8 text-center hover:border-brand-orange/60 transition border border-brand-cream/10 hover:shadow-glow">
                <div className="h-14 w-14 mx-auto bg-gradient-flame rounded-xl flex items-center justify-center shadow-glow mb-5 group-hover:scale-110 transition">
                  <Icon size={24} className="text-brand-ox-deep" />
                </div>
                <h3 className="font-display text-xl uppercase">{title}</h3>
                <p className="text-brand-cream/65 mt-2 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
