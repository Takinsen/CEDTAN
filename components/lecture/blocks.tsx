import { Lightbulb, HelpCircle, Repeat, AlertTriangle, FlaskConical, ListChecks } from 'lucide-react';
import type { ReactNode } from 'react';
import { LectureBox } from './box';

type BlockProps = { title?: string; children: ReactNode };

// the one sentence a reader must remember
export function KeyIdea({ title, children }: BlockProps) {
  return (
    <LectureBox icon={Lightbulb} label="แนวคิดหลัก" title={title} accent="text-amber-700 dark:text-amber-400">
      {children}
    </LectureBox>
  );
}

// the problem this concept exists to solve
export function Why({ title, children }: BlockProps) {
  return (
    <LectureBox icon={HelpCircle} label="ทำไมต้องมีสิ่งนี้" title={title} accent="text-sky-700 dark:text-sky-400">
      {children}
    </LectureBox>
  );
}

// everyday comparison for a reader with no background
export function Analogy({ title, children }: BlockProps) {
  return (
    <LectureBox icon={Repeat} label="เทียบให้เห็นภาพ" title={title} accent="text-violet-700 dark:text-violet-400">
      {children}
    </LectureBox>
  );
}

// a mistake people make here
export function Pitfall({ title, children }: BlockProps) {
  return (
    <LectureBox icon={AlertTriangle} label="จุดที่คนพลาดบ่อย" title={title} accent="text-rose-700 dark:text-rose-400">
      {children}
    </LectureBox>
  );
}

// concrete case with clear input and output; `added` marks one not taken from the slides
export function Example({ title, added, children }: BlockProps & { added?: boolean }) {
  return (
    <LectureBox
      icon={FlaskConical}
      label="ตัวอย่าง"
      title={title}
      badge={added ? 'เสริม — ไม่ได้อยู่ในสไลด์' : undefined}
      accent={added ? 'text-amber-700 dark:text-amber-400' : 'text-emerald-700 dark:text-emerald-400'}
    >
      {children}
    </LectureBox>
  );
}

// bullet summary at the end of a lecture
export function Recap({ children }: { children: ReactNode }) {
  return (
    <LectureBox icon={ListChecks} label="สรุปท้ายคาบ" accent="text-fd-primary" id="recap">
      {children}
    </LectureBox>
  );
}
