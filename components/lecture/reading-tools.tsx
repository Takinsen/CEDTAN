'use client';

import { ArrowUp, ChevronsDown, ChevronsDownUp, ListChecks } from 'lucide-react';
import { createContext, use, useState, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

const ToolsContext = createContext<{
  hasFolds: boolean;
  open: boolean;
  toggleAll: () => void;
} | null>(null);

// one state for every copy of the tools, so the row and the rail never disagree
export function ReadingToolsProvider({
  hasFolds,
  children,
}: {
  hasFolds: boolean;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  // folds carry data-fold so a bulk toggle never reveals a Quiz answer
  function toggleAll() {
    const next = !open;
    const folds = document.querySelectorAll<HTMLDetailsElement>('#nd-page details[data-fold]');
    for (const fold of folds) fold.open = next;
    setOpen(next);
  }

  return <ToolsContext value={{ hasFolds, open, toggleAll }}>{children}</ToolsContext>;
}

const ROW =
  'inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-secondary/50 px-3 py-1.5 text-sm ' +
  'transition-colors hover:bg-fd-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-primary';

const RAIL =
  'inline-flex w-full items-center gap-1.5 rounded-lg -mx-2 px-2 py-1.5 text-left text-sm text-fd-muted-foreground ' +
  'transition-colors hover:bg-fd-accent hover:text-fd-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-primary';

// jump to the recap and open every fold, for a reader who came to scan rather than read
export function ReadingTools({ variant = 'row' }: { variant?: 'row' | 'rail' }) {
  const tools = use(ToolsContext);
  if (!tools) return null;

  const { hasFolds, open, toggleAll } = tools;
  const rail = variant === 'rail';
  const style = rail ? RAIL : ROW;
  const Fold = open ? ChevronsDownUp : ChevronsDown;

  function toTop() {
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });
  }

  return (
    <div className={cn(rail ? 'flex flex-col gap-0.5' : 'contents')}>
      <a href="#recap" className={style}>
        <ListChecks className="size-4 shrink-0" />
        ข้ามไปสรุป
      </a>
      {hasFolds && (
        <button type="button" onClick={toggleAll} aria-pressed={open} className={style}>
          <Fold className="size-4 shrink-0" />
          {open ? 'ปิดกล่องที่พับไว้' : 'เปิดกล่องที่พับไว้ทั้งหมด'}
        </button>
      )}
      {rail && (
        <button type="button" onClick={toTop} className={style}>
          <ArrowUp className="size-4 shrink-0" />
          กลับขึ้นบนสุด
        </button>
      )}
    </div>
  );
}
