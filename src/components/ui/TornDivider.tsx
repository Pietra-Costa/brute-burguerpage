import { cn } from '@/src/lib/utils';

interface TornDividerProps {
  topColor: string;
  bottomColor: string;
  flip?: boolean;
  className?: string;
}

/**
 * Ripped poster edge divider creating organic visual continuity between sections.
 */
export function TornDivider({
  topColor,
  bottomColor,
  flip = false,
  className,
}: TornDividerProps) {
  return (
    <div
      aria-hidden="true"
      style={{ backgroundColor: topColor }}
      className={cn('relative w-full overflow-hidden leading-none select-none', className)}
    >
      <svg
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        className={cn('block w-full h-7 sm:h-10 lg:h-12', flip && '-scale-x-100')}
      >
        <path
          d="M0,48 L0,22 L48,18 L92,28 L145,14 L210,25 L268,12 L334,26 L402,16 L470,29 L536,13 L612,24 L688,11 L754,27 L830,15 L898,28 L964,12 L1042,25 L1116,14 L1190,26 L1264,11 L1338,23 L1398,17 L1440,21 L1440,48 Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  );
}
