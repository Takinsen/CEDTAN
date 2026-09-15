# 3. A course has no overview page

Date: 2026-09-15

## Status

Accepted

## Context

Each course had a `content/<slug>/index.mdx` summarising its syllabus: credits, schedule,
grading, exams, class rules and contacts. The landing page linked to it from the course name and
from a `ภาพรวมวิชา →` link in the directory.

That material changes from term to term, and faster than the lecture content. A copy of it on a
public site goes stale, and a student who trusts a stale grading table is worse off than one who
reads the official syllabus.

## Decision

A course has lecture pages only. The overview pages for 2110506 and 2110413 are deleted, and no
new course gets one. The URL `/<slug>` redirects to `/<slug>/lecture-1` so old links and the
course switcher still land on content. On the landing page the course name is plain text and
`ดูทุกคาบ ↓` is the only way into a course.

## Consequences

Facts that lived only on the overview pages, such as the schedule, the grading split and the
reading list, are gone from the site. A lecture page may still state what its own deck says about
the course, but it does not link to a syllabus summary.
