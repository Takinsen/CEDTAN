import { source } from '@/lib/source';

export type Course = {
  slug: string;
  code: string;
  name: string;
  nameTh: string;
  description: string;
};

export const courses: Course[] = [
  {
    slug: '2110506-sds',
    code: '2110506',
    name: 'Software-Defined Systems I',
    nameTh: 'ระบบที่กำหนดโดยซอฟต์แวร์ 1',
    description: 'ยกงานที่เคยต้องเดินไปทำกับเครื่องจริง ขึ้นมาอยู่ในไฟล์และคำสั่ง',
  },
];

// number of lecture pages in a course, not counting its index page
export function countLectures(slug: string): number {
  return source.getPages().filter((page) => page.slugs[0] === slug && page.slugs.length > 1).length;
}
