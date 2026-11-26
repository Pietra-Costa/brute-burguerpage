import { Star } from 'lucide-react';
import { CustomerReview } from '@/src/types';
import { cn } from '@/src/lib/utils';

interface ReviewCardProps {
  review: CustomerReview;
  offsetClass?: string;
}

export function ReviewCard({ review, offsetClass }: ReviewCardProps) {
  return (
    <article
      className={cn(
        'flex flex-col justify-between border-2 border-[#17120F] bg-[#FFFFFF] p-6 sm:p-7 shadow-[5px_5px_0px_#17120F]',
        offsetClass
      )}
    >
      <div>
        <div className="flex items-center justify-between gap-2 border-b border-[#17120F]/15 pb-3">
          <div
            className="flex items-center gap-1"
            aria-label={`Nota ${review.rating} de 5 estrelas`}
          >
            {Array.from({ length: review.rating }).map((_, index) => (
              <Star
                key={index}
                className="h-4 w-4 fill-[#F47721] text-[#17120F]"
                aria-hidden="true"
              />
            ))}
          </div>
          <span className="font-mono-tech text-[11px] font-medium uppercase tracking-wider text-[#842B0B]">
            {review.orderedItem}
          </span>
        </div>

        <blockquote className="mt-5 text-base font-medium leading-relaxed text-[#17120F]">
          “{review.quote}”
        </blockquote>
      </div>

      <footer className="mt-6 flex flex-wrap items-baseline justify-between gap-2 border-t border-[#17120F]/15 pt-4">
        <div>
          <cite className="not-italic font-display text-sm uppercase tracking-wide text-[#17120F]">
            {review.author}
          </cite>
          <span className="block font-mono-tech text-xs text-[#17120F]/70">
            {review.neighborhood}
          </span>
        </div>
        <span className="font-mono-tech text-[11px] text-[#842B0B]">
          {review.dateLabel}
        </span>
      </footer>
    </article>
  );
}
