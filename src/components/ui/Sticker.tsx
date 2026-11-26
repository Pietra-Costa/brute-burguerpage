import { cn } from '@/src/lib/utils';

interface StickerProps {
  text: string;
  subtext?: string;
  tone?: 'yellow' | 'burgundy' | 'ink' | 'orange';
  rotate?: string;
  className?: string;
}

const TONE_CLASSES: Record<NonNullable<StickerProps['tone']>, string> = {
  yellow: 'bg-[#FFBF00] text-[#17120F] border-[#17120F]',
  burgundy: 'bg-[#842B0B] text-[#FFF0DC] border-[#17120F]',
  ink: 'bg-[#17120F] text-[#FFBF00] border-[#FFF0DC]',
  orange: 'bg-[#F47721] text-[#17120F] border-[#17120F]',
};

export function Sticker({
  text,
  subtext,
  tone = 'ink',
  rotate = '-rotate-2',
  className,
}: StickerProps) {
  return (
    <div
      className={cn(
        'inline-flex flex-col border-2 px-3 py-1.5 shadow-[3px_3px_0px_#17120F] select-none',
        TONE_CLASSES[tone],
        rotate,
        className
      )}
    >
      <span className="font-display text-xs md:text-sm uppercase leading-none tracking-tight whitespace-nowrap">
        {text}
      </span>
      {subtext && (
        <span className="mt-1 font-mono-tech text-[10px] font-semibold uppercase leading-none tracking-widest opacity-90 whitespace-nowrap">
          {subtext}
        </span>
      )}
    </div>
  );
}
