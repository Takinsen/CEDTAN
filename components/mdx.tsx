import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import * as lecture from '@/components/lecture';
import { Tabs, Tab } from 'fumadocs-ui/components/tabs';
import { Accordions, Accordion } from 'fumadocs-ui/components/accordion';
import { Files, File, Folder } from 'fumadocs-ui/components/files';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Tabs,
    Tab,
    Accordions,
    Accordion,
    Files,
    File,
    Folder,
    ...lecture,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
