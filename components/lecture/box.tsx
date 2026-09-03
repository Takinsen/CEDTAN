import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

// shared frame for every callout-style lecture block
export function LectureBox({
  icon: Icon,
  label,
  title,
  accent,
  children,
}: {
  icon: LucideIcon;
  label: string;
  title?: string;
  accent: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        'my-6 rounded-xl border border-fd-border bg-fd-card overflow-hidden',
        'border-l-4',
        accent,
      )}
    >
      <div className="flex items-center gap-2 px-4 pt-3 text-sm font-semibold text-fd-muted-foreground">
        <Icon className="size-4 shrink-0" />
        <span>{title ?? label}</span>
      </div>
      <div className="px-4 pb-1 [&>:first-child]:mt-2 [&>:last-child]:mb-3">{children}</div>
    </div>
  );
}
