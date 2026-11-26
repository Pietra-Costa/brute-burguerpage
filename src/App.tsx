import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { HeroSection } from '@/src/components/sections/HeroSection';
import { Marquee } from '@/src/components/ui/Marquee';
import { TornDivider } from '@/src/components/ui/TornDivider';
import { ExplodedBurgerSection } from '@/src/components/sections/ExplodedBurgerSection';
import { MenuSection } from '@/src/components/sections/MenuSection';
import { CombosSection } from '@/src/components/sections/CombosSection';
import { ManifestoSection } from '@/src/components/sections/ManifestoSection';
import { ReviewsSection } from '@/src/components/sections/ReviewsSection';
import { LocationSection } from '@/src/components/sections/LocationSection';

const MARQUEE_ITEMS = [
  'NO RULES. JUST FLAVOR.',
  'CHAPA A 260°C',
  'SMASH SEM LIMITES.',
  'BLEND FRESCO DIÁRIO',
  'BRIOCHE SELADO NA MANTEIGA',
  'CROSTA RENDADA NA PRENSA',
];

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF0DC] text-[#17120F]">
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] bg-[#17120F] text-[#FFBF00] px-4 py-2 font-mono-tech text-xs uppercase border-2 border-[#FFBF00]"
      >
        Pular para o conteúdo principal
      </a>

      <Navbar />

      <main id="conteudo-principal" className="flex-1">
        <HeroSection />
        <TornDivider topColor="#FFBF00" bottomColor="#FFF0DC" />
        <ExplodedBurgerSection />
        <TornDivider topColor="#FFF0DC" bottomColor="#17120F" flip />
        <MenuSection />
        <Marquee items={MARQUEE_ITEMS} />
        <TornDivider topColor="#17120F" bottomColor="#FFBF00" />
        <CombosSection />
        <TornDivider topColor="#FFBF00" bottomColor="#842B0B" flip />
        <ManifestoSection />
        <TornDivider topColor="#842B0B" bottomColor="#FFF0DC" />
        <ReviewsSection />
        <TornDivider topColor="#FFF0DC" bottomColor="#842B0B" flip />
        <LocationSection />
      </main>

      <Footer />
    </div>
  );
}
