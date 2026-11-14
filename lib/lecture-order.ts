// a lecture too long for one sitting is split into parts that share its number
export type Numbered = { lecture?: number; part?: number };

// "8" for a whole lecture, "8.2" for its second part
export function lectureNumber({ lecture, part }: Numbered): string {
  if (lecture === undefined) return '';
  return part === undefined ? String(lecture) : `${lecture}.${part}`;
}

// sidebar labels start with the lecture number, which the landing page shows in its own column
export function stripNumber(label: string): string {
  return label.replace(/^\d+(?:\.\d+)?\s*·\s*/, '');
}

export function compareLectures(a: Numbered, b: Numbered): number {
  return (a.lecture ?? 0) - (b.lecture ?? 0) || (a.part ?? 0) - (b.part ?? 0);
}

// classes taught, so the parts of one lecture count once
export function countClasses(pages: Numbered[]): number {
  return new Set(pages.map((page, i) => page.lecture ?? `page-${i}`)).size;
}

export type SidebarEntry<N> = Numbered & { node: N; label?: string; lectureTitle?: string };
export type SidebarGroup<N> =
  | { kind: 'page'; node: N }
  | { kind: 'lecture'; name: string; parts: { node: N; name: string }[] };

// the sidebar shows a split lecture as one entry named from part 1, its parts folded under it
export function groupParts<N>(entries: SidebarEntry<N>[]): SidebarGroup<N>[] {
  const out: SidebarGroup<N>[] = [];
  for (const entry of entries) {
    if (entry.lecture === undefined || entry.part === undefined) {
      out.push({ kind: 'page', node: entry.node });
      continue;
    }
    const part = { node: entry.node, name: `ตอน ${entry.part} · ${stripNumber(entry.label ?? '')}` };
    const last = out.at(-1);
    if (last?.kind === 'lecture' && last.name.startsWith(`${entry.lecture} · `)) last.parts.push(part);
    else out.push({ kind: 'lecture', name: `${entry.lecture} · ${entry.lectureTitle ?? ''}`, parts: [part] });
  }
  return out;
}

// previous and next pages in reading order, each page once: part 1 sits both on its lecture entry and in its parts
export function neighboursOf<T extends { url: string }>(list: T[], url: string): { previous?: T; next?: T } {
  const seen = new Set<string>();
  const unique = list.filter((item) => !seen.has(item.url) && seen.add(item.url));
  const i = unique.findIndex((item) => item.url === url);
  if (i === -1) return {};
  return { previous: unique[i - 1], next: unique[i + 1] };
}
