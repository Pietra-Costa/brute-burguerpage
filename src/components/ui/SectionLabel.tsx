import { cn } from '@/src/lib/utils';

interface SectionLabelProps {
  index: string;
  label: string;
  tone?: 'dark' | 'light' | 'yellow';
  className?: string;
}

export function SectionLabel({
  index,
  label,
  tone = 'dark',
  className,
}: SectionLabelProps) {
  const toneClass =
    tone === 'light'
      ? 'text-[#FFF0DC]/85'
      : tone === 'yellow'
      ? 'text-[#FFBF00]'
      : 'text-[#842B0B]';

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2.5 font-mono-tech text-xs font-semibold uppercase tracking-[0.16em]',
        toneClass,
        className
      )}
    >
      <span className="tabular-nums">{index}</span>
      <span aria-hidden="true">·</span>
      <span>{label}</span>
    </div>
  );
}
