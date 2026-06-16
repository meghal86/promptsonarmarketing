# PromptSonar Documentation System

A premium, trust-first docs experience for PromptSonar, built on the project's
existing stack — **Vite + React Router 7 + Tailwind + shadcn/ui**. (The original
brief referenced Next.js/MDX; this implementation adapts those ideas to the
real stack already in the repo.)

---

## A. Architecture

```
src/docs/
├── docs.config.ts        ← single source of truth (sitemap, metadata, helpers)
├── DocsLayout.tsx        ← header + sidebar + mobile drawer + <Outlet>
├── DocsHome.tsx          ← /docs landing page
├── DocsPage.tsx          ← /docs/:slug — chrome + content/scaffold resolver
├── DocsSidebar.tsx       ← grouped, data-driven navigation
├── DocsSearch.tsx        ← ⌘K command-palette search over the config
├── DocsPrevNext.tsx      ← previous / next page footer links
├── components/
│   ├── Admonition.tsx    ← Info / Warning / Tip / Note callouts
│   ├── CodeBlock.tsx     ← dark code block with copy-to-clipboard
│   └── prose.tsx         ← H2/H3/P/UL/OL/Steps/Todo/RefTable authoring primitives
└── content/
    ├── index.tsx         ← slug → content component registry
    └── <slug>.tsx        ← authored page bodies
```

**Routing** (`src/App.tsx`): the landing page stays at `/`. Docs mount under a
single layout route:

- `/docs` → `DocsHome`
- `/docs/:slug` → `DocsPage` (unknown slugs redirect to `introduction`)

`vercel.json` rewrites all paths to `index.html` so deep links survive a hard
refresh; `vite.config.ts` uses an absolute `base: '/'` so hashed assets resolve
on nested routes.

**Content strategy.** Pages are authored as small TSX components using the
`prose.tsx` primitives instead of MDX — no build-pipeline changes, full
type-safety, and the same warm theme. A page is "live" when it is registered in
`content/index.tsx`; every other page in the config renders an informative,
metadata-driven scaffold automatically. Adding MDX later is possible but not
required.

**Why config-driven.** The sidebar, search index, breadcrumbs, and prev/next
are all derived from `docs.config.ts`. Add one entry and the page is routable,
searchable, and navigable — author the content when ready.

---

## B. Sitemap

7 groups · 29 pages. Live (hand-authored) pages are marked ✅; the rest render
the scaffold until authored.

- **Getting Started** — Introduction ✅ · Installation ✅ · Quick Start ✅ · Playground Guide ✅
- **Repository Analysis** — Repository Scanning ✅ · Execution Path Analysis · Workflow Graphs · Repository Reports
- **Integrations** — CLI Usage · VS Code Extension · GitHub Actions ✅ · CI/CD Integration
- **Rules & Detection** — OWASP LLM Mapping ✅ · MCP Security Rules · Confidence Scoring · Suppressions ✅ · False Positive Handling
- **Outputs** — JSON Reports · SARIF Export ✅ · HTML Reports · Prompt SBOM
- **Methodology** — How PromptSonar Works · Static Analysis Philosophy · Deterministic Detection · Benchmarking Strategy
- **Learn** — What is Prompt Injection? · What is MCP Security? · Agent Security Fundamentals · AI Workflow Security Best Practices

---

## C. Homepage layout (`/docs`)

1. Hero — eyebrow, headline, value proposition, Quick Start + Install CTAs, inline search
2. Popular guides — 4 cards (Installation, Quick Start, Repository Scanning, GitHub Actions)
3. Feature cards — what you can do (4 cards linking into the docs)
4. Integrations — CLI · VS Code · GitHub Actions · CI/CD
5. "Start scanning in under 5 minutes" — 3-step strip + CTA

---

## D. Page specification

Every `/docs/:slug` page renders:

- Breadcrumb (Docs → Group → Page)
- `<h1>` title + one-line purpose (from config)
- Body — authored content **or** scaffold (lead, outline, TODO placeholders)
- "Edit this page on GitHub" link
- Previous / Next navigation

Authored pages follow a consistent shape: a `Lead`, several `H2` sections, at
least one `CodeBlock`, an `Admonition`, cross-links, and a "Next steps" section.
Per the brief, no unverified technical capabilities are invented — unknown
specifics are explicit `TODO:` placeholders.

---

## E. Implementation plan (priority order)

**Shipped in this change**

1. ✅ Framework: layout, sidebar, search, code blocks, admonitions, prev/next, mobile drawer, routing, SPA rewrite
2. ✅ Docs homepage
3. ✅ 8 launch pages + Introduction: Installation, Quick Start, Playground Guide, Repository Scanning, GitHub Actions, OWASP LLM Mapping, Suppressions, SARIF Export

**Next**

4. Replace `TODO:` placeholders with verified commands, outputs, and screenshots
5. Author the remaining 20 scaffolded pages (start with CLI Usage, Execution Path Analysis, MCP Security Rules)
6. Enhancements: "On this page" right-rail TOC, syntax highlighting, `<title>`/meta per page for SEO, sitemap.xml

---

## Authoring a page

```tsx
// 1. src/docs/content/cli-usage.tsx
import { H2, P, Lead, A } from '../components/prose';
import { CodeBlock } from '../components/CodeBlock';

export function CliUsage() {
  return (
    <>
      <Lead>One-line summary of the page.</Lead>
      <H2>Section</H2>
      <P>Prose with a <A href="/docs/quick-start">cross-link</A>.</P>
      <CodeBlock language="bash" code={`promptsonar scan .`} />
    </>
  );
}

// 2. register in src/docs/content/index.tsx
//    'cli-usage': CliUsage,

// 3. set status: 'ready' for the slug in docs.config.ts
```
