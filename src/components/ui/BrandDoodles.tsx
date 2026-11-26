import { cn } from '@/src/lib/utils';

export function CheckeredPattern({
  className,
  rows = 3,
  cols = 8,
}: {
  className?: string;
  rows?: number;
  cols?: number;
}) {
  const squares = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const isDark = (r + c) % 2 === 0;
      squares.push(
        <rect
          key={`${r}-${c}`}
          x={c * 24}
          y={r * 24}
          width={24}
          height={24}
          fill={isDark ? '#17120F' : '#FFF0DC'}
        />
      );
    }
  }

  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${cols * 24} ${rows * 24}`}
      className={cn('block select-none pointer-events-none', className)}
    >
      {squares}
    </svg>
  );
}

export function CrownDoodle({
  color = '#17120F',
  className,
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 88 58"
      fill="none"
      className={cn('select-none pointer-events-none', className)}
    >
      <path
        d="M8 46L14 14L34 32L44 8L56 32L76 14L80 46H8Z"
        stroke={color}
        strokeWidth="5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M10 54H78"
        stroke={color}
        strokeWidth="4.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HandArrow({
  color = '#17120F',
  className,
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 96 42"
      fill="none"
      className={cn('select-none pointer-events-none', className)}
    >
      <path
        d="M4 32C28 10 58 8 86 18"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M74 8L89 19L72 28"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function EnergySeal({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'inline-flex flex-col items-center justify-center rounded-full border-[3px] border-[#FFBF00] bg-[#17120F] text-[#FFBF00] h-28 w-28 sm:h-32 sm:w-32 p-2 text-center shadow-[4px_4px_0px_#842B0B] select-none',
        className
      )}
    >
      <CrownDoodle color="#FFBF00" className="h-4 w-6 mb-1" />
      <span className="font-display text-lg sm:text-xl leading-none tracking-tight">
        100%
      </span>
      <span className="font-display text-[10px] sm:text-[11px] uppercase leading-[1.05] tracking-wide mt-0.5">
        BRUTE
        <br />
        ENERGY
      </span>
      <span className="mt-1 font-mono-tech text-[8px] uppercase tracking-[0.18em] text-[#FFF0DC]/80">
        CHAPA 260°C
      </span>
    </div>
  );
}
