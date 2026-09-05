// the sidebar holds 14 tab stops before the article, so offer a way past it
export function SkipLink() {
  return (
    <a
      href="#nd-page"
      data-skip-link
      className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50 focus:rounded-lg focus:border focus:border-fd-border focus:bg-fd-background focus:px-4 focus:py-2 focus:text-sm focus:outline-2 focus:outline-offset-2 focus:outline-fd-primary"
    >
      ข้ามไปที่เนื้อหา
    </a>
  );
}
