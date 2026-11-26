import { useState } from 'react';
import { UtensilsCrossed } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  loading?: 'eager' | 'lazy';
  decoding?: 'sync' | 'async' | 'auto';
  fetchPriority?: 'high' | 'low' | 'auto';
}

export function SafeImage({
  src,
  alt,
  className,
  fallbackLabel,
  loading = 'lazy',
  decoding = 'async',
  fetchPriority = 'auto',
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          'flex flex-col items-center justify-center gap-2 bg-[#FFF0DC] border-2 border-[#17120F] p-6 text-center text-[#17120F]',
          className
        )}
      >
        <UtensilsCrossed className="h-7 w-7 text-[#842B0B]" aria-hidden="true" />
        <span className="font-mono-tech text-xs font-semibold uppercase tracking-wider">
          {fallbackLabel ?? alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
