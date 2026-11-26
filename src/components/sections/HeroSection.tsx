import { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { HERO_BURGER_IMAGE } from '@/src/data/ingredients';
import { useReducedMotion } from '@/src/hooks/useReducedMotion';
import { Button } from '@/src/components/ui/Button';
import { HeroMotion } from '@/src/components/motion/HeroMotion';
import { ParallaxElement } from '@/src/components/motion/ParallaxElement';
import { CutoutImage } from '@/src/components/ui/CutoutImage';
import {
  CheckeredPattern,
  CrownDoodle,
  EnergySeal,
  HandArrow,
} from '@/src/components/ui/BrandDoodles';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (prefersReduced || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setTilt({ x: nx * 10, y: ny * 8 });
  };

  const handlePointerLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      id="inicio"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative scroll-mt-16 overflow-hidden bg-[#FFBF00] text-[#17120F]"
    >
      {/* Asymmetric Torn Dark-Ink Corner Wedge & Checkered Streetwear Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 bottom-0 w-full lg:w-[46%] z-0 overflow-hidden"
      >
        <svg
          viewBox="0 0 800 800"
          preserveAspectRatio="none"
          className="hidden lg:block absolute inset-0 h-full w-full"
        >
          <path
            d="M420,0 L800,0 L800,800 L195,800 L235,680 L185,565 L255,440 L215,310 L300,180 L355,75 Z"
            fill="#17120F"
          />
        </svg>

        <CheckeredPattern
          rows={3}
          cols={8}
          className="hidden md:block absolute -top-2 right-6 w-48 lg:w-60 rotate-6 opacity-95"
        />
        <CheckeredPattern
          rows={2}
          cols={10}
          className="hidden lg:block absolute bottom-6 right-0 w-64 -rotate-3 opacity-95"
        />
      </div>

      {/* Main Campaign Stage */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12 pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-24">
        {/* Top Editorial Masthead Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#17120F]/20 pb-3 font-mono-tech text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em]">
          <span>SMASH CULTURE · SÃO PAULO · NO RULES. JUST FLAVOR.</span>
          <span className="bg-[#FFF0DC] text-[#17120F] border-2 border-[#17120F] px-2.5 py-0.5 shadow-[2px_2px_0px_#17120F]">
            EST. 2026
          </span>
        </div>

        {/* Desktop Asymmetric Overlap / Mobile Deliberate Poster Stack */}
        <div className="relative mt-6 lg:mt-8 lg:min-h-[600px] flex flex-col lg:block">
          {/* Oversized Typography Layer */}
          <div className="relative z-20 lg:max-w-[66%] lg:pt-2">
            <HeroMotion>
              <h1 className="font-display uppercase tracking-[-0.045em] leading-[0.82] -rotate-2 origin-left select-none">
                <span className="block text-[clamp(3.75rem,11vw,10.25rem)] text-[#17120F] drop-shadow-[5px_5px_0px_#842B0B]">
                  SMASH
                </span>
                <span className="block -mt-1 sm:-mt-2 text-[clamp(3.3rem,9.4vw,8.6rem)] text-[#FFFFFF] drop-shadow-[5px_5px_0px_#17120F]">
                  É OUTRA
                </span>
                <span className="block -mt-1 sm:-mt-2 text-[clamp(2.9rem,8.1vw,7.4rem)] text-[#17120F] drop-shadow-[5px_5px_0px_#842B0B]">
                  CONVERSA.
                </span>
              </h1>
            </HeroMotion>

            {/* Mobile Cutout Burger positioned interactively right beneath/overlapping headline */}
            <div className="relative lg:hidden -mt-4 sm:-mt-6 mb-2 flex justify-center">
              <div className="relative w-full max-w-[340px] sm:max-w-[420px]">
                <CutoutImage
                  src={HERO_BURGER_IMAGE}
                  alt="Duplo smash cheeseburger artesanal BRUTE com crosta caramelizada, queijo cheddar derretido, picles e molho especial"
                  fallbackLabel="BRUTE. DOUBLE SMASH"
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-auto object-contain drop-shadow-[0_24px_30px_rgba(23,18,15,0.45)]"
                />
                <div className="pointer-events-none absolute top-3 -right-1">
                  <EnergySeal className="scale-75 sm:scale-90 rotate-6" />
                </div>
              </div>
            </div>

            <HeroMotion delay={0.12}>
              <div className="mt-2 lg:mt-8 max-w-md">
                <p className="text-base sm:text-lg lg:text-xl font-bold leading-snug text-[#17120F]">
                  Chapa quente. Crosta perfeita. Zero frescura.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <Button href="#cardapio" variant="primary" size="lg">
                    <span>EXPLORAR CARDÁPIO</span>
                    <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                  </Button>

                  <Button href="#a-brute" variant="secondary" size="lg">
                    <span>CONHECER A BRUTE</span>
                  </Button>
                </div>
              </div>
            </HeroMotion>
          </div>

          {/* Desktop Photorealistic Cutout Burger Overlapping Typography */}
          <div className="hidden lg:block absolute right-[1%] xl:right-[3%] top-[-12px] w-[500px] xl:w-[585px] z-30 pointer-events-none">
            <ParallaxElement offset={22}>
              <motion.div
                initial={prefersReduced ? false : { opacity: 0, scale: 0.94, y: 18 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  x: prefersReduced ? 0 : tilt.x,
                  rotate: prefersReduced ? 3 : 3 + tilt.x * 0.14,
                }}
                transition={{
                  opacity: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                  scale: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                  x: { type: 'spring', stiffness: 120, damping: 20 },
                  rotate: { type: 'spring', stiffness: 120, damping: 20 },
                }}
                className="relative"
              >
                <CutoutImage
                  src={HERO_BURGER_IMAGE}
                  alt="Duplo smash cheeseburger artesanal BRUTE com crosta caramelizada, queijo cheddar derretido, picles e molho especial"
                  fallbackLabel="BRUTE. DOUBLE SMASH"
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-auto object-contain drop-shadow-[0_34px_44px_rgba(23,18,15,0.5)]"
                />

                {/* Editorial Graphic Annotations */}
                <CrownDoodle
                  color="#FFBF00"
                  className="absolute top-6 left-12 h-11 w-16 -rotate-12"
                />
                <EnergySeal className="absolute top-16 -right-4 rotate-6" />
              </motion.div>
            </ParallaxElement>

            <div className="flex items-center gap-2 mt-1 ml-12">
              <HandArrow color="#FFBF00" className="w-16 -rotate-12" />
              <span className="font-mono-tech text-[11px] font-bold uppercase tracking-widest bg-[#17120F] text-[#FFBF00] border border-[#FFBF00] px-2.5 py-1">
                DUPLO SMASH · CHAPA 260°C
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
