'use client';

import { ChevronsDown, ChevronsDownUp, ListChecks } from 'lucide-react';
import { useState } from 'react';

const CONTROL =
  'inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-secondary/50 px-3 py-1.5 text-sm ' +
  'transition-colors hover:bg-fd-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-primary';

// jump to the recap and open every fold, for a reader who came to scan rather than read
export function ReadingTools({ hasFolds }: { hasFolds: boolean }) {
  const [open, setOpen] = useState(false);

  // folds carry data-fold so a bulk toggle never reveals a Quiz answer
  function toggleAll() {
    const next = !open;
    const folds = document.querySelectorAll<HTMLDetailsElement>('#nd-page details[data-fold]');
    for (const fold of folds) fold.open = next;
    setOpen(next);
  }

  return (
    <>
      <a href="#recap" className={CONTROL}>
        <ListChecks className="size-4 shrink-0" />
        ข้ามไปสรุป
      </a>
      {hasFolds && (
        <button type="button" onClick={toggleAll} aria-pressed={open} className={CONTROL}>
          {open ? (
            <ChevronsDownUp className="size-4 shrink-0" />
          ) : (
            <ChevronsDown className="size-4 shrink-0" />
          )}
          {open ? 'ปิดกล่องที่พับไว้' : 'เปิดกล่องที่พับไว้ทั้งหมด'}
        </button>
      )}
    </>
  );
}
