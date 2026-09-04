'use client';

import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { Children, isValidElement, useState, type ReactElement, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

export function Step({ children }: { title: string; children: ReactNode }) {
  return <>{children}</>;
}

// click through a process one step at a time
export function StepThrough({ children }: { children: ReactNode }) {
  const steps = Children.toArray(children).filter(
    (child): child is ReactElement<{ title: string; children: ReactNode }> =>
      isValidElement(child),
  );
  const [index, setIndex] = useState(0);
  const current = steps[index];

  if (!current) return null;

  return (
    <div className="my-6 rounded-xl border border-fd-border bg-fd-card p-4">
      <div className="mb-3 flex flex-wrap gap-2">
        {steps.map((step, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={cn(
              'rounded-full px-3 py-1 text-sm transition-colors',
              i === index
                ? 'bg-fd-primary text-fd-primary-foreground'
                : 'bg-fd-muted text-fd-muted-foreground hover:bg-fd-accent',
            )}
          >
            {i + 1}. {step.props.title}
          </button>
        ))}
      </div>
      <MotionConfig reducedMotion="user">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="[&>:first-child]:mt-0 [&>:last-child]:mb-0"
          >
            {current}
          </motion.div>
        </AnimatePresence>
      </MotionConfig>
    </div>
  );
}
