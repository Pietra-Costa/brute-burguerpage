import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowDown, Layers, Minimize2 } from 'lucide-react';
import {
  ANATOMY_EXPLODED_IMAGE,
  ANATOMY_PRESSED_IMAGE,
  SMASH_INGREDIENTS,
} from '@/src/data/ingredients';
import { useReducedMotion } from '@/src/hooks/useReducedMotion';
import { cn } from '@/src/lib/utils';
import { SectionLabel } from '@/src/components/ui/SectionLabel';
import { CutoutImage } from '@/src/components/ui/CutoutImage';
import { IngredientAnnotation } from '@/src/components/ui/IngredientAnnotation';
import { HandArrow } from '@/src/components/ui/BrandDoodles';
import { Reveal } from '@/src/components/motion/Reveal';

export function ExplodedBurgerSection() {
  const prefersReduced = useReducedMotion();
  const [viewMode, setViewMode] = useState<'exploded' | 'pressed'>('exploded');
  const [activeId, setActiveId] = useState<string | null>(null);

  const isExploded = viewMode === 'exploded';
  const activeIngredient =
    SMASH_INGREDIENTS.find((item) => item.id === activeId) ?? null;

  return (
    <section
      id="anatomia"
      className="relative scroll-mt-16 overflow-hidden bg-[#FFF0DC] text-[#17120F]"
    >
      {/* Subtle Asymmetric Yellow Graphic Block */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden lg:block absolute -bottom-28 -right-28 h-[420px] w-[420px] rotate-12 bg-[#FFBF00]/80"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-28">
        {/* Top Bar: Editorial Kicker + Functional Mode Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#17120F]/15 pb-5">
          <SectionLabel index="02" label="ENGENHARIA DO SABOR" tone="dark" />

          <div
            role="group"
            aria-label="Modo de apresentação da anatomia do smash burger"
            className="inline-flex border-2 border-[#17120F] bg-[#FFFFFF] p-1 shadow-[3px_3px_0px_#17120F]"
          >
            <button
              type="button"
              onClick={() => {
                setViewMode('exploded');
                setActiveId(null);
              }}
              aria-pressed={isExploded}
              className={cn(
                'inline-flex items-center gap-1.5 px-3.5 py-2 font-mono-tech text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 cursor-pointer',
                isExploded
                  ? 'bg-[#842B0B] text-[#FFF0DC]'
                  : 'text-[#17120F] hover:bg-[#FFF0DC]'
              )}
            >
              <Layers className="h-3.5 w-3.5" aria-hidden="true" />
              <span>EXPLODIDO</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setViewMode('pressed');
                setActiveId(null);
              }}
              aria-pressed={!isExploded}
              className={cn(
                'inline-flex items-center gap-1.5 px-3.5 py-2 font-mono-tech text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 cursor-pointer',
                !isExploded
                  ? 'bg-[#17120F] text-[#FFBF00]'
                  : 'text-[#17120F] hover:bg-[#FFF0DC]'
              )}
            >
              <Minimize2 className="h-3.5 w-3.5" aria-hidden="true" />
              <span>PRENSADO</span>
            </button>
          </div>
        </div>

        {/* Asymmetric 12-Column Magazine Spread */}
        <div className="mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* Left Column (4 cols): Oversized Headline & Active Spec Readout */}
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="font-display uppercase tracking-[-0.035em] leading-[0.88] text-[clamp(2.5rem,4.8vw,4.4rem)] -rotate-1 origin-left text-[#17120F] text-balance">
                A ANATOMIA{' '}
                <span className="text-[#842B0B]">DO SMASH.</span>
              </h2>
            </Reveal>

            <p className="mt-5 max-w-sm text-base sm:text-lg font-medium leading-relaxed text-[#17120F]/90">
              Ingredientes selecionados, montados com precisão e muito sabor.
            </p>

            <div className="mt-8 hidden lg:block border-t-2 border-[#17120F] pt-5 min-h-[124px]">
              {activeIngredient ? (
                <div>
                  <span className="font-mono-tech text-xs font-bold uppercase tracking-widest text-[#842B0B]">
                    {activeIngredient.index} · {activeIngredient.spec}
                  </span>
                  <h3 className="mt-1.5 font-display text-2xl uppercase tracking-tight text-[#17120F]">
                    {activeIngredient.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#17120F]/85">
                    {activeIngredient.description}
                  </p>
                </div>
              ) : (
                <div>
                  <span className="font-mono-tech text-xs font-bold uppercase tracking-widest text-[#842B0B]">
                    {isExploded ? 'VISÃO EXPLODIDA' : 'MONTAGEM PRENSADA'}
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-[#17120F]/80">
                    {isExploded
                      ? 'Passe o mouse ou toque em qualquer camada ao lado para inspecionar sua função na montagem.'
                      : 'Na chapa a 260°C, todas as camadas se fundem em uma mordida compacta de crosta caramelizada e cheddar cremoso.'}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-6 flex items-center gap-5">
              <a
                href="#cardapio"
                className="inline-flex items-center gap-2 font-mono-tech text-xs font-bold uppercase tracking-[0.14em] text-[#17120F] border-b-2 border-[#17120F] pb-1 hover:text-[#842B0B] hover:border-[#842B0B] transition-colors"
              >
                <span>VER NO CARDÁPIO</span>
                <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
              </a>

              <HandArrow
                color="#842B0B"
                className="hidden lg:block w-16 -rotate-6"
              />
            </div>
          </div>

          {/* Center Column (4 cols): Unified Studio Cutout Burger */}
          <div className="lg:col-span-4 flex justify-center">
            <AnimatePresence mode="wait">
              {isExploded ? (
                <motion.div
                  key="photo-exploded"
                  initial={prefersReduced ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full max-w-[330px] sm:max-w-[380px] lg:max-w-[400px]"
                >
                  <CutoutImage
                    src={ANATOMY_EXPLODED_IMAGE}
                    alt="Anatomia explodida do smash burger BRUTE com brioche torrado, cheddar derretido, tomate fresco, cebola roxa, bacon crocante, carne smash na chapa e alface"
                    fallbackLabel="ANATOMIA DO SMASH"
                    loading="lazy"
                    className="w-full h-auto object-contain drop-shadow-[0_24px_30px_rgba(23,18,15,0.22)]"
                  />

                  {/* Subtle Pin Dot Indicator on Desktop when inspecting a layer */}
                  {activeIngredient && (
                    <div
                      aria-hidden="true"
                      style={{ top: `${activeIngredient.anchorTopPercent}%` }}
                      className="hidden lg:flex items-center gap-1.5 absolute right-3 -translate-y-1/2 pointer-events-none"
                    >
                      <span className="h-3 w-3 bg-[#F47721] border-2 border-[#17120F] shadow-[2px_2px_0px_#17120F]" />
                      <span className="font-mono-tech text-[10px] font-bold uppercase bg-[#17120F] text-[#FFBF00] px-1.5 py-0.5">
                        {activeIngredient.index}
                      </span>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="photo-pressed"
                  initial={prefersReduced ? false : { opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-[330px] sm:max-w-[380px] lg:max-w-[400px]"
                >
                  <CutoutImage
                    src={ANATOMY_PRESSED_IMAGE}
                    alt="Smash cheeseburger BRUTE prensado completo com queijo derretido, bacon crocante, tomate, cebola roxa e pão brioche"
                    fallbackLabel="SMASH PRENSADO"
                    loading="lazy"
                    className="w-full h-auto object-contain drop-shadow-[0_28px_36px_rgba(23,18,15,0.28)]"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column (4 cols): Fine-Line Editorial Annotations */}
          <div className="lg:col-span-4">
            <div className={cn(isExploded ? 'hidden lg:flex lg:flex-col lg:gap-5' : 'hidden')}>
              {SMASH_INGREDIENTS.map((ingredient) => (
                <IngredientAnnotation
                  key={ingredient.id}
                  ingredient={ingredient}
                  align="right"
                  isActive={activeId === ingredient.id}
                  onActivate={() => setActiveId(ingredient.id)}
                  onDeactivate={() => setActiveId(null)}
                />
              ))}
            </div>

            {/* Clean Hairline Index (Shown on Mobile Exploded AND on Desktop/Mobile Pressed) */}
            <div
              className={cn(
                'border-t-2 border-[#17120F]',
                isExploded ? 'lg:hidden' : 'block'
              )}
            >
              {SMASH_INGREDIENTS.map((ingredient) => (
                <IngredientAnnotation
                  key={ingredient.id}
                  ingredient={ingredient}
                  align="list"
                  isActive={activeId === ingredient.id}
                  onActivate={() =>
                    setActiveId((prev) =>
                      prev === ingredient.id ? null : ingredient.id
                    )
                  }
                  onDeactivate={() => {}}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
