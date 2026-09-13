'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, Pause, Play } from 'lucide-react';
import { useEffect, useRef, useState, type FocusEvent, type MouseEvent } from 'react';
import { copiesFor, nearestIndex, wrapOffset } from './strip';

export type HeroCourse = {
  slug: string;
  code: string;
  name: string;
  nameTh?: string;
  cover?: string;
  hasOverview: boolean;
  lectureCount: number;
};

const FOCUS = 'rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f3f3f3]';
const NAME = 'mt-2 max-w-[16ch] text-balance text-[clamp(40px,7.5vw,96px)] font-bold leading-[1.1] tracking-[-0.015em]';

// open a course in the directory below and scroll to it
function openCourse(event: MouseEvent<HTMLAnchorElement>, slug: string) {
  const target = document.getElementById(`course-${slug}`);
  if (!(target instanceof HTMLDetailsElement)) return;
  event.preventDefault();
  target.open = true;
  const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  target.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
}

// full-screen cover of one course at a time, picked by whichever chip crosses the middle
export function CourseHero({ courses, lectureTitles }: { courses: HeroCourse[]; lectureTitles: string[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const courseTrack = useRef<HTMLDivElement>(null);
  const lectureTrack = useRef<HTMLDivElement>(null);
  const held = useRef(false);
  const picked = useRef(false);
  const pausedRef = useRef(false);
  const activeRef = useRef(0);
  const copies = copiesFor(courses.length);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  // move both strips each frame; the middle chip picks the course unless the reader picked one
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const strips = [
      { track: courseTrack.current, copies, speed: -0.05, x: 0, lead: true },
      { track: lectureTrack.current, copies: 3, speed: 0.03, x: 0, lead: false },
    ];
    let last = performance.now();
    let frame = requestAnimationFrame(function tick(now) {
      const dt = Math.min(64, now - last);
      last = now;
      const still = held.current || pausedRef.current || reduced.matches;
      if (!still) picked.current = false;

      for (const strip of strips) {
        if (!strip.track) continue;
        if (!still) strip.x = wrapOffset(strip.x + strip.speed * dt, strip.track.scrollWidth / strip.copies);
        strip.track.style.transform = `translateX(${strip.x}px)`;
        if (!strip.lead || picked.current) continue;

        const chips = Array.from(strip.track.querySelectorAll<HTMLElement>('[data-course]'));
        const box = strip.track.parentElement!.getBoundingClientRect();
        const hit = nearestIndex(
          chips.map((chip) => {
            const rect = chip.getBoundingClientRect();
            return rect.left + rect.width / 2;
          }),
          box.left + box.width / 2,
        );
        if (hit < 0) continue;
        markHot(chips[hit]);
        select(Number(chips[hit].dataset.course));
      }

      frame = requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(frame);
  }, [copies]);

  function select(index: number) {
    if (index === activeRef.current) return;
    activeRef.current = index;
    setActive(index);
  }

  function markHot(chip: HTMLElement) {
    courseTrack.current?.querySelectorAll('[data-hot]').forEach((el) => el !== chip && el.removeAttribute('data-hot'));
    chip.setAttribute('data-hot', '');
  }

  // pointing at or tabbing to a chip shows that course
  function pick(event: { currentTarget: HTMLElement }) {
    picked.current = true;
    markHot(event.currentTarget);
    select(Number(event.currentTarget.dataset.course));
  }

  function release(event: FocusEvent<HTMLElement>) {
    if (!event.currentTarget.contains(event.relatedTarget)) held.current = false;
  }

  const course = courses[active];

  return (
    <section
      aria-label="วิชาทั้งหมด"
      onPointerEnter={() => (held.current = true)}
      onPointerLeave={() => (held.current = false)}
      onFocus={() => (held.current = true)}
      onBlur={release}
      className="relative isolate grid min-h-[calc(100svh-3.5rem)] grid-cols-[minmax(0,1fr)] grid-rows-[1fr_auto] overflow-hidden bg-[#0b0b0c] text-[#f3f3f3]"
    >
      <div aria-hidden className="absolute inset-0 -z-20">
        {courses.map((item, i) => (
          <div
            key={item.slug}
            data-on={i === active || undefined}
            className="home-cover absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-1000 ease-out data-on:opacity-100 motion-reduce:transition-none"
          >
            {item.cover ? (
              <Image
                src={item.cover}
                alt=""
                fill
                sizes="100vw"
                loading={i === 0 ? 'eager' : 'lazy'}
                fetchPriority={i === 0 ? 'high' : 'auto'}
                className="object-cover brightness-80"
              />
            ) : (
              <div className="grid h-full place-items-center font-mono text-[clamp(80px,16vw,260px)] leading-none tracking-[-0.05em] text-white/5">
                {item.code}
              </div>
            )}
          </div>
        ))}
      </div>
      <div aria-hidden className="home-hero-scrim pointer-events-none absolute inset-0 -z-10" />

      <div className="home-hero-copy mx-auto flex w-[min(1080px,100%-32px)] flex-col items-center justify-center py-12 text-center">
        <h1 className="text-[15px] font-medium tracking-wide text-white/80">สรุปเลกเชอร์ที่อ่านแทนสไลด์ได้</h1>
        <div key={course.slug} className="home-rise mt-3 flex flex-col items-center">
          <p className="font-mono text-[13px] tracking-[0.05em] text-white/85">{course.code}</p>
          {course.hasOverview ? (
            <Link href={`/${course.slug}`} className={`${NAME} decoration-2 underline-offset-[0.12em] hover:underline ${FOCUS}`}>
              {course.name}
            </Link>
          ) : (
            <p className={NAME}>{course.name}</p>
          )}
          {course.nameTh && <p className="mt-2 text-[clamp(16px,1.8vw,20px)] text-white/90">{course.nameTh}</p>}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[15px] text-white/85">
            {course.lectureCount > 0 ? (
              <>
                <span>{course.lectureCount} คาบ</span>
                <a
                  href={`#course-${course.slug}`}
                  onClick={(event) => openCourse(event, course.slug)}
                  className={`inline-flex items-center gap-2 rounded-full bg-[#f3f3f3] px-4 py-1.5 font-semibold text-[#0b0b0c] [text-shadow:none] transition-transform duration-150 active:scale-[0.98] motion-reduce:transition-none ${FOCUS}`}
                >
                  ดูทุกคาบ
                  <ArrowDown aria-hidden className="size-4" />
                </a>
              </>
            ) : (
              <span className="rounded-full border border-white/40 px-3 py-0.5">กำลังเรียบเรียง</span>
            )}
          </div>
        </div>
      </div>

      <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-1 pb-4">
        <div className="relative">
          <span aria-hidden className="absolute left-1/2 top-0 z-10 h-2.5 w-px bg-[#f3f3f3]" />
          <div className="home-fade-edges overflow-hidden py-2">
            <div ref={courseTrack} className="flex w-max gap-2.5 will-change-transform">
              {Array.from({ length: copies }, (_, copy) =>
                courses.map((item, i) => (
                  <a
                    key={`${copy}-${item.slug}`}
                    href={`#course-${item.slug}`}
                    data-course={i}
                    aria-hidden={copy > 0 || undefined}
                    tabIndex={copy > 0 ? -1 : undefined}
                    onClick={(event) => openCourse(event, item.slug)}
                    onPointerEnter={pick}
                    onFocus={pick}
                    className="inline-flex items-baseline gap-2 whitespace-nowrap rounded-full border border-white/30 px-4 py-1.5 text-sm text-white/80 transition-colors duration-200 data-hot:border-[#f3f3f3] data-hot:bg-[#f3f3f3] data-hot:text-[#0b0b0c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f3f3f3] motion-reduce:transition-none"
                  >
                    <span className="font-mono text-[11px]">{item.code}</span>
                    {item.name}
                  </a>
                )),
              )}
            </div>
          </div>
        </div>

        <div aria-hidden className="home-fade-edges overflow-hidden py-1.5">
          <div ref={lectureTrack} className="flex w-max whitespace-nowrap text-sm text-white/40 will-change-transform">
            {Array.from({ length: 3 }, (_, copy) =>
              lectureTitles.map((title, i) => (
                <span key={`${copy}-${i}`} className="px-3.5 before:mr-7 before:content-['·']">
                  {title}
                </span>
              )),
            )}
          </div>
        </div>

        <div className="mx-auto flex w-[min(1080px,100%-32px)] justify-end">
          <button
            type="button"
            onClick={() => setPaused((value) => !value)}
            aria-pressed={paused}
            className={`inline-flex items-center gap-1.5 px-2 py-1 text-xs text-white/75 hover:text-white ${FOCUS}`}
          >
            {paused ? <Play aria-hidden className="size-3.5" /> : <Pause aria-hidden className="size-3.5" />}
            {paused ? 'เล่นแถบวิ่ง' : 'หยุดแถบวิ่ง'}
          </button>
        </div>
      </div>
    </section>
  );
}
