import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/src/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'yellow' | 'cream' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

type AnchorButtonProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type ButtonProps = AnchorButtonProps | NativeButtonProps;

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-[#17120F] text-[#FFBF00] border-2 border-[#17120F] shadow-[4px_4px_0px_#842B0B] hover:bg-[#842B0B] hover:text-[#FFF0DC] hover:shadow-[4px_4px_0px_#17120F] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none',
  secondary:
    'bg-transparent text-[#17120F] border-2 border-[#17120F] hover:bg-[#17120F] hover:text-[#FFF0DC] active:translate-x-[1px] active:translate-y-[1px]',
  yellow:
    'bg-[#FFBF00] text-[#17120F] border-2 border-[#17120F] shadow-[4px_4px_0px_#17120F] hover:bg-[#F47721] hover:text-[#17120F] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none',
  cream:
    'bg-[#FFF0DC] text-[#17120F] border-2 border-[#17120F] shadow-[4px_4px_0px_#FFBF00] hover:bg-[#FFBF00] hover:text-[#17120F] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none',
  ghost:
    'bg-transparent text-[#FFF0DC] border-2 border-[#FFF0DC] hover:bg-[#FFF0DC] hover:text-[#17120F]',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'min-h-[40px] px-4 py-2 text-xs',
  md: 'min-h-[46px] px-6 py-3 text-sm',
  lg: 'min-h-[54px] px-8 py-4 text-sm md:text-base',
};

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    children,
    className,
    ...rest
  } = props;

  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2.5 font-display uppercase tracking-wide whitespace-nowrap shrink-0 cursor-pointer select-none transition-all duration-150 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#842B0B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFF0DC]',
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className
  );

  if ('href' in props && props.href !== undefined) {
    const { href, ...anchorProps } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={baseClasses} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={buttonProps.type ?? 'button'} className={baseClasses} {...buttonProps}>
      {children}
    </button>
  );
}
