import { cn, formatBRL } from '@/src/lib/utils';

interface PriceTagProps {
  price: number;
  tone?: 'dark' | 'yellow' | 'cream';
  size?: 'md' | 'lg';
  className?: string;
}

export function PriceTag({
  price,
  tone = 'dark',
  size = 'md',
  className,
}: PriceTagProps) {
  const toneClass =
    tone === 'yellow'
      ? 'text-[#FFBF00]'
      : tone === 'cream'
      ? 'text-[#FFF0DC]'
      : 'text-[#17120F]';

  const sizeClass =
    size === 'lg'
      ? 'text-3xl md:text-4xl'
      : 'text-2xl md:text-3xl';

  return (
    <span
      className={cn(
        'font-display tabular-nums tracking-tight leading-none whitespace-nowrap',
        toneClass,
        sizeClass,
        className
      )}
    >
      {formatBRL(price)}
    </span>
  );
}
