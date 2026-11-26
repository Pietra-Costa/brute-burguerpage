import { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowDown, X } from 'lucide-react';
import { BurgerProduct } from '@/src/types';
import { formatBRL } from '@/src/lib/utils';
import { useReducedMotion } from '@/src/hooks/useReducedMotion';
import { SafeImage } from '@/src/components/ui/SafeImage';
import { Button } from '@/src/components/ui/Button';

interface ProductDetailModalProps {
  product: BurgerProduct | null;
  onClose: () => void;
}

export function ProductDetailModal({
  product,
  onClose,
}: ProductDetailModalProps) {
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!product) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-burger-title"
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#17120F]/80 p-4 sm:p-6"
        >
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl border-2 border-[#FFBF00] bg-[#FFF0DC] text-[#17120F] shadow-[10px_10px_0px_#842B0B] overflow-hidden"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar ficha técnica"
              className="absolute top-3 right-3 z-10 inline-flex h-10 w-10 items-center justify-center border-2 border-[#17120F] bg-[#FFBF00] text-[#17120F] hover:bg-[#17120F] hover:text-[#FFBF00] transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-12">
              <div className="sm:col-span-5 bg-[#17120F] border-b-2 sm:border-b-0 sm:border-r-2 border-[#17120F]">
                <SafeImage
                  src={product.image}
                  alt={product.imageAlt}
                  fallbackLabel={product.name}
                  className="h-56 sm:h-full w-full object-cover"
                />
              </div>

              <div className="sm:col-span-7 p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <span className="font-mono-tech text-[11px] font-bold uppercase tracking-[0.16em] text-[#842B0B]">
                    {product.code} · {product.category} · {product.weightInfo}
                  </span>
                  <h3
                    id="modal-burger-title"
                    className="mt-2 font-display text-2xl sm:text-3xl uppercase leading-none tracking-tight text-[#17120F]"
                  >
                    {product.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#17120F]/85">
                    {product.shortDescription}
                  </p>

                  <div className="mt-4 border-t border-[#17120F]/20 pt-3">
                    <span className="font-mono-tech text-[11px] font-bold uppercase tracking-wider text-[#842B0B]">
                      Composição na chapa
                    </span>
                    <ul className="mt-2 space-y-1">
                      {product.ingredients.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 font-mono-tech text-xs text-[#17120F]"
                        >
                          <span
                            className="h-1.5 w-1.5 bg-[#842B0B] shrink-0"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t-2 border-[#17120F] pt-4">
                  <span className="font-display text-2xl tabular-nums text-[#17120F]">
                    {formatBRL(product.price)}
                  </span>

                  <Button
                    href="#anatomia"
                    onClick={onClose}
                    variant="primary"
                    size="sm"
                  >
                    <span>VER ANATOMIA</span>
                    <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
