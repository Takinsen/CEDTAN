import { Lightbulb, HelpCircle, Repeat, AlertTriangle, FlaskConical, ListChecks } from 'lucide-react';
import type { ReactNode } from 'react';
import { LectureBox } from './box';

type BlockProps = { title?: string; children: ReactNode };

// the one sentence a reader must remember
export function KeyIdea({ title, children }: BlockProps) {
  return (
    <LectureBox icon={Lightbulb} label="แนวคิดหลัก" title={title} accent="border-l-amber-500">
      {children}
    </LectureBox>
  );
}

// the problem this concept exists to solve
export function Why({ title, children }: BlockProps) {
  return (
    <LectureBox icon={HelpCircle} label="ทำไมต้องมีสิ่งนี้" title={title} accent="border-l-sky-500">
      {children}
    </LectureBox>
  );
}

// everyday comparison for a reader with no background
export function Analogy({ title, children }: BlockProps) {
  return (
    <LectureBox icon={Repeat} label="เทียบให้เห็นภาพ" title={title} accent="border-l-violet-500">
      {children}
    </LectureBox>
  );
}

// a mistake people make here
export function Pitfall({ title, children }: BlockProps) {
  return (
    <LectureBox icon={AlertTriangle} label="จุดที่คนพลาดบ่อย" title={title} accent="border-l-rose-500">
      {children}
    </LectureBox>
  );
}

// concrete case with clear input and output; `added` marks one not taken from the slides
export function Example({ title, added, children }: BlockProps & { added?: boolean }) {
  return (
    <LectureBox
      icon={FlaskConical}
      label={added ? 'ตัวอย่างเสริม' : 'ตัวอย่าง'}
      title={title}
      accent={added ? 'border-l-amber-400' : 'border-l-emerald-500'}
    >
      {children}
    </LectureBox>
  );
}

// bullet summary at the end of a lecture
export function Recap({ children }: { children: ReactNode }) {
  return (
    <LectureBox icon={ListChecks} label="สรุปท้ายคาบ" accent="border-l-fd-primary">
      {children}
    </LectureBox>
  );
}
