import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '@/src/hooks/useReducedMotion';

interface HeroMotionProps {
  children: ReactNode;
  delay?: number;
  yOffset?: number;
  className?: string;
}

export function HeroMotion({
  children,
  delay = 0,
  yOffset = 22,
  className,
}: HeroMotionProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.48,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
