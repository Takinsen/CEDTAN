import { source } from '@/lib/source';

export type Course = {
  slug: string;
  code: string;
  name: string;
  nameTh: string;
  description: string;
};

export type CourseLecture = {
  url: string;
  label: string;
  lecture?: number;
};

export const courses: Course[] = [
  {
    slug: '2110506-sds',
    code: '2110506',
    name: 'Software-Defined Systems I',
    nameTh: 'ระบบที่กำหนดโดยซอฟต์แวร์',
    description:
      'software-defined servers, networks และ storage, containers และ service orchestration, cloud และ edge computing, infrastructure as code',
  },
];

// lecture pages of a course in lecture order, not counting its index page
export function courseLectures(slug: string): CourseLecture[] {
  return source
    .getPages()
    .filter((page) => page.slugs[0] === slug && page.slugs.length > 1)
    .map((page) => ({
      url: page.url,
      label: page.data.sidebarTitle ?? page.data.title,
      lecture: page.data.lecture,
    }))
    .sort((a, b) => (a.lecture ?? 0) - (b.lecture ?? 0));
}

export function countLectures(slug: string): number {
  return courseLectures(slug).length;
}
