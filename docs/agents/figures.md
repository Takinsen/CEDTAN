# Figures

How to draw a diagram for a lecture page. Read this before writing a file under
`components/figures/`.

## File and import

Hand-written inline SVG, one diagram per file, in `components/figures/<course>/<name>.tsx`.
Figures are not registered globally, so import each one in the MDX file that uses it:

```mdx
import { LayeredStack } from '@/components/figures/2110506-sds/layered-stack';

<Figure number={1} caption="...">
  <LayeredStack />
</Figure>
```

Draw every figure yourself. A slide image is the lecturer's work and cannot be re-themed.

## Theme

Paint with `stroke="currentColor"` and `fill="currentColor"`, or a Fumadocs theme variable, and
vary weight with `fillOpacity` and `opacity`. A hard-coded hex disappears in one of the two
themes.

## Legibility floors

The card scales the drawing up by about 1.28x, so these units land at readable pixel sizes.

- Text is `fontSize="11"` or larger. Smaller loses Thai tone marks.
- A shape stroke is `strokeOpacity="0.5"` or stronger. Fainter drops under 3:1 contrast.
- A two-line label inside a small box puts 15 units between baselines. 12 collides.
- A value the reader must tell apart letter by letter (ciphertext, hex, a variable name) uses
  `fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"`. In the sans font, lowercase
  `l` and capital `I` look the same.

## Width

A figure wider than a phone sets `className="mx-auto h-auto w-full min-w-[590px]"`. The
figure frame scrolls sideways on its own, so the page body stays put.

## Figure and prose

A figure that walks through the example with real values is that idea's example. The prose
around it names what to look at, in one or two sentences, and moves on. Retelling every step
of the figure in a second `<Example>` makes the reader read the same thing twice.
