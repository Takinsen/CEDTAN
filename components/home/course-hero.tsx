'use client';

import Image from 'next/image';
import { ArrowDown, Pause, Play } from 'lucide-react';
import { useEffect, useRef, useState, type FocusEvent, type MouseEvent } from 'react';
import { copiesFor, easeInOutCubic, exitProgress, nearestIndex, wrapOffset } from './strip';

export type HeroCourse = {
  slug: string;
  code: string;
  name: string;
  nameTh?: string;
  cover?: string;
  thumb?: string;
  lectureCount: number;
};

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f3f3f3]';
const NAME = 'mt-2 max-w-[16ch] text-balance text-[clamp(40px,7.5vw,96px)] font-bold leading-[1.1] tracking-[-0.015em]';

const GLIDE_MS = 900;
const COPY_FADE = 1.7;
const STRIP_FADE = 2.2;
const CANCEL_GLIDE = ['wheel', 'touchstart', 'keydown'] as const;
let glideJob = 0;

// scroll the window to a point over GLIDE_MS, dropped as soon as the reader scrolls themselves
function glideTo(top: number, done: () => void) {
  const from = window.scrollY;
  const start = performance.now();
  const job = ++glideJob;
  const cancel = () => glideJob++;
  const stop = () => CANCEL_GLIDE.forEach((type) => window.removeEventListener(type, cancel));
  CANCEL_GLIDE.forEach((type) => window.addEventListener(type, cancel, { passive: true }));

  requestAnimationFrame(function step(now) {
    if (job !== glideJob) return stop();
    const k = Math.min(1, (now - start) / GLIDE_MS);
    window.scrollTo({ top: from + (top - from) * easeInOutCubic(k), behavior: 'instant' });
    if (k < 1) return void requestAnimationFrame(step);
    stop();
    done();
  });
}

// open a course in the directory below: glide to it, then unfold and light its row
function openCourse(event: MouseEvent<HTMLAnchorElement>, slug: string) {
  const target = document.getElementById(`course-${slug}`);
  if (!(target instanceof HTMLDetailsElement)) return;
  event.preventDefault();

  // land on the row, but never short of the hero's foot, so no strip of hero shows under the nav
  const margin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
  const heroHeight = event.currentTarget.closest('section')?.offsetHeight ?? 0;
  const top = Math.max(target.getBoundingClientRect().top + window.scrollY - margin, heroHeight);

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    target.open = true;
    window.scrollTo({ top, behavior: 'instant' });
    return;
  }

  glideTo(top, () => {
    target.open = true;
    target.dataset.arrive = '';
    requestAnimationFrame(() => requestAnimationFrame(() => delete target.dataset.arrive));
  });
}

// full-screen cover of one course at a time, picked by whichever chip crosses the middle
export function CourseHero({ courses, lectureTitles }: { courses: HeroCourse[]; lectureTitles: string[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const hero = useRef<HTMLElement>(null);
  const courseTrack = useRef<HTMLDivElement>(null);
  const lectureTrack = useRef<HTMLDivElement>(null);
  const held = useRef(false);
  const picked = useRef(false);
  const pausedRef = useRef(false);
  const activeRef = useRef(0);
  const fullCovers = useRef<(HTMLImageElement | null)[]>([]);
  const [loaded, setLoaded] = useState(() => courses.map((item) => !item.cover));
  const copies = copiesFor(courses.length);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  // a cover that finished loading before hydration fired its load event unheard
  useEffect(() => {
    fullCovers.current.forEach((img, i) => img?.complete && img.naturalWidth > 0 && markLoaded(i));
  }, []);

  function markLoaded(index: number) {
    setLoaded((list) => (list[index] ? list : list.map((value, i) => value || i === index)));
  }

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

  // fade the hero's copy and strips as the page scrolls past it
  useEffect(() => {
    const section = hero.current;
    if (!section) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let last = -1;

    function update() {
      frame = 0;
      const p = reduced.matches ? 0 : Math.round(exitProgress(window.scrollY, section!.offsetHeight) * 1000) / 1000;
      if (p === last) return;
      last = p;
      section!.style.setProperty('--exit', String(p));
      section!.toggleAttribute('data-copy-gone', p * COPY_FADE >= 1);
      section!.toggleAttribute('data-strips-gone', p * STRIP_FADE >= 1);
    }
    const schedule = () => (frame ||= requestAnimationFrame(update));

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    reduced.addEventListener('change', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      reduced.removeEventListener('change', schedule);
    };
  }, []);

  function select(index: number) {
    if (index === activeRef.current) return;
    activeRef.current = index;
    setActive(index);
  }

  function markHot(chip: HTMLElement) {
    courseTrack.current?.querySelectorAll('[data-hot]').forEach((el) => el !== chip && el.removeAttribute('data-hot'));
    chip.setAttribute('data-hot', '');
  }

  // tabbing to a chip shows that course
  function pick(event: FocusEvent<HTMLElement>) {
    if (!event.currentTarget.matches(':focus-visible')) return;
    picked.current = true;
    markHot(event.currentTarget);
    select(Number(event.currentTarget.dataset.course));
  }

  // keyboard focus holds the strips so the focused chip stays on screen
  function hold(event: FocusEvent<HTMLElement>) {
    if (event.target.matches(':focus-visible')) held.current = true;
  }

  function release(event: FocusEvent<HTMLElement>) {
    if (!event.currentTarget.contains(event.relatedTarget)) held.current = false;
  }

  const course = courses[active];

  return (
    <section
      ref={hero}
      aria-label="วิชาทั้งหมด"
      onFocus={hold}
      onBlur={release}
      className="home-hero relative isolate grid min-h-[calc(100svh-3.5rem)] grid-cols-[minmax(0,1fr)] grid-rows-[1fr_auto] overflow-hidden bg-[#0b0b0c] text-[#f3f3f3]"
    >
      <div aria-hidden className="absolute inset-0 -z-20">
        {courses.map((item, i) => (
          <div
            key={item.slug}
            data-on={i === active || undefined}
            data-loaded={(item.cover && loaded[i]) || undefined}
            className="home-cover absolute inset-0 overflow-hidden"
          >
            {item.cover ? (
              <div className="home-cover-drift absolute inset-0">
                {/* eslint-disable-next-line @next/next/no-img-element -- an inline data URI needs no optimising */}
                {item.thumb && <img src={item.thumb} alt="" className="home-cover-thumb" />}
                {/* covers load one after another in strip order, and the one on screen jumps the queue */}
                {(i === 0 || loaded[i - 1] || i === active) && (
                  <Image
                    ref={(img) => {
                      fullCovers.current[i] = img;
                    }}
                    src={item.cover}
                    alt=""
                    fill
                    sizes="100vw"
                    loading="eager"
                    fetchPriority={i === 0 ? 'high' : 'auto'}
                    onLoad={(event) => {
                      event.currentTarget.decode().catch(() => {}).then(() => markLoaded(i));
                    }}
                    className="home-cover-full object-cover"
                  />
                )}
              </div>
            ) : (
              <div className="grid h-full place-items-center font-mono text-[clamp(80px,16vw,260px)] leading-none tracking-[-0.05em] text-white/5">
                {item.code}
              </div>
            )}
          </div>
        ))}
      </div>
      <div aria-hidden className="home-hero-scrim pointer-events-none absolute inset-0 -z-10" />
      <div aria-hidden className="home-hero-dim pointer-events-none absolute inset-0 -z-10" />

      <div className="home-hero-copy mx-auto flex w-[min(1080px,100%-32px)] flex-col items-center justify-center py-12 text-center">
        <h1 className="text-[15px] font-medium tracking-wide text-white/80">สรุปเลกเชอร์ที่อ่านแทนสไลด์ได้</h1>
        <div key={course.slug} className="home-rise mt-3 flex flex-col items-center">
          <p className="font-mono text-[13px] tracking-[0.05em] text-white/85">
            {course.code}
            {course.lectureCount > 0 && (
              <>
                <span aria-hidden className="px-1.5 opacity-55">
                  ·
                </span>
                {course.lectureCount} คาบ
              </>
            )}
          </p>
          <p className={NAME}>{course.name}</p>
          {course.nameTh && <p className="mt-2 text-[clamp(16px,1.8vw,20px)] text-white/90">{course.nameTh}</p>}
          <div className="mt-6 flex justify-center text-[15px] text-white/85">
            {course.lectureCount > 0 ? (
              <a
                href={`#course-${course.slug}`}
                onClick={(event) => openCourse(event, course.slug)}
                className={`inline-flex items-center gap-2 rounded-full bg-[#f3f3f3] px-5 py-2 text-base font-semibold text-[#0b0b0c] [text-shadow:none] transition-transform duration-150 active:scale-[0.98] motion-reduce:transition-none ${FOCUS}`}
              >
                ดูทุกคาบ
                <ArrowDown aria-hidden className="size-4" />
              </a>
            ) : (
              <span className="rounded-full border border-white/40 px-3 py-0.5">กำลังเรียบเรียง</span>
            )}
          </div>
        </div>
      </div>

      <div className="home-hero-strips grid min-w-0 grid-cols-[minmax(0,1fr)] gap-1 pb-4">
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
                    onFocus={pick}
                    className="inline-flex items-baseline gap-2 whitespace-nowrap rounded-full border border-white/30 px-4 py-1.5 text-sm text-white/80 transition-colors duration-200 hover:border-white/75 hover:text-white data-hot:border-[#f3f3f3] data-hot:bg-[#f3f3f3] data-hot:text-[#0b0b0c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f3f3f3] motion-reduce:transition-none"
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
            className={`inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs text-white/75 hover:text-white ${FOCUS}`}
          >
            {paused ? <Play aria-hidden className="size-3.5" /> : <Pause aria-hidden className="size-3.5" />}
            {paused ? 'เล่นแถบวิ่ง' : 'หยุดแถบวิ่ง'}
          </button>
        </div>
      </div>
    </section>
  );
}
