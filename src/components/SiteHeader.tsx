import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logomarcha.png";

const nav = [
  { to: "/", label: "Início" },
  { to: "/calendario", label: "Calendário" },
  { to: "/patrocinadores", label: "Patrocinadores" },
  { to: "/loja", label: "Loja" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-brand-ox-deep/95 backdrop-blur-md border-b border-brand-orange/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="Marcha Para Jesus Campinas" className="h-37 w-auto" />

        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="px-4 py-2 text-sm font-medium tracking-wide uppercase text-brand-cream/90 hover:text-brand-orange transition-colors"
              activeProps={{ className: "px-4 py-2 text-sm font-medium tracking-wide uppercase text-brand-orange" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/patrocinadores"
            className="ml-4 px-5 py-2.5 bg-gradient-flame text-brand-ox-deep font-bold text-sm uppercase tracking-wider rounded-md hover:opacity-90 transition shadow-glow"
          >
            Seja Patrocinador
          </Link>
        </nav>
        <button
          className="lg:hidden text-brand-cream p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-brand-ox-deep border-t border-brand-orange/20">
          <div className="flex flex-col p-4 gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-brand-cream/90 hover:bg-brand-orange/10 hover:text-brand-orange rounded-md uppercase text-sm tracking-wide"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
