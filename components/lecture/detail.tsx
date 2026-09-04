import type { ReactNode } from 'react';

// extra reference material folded away: full command output, long lookup tables
export function Detail({ label, children }: { label: string; children: ReactNode }) {
  return (
    <details className="my-4 [&[open]>summary]:mb-1">
      <summary className="cursor-pointer text-sm text-fd-muted-foreground marker:text-fd-muted-foreground hover:text-fd-foreground">
        {label}
      </summary>
      <div className="border-l-2 border-fd-border pl-4 [&>:first-child]:mt-2 [&>:last-child]:mb-2">
        {children}
      </div>
    </details>
  );
}
