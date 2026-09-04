import { X, Check } from 'lucide-react';
import type { ReactNode } from 'react';

// two-column "wrong way vs right way"
export function Compare({ children }: { children: ReactNode }) {
  return <div className="my-6 grid gap-4 md:grid-cols-2">{children}</div>;
}

export function Wrong({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div className="min-w-0 rounded-xl border border-rose-500/40 bg-rose-500/5 p-4">
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-rose-700 dark:text-rose-400">
        <X className="size-4 shrink-0" />
        <span>{title ?? 'แบบที่มีปัญหา'}</span>
      </div>
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">{children}</div>
    </div>
  );
}

export function Right({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div className="min-w-0 rounded-xl border border-emerald-500/40 bg-emerald-500/5 p-4">
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
        <Check className="size-4 shrink-0" />
        <span>{title ?? 'แบบที่ดีกว่า'}</span>
      </div>
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">{children}</div>
    </div>
  );
}
