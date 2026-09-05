'use client';

import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

// a diagram wider than the phone screen is cut with no sign, so say it can be scrolled
export function ScrollFrame({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [wider, setWider] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver(() => setWider(el.scrollWidth > el.clientWidth + 1));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={ref} className="overflow-x-auto">
        {children}
      </div>
      {wider && (
        <p className="mt-2 text-center text-xs text-fd-muted-foreground">เลื่อนรูปทางขวาเพื่อดูส่วนที่เหลือ</p>
      )}
    </>
  );
}
