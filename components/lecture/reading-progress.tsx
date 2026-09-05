'use client';

import { useEffect, useState } from 'react';

// how far down the page the reader is, and which section that lands in
export function ReadingProgress({ label, ids }: { label: string; ids: string[] }) {
  const [percent, setPercent] = useState(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const marks = ids.map((id) => document.getElementById(id)).filter((el) => el !== null);

    function update() {
      const room = document.documentElement.scrollHeight - window.innerHeight;
      const done = room > 0 ? Math.min(100, Math.round((window.scrollY / room) * 100)) : 100;
      setPercent(done);
      const line = window.scrollY + window.innerHeight * 0.3;
      let n = 0;
      for (let i = 0; i < marks.length; i++) {
        if (marks[i].getBoundingClientRect().top + window.scrollY <= line) n = i + 1;
      }
      // the last section can start below the line, so the bottom of the page always counts as in it
      setCurrent(done === 100 ? marks.length : n);
    }

    const frame = requestAnimationFrame(update);
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [ids]);

  return (
    <div className="mb-4 border-b border-fd-border pb-4">
      <p className="mb-2 flex items-baseline justify-between gap-2 text-xs text-fd-muted-foreground">
        <span>{current === 0 ? 'เกริ่นนำ' : `${label} ${current} จาก ${ids.length}`}</span>
        <span className="tabular-nums">{percent}%</span>
      </p>
      {/* the line above already reads out the section and the percent, so the rule is decoration */}
      <div aria-hidden className="h-0.5 w-full bg-fd-border">
        <div className="h-full bg-fd-primary" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
