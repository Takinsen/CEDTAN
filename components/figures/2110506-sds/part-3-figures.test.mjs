import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ts from 'typescript';

const here = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

function loadFigure(file, exportName) {
  const path = resolve(here, file);
  if (!existsSync(path)) return undefined;

  const source = readFileSync(path, 'utf8');
  const output = ts.transpileModule(source, {
    compilerOptions: {
      esModuleInterop: true,
      jsx: ts.JsxEmit.ReactJSX,
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
    fileName: path,
  }).outputText;
  const compiledModule = { exports: {} };

  Function('require', 'module', 'exports', '__filename', '__dirname', output)(
    require,
    compiledModule,
    compiledModule.exports,
    path,
    dirname(path),
  );

  return compiledModule.exports[exportName];
}

function numericAttributes(markup, name) {
  return [...markup.matchAll(new RegExp(`${name}="([0-9.]+)"`, 'g'))].map((match) => Number(match[1]));
}

for (const figure of [
  { file: 'kubectl-request-path.tsx', exportName: 'KubectlRequestPath' },
  { file: 'manifest-object-lifecycle.tsx', exportName: 'ManifestObjectLifecycle' },
]) {
  test(`${figure.exportName} renders as an accessible, legible diagram`, () => {
    const Figure = loadFigure(figure.file, figure.exportName);
    assert.ok(Figure, `${figure.file} must exist`);

    const markup = renderToStaticMarkup(createElement(Figure));
    assert.match(markup, /^<svg\b[^>]*role="img"[^>]*aria-label="[^"]+"/);
    assert.match(markup, /class="[^"]*w-full[^"]*min-w-\[590px\][^"]*"/);
    assert.ok(numericAttributes(markup, 'font-size').every((size) => size >= 11));
    assert.ok(numericAttributes(markup, 'stroke-opacity').every((opacity) => opacity >= 0.5));
    assert.doesNotMatch(markup, /#[0-9a-f]{3,8}\b/i);
  });
}
