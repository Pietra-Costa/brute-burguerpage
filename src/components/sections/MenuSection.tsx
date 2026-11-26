import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { MENU_PRODUCTS } from '@/src/data/menu';
import { BurgerProduct } from '@/src/types';
import { Reveal } from '@/src/components/motion/Reveal';
import { SectionLabel } from '@/src/components/ui/SectionLabel';
import { ProductCard } from '@/src/components/ui/ProductCard';
import { Button } from '@/src/components/ui/Button';
import { CrownDoodle } from '@/src/components/ui/BrandDoodles';
import { ProductDetailModal } from '@/src/components/ui/ProductDetailModal';

const TILT_CLASSES = ['lg:-rotate-2', 'lg:rotate-1 lg:-translate-y-2', 'lg:rotate-2'];

export function MenuSection() {
  const [selectedProduct, setSelectedProduct] = useState<BurgerProduct | null>(null);

  return (
    <section
      id="cardapio"
      className="relative scroll-mt-16 bg-[#17120F] text-[#FFF0DC]"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Editorial Title Column */}
          <div className="lg:col-span-4 relative">
            <SectionLabel index="03" label="CARDÁPIO AUTORAL" tone="yellow" />

            <Reveal className="mt-4">
              <h2 className="font-display uppercase tracking-[-0.035em] leading-[0.88] text-[clamp(2.8rem,5.5vw,4.8rem)] text-[#FFBF00] -rotate-2 origin-left text-balance">
                NOSSO CARDÁPIO.
              </h2>
            </Reveal>

            <p className="mt-5 max-w-sm text-base leading-relaxed text-[#FFF0DC]/85">
              Burgers selecionados, para quem leva o sabor a sério. Clique em
              qualquer burger para abrir a ficha completa da chapa.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Button href="#combos" variant="yellow" size="md">
                <span>VER COMBOS</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>

          {/* Right Angled Campaign Poster Cards */}
          <div className="lg:col-span-8 relative">
            <CrownDoodle
              color="#FFBF00"
              className="hidden lg:block absolute -top-11 right-1/3 h-9 w-12 rotate-6 pointer-events-none"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 items-stretch">
              {MENU_PRODUCTS.map((product, index) => (
                <Reveal key={product.id} delay={index * 0.08} className="flex">
                  <ProductCard
                    product={product}
                    tiltClass={TILT_CLASSES[index % TILT_CLASSES.length]}
                    onInspect={setSelectedProduct}
                    className="w-full"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
