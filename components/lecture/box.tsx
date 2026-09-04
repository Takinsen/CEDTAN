import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

// shared frame for every callout-style lecture block; the icon colour is what names the block
export function LectureBox({
  icon: Icon,
  label,
  title,
  badge,
  accent,
  id,
  children,
}: {
  icon: LucideIcon;
  label: string;
  title?: string;
  badge?: string;
  accent: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <div id={id} className="my-6 scroll-mt-20 overflow-hidden rounded-xl border border-fd-border bg-fd-card">
      <div className="flex flex-wrap items-center gap-2 px-4 pt-3 text-sm font-semibold text-fd-muted-foreground">
        <Icon className={cn('size-4 shrink-0', accent)} />
        <span>{title ?? label}</span>
        {badge && (
          <span className="rounded-full border border-fd-border px-2 py-0.5 text-xs font-normal">
            {badge}
          </span>
        )}
      </div>
      <div className="px-4 pb-1 [&>:first-child]:mt-2 [&>:last-child]:mb-3">{children}</div>
    </div>
  );
}
