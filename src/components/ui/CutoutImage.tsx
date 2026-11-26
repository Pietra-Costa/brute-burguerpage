import { useEffect, useState } from 'react';
import { UtensilsCrossed } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface CutoutImageProps {
  src: string;
  alt: string;
  fallbackLabel?: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
}

const cutoutCache = new Map<string, string>();

/**
 * Converts a pure-white studio photography backdrop into a crisp alpha-transparent
 * PNG using border-seeded flood-fill + anti-aliased edge de-fringing.
 * Preserves interior white highlights (sesame seeds, glossy fat, tomato juice).
 */
function extractStudioCutout(img: HTMLImageElement): string | null {
  try {
    const maxDim = 1150;
    const scale = Math.min(
      1,
      maxDim / Math.max(img.naturalWidth || 1, img.naturalHeight || 1)
    );
    const w = Math.max(1, Math.round(img.naturalWidth * scale));
    const h = Math.max(1, Math.round(img.naturalHeight * scale));

    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return null;

    ctx.drawImage(img, 0, 0, w, h);
    const imageData = ctx.getImageData(0, 0, w, h);
    const data = imageData.data;
    const total = w * h;

    const visited = new Uint8Array(total);
    const queue = new Int32Array(total);
    let head = 0;
    let tail = 0;

    const isBackdrop = (idx: number): boolean => {
      const p = idx * 4;
      const r = data[p];
      const g = data[p + 1];
      const b = data[p + 2];
      const minC = r < g ? (r < b ? r : b) : g < b ? g : b;
      const maxC = r > g ? (r > b ? r : b) : g > b ? g : b;
      const chroma = maxC - minC;
      // Pure/near-white studio backdrop & soft warm vignette
      if (minC >= 214 && chroma <= 26) return true;
      // Neutral light-gray cast floor shadow on white studio sweep
      if (minC >= 156 && chroma <= 18) return true;
      return false;
    };

    const enqueue = (idx: number) => {
      if (visited[idx]) return;
      if (!isBackdrop(idx)) return;
      visited[idx] = 1;
      queue[tail++] = idx;
    };

    // Seed all 4 outer edges
    for (let x = 0; x < w; x++) {
      enqueue(x);
      enqueue((h - 1) * w + x);
    }
    for (let y = 0; y < h; y++) {
      enqueue(y * w);
      enqueue(y * w + (w - 1));
    }

    // Also seed enclosed pure-neutral-white islands (e.g., inside onion ring center)
    for (let idx = 0; idx < total; idx++) {
      if (visited[idx]) continue;
      const p = idx * 4;
      const r = data[p];
      const g = data[p + 1];
      const b = data[p + 2];
      const minC = r < g ? (r < b ? r : b) : g < b ? g : b;
      const maxC = r > g ? (r > b ? r : b) : g > b ? g : b;
      if (minC >= 246 && maxC - minC <= 8) {
        visited[idx] = 1;
        queue[tail++] = idx;
      }
    }

    while (head < tail) {
      const idx = queue[head++];
      data[idx * 4 + 3] = 0;

      const x = idx % w;
      const y = (idx - x) / w;

      if (x > 0) enqueue(idx - 1);
      if (x + 1 < w) enqueue(idx + 1);
      if (y > 0) enqueue(idx - w);
      if (y + 1 < h) enqueue(idx + w);
    }

    // 2-pass soft anti-aliased edge feathering & white/gray halo removal
    const cleared = new Uint8Array(visited);
    for (let pass = 0; pass < 2; pass++) {
      const nextCleared: number[] = [];
      for (let y = 1; y < h - 1; y++) {
        for (let x = 1; x < w - 1; x++) {
          const idx = y * w + x;
          if (cleared[idx]) continue;

          const hasClearedNeighbor =
            cleared[idx - 1] ||
            cleared[idx + 1] ||
            cleared[idx - w] ||
            cleared[idx + w];

          if (!hasClearedNeighbor) continue;

          const p = idx * 4;
          const r = data[p];
          const g = data[p + 1];
          const b = data[p + 2];
          const minC = Math.min(r, g, b);
          const maxC = Math.max(r, g, b);
          const chroma = maxC - minC;

          if (chroma <= 30 && minC >= 148) {
            const factor = pass === 0 ? 0.25 : 0.6;
            const alpha = Math.max(
              0,
              Math.min(255, Math.round((215 - minC) * 3.8 * factor))
            );
            data[p + 3] = Math.min(data[p + 3], alpha);
            if (alpha < 45) {
              nextCleared.push(idx);
            } else {
              // Suppress neutral bright fringe tint
              data[p] = Math.round(r * 0.85);
              data[p + 1] = Math.round(g * 0.82);
              data[p + 2] = Math.round(b * 0.78);
            }
          }
        }
      }
      for (const idx of nextCleared) {
        cleared[idx] = 1;
      }
    }

    ctx.putImageData(imageData, 0, 0);
    return canvas.toDataURL('image/png');
  } catch {
    return null;
  }
}

export function CutoutImage({
  src,
  alt,
  fallbackLabel,
  className,
  loading = 'eager',
  fetchPriority = 'auto',
}: CutoutImageProps) {
  const [cutoutSrc, setCutoutSrc] = useState<string | null>(
    () => cutoutCache.get(src) ?? null
  );
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
    const cached = cutoutCache.get(src);
    if (cached) {
      setCutoutSrc(cached);
      return;
    }

    let cancelled = false;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      if (cancelled) return;
      const result = extractStudioCutout(img);
      if (result) {
        cutoutCache.set(src, result);
        setCutoutSrc(result);
      } else {
        setCutoutSrc(src);
      }
    };
    img.onerror = () => {
      if (!cancelled) setHasError(true);
    };
    img.src = src;

    return () => {
      cancelled = true;
    };
  }, [src]);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          'flex flex-col items-center justify-center gap-2 border-2 border-[#17120F] bg-[#FFF0DC] p-6 text-center text-[#17120F]',
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
      src={cutoutSrc ?? src}
      alt={alt}
      loading={loading}
      fetchPriority={fetchPriority}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={cn(
        'transition-opacity duration-200',
        !cutoutSrc && 'opacity-0',
        className
      )}
    />
  );
}
