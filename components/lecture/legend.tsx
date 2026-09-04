import { Lightbulb, HelpCircle, Repeat, AlertTriangle, FlaskConical, ListChecks } from 'lucide-react';
import { cn } from '@/lib/cn';

// the key to the coloured marks used inside a lecture, in the order a reader meets them
const MARKS = [
  { icon: Lightbulb, label: 'แนวคิดหลัก', accent: 'text-amber-700 dark:text-amber-400' },
  { icon: HelpCircle, label: 'ทำไมต้องมีสิ่งนี้', accent: 'text-sky-700 dark:text-sky-400' },
  { icon: Repeat, label: 'เทียบให้เห็นภาพ', accent: 'text-violet-700 dark:text-violet-400' },
  { icon: FlaskConical, label: 'ตัวอย่าง', accent: 'text-emerald-700 dark:text-emerald-400' },
  { icon: AlertTriangle, label: 'จุดที่คนพลาดบ่อย', accent: 'text-rose-700 dark:text-rose-400' },
  { icon: ListChecks, label: 'สรุปท้ายคาบ', accent: 'text-fd-primary' },
];

export function Legend() {
  return (
    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-fd-muted-foreground">
      {MARKS.map(({ icon: Icon, label, accent }) => (
        <span key={label} className="inline-flex items-center gap-1.5">
          <Icon aria-hidden className={cn('size-4 shrink-0', accent)} />
          {label}
        </span>
      ))}
    </div>
  );
}
