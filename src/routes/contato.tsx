import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  Facebook, Flame, Instagram, Mail, MapPin, MessageCircle, Phone, Send, Youtube
} from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/data/mockData";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Marcha Para Jesus Campinas" },
      { name: "description", content: "Fale com a organização da Marcha Para Jesus Campinas. Patrocínio, imprensa, voluntariado e mais." },
      { property: "og:title", content: "Contato — Marcha Para Jesus Campinas" },
    ],
  }),
  component: Page,
});

const contacts = [
  { icon: Mail, label: "E-mail", value: siteConfig.contactEmail, href: `mailto:${siteConfig.contactEmail}` },
  { icon: Phone, label: "Telefone / WhatsApp", value: siteConfig.contactPhone, href: `tel:${siteConfig.contactPhone}` },
  { icon: MapPin, label: "Local do evento", value: siteConfig.location, href: "#" },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/marchaparajesus.rmc/", color: "hover:bg-pink-600" },
  { icon: Facebook, label: "Facebook", href: "#", color: "hover:bg-blue-600" },
  { icon: Youtube, label: "YouTube", href: "#", color: "hover:bg-red-600" },
];

const subjects = ["Patrocínio", "Imprensa", "Voluntariado", "Artistas / Bandas", "Outro"];

function Page() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1200);
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* ── Hero ── */}
      <section className="bg-brand-ox-deep text-brand-cream py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div className="absolute top-10 right-[12%] w-72 h-72 bg-brand-orange/8 animate-blob blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-[6%] w-52 h-52 bg-red-900/12 animate-blob-delay blur-2xl rounded-full pointer-events-none" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 55% 70% at 50% 40%, oklch(0.68 0.21 42 / 0.1) 0%, transparent 70%)" }} />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-fire text-brand-orange text-xs uppercase tracking-[0.25em] mb-6 animate-fade-in-up">
            <MessageCircle size={12} /> Fale conosco
          </div>
          <h1 className="animate-fade-in-up-d1 font-display text-7xl sm:text-9xl uppercase leading-none">
            Con<span className="text-gradient-flame">tato</span>
          </h1>
          <p className="animate-fade-in-up-d2 mt-6 text-xl text-brand-cream/75 max-w-xl mx-auto leading-relaxed">
            Seja para patrocínio, imprensa ou voluntariado — estamos prontos para ouvir você.
          </p>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 90% 10%, oklch(0.68 0.21 42 / 0.04) 0%, transparent 40%)" }} />

        <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-12 items-start">

          {/* ── Sidebar ── */}
          <div className="lg:col-span-2 space-y-5">
            <div>
              <span className="text-brand-orange text-xs uppercase tracking-[0.3em] font-bold flex items-center gap-2">
                <Flame size={12} /> Informações
              </span>
              <h2 className="font-display text-3xl text-brand-ox uppercase mt-2 leading-none">
                Entre em<br />contato
              </h2>
            </div>

            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="group flex gap-4 p-5 bg-card border border-border rounded-2xl hover:border-brand-orange hover:shadow-glow transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-flame text-brand-ox-deep grid place-items-center shrink-0 shadow-glow group-hover:scale-110 transition">
                  <c.icon size={20} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-widest text-brand-orange font-bold">{c.label}</div>
                  <div className="mt-1 text-brand-ox font-medium text-sm leading-tight">{c.value}</div>
                </div>
              </a>
            ))}

            {/* Social links */}
            <div className="p-6 bg-brand-ox-deep text-brand-cream rounded-2xl border border-brand-orange/15">
              <div className="text-xs uppercase tracking-widest text-brand-orange font-bold mb-4 flex items-center gap-2">
                <Flame size={12} /> Siga-nos
              </div>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`h-12 w-12 grid place-items-center rounded-xl border border-brand-orange/30 bg-brand-cream/5 ${color} text-brand-cream transition-all duration-200 hover:border-transparent hover:scale-110`}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
              <p className="text-brand-cream/55 text-xs mt-4 leading-relaxed">
                Acompanhe as novidades, bastidores e transmissões ao vivo da Marcha.
              </p>
            </div>
          </div>

          {/* ── Form ── */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-card border border-border rounded-3xl p-8 md:p-10 space-y-6 shadow-deep"
          >
            <div>
              <h2 className="font-display text-3xl uppercase text-brand-ox">Envie sua mensagem</h2>
              <p className="text-muted-foreground mt-1 text-sm">Responderemos em até 48 horas úteis.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Nome completo" name="name" placeholder="Seu nome" />
              <Field label="E-mail" name="email" type="email" placeholder="seu@email.com" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Telefone" name="phone" placeholder="(19) 9 0000-0000" />
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-brand-ox mb-2">Assunto</label>
                <select
                  className="w-full bg-background border border-input rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange transition appearance-none cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled>Selecione...</option>
                  {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold text-brand-ox mb-2">Mensagem</label>
              <textarea
                rows={5}
                placeholder="Escreva sua mensagem aqui..."
                className="w-full bg-background border border-input rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange transition resize-none"
              />
            </div>

            {!sent ? (
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-flame text-brand-ox-deep font-bold uppercase tracking-wider rounded-xl shadow-glow hover:scale-[1.02] hover:shadow-glow-strong transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 border-2 border-brand-ox-deep/40 border-t-brand-ox-deep rounded-full animate-spin" />
                    Enviando...
                  </span>
                ) : (
                  <><Send size={18} /> Enviar mensagem</>
                )}
              </button>
            ) : (
              <div className="w-full flex items-center gap-3 px-6 py-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-700">
                <span className="text-2xl">🔥</span>
                <div>
                  <div className="font-bold">Mensagem enviada com sucesso!</div>
                  <div className="text-sm opacity-80">Entraremos em contato em breve.</div>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-widest font-bold text-brand-ox mb-2">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full bg-background border border-input rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange transition placeholder:text-muted-foreground/60"
      />
    </div>
  );
}
