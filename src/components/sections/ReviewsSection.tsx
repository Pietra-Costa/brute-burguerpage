import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CUSTOMER_REVIEWS } from '@/src/data/reviews';
import { Reveal } from '@/src/components/motion/Reveal';
import { SectionLabel } from '@/src/components/ui/SectionLabel';
import { ReviewCard } from '@/src/components/ui/ReviewCard';
import { cn } from '@/src/lib/utils';

export function ReviewsSection() {
  const [focusedIndex, setFocusedIndex] = useState<number>(0);

  const handlePrev = () => {
    setFocusedIndex((prev) =>
      prev === 0 ? CUSTOMER_REVIEWS.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setFocusedIndex((prev) =>
      prev === CUSTOMER_REVIEWS.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="avaliacoes"
      className="scroll-mt-16 bg-[#FFF0DC] text-[#17120F]"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Header + Interactive Spotlight Controls */}
          <div className="lg:col-span-4">
            <SectionLabel index="06" label="VOZ DA RUA" tone="dark" />
            <Reveal className="mt-3">
              <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight leading-[0.9] text-[#17120F] text-balance">
                QUEM PROVA,{' '}
                <span className="text-[#842B0B]">VOLTA.</span>
              </h2>
            </Reveal>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#17120F]/80">
              Sabor que conquista (e faz voltar). Depoimentos demonstrativos
              editáveis para apresentação de portfólio.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Destacar avaliação anterior"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#17120F] bg-[#FFF0DC] text-[#17120F] hover:bg-[#17120F] hover:text-[#FFBF00] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#842B0B]"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Destacar próxima avaliação"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#17120F] bg-[#17120F] text-[#FFBF00] hover:bg-[#842B0B] hover:text-[#FFF0DC] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#842B0B]"
              >
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <span className="ml-2 font-mono-tech text-xs font-semibold tabular-nums text-[#842B0B]">
                0{focusedIndex + 1} / 0{CUSTOMER_REVIEWS.length}
              </span>
            </div>
          </div>

          {/* Right 3-Card Staggered Editorial Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {CUSTOMER_REVIEWS.map((review, index) => {
              const isFocused = index === focusedIndex;
              return (
                <Reveal key={review.id} delay={index * 0.08} className="flex">
                  <ReviewCard
                    review={review}
                    offsetClass={cn(
                      'w-full transition-transform duration-200',
                      isFocused && 'ring-2 ring-[#842B0B] -translate-y-1.5'
                    )}
                  />
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
