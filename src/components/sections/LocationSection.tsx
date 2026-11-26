import { useState } from 'react';
import { ArrowUpRight, Check, Clock, Copy, Instagram, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/src/data/business';
import { SectionLabel } from '@/src/components/ui/SectionLabel';
import { Button } from '@/src/components/ui/Button';
import { Reveal } from '@/src/components/motion/Reveal';

export function LocationSection() {
  const [copiedAddress, setCopiedAddress] = useState<boolean>(false);

  const handleCopyAddress = async () => {
    const fullAddress = `${BUSINESS_CONFIG.address}, ${BUSINESS_CONFIG.neighborhood} - ${BUSINESS_CONFIG.cityState}`;
    try {
      await navigator.clipboard.writeText(fullAddress);
      setCopiedAddress(true);
      window.setTimeout(() => setCopiedAddress(false), 2200);
    } catch {
      setCopiedAddress(false);
    }
  };

  return (
    <section
      id="contato"
      className="scroll-mt-16 bg-[#842B0B] text-[#FFF0DC]"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Headline */}
          <div className="lg:col-span-5">
            <SectionLabel index="07" label="ONDE & QUANDO" tone="yellow" />

            <Reveal className="mt-4">
              <h2 className="font-display uppercase tracking-[-0.035em] leading-[0.88] text-[clamp(2.5rem,5.5vw,4.75rem)] -rotate-1 origin-left text-balance">
                SE A FOME BATEU,{' '}
                <span className="text-[#FFBF00]">VOCÊ JÁ SABE.</span>
              </h2>
            </Reveal>

            <p className="mt-5 max-w-md text-sm sm:text-base leading-relaxed text-[#FFF0DC]/85">
              {BUSINESS_CONFIG.deliveryInfo}
            </p>
          </div>

          {/* Right Info Strip + Primary Portfolio CTA */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-y-2 border-[#FFF0DC]/25 py-8">
              <div>
                <div className="flex items-center gap-2 font-mono-tech text-xs font-bold uppercase tracking-widest text-[#FFBF00]">
                  <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Endereço (demo)</span>
                </div>
                <p className="mt-2.5 text-base font-semibold text-[#FFF0DC]">
                  {BUSINESS_CONFIG.address}
                </p>
                <p className="font-mono-tech text-xs text-[#FFF0DC]/75">
                  {BUSINESS_CONFIG.neighborhood} · {BUSINESS_CONFIG.cityState}
                </p>
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="mt-3 inline-flex items-center gap-1.5 border border-[#FFF0DC]/40 px-2.5 py-1.5 font-mono-tech text-[11px] font-semibold uppercase tracking-wider text-[#FFF0DC] hover:bg-[#FFF0DC] hover:text-[#17120F] transition-colors cursor-pointer"
                >
                  {copiedAddress ? (
                    <>
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copiar endereço</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <div className="flex items-center gap-2 font-mono-tech text-xs font-bold uppercase tracking-widest text-[#FFBF00]">
                  <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Horário da Chapa</span>
                </div>
                <p className="mt-2.5 text-base font-semibold text-[#FFF0DC]">
                  {BUSINESS_CONFIG.hours}
                </p>
                <p className="mt-1 font-mono-tech text-xs text-[#FFF0DC]/75">
                  Chapa ligada sem pausa até o último smash.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 font-mono-tech text-xs font-bold uppercase tracking-widest text-[#FFBF00]">
                  <Instagram className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Instagram</span>
                </div>
                <a
                  href={BUSINESS_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2.5 inline-block text-base font-semibold text-[#FFF0DC] hover:text-[#FFBF00] transition-colors"
                >
                  {BUSINESS_CONFIG.instagramHandle}
                </a>
                <p className="mt-1 font-mono-tech text-xs text-[#FFF0DC]/75">
                  Drops semanais e bastidores da cozinha.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <span className="font-mono-tech text-xs uppercase tracking-[0.16em] text-[#FFF0DC]/75">
                BRUTE. STREET FOOD · PORTFÓLIO DE MARCA
              </span>

              <Button href="#cardapio" variant="yellow" size="lg">
                <span>EXPLORAR CARDÁPIO</span>
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
