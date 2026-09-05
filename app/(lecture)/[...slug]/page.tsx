import { getPageImageUrl, getPageMarkdownUrl, source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  MarkdownCopyButton,
  ViewOptionsPopover,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { readFile } from 'node:fs/promises';
import { getMDXComponents } from '@/components/mdx';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { gitConfig } from '@/lib/shared';
import { Legend } from '@/components/lecture/legend';
import { ReadingProgress } from '@/components/lecture/reading-progress';
import { ReadingTools } from '@/components/lecture/reading-tools';

export default async function Page(props: PageProps<'/[...slug]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const markdownUrl = getPageMarkdownUrl(page).url;

  // where this page came from and how long it takes to read
  const meta = [
    page.data.lecture ? `เลกเชอร์ ${page.data.lecture}` : null,
    page.data.readingMinutes ? `อ่าน ${page.data.readingMinutes} นาที` : null,
    page.data.credit,
  ].filter(Boolean);

  // <Recap> is a component, so it never reaches the heading-built toc — pin it there by hand
  const toc = [...page.data.toc, { title: 'สรุปท้ายคาบ', url: '#recap', depth: 2 }];

  // count the ส่วนที่ dividers when a page has them, and every top-level heading when it does not
  const tops = page.data.toc.filter((item) => item.depth === 2);
  const parts = tops.filter((item) => item.url.startsWith('#ส่วนที่'));
  const marks = parts.length > 0 ? parts : tops;

  // whether this page has any <Detail> fold, so the bulk toggle can hide itself when it has none
  const raw = page.absolutePath ? await readFile(page.absolutePath, 'utf8') : '';
  const hasFolds = /<Detail\b/.test(raw);

  return (
    <DocsPage
      toc={toc}
      full={page.data.full}
      tableOfContent={{
        header: marks.length > 1 && (
          <ReadingProgress
            label={parts.length > 0 ? 'ส่วนที่' : 'หัวข้อ'}
            ids={marks.map((item) => item.url.slice(1))}
          />
        ),
      }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-0">{page.data.description}</DocsDescription>
      {meta.length > 0 && <p className="text-sm text-fd-muted-foreground">{meta.join(' · ')}</p>}
      <div className="flex flex-row flex-wrap gap-2 items-center border-b pb-6">
        <MarkdownCopyButton markdownUrl={markdownUrl} />
        <ViewOptionsPopover
          markdownUrl={markdownUrl}
          githubUrl={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/content/${page.path}`}
        />
        <ReadingTools hasFolds={hasFolds} />
      </div>
      <Legend />
      <DocsBody>
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: PageProps<'/[...slug]'>): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImageUrl(page).url,
    },
  };
}
