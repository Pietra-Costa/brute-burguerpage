import { SmashIngredient } from '@/src/types';
import { cn } from '@/src/lib/utils';

interface IngredientAnnotationProps {
  ingredient: SmashIngredient;
  isActive: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
  align?: 'left' | 'right' | 'list';
}

export function IngredientAnnotation({
  ingredient,
  isActive,
  onActivate,
  onDeactivate,
  align = 'right',
}: IngredientAnnotationProps) {
  if (align === 'list') {
    return (
      <button
        type="button"
        onClick={onActivate}
        onMouseEnter={onActivate}
        onMouseLeave={onDeactivate}
        className={cn(
          'group w-full text-left border-b border-[#17120F]/20 py-3.5 transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#842B0B]',
          isActive && 'border-[#842B0B]'
        )}
      >
        <div className="flex items-baseline justify-between gap-4">
          <div className="flex items-baseline gap-3">
            <span
              className={cn(
                'font-mono-tech text-xs font-bold tabular-nums tracking-widest transition-colors',
                isActive ? 'text-[#F47721]' : 'text-[#842B0B]'
              )}
            >
              {ingredient.index}
            </span>
            <h3
              className={cn(
                'font-display text-base sm:text-lg uppercase tracking-tight transition-colors',
                isActive ? 'text-[#842B0B]' : 'text-[#17120F]'
              )}
            >
              {ingredient.name}
            </h3>
          </div>

          <span className="font-mono-tech text-[10px] font-semibold uppercase tracking-widest text-[#17120F]/60 whitespace-nowrap shrink-0">
            {ingredient.spec}
          </span>
        </div>

        <p className="mt-1 pl-7 text-xs sm:text-sm leading-relaxed text-[#17120F]/80">
          {ingredient.description}
        </p>
      </button>
    );
  }

  const isLeft = align === 'left';

  return (
    <button
      type="button"
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
      onFocus={onActivate}
      onBlur={onDeactivate}
      onClick={onActivate}
      className={cn(
        'group flex items-center gap-3 w-full cursor-pointer transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#842B0B]',
        isLeft ? 'flex-row-reverse text-right' : 'flex-row text-left'
      )}
    >
      {/* Fine Leader Line pointing toward the photographed ingredient layer */}
      <div
        aria-hidden="true"
        className={cn(
          'flex items-center shrink-0',
          isLeft && 'flex-row-reverse'
        )}
      >
        <span
          className={cn(
            'h-2 w-2 border border-[#17120F] transition-transform duration-150',
            isActive ? 'bg-[#F47721] scale-125' : 'bg-[#FFBF00]'
          )}
        />
        <span
          className={cn(
            'h-[1.5px] transition-all duration-200',
            isActive ? 'w-12 bg-[#842B0B]' : 'w-8 bg-[#17120F]/55'
          )}
        />
      </div>

      {/* Unboxed Editorial Typography Callout */}
      <div className="flex-1 min-w-0">
        <div
          className={cn(
            'inline-flex items-baseline gap-2 border-b pb-0.5 transition-colors',
            isActive ? 'border-[#842B0B]' : 'border-[#17120F]/25'
          )}
        >
          <span className="font-mono-tech text-[11px] font-bold tabular-nums text-[#842B0B]">
            {ingredient.index}
          </span>
          <span
            className={cn(
              'font-display text-xs xl:text-sm uppercase tracking-tight transition-colors whitespace-nowrap',
              isActive ? 'text-[#842B0B]' : 'text-[#17120F]'
            )}
          >
            {ingredient.name}
          </span>
        </div>
        <p className="mt-1 text-[11px] xl:text-xs leading-snug text-[#17120F]/80">
          {ingredient.description}
        </p>
      </div>
    </button>
  );
}
