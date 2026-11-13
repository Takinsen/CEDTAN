import type { ReactNode } from 'react';

// self-check question with the answer hidden behind a native disclosure
export function Quiz({ question, children }: { question: string; children: ReactNode }) {
  return (
    <details className="my-6 rounded-xl border border-fd-border bg-fd-card px-4 py-3 [&[open]>summary]:mb-2">
      <summary className="cursor-pointer font-semibold marker:text-fd-muted-foreground">
        ลองตอบดู: {question}
        <span className="mt-1 block text-sm font-normal text-fd-muted-foreground">ตอบในใจก่อน แล้วค่อยกดดูเฉลย</span>
      </summary>
      <div className="border-t border-fd-border pt-2 [&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {children}
      </div>
    </details>
  );
}
