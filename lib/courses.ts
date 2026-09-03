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
    name: 'Software Design and Specification',
    nameTh: 'การออกแบบและระบุรายละเอียดซอฟต์แวร์',
    description: 'ออกแบบซอฟต์แวร์ให้แก้ง่าย ทดสอบได้ และอธิบายให้คนอื่นเข้าใจ',
  },
];

// number of lecture pages in a course, not counting its index page
export function countLectures(slug: string): number {
  return source.getPages().filter((page) => page.slugs[0] === slug && page.slugs.length > 1).length;
}
