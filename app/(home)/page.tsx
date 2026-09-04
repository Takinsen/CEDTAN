import Link from 'next/link';
import { courses, countLectures } from '@/lib/courses';

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold">CEDTAN</h1>
      <p className="mt-2 text-fd-muted-foreground">
        สรุปเนื้อหา lecture แต่ละคาบ อ่านแล้วเข้าใจ ไม่ต้องมีพื้นฐานมาก่อน
      </p>

      <div className="mt-10 grid gap-4">
        {courses.map((course) => (
          <Link
            key={course.slug}
            href={`/${course.slug}`}
            className="rounded-xl border border-fd-border bg-fd-card p-5 transition-colors hover:bg-fd-accent"
          >
            <div className="text-sm text-fd-muted-foreground">{course.code}</div>
            <div className="mt-1 text-lg font-semibold">{course.name}</div>
            <div className="text-sm text-fd-muted-foreground">{course.nameTh}</div>
            <p className="mt-2 text-sm">{course.description}</p>
            <div className="mt-3 text-sm text-fd-muted-foreground">
              {countLectures(course.slug)} คาบ
            </div>
          </Link>
        ))}
      </div>

      <p className="mt-10 border-t border-fd-border pt-6 text-sm text-fd-muted-foreground">
        เรียบเรียงจากสไลด์ที่ใช้สอนจริงในภาควิชาวิศวกรรมคอมพิวเตอร์ จุฬาลงกรณ์มหาวิทยาลัย
        แต่ละหน้าระบุไว้ว่ามาจากสไลด์ของอาจารย์ท่านใด นี่เป็นเว็บสรุปที่นิสิตทำเอง
        ไม่ใช่เอกสารทางการของวิชา และอาจารย์ไม่ได้ตรวจทาน อะไรที่สำคัญให้ยึดตามสไลด์ตัวจริง
      </p>
    </main>
  );
}
