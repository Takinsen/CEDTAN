import type { ReactNode } from 'react';
import { ScrollFrame } from './scroll-frame';

// wraps a diagram with a caption and an optional figure number
export function Figure({
  number,
  caption,
  children,
}: {
  number?: number;
  caption: string;
  children: ReactNode;
}) {
  return (
    <figure className="my-6 rounded-xl border border-fd-border bg-fd-card p-4">
      <ScrollFrame>{children}</ScrollFrame>
      <figcaption className="mt-3 text-sm text-fd-muted-foreground text-center">
        {number !== undefined && <span className="font-semibold">รูปที่ {number}: </span>}
        {caption}
      </figcaption>
    </figure>
  );
}
