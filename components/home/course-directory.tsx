'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { useEffect } from 'react';

export type DirectoryCourse = {
  slug: string;
  code: string;
  name: string;
  nameTh?: string;
  hasOverview: boolean;
  lectures: { url: string; label: string; lecture?: number }[];
};

const LAST_COURSE = 'cedtan:last-course';
const ROW = 'grid grid-cols-[1fr_auto_auto] items-baseline gap-x-4 py-3.5 sm:grid-cols-[7.5em_1fr_auto_auto]';

// every course folded, except the one this browser opened last
export function CourseDirectory({ courses }: { courses: DirectoryCourse[] }) {
  const total = courses.reduce((sum, course) => sum + course.lectures.length, 0);

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(LAST_COURSE);
    } catch {
      return;
    }
    const details = saved && document.getElementById(`course-${saved}`);
    if (!(details instanceof HTMLDetailsElement)) return;
    details.open = true;
    details.dataset.last = '';
  }, []);

  function remember(details: HTMLDetailsElement, slug: string) {
    if (!details.open) return;
    try {
      localStorage.setItem(LAST_COURSE, slug);
    } catch {}
  }

  return (
    <section aria-labelledby="lectures-title" className="mx-auto w-full max-w-5xl px-4 pt-10">
      <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1">
        <h2 id="lectures-title" className="text-[22px] font-semibold">
          ทุกคาบ
        </h2>
        <p className="text-sm text-fd-muted-foreground">
          {courses.length} วิชา · {total} คาบ
        </p>
      </div>

      <div className="mt-5 border-t border-fd-border">
        {courses.map((course) =>
          course.lectures.length === 0 ? (
            // a course whose pages are still being written has nothing to unfold
            <div key={course.slug} id={`course-${course.slug}`} className={`${ROW} scroll-mt-20 border-b border-fd-border`}>
              <CourseHeading course={course} />
              <span className="rounded-full border border-fd-border px-2 text-xs text-fd-muted-foreground">
                กำลังเรียบเรียง
              </span>
              <span aria-hidden className="size-3.5" />
            </div>
          ) : (
            <details
              key={course.slug}
              id={`course-${course.slug}`}
              onToggle={(event) => remember(event.currentTarget, course.slug)}
              className="home-course group scroll-mt-20 border-b border-fd-border"
            >
              <summary
                className={`${ROW} -mx-2 cursor-pointer px-2 list-none rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-primary [&::-webkit-details-marker]:hidden`}
              >
                <CourseHeading course={course} />
                <span className="text-sm tabular-nums text-fd-muted-foreground">{course.lectures.length} คาบ</span>
                <ChevronRight
                  aria-hidden
                  className="size-3.5 self-center text-fd-muted-foreground transition-transform duration-200 group-open:rotate-90 motion-reduce:transition-none"
                />
              </summary>

              <div className="pb-4 sm:pl-[calc(7.5em+1rem)]">
                {course.hasOverview && (
                  <Link
                    href={`/${course.slug}`}
                    className="text-sm font-semibold underline underline-offset-4 hover:text-fd-primary"
                  >
                    ภาพรวมวิชา →
                  </Link>
                )}
                <ol className="mt-2 gap-8 sm:columns-2">
                  {course.lectures.map((lecture) => (
                    <li key={lecture.url} className="break-inside-avoid">
                      <Link
                        href={lecture.url}
                        className="flex items-baseline gap-3 border-b border-fd-border py-2 transition-colors hover:text-fd-primary"
                      >
                        <span className="w-5 shrink-0 text-sm tabular-nums text-fd-muted-foreground">
                          {lecture.lecture}
                        </span>
                        <span>{lecture.label}</span>
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
            </details>
          ),
        )}
      </div>
    </section>
  );
}

function CourseHeading({ course }: { course: DirectoryCourse }) {
  return (
    <>
      <span className="col-span-full font-mono text-[13px] text-fd-muted-foreground sm:col-span-1">{course.code}</span>
      <span>
        <h3 className="inline text-[17px] font-semibold">{course.name}</h3>
        <span className="ml-2 hidden rounded-full border border-fd-border px-2 text-xs text-fd-muted-foreground group-data-last:inline-block">
          เปิดล่าสุด
        </span>
        {course.nameTh && <span className="block text-sm text-fd-muted-foreground">{course.nameTh}</span>}
      </span>
    </>
  );
}
