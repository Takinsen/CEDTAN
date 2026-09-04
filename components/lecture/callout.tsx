import { Info, TriangleAlert } from 'lucide-react';
import type { ReactNode } from 'react';
import { LectureBox } from './box';

// replaces the Fumadocs callout so a side note uses the same frame as every other block
const STYLES = {
  info: { icon: Info, label: 'หมายเหตุ', accent: 'text-fd-muted-foreground' },
  warn: { icon: TriangleAlert, label: 'ข้อควรระวัง', accent: 'text-rose-700 dark:text-rose-400' },
} as const;

export function Callout({
  type = 'info',
  title,
  children,
}: {
  type?: keyof typeof STYLES;
  title?: string;
  children: ReactNode;
}) {
  const style = STYLES[type] ?? STYLES.info;

  return (
    <LectureBox icon={style.icon} label={style.label} title={title} accent={style.accent}>
      {children}
    </LectureBox>
  );
}
