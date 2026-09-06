'use client';

import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { Children, isValidElement, useState, type ReactElement, type ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { stepPanelVariants, type StepDirection } from './motion-values';

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
  const [direction, setDirection] = useState<StepDirection>(1);
  const current = steps[index];

  if (!current) return null;

  function selectStep(next: number) {
    if (next === index) return;
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  }

  return (
    <div className="my-6 rounded-xl border border-fd-border bg-fd-card p-4">
      <div className="mb-3 flex flex-wrap gap-2">
        {steps.map((step, i) => (
          <button
            key={i}
            type="button"
            onClick={() => selectStep(i)}
            aria-pressed={i === index}
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
        <AnimatePresence custom={direction} initial={false} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={stepPanelVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="[&>:first-child]:mt-0 [&>:last-child]:mb-0"
          >
            {current}
          </motion.div>
        </AnimatePresence>
      </MotionConfig>
    </div>
  );
}
