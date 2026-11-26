import { cn } from '@/src/lib/utils';

interface MarqueeProps {
  items: string[];
  className?: string;
}

export function Marquee({ items, className }: MarqueeProps) {
  const track = items.map((item, idx) => (
    <span
      key={`${item}-${idx}`}
      className="inline-flex items-center gap-6 px-3 font-display text-xs md:text-sm uppercase tracking-[0.14em] whitespace-nowrap"
    >
      <span>{item}</span>
      <span aria-hidden="true" className="text-[#F47721]">
        ■
      </span>
    </span>
  ));

  return (
    <div
      className={cn(
        'w-full overflow-hidden border-y-2 border-[#17120F] bg-[#17120F] text-[#FFBF00] py-3 select-none',
        className
      )}
      aria-label="Destaques da marca BRUTE"
    >
      <div className="animate-brute-marquee">
        <div className="flex items-center shrink-0">{track}</div>
        <div className="flex items-center shrink-0" aria-hidden="true">
          {track}
        </div>
      </div>
    </div>
  );
}
