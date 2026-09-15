import { source } from '@/lib/source';

export type Course = {
  slug: string;
  code: string;
  name: string;
  nameTh?: string;
  description: string;
  cover?: string;
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
    cover: '/images/courses/2110506-sds-cover-4k.webp',
  },
  {
    slug: '2110413-csy',
    code: '2110413',
    name: 'Computer Security',
    nameTh: 'ความมั่นคงของคอมพิวเตอร์',
    description:
      'หลักการของความมั่นคง, การเข้ารหัสลับแบบกุญแจสมมาตรและกุญแจสาธารณะ, การย่อยสาร, การพิสูจน์ตัวจริง, การควบคุมการเข้าถึง, ความมั่นคงของวิสาหกิจและของเครือข่าย',
    cover: '/images/courses/2110413-csy-cover-4k.webp',
  },
  {
    slug: '2110313-os',
    code: '2110313',
    name: 'Operating Systems and System Programs',
    nameTh: 'ระบบปฏิบัติการและโปรแกรมระบบ',
    description:
      'OS services, process, concurrent programming, synchronization, deadlock, memory, device และ file management, system call และ API',
    cover: '/images/courses/2110313-os-cover-4k.webp',
  },
  {
    slug: '2110356-emb',
    code: '2110356',
    name: 'Embedded System',
    nameTh: 'ระบบฝังตัว',
    description:
      'พื้นฐานของระบบฝังตัวและเฟิร์มแวร์, ระบบประมวลผลแบบเวลาจริง, ระบบควบคุมป้อนกลับ, โพรโทคอลการสื่อสาร, วงจรหน่วยความจำ, สัญญาณขัดจังหวะ',
    cover: '/images/courses/2110356-emb-cover-4k.webp',
  },
  {
    slug: '2110405-ai',
    code: '2110405',
    name: 'Artificial Intelligence and Machine Learning',
    nameTh: 'ปัญญาประดิษฐ์และการเรียนรู้ของเครื่อง',
    description:
      'AI optimization, logic และ Prolog, Naïve Bayes และ Bayesian belief networks, clustering, neural networks และ deep learning, recommender systems, sequence modeling, generative AI',
    cover: '/images/courses/2110405-ai-cover-4k.webp',
  },
  {
    slug: '2110471-cn',
    code: '2110471',
    name: 'Computer Network I',
    nameTh: 'ข่ายงานคอมพิวเตอร์ 1',
    description:
      'โครงสร้างและตัวแบบของเครือข่าย, สถาปัตยกรรมอินเทอร์เน็ต, protocol stack ทั้งห้าชั้นและการทำงานของแต่ละชั้น',
    cover: '/images/courses/2110471-cn-cover-4k.webp',
  },
];

// lecture pages of a course in lecture order
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
