import { ArrowUpRight } from 'lucide-react';
import { BurgerProduct } from '@/src/types';
import { cn, formatBRL } from '@/src/lib/utils';
import { PriceTag } from '@/src/components/ui/PriceTag';
import { SafeImage } from '@/src/components/ui/SafeImage';

interface ProductCardProps {
  product: BurgerProduct;
  tiltClass?: string;
  onInspect: (product: BurgerProduct) => void;
  className?: string;
}

export function ProductCard({
  product,
  tiltClass,
  onInspect,
  className,
}: ProductCardProps) {
  const formattedPrice = formatBRL(product.price);

  return (
    <article
      className={cn(
        'group flex flex-col justify-between border-2 border-[#17120F] bg-[#FFF0DC] text-[#17120F] shadow-[7px_7px_0px_#842B0B] transition-transform duration-200 hover:-translate-y-1.5',
        tiltClass,
        className
      )}
    >
      <div>
        <div className="relative overflow-hidden border-b-2 border-[#17120F] aspect-[4/3] bg-[#17120F]">
          <SafeImage
            src={product.image}
            alt={product.imageAlt}
            fallbackLabel={product.name}
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.05]"
          />
          <div className="absolute top-3 left-3 bg-[#17120F] text-[#FFBF00] px-2.5 py-1 font-mono-tech text-[11px] font-semibold uppercase tracking-widest border border-[#FFBF00]">
            {product.code} · {product.weightInfo}
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <span className="font-mono-tech text-[11px] font-bold uppercase tracking-wider text-[#842B0B]">
            {product.category}
          </span>

          <h3 className="mt-1.5 font-display text-2xl uppercase leading-[0.98] tracking-tight text-[#17120F]">
            {product.name}
          </h3>

          <p className="mt-2.5 text-sm leading-relaxed text-[#17120F]/85">
            {product.shortDescription}
          </p>
        </div>
      </div>

      <div className="mx-5 mb-5 sm:mx-6 sm:mb-6 flex items-center justify-between gap-3 border-t-2 border-[#17120F] pt-4">
        <PriceTag price={product.price} tone="dark" size="md" />

        <button
          type="button"
          onClick={() => onInspect(product)}
          aria-label={`Ver ficha técnica de ${product.name} (${formattedPrice})`}
          className="inline-flex h-11 w-11 items-center justify-center border-2 border-[#17120F] bg-[#FFBF00] text-[#17120F] shadow-[3px_3px_0px_#17120F] transition-all duration-150 group-hover:bg-[#17120F] group-hover:text-[#FFBF00] cursor-pointer focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#842B0B]"
        >
          <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
