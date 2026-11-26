import { Instagram } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/src/data/business';
import { NAVIGATION_ITEMS } from '@/src/data/navigation';
import { CheckeredPattern, CrownDoodle } from '@/src/components/ui/BrandDoodles';

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-2 border-[#17120F] bg-[#17120F] text-[#FFF0DC]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end border-b border-[#FFF0DC]/15 pb-10">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3">
              <p className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#FFBF00]">
                {BUSINESS_CONFIG.tagline}
              </p>
              <CrownDoodle color="#FFBF00" className="h-4 w-6" />
            </div>
            <div className="mt-2 font-display text-6xl sm:text-7xl lg:text-8xl leading-[0.85] tracking-tight text-[#FFBF00] select-none">
              {BUSINESS_CONFIG.name}
            </div>
          </div>

          <div className="lg:col-span-3 space-y-2.5">
            <h2 className="font-mono-tech text-xs font-semibold uppercase tracking-[0.16em] text-[#FFF0DC]/60">
              Navegação
            </h2>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.sectionId}>
                  <a
                    href={item.href}
                    className="font-mono-tech text-xs uppercase tracking-wider text-[#FFF0DC] hover:text-[#FFBF00] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h2 className="font-mono-tech text-xs font-semibold uppercase tracking-[0.16em] text-[#FFF0DC]/60">
              Presença & Local
            </h2>
            <a
              href={BUSINESS_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono-tech text-xs uppercase tracking-wider text-[#FFBF00] hover:underline"
            >
              <Instagram className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{BUSINESS_CONFIG.instagramHandle}</span>
            </a>
            <p className="font-mono-tech text-[11px] leading-relaxed text-[#FFF0DC]/70">
              {BUSINESS_CONFIG.address} · {BUSINESS_CONFIG.cityState}
              <br />
              {BUSINESS_CONFIG.hours}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono-tech text-[11px] text-[#FFF0DC]/60">
          <p>
            © {BUSINESS_CONFIG.establishedYear} {BUSINESS_CONFIG.name} Todos os
            direitos reservados.
          </p>
          <p>
            Projeto conceitual de identidade digital · Endereço e avaliações
            demonstrativos.
          </p>
        </div>
      </div>

      {/* Subtle Checkered Streetwear Accent at bottom right */}
      <CheckeredPattern
        rows={2}
        cols={7}
        className="hidden sm:block absolute bottom-0 right-24 w-40 opacity-85 -rotate-3"
      />
    </footer>
  );
}
