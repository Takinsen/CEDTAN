---
target: ปัจจัยที่ส่งผลกับการอ่าน (lecture pages)
total_score: 28
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 2
target_identity: "file:/data/projects/CEDTAN/app/(lecture)/[...slug]/page.tsx"
target_fingerprint: "sha256:9fe7ef2c04d32b65ea1ac471e3cdc397f35d4d73e5dc30389dd9f283d707d615"
target_path: /data/projects/CEDTAN/app/(lecture)/[...slug]/page.tsx
timestamp: 2026-11-13T04-51-21Z
slug: app-lecture-slug-page-tsx
---
Method: dual-agent (A: design review · B: detector + browser)
Focus: factors that affect reading on lecture pages (csy L3, sds L5, csy L10; 1440/390, light/dark)

## Design Health Score — 28/40 (Good)
1 Status 3 · 2 Real world 3 · 3 User control 2 (phone popover stays open after skip-to-recap) · 4 Consistency 3 (code block shadow, recap offset) · 5 Error prevention 3 (step-through height jump) · 6 Recognition 3 · 7 Flexibility 3 · 8 Minimalist 2 (first screen is chrome; 54–66% of page is boxed) · 9 Errors 3 · 10 Help 3

## Design specificity
Content layer authored for the product (Thai labels, legend, progress, skip/open-all). Frame is stock Fumadocs with English developer UI. 101 identical cards on SDS L5 read generic.
Detector: source scan clean (0). Browser: 235 hits (straggler, tiny-text, line-length, nested-cards, em-dash). False positives: tiny-text at 1440, em-dash in required headings, many Thai stragglers.

## Priority issues
- [P1] Phone TOC popover stays open after ข้ามไปสรุป / กลับขึ้นบนสุด, covering the recap. components/lecture/reading-tools.tsx has no close; Fumadocs closes only on TOC item click.
- [P1] Lines too long: 86–108 Thai chars per line at 1440 (DESIGN.md says ~70). 720px column measured median 77.
- [P2] First screen is chrome: content at y=567 of 844 on phone, 414 of 450 at 200% zoom.
- [P2] Phone diagrams: all 17 on L3+L5 scroll sideways, labels 10.0–10.5px, below figures.md 11 floor.
- [P2] Cards drown the marks: 54–66% of page height boxed; KeyIdea looks like info Callout; tables nested inside cards on L3.

## Persona red flags
Casey: 154/168 tap targets <44px; step-through moves 156px; no resume point.
Sam: sticky bars 21% of view at 200%; synthetic italic on Thai; Term title duplicates visible gloss.
นักศึกษาคืนก่อนสอบ: popover bug; recap anchor offset 80px < 96px sticky bars.

## Minor
Code block box-shadow vs Flat-Forever; text-wrap not pretty on prose; h4 = body size; bold in nearly every paragraph; Term dotted underline looks like link; 40/51 one-line paragraphs on L3; SDS L5 TOC 55 entries; popover shadow-lg.

## Questions
Is a card still a mark at 60% boxed? Recap-first entry on phone? Do students use Copy Markdown / Open?
