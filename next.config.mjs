import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // a course has no overview page, so its root URL opens lecture 1
  async redirects() {
    return [{ source: '/:course(\\d{7}-[a-z]+)', destination: '/:course/lecture-1', permanent: false }];
  },
};

export default withMDX(config);
