import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { courses, courseLectures } from '@/lib/courses';

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-14 sm:py-20">
      <h1 className="text-balance text-3xl font-bold sm:text-4xl">สรุปเลกเชอร์ที่อ่านแทนสไลด์ได้</h1>
      <p className="mt-4 max-w-[58ch] text-pretty text-lg text-fd-muted-foreground">
        หนึ่งหน้าต่อหนึ่งคาบ ครบทุกหัวข้อในสไลด์ เขียนให้คนที่ไม่มีพื้นฐานมาก่อนอ่านรู้เรื่อง
        อธิบายเป็นภาษาไทย ศัพท์เทคนิคคงไว้เป็นภาษาอังกฤษ
      </p>

      {courses.map((course) => {
        const lectures = courseLectures(course.slug);

        return (
          <section key={course.slug} className="mt-14">
            <h2 className="text-sm font-medium text-fd-muted-foreground">{course.code}</h2>
            <Link
              href={`/${course.slug}`}
              className="group mt-1 flex flex-wrap items-baseline gap-x-2 text-xl font-semibold"
            >
              {course.name}
              <ArrowRight aria-hidden className="size-4 shrink-0 self-center transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
            </Link>
            <p className="text-fd-muted-foreground">{course.nameTh}</p>
            <p className="mt-3 max-w-[62ch] text-pretty text-sm text-fd-muted-foreground">
              {course.description}
            </p>

            <ol className="mt-6 divide-y divide-fd-border border-y border-fd-border">
              {lectures.map((lecture) => (
                <li key={lecture.url}>
                  <Link
                    href={lecture.url}
                    className="flex items-baseline gap-3 py-3 transition-colors hover:text-fd-primary"
                  >
                    <span className="w-4 shrink-0 text-sm tabular-nums text-fd-muted-foreground">
                      {lecture.lecture}
                    </span>
                    <span>{stripNumber(lecture.label)}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </section>
        );
      })}

      <footer className="mt-16 rounded-xl border border-fd-border p-5 text-sm">
        <p className="text-pretty">
          <strong className="font-semibold">นี่เป็นเว็บสรุปที่นิสิตทำเอง</strong>{' '}
          ไม่ใช่เอกสารทางการของวิชา และอาจารย์ไม่ได้ตรวจทาน อะไรที่สำคัญให้ยึดตามสไลด์ตัวจริง
        </p>
        <p className="mt-2 text-pretty text-fd-muted-foreground">
          เรียบเรียงจากสไลด์ที่ใช้สอนจริงในภาควิชาวิศวกรรมคอมพิวเตอร์ จุฬาลงกรณ์มหาวิทยาลัย
          แต่ละหน้าระบุไว้ว่ามาจากสไลด์ของอาจารย์ท่านใด
        </p>
      </footer>
    </main>
  );
}

// sidebar labels start with the lecture number, which this list already shows in its own column
function stripNumber(label: string): string {
  return label.replace(/^\d+\s*·\s*/, '');
}
