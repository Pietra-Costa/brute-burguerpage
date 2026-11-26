import { useEffect, useState } from 'react';
import { Menu, ArrowUpRight } from 'lucide-react';
import { NAVIGATION_ITEMS } from '@/src/data/navigation';
import { BUSINESS_CONFIG } from '@/src/data/business';
import { cn } from '@/src/lib/utils';
import { Button } from '@/src/components/ui/Button';
import { MobileMenu } from '@/src/components/layout/MobileMenu';

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAVIGATION_ITEMS.map((item) =>
      document.getElementById(item.sectionId)
    ).filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0.1, 0.4] }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 w-full border-b-2 border-[#17120F] transition-colors duration-200',
          isScrolled ? 'bg-[#FFBF00]/95 backdrop-blur-sm' : 'bg-[#FFBF00]'
        )}
      >
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-8 px-4 sm:px-8 lg:px-12">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#inicio"
            className="font-display text-2xl sm:text-[26px] tracking-tight text-[#17120F] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#842B0B]"
            aria-label={`${BUSINESS_CONFIG.name} — Voltar ao início`}
          >
            {BUSINESS_CONFIG.name}
          </a>

          {/* Zone 2: Primary Navigation Links */}
          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-7 lg:gap-9"
          >
            {NAVIGATION_ITEMS.map((item) => {
              const isActive = activeSection === item.sectionId;
              return (
                <a
                  key={item.sectionId}
                  href={item.href}
                  className={cn(
                    'relative py-1 font-mono-tech text-xs font-semibold uppercase tracking-[0.14em] whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#842B0B]',
                    isActive
                      ? 'text-[#842B0B]'
                      : 'text-[#17120F] hover:text-[#842B0B]'
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[#842B0B] transition-transform duration-150 origin-left',
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    )}
                  />
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Single Primary Anchor CTA + Mobile Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden md:block shrink-0">
              <Button href="#cardapio" variant="primary" size="sm">
                <span>EXPLORAR CARDÁPIO</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Abrir menu de navegação"
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu-drawer"
              className="inline-flex md:hidden h-11 w-11 items-center justify-center border-2 border-[#17120F] bg-[#FFF0DC] text-[#17120F] shadow-[3px_3px_0px_#17120F] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#842B0B]"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
}
