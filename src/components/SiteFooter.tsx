import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Mail } from "lucide-react";
import logo from "@/assets/logo-marcha.png";

export function SiteFooter() {
  return (
    <footer className="bg-brand-ox-deep text-brand-cream/80">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo} alt="Marcha Para Jesus Campinas" className="h-20 w-auto mb-4" />
          <p className="text-sm max-w-sm leading-relaxed">
            O maior movimento gospel de Campinas reunindo milhares em adoração, fé e celebração nas ruas da cidade.
          </p>
          <div className="flex gap-3 mt-6">
            {[Instagram, Facebook, Youtube, Mail].map((Icon, i) => (
              <a key={i} href="#" className="h-10 w-10 grid place-items-center rounded-full border border-brand-orange/30 hover:bg-brand-orange hover:text-brand-ox-deep transition">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-brand-orange text-sm tracking-[0.2em] uppercase mb-4">Navegação</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/calendario" className="hover:text-brand-orange">Calendário</Link></li>
            <li><Link to="/patrocinadores" className="hover:text-brand-orange">Patrocinadores</Link></li>
            <li><Link to="/loja" className="hover:text-brand-orange">Loja</Link></li>
            <li><Link to="/contato" className="hover:text-brand-orange">Contato</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-brand-orange text-sm tracking-[0.2em] uppercase mb-4">Contato</h4>
          <ul className="space-y-2 text-sm">
            <li>Campinas, SP</li>
            <li>contato@marchaparajesuscampinas.com.br</li>
            <li>(19) 9 0000-0000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-brand-orange/15">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs flex flex-col sm:flex-row gap-2 justify-between">
          <span>© {new Date().getFullYear()} Marcha Para Jesus Campinas. Todos os direitos reservados.</span>
          <span>Feito com fé 🔥</span>
        </div>
      </div>
    </footer>
  );
}
