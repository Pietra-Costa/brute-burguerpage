import { Reveal } from '@/src/components/motion/Reveal';
import { SectionLabel } from '@/src/components/ui/SectionLabel';
import { Sticker } from '@/src/components/ui/Sticker';

const MANIFESTO_PILLARS = [
  {
    metric: '260°C',
    title: 'CHAPA DE AÇO',
    desc: 'Pressão máxima para criar crosta caramelizada nas bordas e manter o centro suculento.',
  },
  {
    metric: '100%',
    title: 'CARNE FRESCA',
    desc: 'Blend bovino moído diariamente, nunca congelado, temperado só com sal e pimenta na hora.',
  },
  {
    metric: '0%',
    title: 'FRESCURA',
    desc: 'Sem torre impossível de morder, sem firula gourmet. Equilíbrio bruto entre pão, carne e queijo.',
  },
];

export function ManifestoSection() {
  return (
    <section
      id="a-brute"
      className="relative scroll-mt-16 bg-[#842B0B] text-[#FFF0DC]"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Editorial Anchor */}
          <div className="lg:col-span-7">
            <SectionLabel index="05" label="MANIFESTO BRUTE" tone="yellow" />

            <Reveal className="mt-5">
              <h2 className="font-display uppercase tracking-[-0.03em] leading-[0.9] text-[clamp(2.5rem,6vw,5.25rem)] text-balance">
                NÃO É SÓ HAMBÚRGUER.{' '}
                <span className="text-[#FFBF00]">É ATITUDE.</span>
              </h2>
            </Reveal>
          </div>

          {/* Right Offset Campaign Copy */}
          <div className="lg:col-span-5 lg:pt-8">
            <Reveal delay={0.1}>
              <div className="mb-5">
                <Sticker
                  text="ATITUDE DE RUA"
                  subtext="CAMPANHA 2026"
                  tone="yellow"
                  rotate="-rotate-1"
                />
              </div>

              <p className="text-lg sm:text-xl font-medium leading-relaxed text-[#FFF0DC]">
                A gente não acredita em atalhos. Acredita na chapa quente, na
                carne bem prensada, no queijo derretendo e naquela primeira
                mordida que faz você esquecer o resto.
              </p>

              <p className="mt-4 font-mono-tech text-xs uppercase tracking-[0.14em] text-[#FFBF00]">
                FEITO NA HORA · SEM MICRO-ONDAS · SEM ATALHOS
              </p>
            </Reveal>
          </div>
        </div>

        {/* Architectural Spec Strip */}
        <div className="mt-14 lg:mt-20 grid grid-cols-1 md:grid-cols-3 border-t-2 border-[#FFF0DC]/25 pt-8 gap-8 md:gap-0">
          {MANIFESTO_PILLARS.map((pillar, index) => (
            <Reveal
              key={pillar.title}
              delay={index * 0.08}
              className={
                index > 0
                  ? 'md:border-l md:border-[#FFF0DC]/25 md:pl-8 md:pr-6'
                  : 'md:pr-6'
              }
            >
              <div className="font-display text-4xl sm:text-5xl text-[#FFBF00] tabular-nums leading-none">
                {pillar.metric}
              </div>
              <h3 className="mt-3 font-mono-tech text-xs font-bold uppercase tracking-[0.16em] text-[#FFF0DC]">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#FFF0DC]/80">
                {pillar.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
