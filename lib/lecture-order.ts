// a lecture too long for one sitting is split into parts that share its number
export type Numbered = { lecture?: number; part?: number };

// "8" for a whole lecture, "8.2" for its second part
export function lectureNumber({ lecture, part }: Numbered): string {
  if (lecture === undefined) return '';
  return part === undefined ? String(lecture) : `${lecture}.${part}`;
}

export function compareLectures(a: Numbered, b: Numbered): number {
  return (a.lecture ?? 0) - (b.lecture ?? 0) || (a.part ?? 0) - (b.part ?? 0);
}

// classes taught, so the parts of one lecture count once
export function countClasses(pages: Numbered[]): number {
  return new Set(pages.map((page, i) => page.lecture ?? `page-${i}`)).size;
}
