import { courses, courseLectures } from '@/lib/courses';
import { coverThumb } from '@/lib/cover-thumb';
import { CourseHero } from '@/components/home/course-hero';
import { CourseDirectory } from '@/components/home/course-directory';
import { stripNumber } from '@/components/home/strip';
import '@/components/home/home.css';

export default async function HomePage() {
  const catalog = await Promise.all(
    courses.map(async (course) => ({
      ...course,
      thumb: course.cover ? await coverThumb(course.cover) : undefined,
      lectures: courseLectures(course.slug).map((lecture) => ({ ...lecture, label: stripNumber(lecture.label) })),
    })),
  );

  return (
    <main className="flex w-full flex-col">
      {/* without JavaScript nothing marks a cover loaded, so show it sharp from the start */}
      <noscript>
        <style>{'.home-cover-full{opacity:1;filter:brightness(0.8);transform:none}'}</style>
      </noscript>
      <CourseHero
        courses={catalog.map((course) => ({
          slug: course.slug,
          code: course.code,
          name: course.name,
          nameTh: course.nameTh,
          cover: course.cover,
          thumb: course.thumb,
          lectureCount: course.lectures.length,
        }))}
        lectureTitles={catalog.flatMap((course) => course.lectures.map((lecture) => lecture.label))}
      />

      {/* at least a hero's height below the hero, so a glide can scroll it fully away */}
      <div className="min-h-[calc(100svh-3.5rem)]">
        <CourseDirectory courses={catalog} />

        <footer className="mx-auto w-full max-w-5xl px-4 pb-16 pt-12">
          <div className="max-w-[72ch] rounded-xl border border-fd-border p-5 text-sm">
            <p className="text-pretty">
              <strong className="font-semibold">นี่เป็นเว็บสรุปที่นิสิตทำเอง</strong>{' '}
              ไม่ใช่เอกสารทางการของวิชา และอาจารย์ไม่ได้ตรวจทาน อะไรที่สำคัญให้ยึดตามสไลด์ตัวจริง
            </p>
            <p className="mt-2 text-pretty text-fd-muted-foreground">
              เรียบเรียงจากสไลด์ที่ใช้สอนจริงในภาควิชาวิศวกรรมคอมพิวเตอร์ จุฬาลงกรณ์มหาวิทยาลัย
              แต่ละหน้าระบุไว้ว่ามาจากสไลด์ของอาจารย์ท่านใด
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
