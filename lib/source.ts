import { loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';
import { docsContentRoute, docsImageRoute, docsRoute } from './shared';
import { groupParts } from './lecture-order';
import type { Folder, Item, Node } from 'fumadocs-core/page-tree';
import { defineDocs } from 'fumadocs-mdx/macro';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import * as z from 'zod';

const docs = defineDocs({
  dir: 'content',
  docs: {
    schema: pageSchema.extend({
      lecture: z.number().int().positive().optional(),
      // a lecture split into parts: each part's page sets 1, 2, ...
      part: z.number().int().positive().optional(),
      // part 1 of a split lecture: the lecture's short topic, which names its sidebar entry
      lectureTitle: z.string().optional(),
      source: z.string().optional(),
      credit: z.string().optional(),
      readingMinutes: z.number().int().positive().optional(),
      sidebarTitle: z.string().optional(),
    }),
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: docsRoute,
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
  pageTree: {
    transformers: [
      {
        // full titles are too long for the sidebar, so use `sidebarTitle` there when a page sets one
        file(node, filePath) {
          const file = filePath ? this.storage.read(filePath) : undefined;
          if (file?.format !== 'page') return node;

          const short = file.data.sidebarTitle;
          return typeof short === 'string' && short.length > 0 ? { ...node, name: short } : node;
        },
        // a lecture split into parts shows as one entry that opens part 1, its parts folded under it
        folder(node) {
          const entries = node.children.map((child) => {
            const file = child.type === 'page' && child.$ref ? this.storage.read(child.$ref) : undefined;
            const data = file?.format === 'page' ? file.data : undefined;
            return {
              node: child,
              lecture: data?.lecture,
              part: data?.part,
              lectureTitle: data?.lectureTitle,
              label: data?.sidebarTitle ?? data?.title,
            };
          });
          const children = groupParts<Node>(entries).map((group): Node => {
            if (group.kind === 'page') return group.node;
            const parts = group.parts.map((part) => ({ ...(part.node as Item), name: part.name }));
            const folder: Folder = {
              $id: `${node.$id ?? ''}/${group.name}`,
              type: 'folder',
              name: group.name,
              index: { ...parts[0], name: group.name },
              collapsible: true,
              defaultOpen: false,
              children: parts,
            };
            return folder;
          });
          return { ...node, children };
        },
      },
    ],
  },
});

export function getPageImageUrl(page: (typeof source)['$inferPage']) {
  const segments = [...page.slugs, 'image.png'];

  return {
    segments,
    url: '/' + [page.locale, ...docsImageRoute.split('/'), ...segments].filter(Boolean).join('/'),
  };
}

export function getPageMarkdownUrl(page: (typeof source)['$inferPage']) {
  const segments = [...page.slugs, 'content.md'];

  return {
    segments,
    url: '/' + [page.locale, ...docsContentRoute.split('/'), ...segments].filter(Boolean).join('/'),
  };
}

export async function getLLMText(page: (typeof source)['$inferPage']) {
  const processed = await page.data.getText('processed');

  return `# ${page.data.title} (${page.url})

${processed}`;
}
