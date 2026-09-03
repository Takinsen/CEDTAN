// English technical term with a Thai gloss on hover
export function Term({ en, th }: { en: string; th: string }) {
  return (
    <span
      title={th}
      className="underline decoration-dotted decoration-fd-muted-foreground underline-offset-4 cursor-help"
    >
      {en}
      <span className="text-fd-muted-foreground"> ({th})</span>
    </span>
  );
}
