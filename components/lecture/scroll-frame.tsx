'use client';

import { Maximize2, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

// a diagram wider than the phone screen is cut with no sign, so say it can be scrolled and offer it full screen
export function ScrollFrame({ caption, children }: { caption?: ReactNode; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const [wider, setWider] = useState(false);
  const [open, setOpen] = useState(false);
  const [minWidth, setMinWidth] = useState<number>();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver(() => setWider(el.scrollWidth > el.clientWidth + 1));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // the page behind a full-screen figure must not scroll under the reader's finger
  useEffect(() => {
    if (!open) return;
    dialog.current?.showModal();
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  function expand() {
    // one drawing unit per pixel at least, so a label set at the 11-unit floor draws at 11px or more
    setMinWidth(ref.current?.querySelector('svg')?.viewBox.baseVal.width || undefined);
    setOpen(true);
  }

  return (
    <>
      <div ref={ref} className="overflow-x-auto">
        {children}
      </div>
      {wider && (
        <p className="mt-2 flex flex-wrap items-center justify-center gap-x-2 text-center text-xs text-fd-muted-foreground">
          <span>เลื่อนรูปทางขวาเพื่อดูส่วนที่เหลือ หรือ</span>
          <button
            type="button"
            onClick={expand}
            className="inline-flex min-h-11 items-center gap-1.5 rounded-lg px-2 font-medium text-fd-foreground underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-primary"
          >
            <Maximize2 aria-hidden className="size-3.5" />
            ขยายรูปเต็มจอ
          </button>
        </p>
      )}
      {open && (
        <dialog
          ref={dialog}
          onClose={() => setOpen(false)}
          aria-label="รูปขยายเต็มจอ"
          className="m-0 h-dvh max-h-none w-dvw max-w-none overflow-auto bg-fd-background p-0 text-fd-foreground"
        >
          <div className="sticky top-0 left-0 z-10 flex items-center justify-between gap-3 border-b border-fd-border bg-fd-background px-4 py-1">
            <p className="text-xs text-fd-muted-foreground">
              <span className="landscape:hidden">หมุนจอเป็นแนวนอนเพื่อดูทั้งรูป · </span>
              ลากเพื่อเลื่อนดู
            </p>
            <button
              type="button"
              onClick={() => dialog.current?.close()}
              className="inline-flex min-h-11 items-center gap-1.5 rounded-lg px-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-primary"
            >
              <X aria-hidden className="size-4" />
              ปิด
            </button>
          </div>
          {/* centred in the space under the bar, so a portrait screen does not leave the drawing at the top */}
          <div className="flex min-h-[calc(100dvh-3.5rem)] flex-col justify-center">
            <div className="p-4 [&_svg]:w-full" style={{ minWidth: minWidth && minWidth + 32 }}>
              {children}
            </div>
            {caption && <p className="px-4 pb-6 text-center text-sm text-fd-muted-foreground">{caption}</p>}
          </div>
        </dialog>
      )}
    </>
  );
}
