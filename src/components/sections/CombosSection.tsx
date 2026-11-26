import { ArrowUpRight } from 'lucide-react';
import { COMBOS_DATA, COMBOS_IMAGE, COMBOS_IMAGE_ALT } from '@/src/data/combos';
import { cn } from '@/src/lib/utils';
import { Reveal } from '@/src/components/motion/Reveal';
import { SectionLabel } from '@/src/components/ui/SectionLabel';
import { Sticker } from '@/src/components/ui/Sticker';
import { PriceTag } from '@/src/components/ui/PriceTag';
import { Button } from '@/src/components/ui/Button';
import { SafeImage } from '@/src/components/ui/SafeImage';
import { CrownDoodle } from '@/src/components/ui/BrandDoodles';

export function CombosSection() {
  return (
    <section
      id="combos"
      className="relative bg-[#FFBF00] text-[#17120F]"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-28">
        {/* Top Asymmetric Campaign Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <SectionLabel index="04" label="COMBOS DE RUA" tone="dark" />
            <Reveal className="mt-4">
              <h2 className="font-display uppercase tracking-[-0.035em] leading-[0.88] text-[clamp(2.6rem,6vw,5.25rem)] -rotate-1 origin-left text-balance">
                FOME DE VERDADE{' '}
                <span className="text-[#842B0B]">PEDE COMBO.</span>
              </h2>
            </Reveal>

            <p className="mt-5 max-w-lg text-base sm:text-lg font-bold leading-relaxed text-[#17120F]">
              Burger + fritas rústicas + refri gelado. Tudo na mesma entrega
              visual de rua.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Sticker
                text="BATATA RÚSTICA CROCANTE"
                tone="ink"
                rotate="-rotate-2"
              />
              <Sticker
                text="PACK DA RUA"
                tone="burgundy"
                rotate="rotate-1"
              />
            </div>

            <div className="mt-8">
              <Button href="#contato" variant="primary" size="md">
                <span>ONDE ENCONTRAR</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>

          <Reveal delay={0.1} className="lg:col-span-6 relative">
            <CrownDoodle
              color="#17120F"
              className="hidden sm:block absolute -top-10 left-8 h-9 w-12 -rotate-12 z-20"
            />
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 bg-[#842B0B] border-2 border-[#17120F]"
              />
              <div className="relative overflow-hidden border-2 border-[#17120F] bg-[#17120F] aspect-[16/9]">
                <SafeImage
                  src={COMBOS_IMAGE}
                  alt={COMBOS_IMAGE_ALT}
                  fallbackLabel="COMBOS BRUTE."
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Combos List */}
        <div className="mt-14 lg:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {COMBOS_DATA.map((combo, index) => (
            <Reveal key={combo.id} delay={index * 0.08} className="flex">
              <article
                className={cn(
                  'flex w-full flex-col justify-between border-2 border-[#17120F] p-6 sm:p-8',
                  combo.featured
                    ? 'bg-[#17120F] text-[#FFF0DC] shadow-[6px_6px_0px_#842B0B]'
                    : 'bg-[#FFF0DC] text-[#17120F] shadow-[6px_6px_0px_#17120F]'
                )}
              >
                <div>
                  <div
                    className={cn(
                      'flex items-center justify-between gap-3 border-b pb-3 font-mono-tech text-xs font-semibold uppercase tracking-wider',
                      combo.featured
                        ? 'border-[#FFF0DC]/20 text-[#FFBF00]'
                        : 'border-[#17120F]/20 text-[#842B0B]'
                    )}
                  >
                    <span>
                      {combo.code} · {combo.serves}
                    </span>
                    <span>{combo.stampText}</span>
                  </div>

                  <div className="mt-5 font-mono-tech text-xs font-semibold uppercase tracking-wider opacity-80">
                    {combo.subtitle}
                  </div>
                  <h3 className="mt-1 font-display text-2xl sm:text-3xl uppercase leading-[0.98] tracking-tight">
                    {combo.name}
                  </h3>

                  <ul className="mt-5 space-y-2">
                    {combo.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-snug"
                      >
                        <span
                          aria-hidden="true"
                          className={cn(
                            'mt-1.5 h-1.5 w-1.5 shrink-0',
                            combo.featured ? 'bg-[#FFBF00]' : 'bg-[#842B0B]'
                          )}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className={cn(
                    'mt-8 flex flex-wrap items-center justify-between gap-4 border-t-2 pt-5',
                    combo.featured
                      ? 'border-[#FFF0DC]/20'
                      : 'border-[#17120F]'
                  )}
                >
                  <div>
                    <span
                      className={cn(
                        'block font-mono-tech text-[11px] uppercase tracking-wider',
                        combo.featured ? 'text-[#FFF0DC]/70' : 'text-[#842B0B]'
                      )}
                    >
                      Valor sugerido
                    </span>
                    <PriceTag
                      price={combo.price}
                      tone={combo.featured ? 'yellow' : 'dark'}
                      size="md"
                    />
                  </div>

                  <Button
                    href="#cardapio"
                    variant={combo.featured ? 'yellow' : 'primary'}
                    size="sm"
                  >
                    <span>VER BURGERS</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
