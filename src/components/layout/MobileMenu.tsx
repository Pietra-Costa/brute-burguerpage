import { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, ArrowUpRight } from 'lucide-react';
import { NAVIGATION_ITEMS } from '@/src/data/navigation';
import { BUSINESS_CONFIG } from '@/src/data/business';
import { useReducedMotion } from '@/src/hooks/useReducedMotion';
import { Button } from '@/src/components/ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-menu-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0, x: '100%' }}
          animate={prefersReduced ? { opacity: 1 } : { opacity: 1, x: 0 }}
          exit={prefersReduced ? { opacity: 0 } : { opacity: 0, x: '100%' }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#17120F] text-[#FFF0DC] p-6"
        >
          <div className="flex items-center justify-between border-b-2 border-[#FFBF00]/30 pb-4">
            <span className="font-display text-2xl text-[#FFBF00]">
              {BUSINESS_CONFIG.name}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar menu"
              className="inline-flex h-11 w-11 items-center justify-center border-2 border-[#FFBF00] bg-[#FFBF00] text-[#17120F] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#FFF0DC]"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Menu móvel" className="my-auto flex flex-col gap-5 py-8">
            {NAVIGATION_ITEMS.map((item, idx) => (
              <a
                key={item.sectionId}
                href={item.href}
                onClick={onClose}
                className="group flex items-baseline justify-between border-b border-[#FFF0DC]/15 pb-3 font-display text-4xl uppercase tracking-tight text-[#FFF0DC] hover:text-[#FFBF00] transition-colors"
              >
                <span>{item.label}</span>
                <span className="font-mono-tech text-xs text-[#FFBF00]">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </nav>

          <div className="space-y-4 border-t-2 border-[#FFBF00]/30 pt-5">
            <Button
              href="#cardapio"
              variant="yellow"
              size="lg"
              className="w-full"
              onClick={onClose}
            >
              <span>EXPLORAR CARDÁPIO</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Button>

            <p className="font-mono-tech text-xs text-[#FFF0DC]/70">
              {BUSINESS_CONFIG.hours}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
