'use client';

import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { useEffect, useState, type CSSProperties, type MouseEvent } from 'react';
import { countClasses, lectureCards, type CardLecture } from '@/lib/lecture-order';

export type DirectoryCourse = {
  slug: string;
  code: string;
  name: string;
  nameTh?: string;
  accent: { light: string; dark: string };
  lectures: CardLecture[];
};

// the hero asks the directory to show a course with this event
export const OPEN_COURSE = 'cedtan:open-course';

const LAST_COURSE = 'cedtan:last-course';
const HASH = /^#course-(.+)$/;

const accentOf = (course: DirectoryCourse) =>
  ({
    '--accent-light': course.accent.light,
    '--accent-dark': course.accent.dark,
  }) as CSSProperties;

const still = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function remember(slug: string) {
  history.replaceState(null, '', `#course-${slug}`);
  try {
    localStorage.setItem(LAST_COURSE, slug);
  } catch {}
}

// the courses down the side, the chosen course's lectures as cards beside them
export function CourseDirectory({ courses }: { courses: DirectoryCourse[] }) {
  const ready = courses.filter((course) => course.lectures.length > 0);
  const pending = courses.filter((course) => course.lectures.length === 0);
  const total = courses.reduce((sum, course) => sum + countClasses(course.lectures), 0);
  const readySlugs = ready.map((c) => c.slug).join(' ');

  const [picked, setPicked] = useState(ready[0]?.slug ?? '');
  const course = ready.find((c) => c.slug === picked) ?? ready[0];

  // on arrival: the course in the link, else the one this browser read last, else the first
  useEffect(() => {
    const isReady = (slug: string | null | undefined): slug is string => !!slug && readySlugs.split(' ').includes(slug);
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(LAST_COURSE);
    } catch {}
    const linked = location.hash.match(HASH)?.[1];
    const first = isReady(linked) ? linked : isReady(saved) ? saved : null;
    // the server renders the first course; the saved one swaps in on the next frame
    const frame = first ? requestAnimationFrame(() => setPicked(first)) : 0;
    // a link to a course lands on the directory; no element carries that id, so the browser does not jump or focus
    if (isReady(linked)) document.getElementById('lectures-title')?.scrollIntoView({ behavior: 'instant' });

    // the hero's buttons pick a course and bring the directory into view
    const onOpen = (event: Event) => {
      const slug = (event as CustomEvent<string>).detail;
      if (!isReady(slug)) return;
      event.preventDefault();
      setPicked(slug);
      remember(slug);
      document.getElementById('lectures-title')?.scrollIntoView({ behavior: still() ? 'instant' : 'smooth' });
    };
    window.addEventListener(OPEN_COURSE, onOpen);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener(OPEN_COURSE, onOpen);
    };
  }, [readySlugs]);

  function pick(event: MouseEvent<HTMLAnchorElement>, slug: string) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
    event.preventDefault();
    if (slug === picked) return;
    setPicked(slug);
    remember(slug);
  }

  if (!course) return null;
  const minutes = course.lectures.reduce((sum, l) => sum + (l.minutes ?? 0), 0);

  return (
    <section aria-labelledby="lectures-title" className="mx-auto w-full max-w-[1400px] px-4 pt-10">
      <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1">
        <h2 id="lectures-title" className="scroll-mt-20 text-[22px] font-semibold">
          ทุกคาบ
        </h2>
        <p className="text-sm text-fd-muted-foreground">
          {courses.length} วิชา · {total} คาบ
        </p>
      </div>

      <div className="home-split mt-5">
        <nav aria-label="วิชา" className="home-courses">
          <ul>
            {ready.map((c) => {
              const on = c.slug === course.slug;
              return (
                <li key={c.slug}>
                  <a
                    href={`#course-${c.slug}`}
                    aria-current={on || undefined}
                    onClick={(event) => pick(event, c.slug)}
                    className="home-banner is-small"
                    style={accentOf(c)}
                  >
                    <span aria-hidden className="home-banner-glow" />
                    <span aria-hidden className="home-pick" />
                    <span className="home-banner-code">{c.code}</span>
                    <span className="home-banner-text relative z-10 flex min-w-0 flex-col">
                      <span className="text-[17px] leading-snug font-semibold text-pretty">{c.name}</span>
                      <span className="text-sm text-fd-muted-foreground">{countClasses(c.lectures)} คาบ</span>
                    </span>
                  </a>
                </li>
              );
            })}
            {pending.map((c) => (
              <li key={c.slug}>
                <div id={`course-${c.slug}`} className="home-banner is-small is-empty" style={accentOf(c)}>
                  <span aria-hidden className="home-banner-glow" />
                  <span className="home-banner-code">{c.code}</span>
                  <span className="home-banner-text relative z-10 flex min-w-0 flex-col">
                    <span className="text-[15px] leading-snug font-semibold text-pretty">{c.name}</span>
                    <span className="text-sm text-fd-muted-foreground">กำลังเรียบเรียง</span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </nav>

        <div className="home-panel" style={accentOf(course)} aria-labelledby="panel-title" role="region">
          <div key={course.slug} className="home-panel-body">
            <header className="home-panel-head">
              <h3 id="panel-title" className="text-[26px] leading-tight font-bold text-pretty sm:text-[34px]">
                {course.name}
              </h3>
              <p className="mt-1 text-fd-muted-foreground">
                {course.nameTh && <>{course.nameTh} · </>}
                {countClasses(course.lectures)} คาบ · อ่านราว {minutes.toLocaleString('th-TH')} นาที
              </p>
            </header>

            <ol className="home-cards mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {lectureCards(course.lectures).map((card, i) => (
                <li key={card.url} className="home-card" style={{ '--i': i } as CSSProperties}>
                  <span aria-hidden className="home-card-number">
                    {card.number}
                  </span>
                  <div className="home-card-body">
                    <Link href={card.url} className="home-card-title">
                      <span className="sr-only">คาบ {card.number} </span>
                      {card.title}
                    </Link>
                    {card.parts.length === 0 && (
                      <p className="home-card-desc">{course.lectures.find((l) => l.url === card.url)?.description}</p>
                    )}
                    {card.parts.length > 0 && (
                      <div className="relative z-10 mt-2 flex flex-wrap gap-1.5">
                        {card.parts.map((part) => (
                          <Link key={part.url} href={part.url} className="home-chip">
                            <span className="font-mono text-xs font-medium text-fd-foreground">{part.number}</span>
                            {part.label}
                          </Link>
                        ))}
                      </div>
                    )}
                    <p className="home-card-foot">
                      <Clock aria-hidden className="size-3.5" />
                      <span>
                        {card.minutes !== undefined && <>อ่านราว {card.minutes} นาที</>}
                        {card.parts.length > 0 && <> · {card.parts.length} ตอน</>}
                      </span>
                      <ArrowRight aria-hidden className="home-card-arrow size-4" />
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
